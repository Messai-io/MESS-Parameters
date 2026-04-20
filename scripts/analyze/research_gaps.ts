#!/usr/bin/env tsx
/**
 * Producer-native research-gap detector.
 *
 * Mirrors the 12 research areas used by messai-ai's
 *   apps/web/src/app/api/research/gaps/route.ts
 * (scale-up, long-term stability, cost reduction, biofilm engineering,
 * electron transfer, substrate flexibility, cathode optimization,
 * membrane alternatives, microbial consortia, in-situ monitoring, AI
 * optimization, hybrid systems) and emits a `ScoredGap[]`-shaped sidecar
 * so the consumer can read this file instead of recomputing at API time.
 *
 * Scoring mirrors the consumer's weighted urgency/impact/feasibility
 * formula but runs against producer-side data:
 *   papersInArea           title/keyword match across paper-metadata.csv
 *   contradictionCount     joined from data/analysis/contradictions.json
 *   parameterCoverage      fraction of "critical" parameters with stats
 *                          in parameter-provenance.json (post-blocklist)
 *   recencyWeight          max publication year within area
 *
 * Output:
 *   data/analysis/research-gaps.json
 *   data/analysis/research-gaps.html
 */

import * as fs from 'fs';
import * as path from 'path';

const ROOT = path.resolve(__dirname, '..', '..');
const PM = path.join(ROOT, 'data', 'paper-metadata.csv');
const PROV = path.join(ROOT, 'data', 'parameter-provenance.json');
const CONTR = path.join(ROOT, 'data', 'analysis', 'contradictions.json');
const OUT_DIR = path.join(ROOT, 'data', 'analysis');
const OUT_JSON = path.join(OUT_DIR, 'research-gaps.json');
const OUT_HTML = path.join(OUT_DIR, 'research-gaps.html');

const SCHEMA_VERSION = '0.1.0';
const NOW_YEAR = new Date().getFullYear();

interface ResearchArea {
  topic: string;
  keywords: string[];
  critical_parameters: string[];
  description: string;
  commercial_potential: 'low' | 'medium' | 'high' | 'breakthrough';
  scientific_impact: 'incremental' | 'moderate' | 'significant' | 'breakthrough';
  technical_difficulty: 'low' | 'medium' | 'high' | 'extreme';
  est_time_to_solution_months: number;
}

const RESEARCH_AREAS: ResearchArea[] = [
  {
    topic: 'scale-up',
    keywords: ['scale-up', 'scale up', 'scaling', 'pilot', 'pilot-scale', 'industrial', 'large-scale', 'demonstration'],
    critical_parameters: ['Reactor Volume', 'Power Density', 'Coulombic Efficiency', 'Internal Resistance'],
    description: 'Maintaining laboratory-scale performance at liter / cubic-meter scale. Current literature reports 50-90% performance loss on scale-up; digital-twin calibration against multi-scale datasets is an open problem.',
    commercial_potential: 'high',
    scientific_impact: 'significant',
    technical_difficulty: 'high',
    est_time_to_solution_months: 60,
  },
  {
    topic: 'long-term stability',
    keywords: ['long-term', 'stability', 'degradation', 'durability', 'lifetime', 'aging', 'lifespan'],
    critical_parameters: ['Power Density', 'Voltage', 'Internal Resistance', 'Coulombic Efficiency'],
    description: 'MES performance consistently degrades over time due to biofilm aging, membrane fouling, and cathode catalyst degradation. Most studies report weeks to months; few extend beyond 6 months.',
    commercial_potential: 'high',
    scientific_impact: 'moderate',
    technical_difficulty: 'medium',
    est_time_to_solution_months: 36,
  },
  {
    topic: 'cost reduction',
    keywords: ['cost', 'economic', 'commercial', 'techno-economic', 'capital expenditure', 'capex', 'affordable'],
    critical_parameters: ['Power Density', 'Current Density', 'Reactor Volume'],
    description: 'Electrode materials and proton-exchange membranes dominate MES capital costs. Search for earth-abundant, low-cost alternatives (Fe-N-C cathodes, ceramic separators, carbon-cloth anodes) with sustained performance.',
    commercial_potential: 'breakthrough',
    scientific_impact: 'significant',
    technical_difficulty: 'medium',
    est_time_to_solution_months: 48,
  },
  {
    topic: 'biofilm engineering',
    keywords: ['biofilm', 'thickness', 'biofilm formation', 'anode biofilm', 'electrode biofilm'],
    critical_parameters: ['Current Density', 'Power Density', 'Coulombic Efficiency'],
    description: 'Biofilm structure, thickness, and spatial metabolic activity profoundly affect current density, yet real-time, non-invasive monitoring methods do not exist. Regeneration strategies remain rudimentary.',
    commercial_potential: 'medium',
    scientific_impact: 'significant',
    technical_difficulty: 'high',
    est_time_to_solution_months: 48,
  },
  {
    topic: 'electron transfer',
    keywords: ['extracellular electron transfer', 'EET', 'nanowire', 'cytochrome', 'pili', 'mediator', 'mtrcab', 'omcs'],
    critical_parameters: ['Current Density', 'Power Density'],
    description: 'Relative contributions of direct-contact, nanowire, and mediator-based electron transfer pathways in mixed communities remain poorly resolved. Genetic / regulatory networks controlling EET under varied conditions are undercharacterized.',
    commercial_potential: 'medium',
    scientific_impact: 'breakthrough',
    technical_difficulty: 'extreme',
    est_time_to_solution_months: 72,
  },
  {
    topic: 'substrate flexibility',
    keywords: ['substrate', 'feedstock', 'wastewater', 'organic load', 'versatile', 'complex substrate'],
    critical_parameters: ['Power Density', 'Coulombic Efficiency', 'COD Removal', 'BOD Concentration'],
    description: 'Most lab studies use acetate or glucose; real-world wastewater is compositionally variable. AI-guided community tuning to adapt MES performance to shifting substrate profiles is largely absent.',
    commercial_potential: 'high',
    scientific_impact: 'moderate',
    technical_difficulty: 'medium',
    est_time_to_solution_months: 36,
  },
  {
    topic: 'cathode optimization',
    keywords: ['cathode', 'catalyst', 'oxygen reduction', 'ORR', 'fe-n-c', 'manganese', 'bioinspired'],
    critical_parameters: ['Power Density', 'Open Circuit Voltage', 'Internal Resistance'],
    description: 'Platinum-group metal cathodes are prohibitively expensive at scale. Fe-N-C, MnO2, and bioinspired catalysts show promise but cost/durability/selectivity trade-offs are poorly mapped.',
    commercial_potential: 'high',
    scientific_impact: 'significant',
    technical_difficulty: 'high',
    est_time_to_solution_months: 48,
  },
  {
    topic: 'membrane alternatives',
    keywords: ['membrane', 'separator', 'nafion', 'proton exchange membrane', 'membraneless', 'ceramic separator'],
    critical_parameters: ['Internal Resistance', 'Power Density'],
    description: 'Proton-exchange membranes (Nafion) cost hundreds of dollars per m². Ceramic, cloth, and membraneless alternatives introduce selectivity/durability trade-offs that are not fully characterized.',
    commercial_potential: 'breakthrough',
    scientific_impact: 'moderate',
    technical_difficulty: 'medium',
    est_time_to_solution_months: 36,
  },
  {
    topic: 'microbial consortia',
    keywords: ['consortia', 'community', 'mixed culture', 'synergy', 'synthetic community', 'co-culture'],
    critical_parameters: ['Current Density', 'Power Density', 'Coulombic Efficiency'],
    description: 'Real wastewater relies on mixed consortia; community assembly dynamics and keystone-species effects on performance are undercharacterized. Multi-omics integration is a bottleneck.',
    commercial_potential: 'high',
    scientific_impact: 'breakthrough',
    technical_difficulty: 'extreme',
    est_time_to_solution_months: 60,
  },
  {
    topic: 'in-situ monitoring',
    keywords: ['monitoring', 'sensor', 'real-time', 'in-situ', 'biosensor', 'impedance spectroscopy'],
    critical_parameters: ['Voltage', 'Current Density', 'Power Density'],
    description: 'No commercially available real-time biofilm-health or community-composition sensors. Electrochemical impedance spectroscopy and miniaturized sequencing are emerging candidates.',
    commercial_potential: 'high',
    scientific_impact: 'significant',
    technical_difficulty: 'high',
    est_time_to_solution_months: 36,
  },
  {
    topic: 'AI optimization',
    keywords: ['machine learning', 'deep learning', 'artificial intelligence', 'neural network', 'optimization', 'predictive control'],
    critical_parameters: ['Power Density', 'Current Density', 'Coulombic Efficiency'],
    description: 'AI-driven process control and scale-up prediction are feasible but require the standardized multi-variable datasets the field has not yet produced at scale.',
    commercial_potential: 'breakthrough',
    scientific_impact: 'significant',
    technical_difficulty: 'medium',
    est_time_to_solution_months: 24,
  },
  {
    topic: 'hybrid systems',
    keywords: ['hybrid', 'integrated', 'combined', 'coupling', 'anaerobic digestion', 'photo-bioelectrochemical'],
    critical_parameters: ['Power Density', 'COD Removal', 'Reactor Volume'],
    description: 'MES coupled with anaerobic digestion, solar driving, or advanced oxidation processes can exceed single-stage performance. Integration rules and optimal operating windows are undercharacterized.',
    commercial_potential: 'high',
    scientific_impact: 'moderate',
    technical_difficulty: 'high',
    est_time_to_solution_months: 48,
  },
];

// ─── CSV reader ────────────────────────────────────────────────────────

function parseCsv(text: string): { header: string[]; rows: string[][] } {
  const rows: string[][] = [];
  let field = ''; let row: string[] = []; let inQuotes = false; let i = 0;
  while (i < text.length) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') { field += '"'; i += 2; continue; }
        inQuotes = false; i++; continue;
      }
      field += ch; i++; continue;
    }
    if (ch === '"') { inQuotes = true; i++; continue; }
    if (ch === ',') { row.push(field); field = ''; i++; continue; }
    if (ch === '\n') { row.push(field); rows.push(row); row = []; field = ''; i++; continue; }
    if (ch === '\r') { i++; continue; }
    field += ch; i++;
  }
  if (field.length > 0 || row.length > 0) { row.push(field); rows.push(row); }
  return { header: rows.shift() || [], rows };
}

// ─── Scoring ───────────────────────────────────────────────────────────

function clamp01(x: number): number { return Math.max(0, Math.min(1, x)); }

interface AreaMetrics {
  topic: string;
  description: string;
  papers_in_area: number;
  recent_year_max: number | null;
  contradiction_count: number;
  parameter_coverage: number;       // fraction of critical_parameters with provenance
  parameters_with_stats: number;
  critical_parameters_total: number;
  commercial_potential: ResearchArea['commercial_potential'];
  scientific_impact: ResearchArea['scientific_impact'];
  technical_difficulty: ResearchArea['technical_difficulty'];
  est_time_to_solution_months: number;
}

function scoreGap(m: AreaMetrics) {
  // Urgency
  const scarcity = m.papers_in_area < 50 ? 1.0
    : m.papers_in_area < 150 ? 0.7
    : m.papers_in_area < 400 ? 0.45
    : 0.2;
  const yearsSincePub = m.recent_year_max ? Math.max(0, NOW_YEAR - m.recent_year_max) : 10;
  const recency = yearsSincePub <= 1 ? 0.3
    : yearsSincePub <= 3 ? 0.6
    : yearsSincePub <= 5 ? 0.85
    : 1.0;
  const contradictionBoost = Math.min(1.0, m.contradiction_count / 20);
  const urgency = clamp01(0.5 * scarcity + 0.3 * recency + 0.2 * contradictionBoost);

  // Impact
  const impactMap = { incremental: 0.25, moderate: 0.5, significant: 0.75, breakthrough: 1.0 };
  const commMap = { low: 0.25, medium: 0.5, high: 0.75, breakthrough: 1.0 };
  const scientific = impactMap[m.scientific_impact];
  const commercial = commMap[m.commercial_potential];
  const fieldWide = clamp01(1 - m.parameter_coverage); // low coverage → more field-wide opportunity
  const impact = clamp01(0.4 * scientific + 0.4 * commercial + 0.2 * fieldWide);

  // Feasibility
  const diffMap = { low: 1.0, medium: 0.75, high: 0.5, extreme: 0.25 };
  const technical = diffMap[m.technical_difficulty];
  const timeCap = m.est_time_to_solution_months <= 24 ? 1.0
    : m.est_time_to_solution_months <= 48 ? 0.75
    : m.est_time_to_solution_months <= 72 ? 0.5
    : 0.25;
  const resources = Math.min(1.0, m.papers_in_area / 100); // more work already done → more infrastructure
  const feasibility = clamp01(0.4 * technical + 0.35 * timeCap + 0.25 * resources);

  const total = 0.4 * urgency + 0.4 * impact + 0.2 * feasibility;
  const urgencyLevel: 'critical' | 'high' | 'medium' | 'low' =
    total >= 0.75 ? 'critical' :
    total >= 0.60 ? 'high' :
    total >= 0.45 ? 'medium' : 'low';

  const reasoning: string[] = [];
  if (scarcity > 0.7) reasoning.push(`Only ${m.papers_in_area} papers directly address this area in our corpus`);
  if (recency > 0.85) reasoning.push(`No publication in the area within the last ${yearsSincePub} years`);
  if (m.contradiction_count > 5) reasoning.push(`${m.contradiction_count} cross-paper contradictions flagged in related parameters`);
  if (fieldWide > 0.5) reasoning.push(`Only ${(m.parameter_coverage * 100).toFixed(0)}% of critical parameters have aggregated stats`);
  reasoning.push(`Commercial potential: ${m.commercial_potential}; scientific impact: ${m.scientific_impact}`);

  return {
    urgencyScore: Number(urgency.toFixed(3)),
    impactScore: Number(impact.toFixed(3)),
    feasibilityScore: Number(feasibility.toFixed(3)),
    totalScore: Number(total.toFixed(3)),
    urgencyLevel,
    reasoning,
    scoreBreakdown: {
      urgency:     { scarcity, recency, contradictions: contradictionBoost, total: urgency },
      impact:      { scientific, commercial, field: fieldWide, total: impact },
      feasibility: { technical, resources, timeCap, total: feasibility },
    },
  };
}

// ─── Main ──────────────────────────────────────────────────────────────

function main() {
  const pm = fs.existsSync(PM) ? parseCsv(fs.readFileSync(PM, 'utf8')) : null;
  const prov = JSON.parse(fs.readFileSync(PROV, 'utf8'));
  const contr = fs.existsSync(CONTR) ? JSON.parse(fs.readFileSync(CONTR, 'utf8')) : { contradictions: [] };

  // Paper metadata → array of { title, year, keywords }
  const papers: { title: string; year: number | null }[] = [];
  if (pm) {
    const iTitle = pm.header.indexOf('title');
    const iYear = pm.header.indexOf('year');
    for (const r of pm.rows) {
      const title = (r[iTitle] || '').toLowerCase();
      const year = iYear >= 0 ? parseInt(r[iYear] || '0', 10) || null : null;
      if (title) papers.push({ title, year });
    }
  }

  // Parameters with stats (post-blocklist) — by name
  const paramNames = new Set<string>();
  for (const p of prov.parameters || []) {
    if (p.stats_global) paramNames.add(String(p.name).toLowerCase());
  }

  // Contradictions indexed by parameter name (substring match vs area's critical params)
  const contrByParam = new Map<string, number>();
  for (const c of contr.contradictions || []) {
    if (!c.parameterName) continue;
    const k = String(c.parameterName).toLowerCase();
    contrByParam.set(k, (contrByParam.get(k) || 0) + 1);
  }

  const scored = RESEARCH_AREAS.map((area) => {
    let papersInArea = 0;
    let maxYear: number | null = null;
    for (const p of papers) {
      const hit = area.keywords.some((kw) => p.title.includes(kw.toLowerCase()));
      if (hit) {
        papersInArea++;
        if (p.year != null && (maxYear == null || p.year > maxYear)) maxYear = p.year;
      }
    }
    let matchedParams = 0;
    let contradictionCount = 0;
    for (const cp of area.critical_parameters) {
      if (paramNames.has(cp.toLowerCase())) matchedParams++;
      contradictionCount += contrByParam.get(cp.toLowerCase()) || 0;
    }
    const parameterCoverage = area.critical_parameters.length > 0
      ? matchedParams / area.critical_parameters.length
      : 0;

    const metrics: AreaMetrics = {
      topic: area.topic,
      description: area.description,
      papers_in_area: papersInArea,
      recent_year_max: maxYear,
      contradiction_count: contradictionCount,
      parameter_coverage: parameterCoverage,
      parameters_with_stats: matchedParams,
      critical_parameters_total: area.critical_parameters.length,
      commercial_potential: area.commercial_potential,
      scientific_impact: area.scientific_impact,
      technical_difficulty: area.technical_difficulty,
      est_time_to_solution_months: area.est_time_to_solution_months,
    };
    const score = scoreGap(metrics);
    return {
      id: area.topic.replace(/\s+/g, '-').toLowerCase(),
      topic: area.topic,
      description: area.description,
      critical_parameters: area.critical_parameters,
      keywords: area.keywords,
      metrics,
      ...score,
    };
  });

  scored.sort((a, b) => b.totalScore - a.totalScore);
  scored.forEach((g, i) => ((g as any).priorityRank = i + 1));

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify({
    schema_version: SCHEMA_VERSION,
    generated_at: new Date().toISOString(),
    corpus_snapshot: prov.metadata?.generated_at ?? null,
    n_gaps: scored.length,
    n_areas_analyzed: RESEARCH_AREAS.length,
    corpus_size: papers.length,
    gaps: scored,
  }, null, 2) + '\n');

  // HTML
  const esc = (s: any) => String(s ?? '')
    .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
  const rows = scored.map((g) => `
    <tr>
      <td style="padding:8px;font-weight:500;">${esc(g.topic)}</td>
      <td style="padding:8px;font-size:12px;color:#555;">${esc(g.description)}</td>
      <td style="padding:8px;text-align:right;font-variant-numeric:tabular-nums;">${g.metrics.papers_in_area}</td>
      <td style="padding:8px;text-align:right;font-variant-numeric:tabular-nums;">${(g.metrics.parameter_coverage * 100).toFixed(0)}%</td>
      <td style="padding:8px;text-align:right;font-variant-numeric:tabular-nums;">${g.metrics.contradiction_count}</td>
      <td style="padding:8px;font-weight:500;text-align:right;">${g.totalScore}</td>
      <td style="padding:8px;"><span style="padding:2px 6px;background:${
        g.urgencyLevel === 'critical' ? '#ffebee' : g.urgencyLevel === 'high' ? '#fff3e0' : g.urgencyLevel === 'medium' ? '#fff8e1' : '#f1f8e9'
      };">${esc(g.urgencyLevel)}</span></td>
    </tr>
  `).join('');
  fs.writeFileSync(OUT_HTML, `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>Research Gaps</title>
<style>
  body { font: 14px/1.5 -apple-system, system-ui, sans-serif; margin: 24px; max-width: 1100px; color: #222; }
  h1 { font-size: 20px; }
  table { border-collapse: collapse; font-size: 13px; width: 100%; }
  th { text-align: left; padding: 10px 8px; background: #f5f5f5; border-bottom: 1px solid #ddd; }
  tr:nth-child(even) td { background: #fafafa; }
</style></head>
<body>
<h1>Scored research gaps</h1>
<p>${scored.length} research areas evaluated; ranked by weighted urgency (40%), impact (40%), feasibility (20%).</p>
<table>
<thead><tr><th>Topic</th><th>Description</th><th>Papers</th><th>Parameter coverage</th><th>Contradictions</th><th>Score</th><th>Level</th></tr></thead>
<tbody>${rows}</tbody></table>
</body></html>`);

  console.log('Research-gap detector:');
  console.log(`  areas analyzed:          ${RESEARCH_AREAS.length}`);
  console.log(`  papers indexed:          ${papers.length}`);
  console.log(`  wrote JSON  → ${OUT_JSON}`);
  console.log(`  wrote HTML  → ${OUT_HTML}`);
  console.log(`  top 5 by score:`);
  for (const g of scored.slice(0, 5)) {
    console.log(`    ${g.totalScore.toFixed(2)}  [${g.urgencyLevel.padStart(8)}]  ${g.topic.padEnd(22)}  papers=${g.metrics.papers_in_area}  coverage=${(g.metrics.parameter_coverage * 100).toFixed(0)}%`);
  }
}

if (require.main === module) main();
