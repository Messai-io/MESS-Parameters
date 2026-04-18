#!/usr/bin/env python3
"""
Extract numeric parameter observations from a paper's structured text and
match them to the 687-parameter ontology in `parameters/index.json`.

Usage:
    python extract_parameters.py <by-doi-dir>

Strategy:
    1. Regex pass — for each ontology parameter name + unit pair, scan
       text/sections.json for "<value> <unit>" mentions in context.
    2. LLM augmentation — for the most-cited parameters (power density,
       coulombic efficiency, current density, COD removal, internal
       resistance) that the regex pass missed, send the relevant sections
       to Claude Sonnet 4.6 with a JSON-mode prompt.

Outputs:
    parameters/observations.json    [{parameterId, value, unit, page,
                                       snippet, confidence, method}]
    parameters/provenance.jsonl     full extraction trace per observation
"""

from __future__ import annotations

import json
import os
import re
import sys
from pathlib import Path
from typing import Any

REPO_ROOT = Path(__file__).resolve().parents[2]
ONTOLOGY = REPO_ROOT / "parameters" / "index.json"

NUM = r"-?\d+(?:\.\d+)?(?:[eE][+\-]?\d+)?"
UNIT_ALIASES = {
    "mW/m²": ["mW/m2", "mW m-2", "mW/m^2", "mW/m\u00b2"],
    "mA/m²": ["mA/m2", "mA m-2", "mA/m^2", "mA/m\u00b2"],
    "W/m²": ["W/m2", "W m-2", "W/m^2", "W/m\u00b2"],
    "A/m²": ["A/m2", "A m-2", "A/m^2", "A/m\u00b2"],
    "%": ["percent", "pct"],
    "°C": ["degrees C", "deg C", "C"],
    "mg/L": ["mg L-1", "mg/l"],
    "g/L": ["g L-1", "g/l"],
    "Ω": ["ohm", "ohms"],
    "kΩ": ["kohm"],
}


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
    # also lower-case + escaped variants
    return list({u for u in out if u})


def regex_scan(sections: dict[str, str], param: dict[str, Any]) -> list[dict[str, Any]]:
    name = param["name"]
    unit = (param.get("unit") or "").strip()
    if not unit:
        return []
    name_pat = re.compile(re.escape(name), re.IGNORECASE)
    unit_pats = [re.escape(u) for u in all_aliases(unit)]
    # value followed by unit, within ±200 chars of the name mention
    val_unit_re = re.compile(
        rf"({NUM})\s*({'|'.join(unit_pats)})\b"
    )

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
                    "parameterId": param["id"],
                    "value": value,
                    "unit": unit,
                    "page": None,
                    "snippet": window.strip(),
                    "section": section_name,
                    "confidence": 0.6,
                    "method": "regex",
                })
    return hits


def claude_augment(sections: dict[str, str], gaps: list[dict[str, Any]]) -> list[dict[str, Any]]:
    if not gaps or not os.environ.get("ANTHROPIC_API_KEY"):
        return []
    try:
        import anthropic
    except ImportError:
        return []
    client = anthropic.Anthropic()

    body = "\n\n".join(
        f"## {k.upper()}\n{v[:4000]}" for k, v in sections.items() if v
    )
    spec = "\n".join(
        f"- {p['id']}: {p['name']} ({p.get('unit') or 'dimensionless'})"
        for p in gaps
    )
    prompt = (
        "You are extracting numeric measurements from a microbial electrochemical "
        "systems paper. For EACH parameter listed, find at most one reported value "
        "in the text. Use the exact unit shown. Skip parameters that are not "
        "explicitly reported.\n\n"
        f"Parameters:\n{spec}\n\nPaper text:\n---\n{body[:12000]}\n---\n\n"
        "Respond ONLY as JSON: "
        '{"observations": [{"parameterId": "...", "value": <num>, "unit": "...", '
        '"snippet": "...", "confidence": <0..1>}]}'
    )

    try:
        msg = client.messages.create(
            model="claude-sonnet-4-6",
            max_tokens=2000,
            messages=[{"role": "user", "content": prompt}],
        )
        text = msg.content[0].text.strip()
        text = re.sub(r"^```json\s*|\s*```$", "", text)
        obs = json.loads(text).get("observations", [])
        for o in obs:
            o["method"] = "llm"
            o["section"] = "mixed"
            o["page"] = None
        return obs
    except Exception as e:
        print(f"  [warn] Claude augmentation failed: {e}", file=sys.stderr)
        return []


def dedup(hits: list[dict[str, Any]]) -> list[dict[str, Any]]:
    """Keep highest-confidence hit per (parameterId, value, unit)."""
    best: dict[tuple, dict[str, Any]] = {}
    for h in hits:
        k = (h["parameterId"], round(h["value"], 6), h["unit"])
        if k not in best or h["confidence"] > best[k]["confidence"]:
            best[k] = h
    return list(best.values())


# Parameters worth a Claude pass when regex finds nothing for them.
LLM_TARGETS = {
    "power_density", "max_power_density", "current_density",
    "coulombic_efficiency", "internal_resistance", "external_resistance",
    "cod_removal", "cod_removal_efficiency", "ph", "temperature",
    "hydraulic_retention_time", "open_circuit_voltage", "voltage",
}


def main() -> int:
    if len(sys.argv) != 2:
        print("usage: extract_parameters.py <by-doi-dir>", file=sys.stderr)
        return 1
    paper_dir = Path(sys.argv[1])
    sec_path = paper_dir / "text" / "sections.json"
    if not sec_path.exists():
        print(f"missing {sec_path}", file=sys.stderr)
        return 1

    sections = json.loads(sec_path.read_text())
    ontology = load_ontology()

    hits: list[dict[str, Any]] = []
    for param in ontology:
        hits.extend(regex_scan(sections, param))

    found_ids = {h["parameterId"] for h in hits}
    gaps = [p for p in ontology if p["id"] in LLM_TARGETS and p["id"] not in found_ids]
    hits.extend(claude_augment(sections, gaps))

    hits = dedup(hits)

    out_dir = paper_dir / "parameters"
    out_dir.mkdir(parents=True, exist_ok=True)
    (out_dir / "observations.json").write_text(json.dumps(hits, indent=2) + "\n")
    with (out_dir / "provenance.jsonl").open("w") as f:
        for h in hits:
            f.write(json.dumps(h) + "\n")

    print(f"  {paper_dir.name}: {len(hits)} observations across {len(found_ids | {h['parameterId'] for h in hits})} parameters")
    return 0


if __name__ == "__main__":
    sys.exit(main())
