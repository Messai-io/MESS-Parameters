#!/usr/bin/env python3
"""
Build the merged metadata.json for a single paper.

Sources:
    1. CrossRef (works/<DOI>) — authoritative bibliographic data
    2. GROBID processHeaderDocument — author affiliations + abstract not always
       in CrossRef; falls back when CrossRef lookup fails
    3. source.json — DOI we already settled on

Outputs:
    metadata.json
    text/references.bib   (from GROBID processReferences when available)

Usage:
    python extract_metadata.py <by-doi-dir>
"""

from __future__ import annotations

import json
import os
import sys
import time
from pathlib import Path
from typing import Any

GROBID_URL = os.environ.get("GROBID_URL", "http://localhost:8070")


def crossref_fetch(doi: str) -> dict[str, Any] | None:
    import requests
    try:
        time.sleep(0.1)
        r = requests.get(
            f"https://api.crossref.org/works/{doi}",
            timeout=15,
            headers={"User-Agent": "MESS-Parameters/0.2 (mailto:research@messai.io)"},
        )
        if r.status_code == 200:
            return r.json().get("message")
    except Exception as e:
        print(f"  [warn] CrossRef fetch failed: {e}", file=sys.stderr)
    return None


def grobid_post(endpoint: str, pdf_path: Path) -> str | None:
    import requests
    try:
        with pdf_path.open("rb") as f:
            r = requests.post(
                f"{GROBID_URL}/api/{endpoint}",
                files={"input": f},
                timeout=120,
            )
        if r.status_code == 200:
            return r.text
    except Exception as e:
        print(f"  [warn] GROBID {endpoint} failed: {e}", file=sys.stderr)
    return None


def parse_grobid_header(tei: str) -> dict[str, Any]:
    """Pull title, abstract, authors+affiliations from a GROBID TEI XML doc."""
    try:
        from xml.etree import ElementTree as ET
        ns = {"t": "http://www.tei-c.org/ns/1.0"}
        root = ET.fromstring(tei)
        title = root.findtext(".//t:titleStmt/t:title", default="", namespaces=ns)
        abstract = " ".join(
            (e.text or "") for e in root.findall(".//t:abstract//t:p", ns)
        ).strip()
        authors = []
        for a in root.findall(".//t:sourceDesc//t:author", ns):
            name_parts = a.findall(".//t:persName/*", ns)
            name = " ".join((p.text or "").strip() for p in name_parts).strip()
            affs = [
                "; ".join((o.text or "").strip() for o in aff.findall(".//t:orgName", ns))
                for aff in a.findall(".//t:affiliation", ns)
            ]
            if name:
                authors.append({"name": name, "affiliations": affs})
        return {"title": title, "abstract": abstract, "authors": authors}
    except Exception:
        return {}


def merge(crossref: dict[str, Any] | None, grobid: dict[str, Any]) -> dict[str, Any]:
    out: dict[str, Any] = {}
    if crossref:
        title_parts = crossref.get("title") or []
        out["title"] = " ".join(title_parts) if isinstance(title_parts, list) else str(title_parts)
        out["doi"] = crossref.get("DOI")
        out["journal"] = " ".join(crossref.get("container-title") or [])
        out["publisher"] = crossref.get("publisher")
        out["year"] = (
            crossref.get("issued", {}).get("date-parts", [[None]])[0][0]
        )
        out["type"] = crossref.get("type")
        out["citation_count"] = crossref.get("is-referenced-by-count")
        out["url"] = crossref.get("URL")
        out["authors"] = [
            {
                "name": f"{a.get('given', '')} {a.get('family', '')}".strip(),
                "orcid": a.get("ORCID"),
                "affiliations": [aff.get("name") for aff in a.get("affiliation", [])],
            }
            for a in crossref.get("author") or []
        ]
        if not out.get("authors") and grobid.get("authors"):
            out["authors"] = grobid["authors"]
    else:
        out.update(grobid)
    if "abstract" not in out and grobid.get("abstract"):
        out["abstract"] = grobid["abstract"]
    return out


def main() -> int:
    if len(sys.argv) != 2:
        print("usage: extract_metadata.py <by-doi-dir>", file=sys.stderr)
        return 1
    paper_dir = Path(sys.argv[1])
    src = paper_dir / "source.json"
    if not src.exists():
        print(f"missing {src}", file=sys.stderr)
        return 1
    src_meta = json.loads(src.read_text())
    doi = src_meta.get("doi")

    cr = crossref_fetch(doi) if doi else None

    pdf_path = paper_dir / "paper.pdf"
    grobid_xml = grobid_post("processHeaderDocument", pdf_path) if pdf_path.exists() else None
    grobid = parse_grobid_header(grobid_xml) if grobid_xml else {}

    refs_xml = grobid_post("processReferences", pdf_path) if pdf_path.exists() else None
    if refs_xml:
        (paper_dir / "text").mkdir(exist_ok=True)
        (paper_dir / "text" / "references.bib").write_text(refs_xml)

    merged = merge(cr, grobid)
    (paper_dir / "metadata.json").write_text(json.dumps(merged, indent=2) + "\n")
    print(f"  {paper_dir.name}: title={(merged.get('title') or '')[:80]!r}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
