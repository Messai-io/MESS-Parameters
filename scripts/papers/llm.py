"""Unified LLM shim for the papers pipeline.

Supports three backends, selected via environment:
  - Groq (cloud, free tier)    — set GROQ_API_KEY=... (optional GROQ_API_KEY_2..5 rotate)
  - Ollama (local, free)       — set OLLAMA_MODEL=<name>
  - Anthropic (cloud, paid)    — set ANTHROPIC_API_KEY=sk-ant-...

Pass MESS_LLM_BACKEND=groq|ollama|anthropic to force a specific backend; when
unset the function auto-detects based on which credentials are present, in
the order above (Groq first — fast free tier beats Ollama latency for bulk
work; Anthropic last — billed).

Callers should always handle a None return — that means "no backend available"
and the pipeline should fall back to regex/CrossRef-only behavior.
"""

from __future__ import annotations

import json
import os
import re
import sys
from typing import Any


DEFAULT_OLLAMA_HOST = "http://localhost:11434"
DEFAULT_OLLAMA_MODEL = "qwen3:latest"
DEFAULT_GROQ_MODEL = "llama-3.3-70b-versatile"
GROQ_BASE = "https://api.groq.com/openai/v1"


def _groq_keys() -> list[str]:
    """All Groq keys present in the environment, in rotation order."""
    keys: list[str] = []
    for name in ("GROQ_API_KEY", "GROQ_API_KEY_2", "GROQ_API_KEY_3",
                 "GROQ_API_KEY_4", "GROQ_API_KEY_5"):
        v = os.environ.get(name, "").strip()
        if v:
            keys.append(v)
    return keys


def _backend() -> str | None:
    forced = os.environ.get("MESS_LLM_BACKEND", "").strip().lower()
    if forced in {"groq", "ollama", "anthropic"}:
        return forced
    if _groq_keys():
        return "groq"
    if os.environ.get("OLLAMA_MODEL"):
        return "ollama"
    if os.environ.get("ANTHROPIC_API_KEY"):
        return "anthropic"
    # No explicit signal: try ollama at its default host if reachable.
    host = os.environ.get("OLLAMA_HOST", DEFAULT_OLLAMA_HOST).rstrip("/")
    try:
        import requests
        r = requests.get(f"{host}/api/tags", timeout=1.5)
        if r.status_code == 200:
            return "ollama"
    except Exception:
        pass
    return None


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


def chat_json(
    prompt: str,
    *,
    max_tokens: int = 2000,
    system: str | None = None,
    temperature: float = 0.0,
) -> dict[str, Any] | None:
    """Call the configured LLM backend and return parsed JSON, or None on any failure.

    The prompt must instruct the model to return JSON. Callers should include
    a schema hint so qwen / mistral honor the format.
    """
    backend = _backend()
    if backend is None:
        return None

    if backend == "groq":
        return _groq_chat(prompt, max_tokens, system, temperature)
    if backend == "ollama":
        return _ollama_chat(prompt, max_tokens, system, temperature)
    if backend == "anthropic":
        return _anthropic_chat(prompt, max_tokens, system, temperature)
    return None


# Round-robin counter for Groq keys. Module-level so rotation persists
# across calls within a process.
_groq_key_idx = 0


def _groq_chat(
    prompt: str, max_tokens: int, system: str | None, temperature: float
) -> dict[str, Any] | None:
    global _groq_key_idx
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
    # Try each key in rotation; on 429/5xx, advance and retry once per key.
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
        if r.status_code in (429, 500, 502, 503):
            # Rate-limited or transient — rotate and retry.
            continue
        # Other errors (e.g. 401 invalid key) — log and try the next key.
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
                },
            },
            timeout=120,
        )
        r.raise_for_status()
        content = r.json().get("message", {}).get("content", "")
    except Exception as e:
        print(f"[warn] ollama call failed: {e}", file=sys.stderr)
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
    """One-line description of which backend is active (for logs)."""
    b = _backend()
    if b == "ollama":
        model = os.environ.get("OLLAMA_MODEL", DEFAULT_OLLAMA_MODEL)
        host = os.environ.get("OLLAMA_HOST", DEFAULT_OLLAMA_HOST)
        return f"ollama ({model} @ {host})"
    if b == "anthropic":
        model = os.environ.get("ANTHROPIC_MODEL", "claude-sonnet-4-6")
        return f"anthropic ({model})"
    return "none (LLM steps disabled)"
