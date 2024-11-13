import { useSuspenseQuery } from '@tanstack/react-query'

import { purchaseQueries } from '@/entities/purchase'
import { timestampToISODate } from '@/shared/utils'

import { PurchaseFrequencyChartProps } from './purchase-frequency-chart.type'

function usePurchaseFrequencyChartModel({ period }: PurchaseFrequencyChartProps) {
  const from = period.from != null ? timestampToISODate(period.from) : undefined
  const to = period.to != null ? timestampToISODate(period.to) : undefined
  const { data } = useSuspenseQuery(purchaseQueries.frequencyByPriceRange({ from, to }))

  return { data }
}

export default usePurchaseFrequencyChartModel
