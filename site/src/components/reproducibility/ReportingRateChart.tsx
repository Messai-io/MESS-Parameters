import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import type { CriteriaCategory } from '../../data/types';

interface ReportingRateChartProps {
  categories: Record<string, CriteriaCategory>;
}

const weightColor: Record<string, string> = {
  high: '#4A5D4E',
  medium: '#8B7355',
  low: '#9E9B97',
};

export function ReportingRateChart({ categories }: ReportingRateChartProps) {
  const data = Object.entries(categories).map(([key, val]) => ({
    name: key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (s) => s.toUpperCase())
      .trim(),
    rate: Math.round(val.averageReportingRate * 100),
    weight: val.weight,
  }));

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ left: 130, right: 20, top: 5, bottom: 5 }} layout="vertical">
          <XAxis
            type="number"
            domain={[0, 100]}
            tick={{ fontSize: 11, fontFamily: 'DM Mono' }}
            tickFormatter={(v) => `${v}%`}
          />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fontSize: 11, fontFamily: 'DM Mono' }}
            width={130}
          />
          <Tooltip
            contentStyle={{ fontFamily: 'DM Mono', fontSize: 12, border: '1px solid #e5e5e5', borderRadius: 0 }}
            formatter={(value: number) => [`${value}%`, 'Reporting Rate']}
          />
          <Bar dataKey="rate" maxBarSize={24}>
            {data.map((entry, i) => (
              <Cell key={i} fill={weightColor[entry.weight] || '#a3a3a3'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
