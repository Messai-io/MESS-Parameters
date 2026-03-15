import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from 'recharts';
import type { Correlation } from '../../data/types';

interface CorrelationChartProps {
  correlations: Correlation[];
}

export function CorrelationChart({ correlations }: CorrelationChartProps) {
  const data = correlations
    .map((c) => ({
      label: `${c.parameter} vs ${c.metric}`.slice(0, 40),
      r: c.pearsonR,
      absR: Math.abs(c.pearsonR),
      significant: c.strength === 'moderate' || c.strength === 'strong',
    }))
    .sort((a, b) => b.absR - a.absR);

  return (
    <div className="w-full h-96">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ left: 180, right: 20, top: 5, bottom: 5 }}>
          <XAxis
            type="number"
            domain={[-1, 1]}
            tick={{ fontSize: 11, fontFamily: 'DM Mono' }}
            tickCount={5}
          />
          <YAxis
            type="category"
            dataKey="label"
            tick={{ fontSize: 11, fontFamily: 'DM Mono' }}
            width={180}
          />
          <Tooltip
            contentStyle={{
              fontFamily: 'DM Mono',
              fontSize: 12,
              border: '1px solid #e5e5e5',
              borderRadius: 0,
            }}
            formatter={(value: number) => [value.toFixed(3), 'Pearson r']}
          />
          <ReferenceLine x={0} stroke="#d4d4d4" />
          <Bar dataKey="r" maxBarSize={20}>
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.significant ? '#5C7A5C' : '#a3a3a3'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
