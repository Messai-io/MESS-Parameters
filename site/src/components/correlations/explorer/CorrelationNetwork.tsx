import { useMemo, useState } from 'react';
import type { PairRow, NodeMeta } from '../useCorrelationPairs';
import { nameToSlug } from '../useCorrelationPairs';
import { categoryColors } from '../../../styles/category-colors';
import { PairDetailPopover } from './PairDetailPopover';
import type { MaterialsFile } from '../../../data/materials';

interface Props {
  pairs: PairRow[];
  nodes: NodeMeta[];
  materials?: MaterialsFile | null;
}

const POS_COLOR = '#5C7A5C';
const NEG_COLOR = '#6B3E3E';
const INSIG_COLOR = '#7C7F82';

interface PlacedNode extends NodeMeta {
  x: number;
  y: number;
  angle: number;
}

const SIZE = 640;
const CX = SIZE / 2;
const CY = SIZE / 2;
const RADIUS = SIZE / 2 - 140;

export function CorrelationNetwork({ pairs, nodes, materials = null }: Props) {
  const [hover, setHover] = useState<{ pair: PairRow; x: number; y: number } | null>(null);
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);

  const placed: PlacedNode[] = useMemo(() => {
    // Sort nodes by category then name so grouped colors look clustered around the ring.
    const sorted = [...nodes].sort((a, b) => {
      if (a.category === b.category) return a.name.localeCompare(b.name);
      return a.category.localeCompare(b.category);
    });
    return sorted.map((n, i) => {
      const angle = (i / Math.max(1, sorted.length)) * Math.PI * 2 - Math.PI / 2;
      return {
        ...n,
        angle,
        x: CX + Math.cos(angle) * RADIUS,
        y: CY + Math.sin(angle) * RADIUS,
      };
    });
  }, [nodes]);

  const placedById = useMemo(() => {
    const m = new Map<string, PlacedNode>();
    for (const p of placed) m.set(p.id, p);
    return m;
  }, [placed]);

  if (nodes.length === 0) {
    return (
      <div className="py-16 text-center text-sm text-mes-text-muted italic">
        No pairs meet the current filters — try lowering the n threshold or the |r| minimum.
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="overflow-x-auto">
        <svg
          width={SIZE}
          height={SIZE}
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="block mx-auto"
          style={{ fontFamily: 'DM Mono' }}
        >
          {/* Guide ring */}
          <circle cx={CX} cy={CY} r={RADIUS} fill="none" stroke="#f5f5f5" strokeWidth={1} />
          {/* Chords */}
          {pairs.map((p) => {
            const a = placedById.get(p.a_id);
            const b = placedById.get(p.b_id);
            if (!a || !b) return null;
            const faded =
              activeNodeId !== null && activeNodeId !== p.a_id && activeNodeId !== p.b_id;
            const strokeWidth = 0.75 + 4 * Math.abs(p.pearson_r);
            const stroke = !p.significant
              ? INSIG_COLOR
              : p.pearson_r > 0
              ? POS_COLOR
              : NEG_COLOR;
            const opacity = faded ? 0.04 : Math.max(0.15, Math.abs(p.pearson_r) * 0.85);
            const d = `M ${a.x} ${a.y} Q ${CX} ${CY} ${b.x} ${b.y}`;
            return (
              <path
                key={`${p.a_id}|${p.b_id}`}
                d={d}
                fill="none"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeDasharray={p.significant ? '0' : '3,3'}
                opacity={opacity}
                onMouseEnter={(e) => setHover({ pair: p, x: e.clientX, y: e.clientY })}
                onMouseMove={(e) => setHover({ pair: p, x: e.clientX, y: e.clientY })}
                onMouseLeave={() => setHover(null)}
                className="cursor-pointer"
              />
            );
          })}
          {/* Nodes */}
          {placed.map((n) => {
            const color = categoryColors[n.category] ?? '#6B6966';
            const isActive = activeNodeId === n.id;
            const labelX = CX + Math.cos(n.angle) * (RADIUS + 14);
            const labelY = CY + Math.sin(n.angle) * (RADIUS + 14);
            const rot = (n.angle * 180) / Math.PI;
            const flip = rot > 90 || rot < -90;
            return (
              <g key={n.id}>
                <rect
                  x={n.x - 5}
                  y={n.y - 5}
                  width={10}
                  height={10}
                  fill={color}
                  stroke={isActive ? '#1a1916' : '#fff'}
                  strokeWidth={isActive ? 2 : 1}
                  className="cursor-pointer"
                  onMouseEnter={() => setActiveNodeId(n.id)}
                  onMouseLeave={() => setActiveNodeId(null)}
                  onClick={() => { window.location.hash = `#/parameter/${nameToSlug(n.name)}`; }}
                />
                <text
                  x={labelX}
                  y={labelY}
                  fontSize={10}
                  fill={isActive ? '#1a1916' : '#3E3C38'}
                  fontWeight={isActive ? 600 : 400}
                  textAnchor={flip ? 'end' : 'start'}
                  transform={`rotate(${flip ? rot + 180 : rot} ${labelX} ${labelY})`}
                  className="pointer-events-none select-none"
                >
                  {n.name.length > 24 ? n.name.slice(0, 23) + '…' : n.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {hover && (
        <div className="fixed pointer-events-none z-20"
          style={{ left: 0, top: 0, transform: `translate(${hover.x}px, ${hover.y}px)` }}>
          <PairDetailPopover pair={hover.pair} x={0} y={0} materials={materials} />
        </div>
      )}

      <NetworkLegend />
    </div>
  );
}

function NetworkLegend() {
  return (
    <div className="mt-3 flex flex-wrap items-center gap-4 text-[11px] text-mes-text-muted">
      <span className="uppercase tracking-wider text-[10px]">Legend</span>
      <span className="flex items-center gap-1.5">
        <span className="inline-block w-6 h-[3px]" style={{ background: NEG_COLOR }} />
        negative r
      </span>
      <span className="flex items-center gap-1.5">
        <span className="inline-block w-6 h-[3px]" style={{ background: POS_COLOR }} />
        positive r
      </span>
      <span className="flex items-center gap-1.5">
        <span
          className="inline-block w-6"
          style={{
            borderTop: `3px dashed ${INSIG_COLOR}`,
          }}
        />
        not significant
      </span>
      <span>stroke width ∝ |r|</span>
      <span>hover a node to isolate its chords</span>
    </div>
  );
}
