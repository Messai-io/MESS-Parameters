"""Unified LLM shim for the papers pipeline.

Supports multiple free + paid backends, selected via environment:
  - Groq        — GROQ_API_KEY (1..5 rotate); free: 6k TPM, 500k TPD (8B)
  - Gemini      — GEMINI_API_KEY or GOOGLE_API_KEY; free: ~1500 RPD, 1M ctx
  - Cerebras    — CEREBRAS_API_KEY; free: ~14k RPD, ultra-fast
  - OpenRouter  — OPENROUTER_API_KEY; free models (Llama, Gemini, Mistral)
  - Mistral     — MISTRAL_API_KEY; free: ~500k tokens/day
  - Ollama      — local, unlimited but slow (OLLAMA_MODEL=<name>)
  - Anthropic   — ANTHROPIC_API_KEY; billed

Round-robin mode (default when multiple providers are configured): calls are
dispatched across all available free-tier providers, which multiplies
effective throughput because each enforces its own TPM/TPD bucket. Set
MESS_LLM_BACKEND=<one-provider> to pin to a single backend. Set
MESS_LLM_ROUND_ROBIN=0 to disable round-robin.

On 429 (rate limit) the caller automatically moves to the next provider
without waiting. If every provider is rate-limited, the most-recently-429'd
one is slept according to its Retry-After hint.

Callers should handle None returns (no backend available or all exhausted).
"""

from __future__ import annotations

import json
import os
import re
import sys
import threading as _threading
import time as _time
import re as _re
from typing import Any


DEFAULT_OLLAMA_HOST = "http://localhost:11434"
DEFAULT_OLLAMA_MODEL = "qwen3:latest"
DEFAULT_GROQ_MODEL = "llama-3.1-8b-instant"
DEFAULT_GEMINI_MODEL = "gemini-2.5-flash"
DEFAULT_CEREBRAS_MODEL = "llama3.1-8b"
DEFAULT_OPENROUTER_MODEL = "meta-llama/llama-3.3-70b-instruct:free"
DEFAULT_MISTRAL_MODEL = "mistral-small-latest"
GROQ_BASE = "https://api.groq.com/openai/v1"
CEREBRAS_BASE = "https://api.cerebras.ai/v1"
OPENROUTER_BASE = "https://openrouter.ai/api/v1"
MISTRAL_BASE = "https://api.mistral.ai/v1"
GEMINI_BASE = "https://generativelanguage.googleapis.com/v1beta"


def _groq_keys() -> list[str]:
    """All Groq keys present in the environment, in rotation order."""
    keys: list[str] = []
    for name in ("GROQ_API_KEY", "GROQ_API_KEY_2", "GROQ_API_KEY_3",
                 "GROQ_API_KEY_4", "GROQ_API_KEY_5"):
        v = os.environ.get(name, "").strip()
        if v:
            keys.append(v)
    return keys


def _fast_providers() -> list[str]:
    """Cloud free-tier providers that return in seconds — the round-robin pool."""
    out: list[str] = []
    if _groq_keys():
        out.append("groq")
    if os.environ.get("GEMINI_API_KEY") or os.environ.get("GOOGLE_API_KEY"):
        out.append("gemini")
    if os.environ.get("CEREBRAS_API_KEY"):
        out.append("cerebras")
    if os.environ.get("OPENROUTER_API_KEY"):
        out.append("openrouter")
    if os.environ.get("MISTRAL_API_KEY"):
        out.append("mistral")
    return out


def _fallback_providers() -> list[str]:
    """Slower or billed providers, used only when every fast provider fails.
    Ollama is local+unlimited but minutes/call on our prompt sizes; Anthropic
    is billed."""
    out: list[str] = []
    # Ollama: explicit opt-in via MESS_LLM_INCLUDE_OLLAMA=1, or always if no
    # fast providers are configured (then it's the only option).
    ollama_env = os.environ.get("MESS_LLM_INCLUDE_OLLAMA", "auto").lower()
    ollama_ok = False
    if os.environ.get("OLLAMA_MODEL") and ollama_env != "0":
        ollama_ok = True
    elif ollama_env in ("1", "yes", "true") or (ollama_env == "auto" and not _fast_providers()):
        try:
            import requests
            host = os.environ.get("OLLAMA_HOST", DEFAULT_OLLAMA_HOST).rstrip("/")
            if requests.get(f"{host}/api/tags", timeout=1.0).status_code == 200:
                ollama_ok = True
        except Exception:
            pass
    if ollama_ok:
        out.append("ollama")
    if os.environ.get("ANTHROPIC_API_KEY"):
        out.append("anthropic")
    return out


def _available_providers() -> list[str]:
    """Fast pool + fallback pool, for display purposes."""
    return _fast_providers() + _fallback_providers()


def _backend() -> str | None:
    forced = os.environ.get("MESS_LLM_BACKEND", "").strip().lower()
    valid = {"groq", "gemini", "cerebras", "openrouter", "mistral", "ollama", "anthropic"}
    if forced in valid:
        return forced
    fast = _fast_providers()
    if fast:
        return fast[0]
    fb = _fallback_providers()
    return fb[0] if fb else None


def _strip_code_fence(s: str) -> str:
    return re.sub(r"^```(?:json)?\s*|\s*```$", "", s.strip(), flags=re.MULTILINE)


def _strip_think(s: str) -> str:
    # Reasoning models (qwen3, deepseek-r1) emit <think>...</think> before
    # the actual answer. Drop those blocks.
    return re.sub(r"<think>[\s\S]*?</think>", "", s, flags=re.IGNORECASE).strip()


def _parse_json(raw: str) -> dict[str, Any] | None:
    body = _strip_think(_strip_code_fence(raw))
    # Some models wrap JSON in prose. Extract the first {...} block.
    m = re.search(r"\{[\s\S]*\}", body)
    if not m:
        return None
    try:
        return json.loads(m.group(0))
    except json.JSONDecodeError:
        return None


_PROVIDER_FNS: dict[str, Any] = {}  # populated below after each backend is defined


def _dispatch(provider: str, prompt: str, max_tokens: int, system: str | None, temperature: float) -> dict[str, Any] | None:
    fn = _PROVIDER_FNS.get(provider)
    return fn(prompt, max_tokens, system, temperature) if fn else None


# Round-robin rotation cursor for calls across available providers.
_rr_idx = 0
_rr_lock = _threading.Lock()


def chat_json(
    prompt: str,
    *,
    max_tokens: int = 2000,
    system: str | None = None,
    temperature: float = 0.0,
) -> dict[str, Any] | None:
    """Call an LLM backend and return parsed JSON, or None on any failure.

    In round-robin mode (default when multiple providers are configured),
    try each available provider starting from the last one used. On None
    (failure or rate-limit), move to the next. This multiplies effective
    throughput because each provider enforces its own rate limits.
    """
    forced = os.environ.get("MESS_LLM_BACKEND", "").strip().lower()
    if forced:
        return _dispatch(forced, prompt, max_tokens, system, temperature)

    fast = _fast_providers()
    fallback = _fallback_providers()
    round_robin = os.environ.get("MESS_LLM_ROUND_ROBIN", "1") != "0"

    if fast:
        if not round_robin or len(fast) == 1:
            out = _dispatch(fast[0], prompt, max_tokens, system, temperature)
            if out is not None:
                return out
        else:
            # Round-robin across fast providers first — multiplies throughput
            # because each enforces its own TPM/TPD bucket.
            global _rr_idx
            with _rr_lock:
                start = _rr_idx % len(fast)
                _rr_idx = (_rr_idx + 1) % len(fast)
            for step in range(len(fast)):
                p = fast[(start + step) % len(fast)]
                out = _dispatch(p, prompt, max_tokens, system, temperature)
                if out is not None:
                    return out

    # Fall back to slow/billed providers only if every fast one failed.
    for p in fallback:
        out = _dispatch(p, prompt, max_tokens, system, temperature)
        if out is not None:
            return out
    return None


# Round-robin counter for Groq keys. Module-level so rotation persists
# across calls within a process.
_groq_key_idx = 0


_groq_rate_lock = _threading.Lock()
_groq_available_after = 0.0  # monotonic timestamp after which we may retry
_MAX_GROQ_WAIT = 120.0  # don't sleep more than 2 min on a single call


def _parse_retry_after(error_body: str) -> float:
    """Groq error bodies embed 'Please try again in <X>s.' — extract it."""
    m = _re.search(r"try again in\s+([\d.]+)\s*s", error_body)
    if m:
        try:
            return min(float(m.group(1)), _MAX_GROQ_WAIT)
        except ValueError:
            pass
    return 30.0


def _groq_chat(
    prompt: str, max_tokens: int, system: str | None, temperature: float
) -> dict[str, Any] | None:
    global _groq_key_idx, _groq_available_after
    try:
        import requests
    except ImportError:
        return None
    keys = _groq_keys()
    if not keys:
        return None
    model = os.environ.get("GROQ_MODEL", DEFAULT_GROQ_MODEL)
    messages: list[dict[str, str]] = []
    if system:
        messages.append({"role": "system", "content": system})
    messages.append({"role": "user", "content": prompt})

    # If a previous 429 told us to wait, honor that up-front. All callers
    # share the same org-level TPM bucket, so rotating keys does NOT help —
    # we actually have to wait. Cap the wait at _MAX_GROQ_WAIT so individual
    # calls don't stall forever; the caller can fall back to Ollama.
    with _groq_rate_lock:
        wait = _groq_available_after - _time.monotonic()
    if wait > 0:
        if wait > _MAX_GROQ_WAIT:
            return None  # give up for this call; caller may fall back
        _time.sleep(wait)

    attempts = len(keys)
    for _ in range(attempts):
        key = keys[_groq_key_idx % len(keys)]
        _groq_key_idx += 1
        try:
            r = requests.post(
                f"{GROQ_BASE}/chat/completions",
                headers={
                    "Authorization": f"Bearer {key}",
                    "Content-Type": "application/json",
                },
                json={
                    "model": model,
                    "messages": messages,
                    "max_tokens": max_tokens,
                    "temperature": temperature,
                    "response_format": {"type": "json_object"},
                },
                timeout=60,
            )
        except Exception as e:
            print(f"[warn] groq request error: {e}", file=sys.stderr)
            continue
        if r.status_code == 200:
            try:
                content = r.json()["choices"][0]["message"]["content"]
            except Exception:
                return None
            return _parse_json(content)
        if r.status_code == 429:
            # Respect the server's suggested wait; every key shares the same
            # org-level pool so rotation doesn't help on TPM/TPD limits.
            body = r.text
            delay = _parse_retry_after(body)
            with _groq_rate_lock:
                _groq_available_after = _time.monotonic() + delay
            if delay > _MAX_GROQ_WAIT:
                print(f"[warn] groq 429 asks {delay:.0f}s — giving up on this call", file=sys.stderr)
                return None
            _time.sleep(delay)
            continue
        if r.status_code in (500, 502, 503):
            continue
        print(f"[warn] groq key#{_groq_key_idx % len(keys)} → {r.status_code}", file=sys.stderr)
    return None


def _ollama_chat(
    prompt: str, max_tokens: int, system: str | None, temperature: float
) -> dict[str, Any] | None:
    try:
        import requests
    except ImportError:
        print("[warn] ollama backend requires 'requests'", file=sys.stderr)
        return None

    host = os.environ.get("OLLAMA_HOST", DEFAULT_OLLAMA_HOST).rstrip("/")
    model = os.environ.get("OLLAMA_MODEL", DEFAULT_OLLAMA_MODEL)
    messages: list[dict[str, str]] = []
    if system:
        messages.append({"role": "system", "content": system})
    messages.append({"role": "user", "content": prompt})

    try:
        r = requests.post(
            f"{host}/api/chat",
            json={
                "model": model,
                "messages": messages,
                "stream": False,
                "format": "json",
                "options": {
                    "temperature": temperature,
                    "num_predict": max_tokens,
                    "num_ctx": 16384,  # ensure enough context for our 10k-char prompts
                },
            },
            timeout=300,  # local models with 16k ctx can take > 2min on CPU
        )
        r.raise_for_status()
        content = r.json().get("message", {}).get("content", "")
    except Exception as e:
        print(f"[warn] ollama call failed: {e}", file=sys.stderr)
        return None

    return _parse_json(content)


def _openai_compatible_chat(
    provider_label: str,
    base_url: str,
    api_key: str,
    model: str,
    prompt: str,
    max_tokens: int,
    system: str | None,
    temperature: float,
    use_json_mode: bool = True,
) -> dict[str, Any] | None:
    """Shared helper for Cerebras / OpenRouter / Mistral (all expose the
    OpenAI /v1/chat/completions shape with minor extras)."""
    try:
        import requests
    except ImportError:
        return None
    messages: list[dict[str, str]] = []
    if system:
        messages.append({"role": "system", "content": system})
    messages.append({"role": "user", "content": prompt})
    body: dict[str, Any] = {
        "model": model,
        "messages": messages,
        "max_tokens": max_tokens,
        "temperature": temperature,
    }
    if use_json_mode:
        body["response_format"] = {"type": "json_object"}
    try:
        r = requests.post(
            f"{base_url}/chat/completions",
            headers={"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"},
            json=body,
            timeout=90,
        )
    except Exception as e:
        print(f"[warn] {provider_label} request error: {e}", file=sys.stderr)
        return None
    if r.status_code == 200:
        try:
            content = r.json()["choices"][0]["message"]["content"]
        except Exception:
            return None
        return _parse_json(content)
    if r.status_code == 429:
        # Note — we don't honor Retry-After here on every backend; the
        # round-robin dispatcher just moves to the next provider.
        print(f"[warn] {provider_label} 429 rate-limited", file=sys.stderr)
        return None
    if r.status_code == 401:
        print(f"[warn] {provider_label} 401 — key rejected", file=sys.stderr)
        return None
    if r.status_code in (500, 502, 503):
        return None
    print(f"[warn] {provider_label} → {r.status_code}", file=sys.stderr)
    return None


def _cerebras_chat(prompt: str, max_tokens: int, system: str | None, temperature: float) -> dict[str, Any] | None:
    key = os.environ.get("CEREBRAS_API_KEY", "")
    if not key:
        return None
    model = os.environ.get("CEREBRAS_MODEL", DEFAULT_CEREBRAS_MODEL)
    return _openai_compatible_chat("cerebras", CEREBRAS_BASE, key, model, prompt, max_tokens, system, temperature)


def _openrouter_chat(prompt: str, max_tokens: int, system: str | None, temperature: float) -> dict[str, Any] | None:
    key = os.environ.get("OPENROUTER_API_KEY", "")
    if not key:
        return None
    model = os.environ.get("OPENROUTER_MODEL", DEFAULT_OPENROUTER_MODEL)
    # OpenRouter accepts an optional X-Title header for their leaderboard.
    return _openai_compatible_chat("openrouter", OPENROUTER_BASE, key, model, prompt, max_tokens, system, temperature)


def _mistral_chat(prompt: str, max_tokens: int, system: str | None, temperature: float) -> dict[str, Any] | None:
    key = os.environ.get("MISTRAL_API_KEY", "")
    if not key:
        return None
    model = os.environ.get("MISTRAL_MODEL", DEFAULT_MISTRAL_MODEL)
    return _openai_compatible_chat("mistral", MISTRAL_BASE, key, model, prompt, max_tokens, system, temperature)


def _gemini_chat(prompt: str, max_tokens: int, system: str | None, temperature: float) -> dict[str, Any] | None:
    """Google Gemini uses a different request shape (generateContent)."""
    try:
        import requests
    except ImportError:
        return None
    key = os.environ.get("GEMINI_API_KEY") or os.environ.get("GOOGLE_API_KEY", "")
    if not key:
        return None
    model = os.environ.get("GEMINI_MODEL", DEFAULT_GEMINI_MODEL)
    # Gemini lets us request JSON output and pass a system instruction.
    body: dict[str, Any] = {
        "contents": [{"role": "user", "parts": [{"text": prompt}]}],
        "generationConfig": {
            "temperature": temperature,
            "maxOutputTokens": max_tokens,
            "responseMimeType": "application/json",
        },
    }
    if system:
        body["systemInstruction"] = {"parts": [{"text": system}]}
    try:
        r = requests.post(
            f"{GEMINI_BASE}/models/{model}:generateContent?key={key}",
            headers={"Content-Type": "application/json"},
            json=body,
            timeout=90,
        )
    except Exception as e:
        print(f"[warn] gemini request error: {e}", file=sys.stderr)
        return None
    if r.status_code != 200:
        if r.status_code == 429:
            print("[warn] gemini 429 rate-limited", file=sys.stderr)
        else:
            print(f"[warn] gemini → {r.status_code} {r.text[:200]}", file=sys.stderr)
        return None
    try:
        content = r.json()["candidates"][0]["content"]["parts"][0]["text"]
    except Exception:
        return None
    return _parse_json(content)


def _anthropic_chat(
    prompt: str, max_tokens: int, system: str | None, temperature: float
) -> dict[str, Any] | None:
    try:
        import anthropic
    except ImportError:
        print("[warn] anthropic backend requires 'anthropic' package", file=sys.stderr)
        return None

    client = anthropic.Anthropic()
    model = os.environ.get("ANTHROPIC_MODEL", "claude-sonnet-4-6")
    try:
        kwargs: dict[str, Any] = {
            "model": model,
            "max_tokens": max_tokens,
            "messages": [{"role": "user", "content": prompt}],
            "temperature": temperature,
        }
        if system:
            kwargs["system"] = system
        msg = client.messages.create(**kwargs)
        content = msg.content[0].text
    except Exception as e:
        print(f"[warn] anthropic call failed: {e}", file=sys.stderr)
        return None

    return _parse_json(content)


def describe_backend() -> str:
    """One-line description of which backends are active (for logs)."""
    providers = _available_providers()
    if not providers:
        return "none (LLM steps disabled)"
    forced = os.environ.get("MESS_LLM_BACKEND", "").strip().lower()
    if forced:
        return f"{forced} (forced)"
    return f"round-robin across {len(providers)}: " + " → ".join(providers)


# Dispatch table. Populated after every _xxx_chat function is defined so the
# forward reference in _dispatch() resolves at call time. Order here is only
# cosmetic — actual preference comes from _available_providers().
_PROVIDER_FNS.update({
    "groq":       _groq_chat,
    "gemini":     _gemini_chat,
    "cerebras":   _cerebras_chat,
    "openrouter": _openrouter_chat,
    "mistral":    _mistral_chat,
    "ollama":     _ollama_chat,
    "anthropic":  _anthropic_chat,
})
