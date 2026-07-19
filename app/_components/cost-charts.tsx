'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from 'recharts'

const CurrencyTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean
  payload?: { value: number }[]
  label?: string
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-md border border-[#30363d] bg-[#161b22] px-3 py-2 text-sm shadow-xl">
        <p className="font-semibold text-[#c9d1d9]">{label}</p>
        <p className="text-[#7ee787]">${payload[0].value.toFixed(2)}</p>
      </div>
    )
  }
  return null
}

interface DataItem {
  name: string
  amount: number
  fill?: string
}

export function DailyCostChart({ data }: { data: DataItem[] }) {
  return (
    <div className="my-6 h-80 w-full rounded-lg border border-[#30363d] bg-[#0d1117] p-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ left: 24, right: 24 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#30363d"
            horizontal={false}
          />
          <XAxis
            type="number"
            stroke="#8b949e"
            tickFormatter={(v: number) => `$${v}`}
          />
          <YAxis
            type="category"
            dataKey="name"
            width={160}
            stroke="#c9d1d9"
            tick={{ fontSize: 12 }}
          />
          <Tooltip content={<CurrencyTooltip />} cursor={{ fill: '#21262d' }} />
          <Bar dataKey="amount" radius={[0, 4, 4, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill || '#58a6ff'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function ModelUsageChart({ data }: { data: DataItem[] }) {
  return (
    <div className="my-6 h-80 w-full rounded-lg border border-[#30363d] bg-[#0d1117] p-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ left: 24, right: 24 }}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#30363d"
            vertical={false}
          />
          <XAxis
            dataKey="name"
            stroke="#8b949e"
            tick={{ fontSize: 12, angle: -20, textAnchor: 'end' }}
            height={70}
          />
          <YAxis stroke="#8b949e" tickFormatter={(v: number) => `$${v}`} />
          <Tooltip content={<CurrencyTooltip />} cursor={{ fill: '#21262d' }} />
          <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  entry.name === 'Coding Agent model' ? '#f85149' : '#58a6ff'
                }
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
