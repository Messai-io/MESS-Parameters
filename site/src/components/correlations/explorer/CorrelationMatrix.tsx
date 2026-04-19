import { useMemo, useState } from 'react';
import type { PairRow, NodeMeta } from '../useCorrelationPairs';
import { nameToSlug } from '../useCorrelationPairs';
import { PairDetailPopover } from './PairDetailPopover';

interface Props {
  pairs: PairRow[];
  nodes: NodeMeta[];
}

const POS_COLOR = '#5C7A5C';
const NEG_COLOR = '#6B3E3E';
const INSIG_COLOR = '#7C7F82';

function orderNodesGreedy(nodes: NodeMeta[], pairsByKey: Map<string, PairRow>): NodeMeta[] {
  if (nodes.length <= 2) return nodes;
  const remaining = new Set(nodes.map((n) => n.id));
  const order: NodeMeta[] = [];
  const first = [...nodes].sort((a, b) => b.sumAbsR - a.sumAbsR)[0];
  order.push(first);
  remaining.delete(first.id);

  while (remaining.size > 0) {
    const last = order[order.length - 1];
    let bestId: string | null = null;
    let bestAbs = -1;
    for (const id of remaining) {
      const key = [last.id, id].sort().join('|');
      const p = pairsByKey.get(key);
      const abs = p ? Math.abs(p.pearson_r) : 0;
      if (abs > bestAbs) {
        bestAbs = abs;
        bestId = id;
      }
    }
    const picked = nodes.find((n) => n.id === bestId) ?? nodes.find((n) => remaining.has(n.id))!;
    order.push(picked);
    remaining.delete(picked.id);
  }
  return order;
}

export function CorrelationMatrix({ pairs, nodes }: Props) {
  const [hover, setHover] = useState<{ pair: PairRow; x: number; y: number } | null>(null);

  const pairsByKey = useMemo(() => {
    const m = new Map<string, PairRow>();
    for (const p of pairs) m.set([p.a_id, p.b_id].sort().join('|'), p);
    return m;
  }, [pairs]);

  const ordered = useMemo(() => orderNodesGreedy(nodes, pairsByKey), [nodes, pairsByKey]);

  if (nodes.length === 0) {
    return (
      <div className="py-12 text-center text-sm text-mes-text-muted italic">
        No pairs meet the current filters — try lowering the n threshold or the |r| minimum.
      </div>
    );
  }

  const cellSize = ordered.length > 25 ? 22 : ordered.length > 15 ? 28 : 34;
  const labelWidth = 160;
  const labelHeight = 160;
  const gridSize = ordered.length * cellSize;
  const width = labelWidth + gridSize + 20;
  const height = labelHeight + gridSize + 20;

  return (
    <div className="relative">
      <div className="overflow-x-auto">
        <svg width={width} height={height} className="font-mono text-[10px]" style={{ fontFamily: 'DM Mono' }}>
          {/* Column labels — rotated */}
          {ordered.map((n, i) => (
            <g key={`col-${n.id}`} transform={`translate(${labelWidth + i * cellSize + cellSize / 2}, ${labelHeight - 4}) rotate(-45)`}>
              <text
                textAnchor="start"
                className="fill-mes-text-secondary"
                fontSize={10}
              >
                {n.name.length > 22 ? n.name.slice(0, 21) + '…' : n.name}
              </text>
            </g>
          ))}
          {/* Row labels */}
          {ordered.map((n, i) => (
            <g key={`row-${n.id}`} transform={`translate(${labelWidth - 6}, ${labelHeight + i * cellSize + cellSize / 2 + 3})`}>
              <text textAnchor="end" className="fill-mes-text-secondary" fontSize={10}>
                {n.name.length > 22 ? n.name.slice(0, 21) + '…' : n.name}
              </text>
            </g>
          ))}
          {/* Cells */}
          {ordered.map((rowNode, r) =>
            ordered.map((colNode, c) => {
              const x = labelWidth + c * cellSize;
              const y = labelHeight + r * cellSize;
              if (r === c) {
                return (
                  <rect
                    key={`${rowNode.id}|${colNode.id}`}
                    x={x}
                    y={y}
                    width={cellSize}
                    height={cellSize}
                    fill="#f5f5f5"
                    stroke="#e5e5e5"
                  />
                );
              }
              const key = [rowNode.id, colNode.id].sort().join('|');
              const pair = pairsByKey.get(key);
              if (!pair) {
                return (
                  <rect
                    key={`${rowNode.id}|${colNode.id}`}
                    x={x}
                    y={y}
                    width={cellSize}
                    height={cellSize}
                    fill="#fff"
                    stroke="#e5e5e5"
                  />
                );
              }
              const baseColor = pair.pearson_r > 0 ? POS_COLOR : NEG_COLOR;
              const opacity = Math.max(0.15, Math.abs(pair.pearson_r));
              const fill = pair.significant ? baseColor : INSIG_COLOR;
              const cellOpacity = pair.significant ? opacity : opacity * 0.45;
              return (
                <g key={`${rowNode.id}|${colNode.id}`}>
                  <rect
                    x={x}
                    y={y}
                    width={cellSize}
                    height={cellSize}
                    fill={fill}
                    fillOpacity={cellOpacity}
                    stroke={pair.significant ? '#fff' : '#d4d4d4'}
                    strokeDasharray={pair.significant ? '0' : '2,2'}
                    onMouseEnter={(e) => setHover({ pair, x: e.clientX, y: e.clientY })}
                    onMouseMove={(e) => setHover({ pair, x: e.clientX, y: e.clientY })}
                    onMouseLeave={() => setHover(null)}
                    onClick={() => {
                      window.location.hash = `#/parameter/${nameToSlug(rowNode.name)}`;
                    }}
                    className="cursor-pointer"
                  />
                  {Math.abs(pair.pearson_r) >= 0.5 && cellSize >= 28 && (
                    <text
                      x={x + cellSize / 2}
                      y={y + cellSize / 2 + 3}
                      textAnchor="middle"
                      fontSize={9}
                      className="pointer-events-none"
                      fill={cellOpacity > 0.55 ? '#fff' : '#1a1916'}
                    >
                      {pair.pearson_r.toFixed(2)}
                    </text>
                  )}
                </g>
              );
            }),
          )}
        </svg>
      </div>
      {hover && (
        <div
          className="fixed pointer-events-none z-20"
          style={{ left: 0, top: 0, transform: `translate(${hover.x}px, ${hover.y}px)` }}
        >
          <PairDetailPopover pair={hover.pair} x={0} y={0} />
        </div>
      )}
      <MatrixLegend />
    </div>
  );
}

function MatrixLegend() {
  return (
    <div className="mt-3 flex flex-wrap items-center gap-4 text-[11px] text-mes-text-muted">
      <span className="uppercase tracking-wider text-[10px]">Legend</span>
      <span className="flex items-center gap-1.5">
        <span className="inline-block w-4 h-3" style={{ background: NEG_COLOR }} />
        negative r
      </span>
      <span className="flex items-center gap-1.5">
        <span className="inline-block w-4 h-3" style={{ background: POS_COLOR }} />
        positive r
      </span>
      <span className="flex items-center gap-1.5">
        <span
          className="inline-block w-4 h-3 border border-gray-400"
          style={{ background: INSIG_COLOR, opacity: 0.45, borderStyle: 'dashed' }}
        />
        not significant
      </span>
      <span className="flex items-center gap-1.5">
        <span className="inline-block w-4 h-3 bg-gray-100 border border-gray-300" />
        no data / self
      </span>
      <span>opacity ∝ |r|</span>
    </div>
  );
}
