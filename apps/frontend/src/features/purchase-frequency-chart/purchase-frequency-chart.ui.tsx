import { useSuspenseQuery } from '@tanstack/react-query'
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, Bar, LabelList } from 'recharts'

import { purchaseQueries } from '@/entities/purchase'

export type PurchaseFrequencyChartProps = {
  period: {
    from: string
    to: string
  } | null
}

const PurchaseFrequencyChart: React.FC<PurchaseFrequencyChartProps> = ({ period }) => {
  const { data } = useSuspenseQuery(purchaseQueries.frequencyByPriceRange(period))
  return (
    <ResponsiveContainer>
      <BarChart data={data} barCategoryGap="20%">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="priceRange" tickLine={false} tick={{ fontSize: 14 }} />
        <Bar dataKey="count" className="fill-blue-500" radius={[4, 4, 0, 0]}>
          <LabelList
            dataKey="count"
            position="top"
            style={{ fontSize: 12 }}
            formatter={(v: number) => (v === 0 ? null : v)}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

export default PurchaseFrequencyChart
