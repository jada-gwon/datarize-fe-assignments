import { useSuspenseQuery } from '@tanstack/react-query'

import { purchaseQueries } from '@/entities/purchase'

import { PurchaseFrequencyChartProps } from './purchase-frequency-chart.type'
import { timestampToISODate } from '@/shared/utils'

function usePurchaseFrequencyChartModel({ period }: PurchaseFrequencyChartProps) {
  const chartPeriodFrom = period.from != null ? timestampToISODate(period.from) : undefined
  const chartPeriodTo = period.to != null ? timestampToISODate(period.to) : undefined
  const { data } = useSuspenseQuery(purchaseQueries.frequencyByPriceRange({ from: chartPeriodFrom, to: chartPeriodTo }))

  return { data }
}

export default usePurchaseFrequencyChartModel