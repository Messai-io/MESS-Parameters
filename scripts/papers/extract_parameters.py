#!/usr/bin/env python3
"""
Extract parameter observations + full scientific context from one paper.

Two-layer extraction:

  1. Regex pass — for ontology parameters with a definite unit, scan
     sections.json for "<value> <unit>" mentions within ±200 chars of the
     parameter name. Fast, free, captures obvious hits and the 200-char
     window as `snippet`.

  2. LLM pass (Groq via llm.py by default) — one call per paper. The
     prompt asks for BOTH paper-level context (system config + default
     conditions) and per-observation measurements (value, unit, snippet,
     value_type, uncertainty, technique, any per-observation condition
     overrides). The paper-level context is then denormalized onto every
     observation (regex and LLM) so each row carries its full context.

Output per observation (all fields optional except parameter_id/value/unit):

  parameter_id, value, unit
  extraction_confidence, extraction_method (regex|llm)
  section, page, snippet, location_hint (e.g. "Table 2")

  # How the value should be interpreted
  value_type: peak|maximum|steady_state|endpoint|average|initial|final|minimum
  is_normalized_to: anode_area|cathode_area|membrane_area|total_volume|null
  uncertainty: {value: number, type: std|sem|ci95|range}  (null if unreported)
  replicates: int (null if unreported)
  measurement_technique: polarization_curve|chronoamperometry|chronopotentiometry|
                         cyclic_voltammetry|linear_sweep_voltammetry|
                         electrochemical_impedance_spectroscopy|open_circuit|other

  # Conditions at the time of measurement (denormalized from paper context,
  # with observation-specific overrides if the LLM found any)
  temperature_c, ph, substrate, substrate_concentration, inoculum,
  electrolyte, operation_mode, conductivity_ms_cm, dissolved_oxygen_mg_l

  # System configuration (paper-level, same across observations from one paper)
  system_type: MFC|MEC|MDC|MES|BES|other
  reactor_configuration: single_chamber|dual_chamber|stacked|tubular|flat_plate|other
  reactor_volume_ml, anode_material, cathode_material, membrane,
  electrode_surface_area_cm2, electrode_spacing_cm

  # Microbial context (paper-level)
  dominant_organism, is_pure_culture, pretreatment

Usage:  python extract_parameters.py <by-doi-dir>
"""

from __future__ import annotations

import json
import os
import re
import sys
from pathlib import Path
from typing import Any


def _load_dotenv(p: Path) -> None:
    if not p.exists():
        return
    with p.open() as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            k, _, v = line.partition("=")
            k = k.strip()
            v = v.strip().strip('"').strip("'")
            if k and k not in os.environ:
                os.environ[k] = v


_load_dotenv(Path(__file__).resolve().parents[2] / ".env")

REPO_ROOT = Path(__file__).resolve().parents[2]
ONTOLOGY = REPO_ROOT / "parameters" / "index.json"

NUM = r"-?\d+(?:\.\d+)?(?:[eE][+\-]?\d+)?"
UNIT_ALIASES = {
    "mW/m²": ["mW/m2", "mW m-2", "mW/m^2", "mW/m\u00b2"],
    "mA/m²": ["mA/m2", "mA m-2", "mA/m^2", "mA/m\u00b2"],
    "W/m²":  ["W/m2", "W m-2", "W/m^2", "W/m\u00b2"],
    "A/m²":  ["A/m2", "A m-2", "A/m^2", "A/m\u00b2"],
    "%":     ["percent", "pct"],
    "°C":    ["degrees C", "deg C", "C"],
    "mg/L":  ["mg L-1", "mg/l"],
    "g/L":   ["g L-1", "g/l"],
    "Ω":     ["ohm", "ohms"],
    "kΩ":    ["kohm"],
}

# Curated MES-core parameters worth a full LLM pass. Ontology IDs, lowercase.
# Matches the high-usage tail of the DB + covers the key reproducibility
# dimensions (power, current, CE, resistance, conditions, substrate).
MES_CORE_PARAMETERS = {
    "power_density", "max_power_density", "current_density",
    "maximum_power_point", "short_circuit_current", "peak_current",
    "coulombic_efficiency", "faradaic_efficiency",
    "internal_resistance", "external_resistance",
    "open_circuit_voltage", "voltage", "overpotential",
    "cod_removal", "cod_removal_efficiency", "bod_removal",
    "cod_concentration", "bod_concentration",
    "ph", "temperature", "ambient_temperature",
    "hydraulic_retention_time", "flow_rate",
    "substrate", "reactor_volume", "volume", "batch_volume",
    "electrode_surface_area", "electrode_spacing", "electrode_diameter",
    "scan_rate", "ionic_strength", "conductivity",
}

# Vocabulary pins — kept stable so rollup/UI can match strings.
VALUE_TYPES = {"peak", "maximum", "steady_state", "endpoint", "average",
               "initial", "final", "minimum", "median"}
TECHNIQUES = {"polarization_curve", "chronoamperometry", "chronopotentiometry",
              "cyclic_voltammetry", "linear_sweep_voltammetry",
              "electrochemical_impedance_spectroscopy", "open_circuit", "other"}
SYSTEM_TYPES = {"MFC", "MEC", "MDC", "MES", "BES", "other"}
REACTOR_CONFIGS = {"single_chamber", "dual_chamber", "stacked", "tubular",
                   "flat_plate", "other"}
OPERATION_MODES = {"batch", "continuous", "fed_batch", "flow_through"}
UNCERTAINTY_TYPES = {"std", "sem", "ci95", "range", "sd"}

# Fields that the observation "inherits" from paper-level context unless the
# LLM emits an explicit override. Kept flat on the observation so rollup +
# downstream consumers see one shape.
PAPER_CONTEXT_FIELDS = [
    # Conditions (paper defaults — observation may override)
    "temperature_c", "ph", "substrate", "substrate_concentration",
    "inoculum", "electrolyte", "operation_mode",
    "conductivity_ms_cm", "dissolved_oxygen_mg_l",
    # System configuration (rarely varies within one paper)
    "system_type", "reactor_configuration", "reactor_volume_ml",
    "anode_material", "cathode_material", "membrane",
    "electrode_surface_area_cm2", "electrode_spacing_cm",
    # Microbial
    "dominant_organism", "is_pure_culture", "pretreatment",
]

# Fields that describe the observation itself, not the system.
OBSERVATION_FIELDS = [
    "value_type", "is_normalized_to", "uncertainty", "replicates",
    "measurement_technique", "location_hint",
]


def load_ontology() -> list[dict[str, Any]]:
    data = json.loads(ONTOLOGY.read_text())
    flat: list[dict[str, Any]] = []
    for cat in data.get("categories", []):
        for sub in cat.get("subcategories", []):
            for p in sub.get("parameters", []):
                flat.append(p)
    return flat


def all_aliases(unit: str) -> list[str]:
    out = [unit] + UNIT_ALIASES.get(unit, [])
    return list({u for u in out if u})


def regex_scan(sections: dict[str, str], param: dict[str, Any]) -> list[dict[str, Any]]:
    name = param["name"]
    unit = (param.get("unit") or "").strip()
    if not unit:
        return []
    name_pat = re.compile(re.escape(name), re.IGNORECASE)
    unit_pats = [re.escape(u) for u in all_aliases(unit)]
    val_unit_re = re.compile(rf"({NUM})\s*({'|'.join(unit_pats)})\b")
    hits: list[dict[str, Any]] = []
    for section_name, body in sections.items():
        for m in name_pat.finditer(body):
            window_start = max(0, m.start() - 200)
            window_end = min(len(body), m.end() + 200)
            window = body[window_start:window_end]
            for vm in val_unit_re.finditer(window):
                try:
                    value = float(vm.group(1))
                except ValueError:
                    continue
                hits.append({
                    "parameter_id": param["id"],
                    "value": value,
                    "unit": unit,
                    "extraction_confidence": 0.6,
                    "extraction_method": "regex",
                    "section": section_name,
                    "page": None,
                    "snippet": window.strip(),
                })
    return hits


# ═══════════════════════════════════════════════════════════════════════
# LLM pass — one structured call per paper for context + observations.
# ═══════════════════════════════════════════════════════════════════════

_SYSTEM_PROMPT = """You extract structured measurements from a microbial
electrochemical systems (MES) paper. Return JSON with two keys:

  paper_context: shared properties of the experimental system (one object)
  observations:  list of reported numeric measurements (0+ objects)

Rules:
- Report ONLY what the paper explicitly states. Never invent values.
- Leave any field null you cannot confirm from the text.
- Use the exact unit shown in the paper. Do not convert.
- If the same parameter is reported at different conditions (e.g. pH 6 vs 7),
  emit one observation per condition with its own condition overrides.
- `value_type` disambiguates peak vs steady-state vs average — set it
  whenever the paper makes the distinction.
- `uncertainty` encodes "±" values if reported; leave null otherwise.
- Do NOT emit rows for parameters you cannot find. No skeleton rows.
"""

_USER_TEMPLATE = """Parameters of interest (ontology ids):
%%PARAMETER_LIST%%

Paper sections:
---
%%BODY%%
---

Return ONLY JSON matching this shape:

{
  "paper_context": {
    "system_type": "MFC|MEC|MDC|MES|BES|other" or null,
    "reactor_configuration": "single_chamber|dual_chamber|stacked|tubular|flat_plate|other" or null,
    "reactor_volume_ml": number or null,
    "anode_material": string or null,
    "cathode_material": string or null,
    "membrane": string or null,
    "electrode_surface_area_cm2": number or null,
    "electrode_spacing_cm": number or null,
    "temperature_c": number or null,
    "ph": number or null,
    "substrate": string or null,
    "substrate_concentration": string or null,
    "inoculum": string or null,
    "electrolyte": string or null,
    "operation_mode": "batch|continuous|fed_batch|flow_through" or null,
    "conductivity_ms_cm": number or null,
    "dissolved_oxygen_mg_l": number or null,
    "dominant_organism": string or null,
    "is_pure_culture": boolean or null,
    "pretreatment": string or null
  },
  "observations": [
    {
      "parameter_id": "<one of the ontology ids above>",
      "value": number,
      "unit": string,
      "snippet": "<the exact sentence it was reported in>",
      "location_hint": "abstract|results|Table <n>|Figure <n>|..." or null,
      "value_type": "peak|maximum|steady_state|endpoint|average|initial|final|minimum|median" or null,
      "is_normalized_to": "anode_area|cathode_area|membrane_area|total_volume" or null,
      "uncertainty": {"value": number, "type": "std|sem|ci95|range"} or null,
      "replicates": integer or null,
      "measurement_technique": "polarization_curve|chronoamperometry|chronopotentiometry|cyclic_voltammetry|linear_sweep_voltammetry|electrochemical_impedance_spectroscopy|open_circuit|other" or null,
      "temperature_c": number or null,
      "ph": number or null,
      "substrate": string or null,
      "confidence": number between 0 and 1
    }
  ]
}
"""


def llm_extract(sections: dict[str, str], parameter_ids: list[str]) -> dict[str, Any] | None:
    from llm import chat_json
    # Pack abstract + results + methods + discussion — where measurements live.
    # Each section truncated to 2500 chars to cap total prompt size without
    # losing context-dense portions.
    priority = ("abstract", "methods", "results", "discussion", "conclusion")
    parts = [f"## {k.upper()}\n{sections[k][:2500]}" for k in priority if sections.get(k)]
    # Include any other non-priority sections briefly
    for k, v in sections.items():
        if k not in priority and v:
            parts.append(f"## {k.upper()}\n{v[:1000]}")
    body = "\n\n".join(parts)
    if not body.strip():
        return None
    prompt = (
        _USER_TEMPLATE
        .replace("%%PARAMETER_LIST%%", "\n".join(f"- {pid}" for pid in parameter_ids))
        .replace("%%BODY%%", body[:10000])
    )
    out = chat_json(prompt, system=_SYSTEM_PROMPT, max_tokens=1800)
    return out if isinstance(out, dict) else None


def _as_number(v: Any) -> float | None:
    try:
        f = float(v)
        return f if (f == f and abs(f) != float("inf")) else None  # nan/inf filter
    except (TypeError, ValueError):
        return None


def _as_enum(v: Any, allowed: set[str]) -> str | None:
    if isinstance(v, str):
        s = v.strip()
        if s in allowed:
            return s
        # tolerate lowercase/snake variants
        s2 = s.lower().replace(" ", "_").replace("-", "_")
        for a in allowed:
            if a.lower() == s2:
                return a
    return None


def _coerce_paper_context(ctx: dict | None) -> dict[str, Any]:
    """Normalize whatever the LLM returned into the fixed paper-context shape.
    Unknown or malformed fields become null."""
    out: dict[str, Any] = {k: None for k in PAPER_CONTEXT_FIELDS}
    if not isinstance(ctx, dict):
        return out
    g = ctx.get

    out["system_type"] = _as_enum(g("system_type"), SYSTEM_TYPES)
    out["reactor_configuration"] = _as_enum(g("reactor_configuration"), REACTOR_CONFIGS)
    out["operation_mode"] = _as_enum(g("operation_mode"), OPERATION_MODES)

    for f in ("reactor_volume_ml", "electrode_surface_area_cm2",
              "electrode_spacing_cm", "temperature_c", "ph",
              "conductivity_ms_cm", "dissolved_oxygen_mg_l"):
        out[f] = _as_number(g(f))

    for f in ("anode_material", "cathode_material", "membrane",
              "substrate", "substrate_concentration", "inoculum",
              "electrolyte", "dominant_organism", "pretreatment"):
        v = g(f)
        out[f] = v.strip() if isinstance(v, str) and v.strip() else None

    ipc = g("is_pure_culture")
    out["is_pure_culture"] = bool(ipc) if isinstance(ipc, bool) else None

    return out


def _coerce_observation(
    o: dict, paper_context: dict[str, Any]
) -> dict[str, Any] | None:
    if not isinstance(o, dict):
        return None
    pid = o.get("parameter_id") or o.get("parameterId")
    if not pid:
        return None
    value = _as_number(o.get("value"))
    unit = o.get("unit")
    if value is None or not unit:
        return None

    conf = _as_number(o.get("confidence"))
    if conf is None or conf < 0 or conf > 1:
        conf = 0.65  # default for LLM hits

    obs: dict[str, Any] = {
        "parameter_id": str(pid),
        "value": value,
        "unit": str(unit).strip(),
        "extraction_confidence": round(conf, 3),
        "extraction_method": "llm",
        "section": "mixed",
        "page": None,
        "snippet": (o.get("snippet") or "").strip()[:600] or None,
    }

    # Observation-specific fields.
    obs["value_type"] = _as_enum(o.get("value_type"), VALUE_TYPES)
    obs["is_normalized_to"] = o.get("is_normalized_to") if isinstance(o.get("is_normalized_to"), str) else None
    obs["measurement_technique"] = _as_enum(o.get("measurement_technique"), TECHNIQUES)
    obs["location_hint"] = (o.get("location_hint") or None)
    if isinstance(obs["location_hint"], str) and not obs["location_hint"].strip():
        obs["location_hint"] = None

    unc = o.get("uncertainty")
    if isinstance(unc, dict):
        uv = _as_number(unc.get("value"))
        ut = _as_enum(unc.get("type"), UNCERTAINTY_TYPES)
        if uv is not None and ut is not None:
            obs["uncertainty"] = {"value": uv, "type": "std" if ut == "sd" else ut}
        else:
            obs["uncertainty"] = None
    else:
        obs["uncertainty"] = None

    reps = o.get("replicates")
    try:
        obs["replicates"] = int(reps) if reps is not None and int(reps) > 0 else None
    except (TypeError, ValueError):
        obs["replicates"] = None

    # Observation-specific condition overrides; fall back to paper context.
    for f in PAPER_CONTEXT_FIELDS:
        override = o.get(f)
        if isinstance(override, (int, float)) and not isinstance(override, bool):
            obs[f] = float(override)
        elif isinstance(override, str) and override.strip():
            obs[f] = override.strip()
        elif isinstance(override, bool):
            obs[f] = override
        else:
            obs[f] = paper_context.get(f)

    return obs


def enrich_regex_hits(hits: list[dict[str, Any]], paper_context: dict[str, Any]) -> list[dict[str, Any]]:
    """Denormalize paper context onto regex hits so they have the same shape."""
    out: list[dict[str, Any]] = []
    for h in hits:
        merged: dict[str, Any] = {
            "parameter_id": h["parameter_id"],
            "value": h["value"],
            "unit": h["unit"],
            "extraction_confidence": h["extraction_confidence"],
            "extraction_method": h["extraction_method"],
            "section": h["section"],
            "page": h["page"],
            "snippet": h["snippet"],
            "location_hint": None,
            "value_type": None,
            "is_normalized_to": None,
            "uncertainty": None,
            "replicates": None,
            "measurement_technique": None,
        }
        for f in PAPER_CONTEXT_FIELDS:
            merged[f] = paper_context.get(f)
        out.append(merged)
    return out


def dedup(hits: list[dict[str, Any]]) -> list[dict[str, Any]]:
    """Keep the highest-confidence observation per (parameter_id, value, unit).
    LLM hits with context win ties over regex hits via confidence."""
    best: dict[tuple, dict[str, Any]] = {}
    for h in hits:
        try:
            v = round(float(h["value"]), 6)
        except (TypeError, ValueError):
            continue
        k = (h["parameter_id"], v, h["unit"])
        if k not in best or h["extraction_confidence"] > best[k]["extraction_confidence"]:
            best[k] = h
    return list(best.values())


def main() -> int:
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    flags = {a for a in sys.argv[1:] if a.startswith("--")}
    if len(args) != 1:
        print("usage: extract_parameters.py <by-doi-dir> [--force]", file=sys.stderr)
        return 1
    paper_dir = Path(args[0])
    sec_path = paper_dir / "text" / "sections.json"
    if not sec_path.exists():
        print(f"missing {sec_path}", file=sys.stderr)
        return 1

    # Resume guard: if the new-schema output already exists (paper_context.json
    # is only emitted by this version), skip unless --force. Prevents bulk
    # re-runs from regressing richly-extracted papers back to regex-only when
    # Groq rate-limits mid-run.
    ctx_path = paper_dir / "parameters" / "paper_context.json"
    if ctx_path.exists() and "--force" not in flags:
        return 0

    sections = json.loads(sec_path.read_text())
    ontology = load_ontology()

    # Regex pass first (cheap, fast).
    regex_hits: list[dict[str, Any]] = []
    for param in ontology:
        regex_hits.extend(regex_scan(sections, param))

    # LLM pass — one structured call per paper for context + observations.
    llm_response = llm_extract(sections, sorted(MES_CORE_PARAMETERS))
    paper_context = _coerce_paper_context((llm_response or {}).get("paper_context"))
    llm_hits_raw = (llm_response or {}).get("observations", []) or []

    llm_hits: list[dict[str, Any]] = []
    for o in llm_hits_raw:
        coerced = _coerce_observation(o, paper_context)
        if coerced is not None:
            llm_hits.append(coerced)

    # Enrich regex hits with paper context so every observation has a full
    # context row, regardless of how it was extracted.
    all_hits = enrich_regex_hits(regex_hits, paper_context) + llm_hits
    all_hits = dedup(all_hits)

    out_dir = paper_dir / "parameters"
    out_dir.mkdir(parents=True, exist_ok=True)

    # Full output — flat list of observations.
    (out_dir / "observations.json").write_text(
        json.dumps(all_hits, indent=2, ensure_ascii=False) + "\n"
    )

    # Sidecar with the paper-level context separate (useful for the site).
    (out_dir / "paper_context.json").write_text(
        json.dumps(paper_context, indent=2, ensure_ascii=False) + "\n"
    )

    with (out_dir / "provenance.jsonl").open("w") as f:
        for h in all_hits:
            f.write(json.dumps(h, ensure_ascii=False) + "\n")

    n_params = len({h["parameter_id"] for h in all_hits})
    print(
        f"  {paper_dir.name}: {len(all_hits)} observations across {n_params} parameters"
        f" (regex={len(regex_hits)} llm={len(llm_hits)}"
        f" sys={paper_context.get('system_type') or '-'})"
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
