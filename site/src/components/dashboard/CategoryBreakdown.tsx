import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { getCategoryCounts } from '../../data/loader';
import { categoryColors } from '../../styles/category-colors';

export function CategoryBreakdown() {
  const counts = getCategoryCounts().sort((a, b) => b.count - a.count);

  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={counts} layout="vertical" margin={{ left: 100, right: 20, top: 5, bottom: 5 }}>
          <XAxis type="number" tick={{ fontSize: 12, fontFamily: 'DM Mono' }} />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fontSize: 12, fontFamily: 'DM Mono' }}
            width={100}
          />
          <Tooltip
            contentStyle={{
              fontFamily: 'DM Mono',
              fontSize: 12,
              border: '1px solid #e5e5e5',
              borderRadius: 0,
              boxShadow: '0 2px 6px rgba(46, 41, 37, 0.15)',
            }}
            formatter={(value: number) => [value, 'Parameters']}
          />
          <Bar dataKey="count" maxBarSize={24}>
            {counts.map((entry) => (
              <Cell key={entry.id} fill={categoryColors[entry.id] || '#737373'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
