import { queryOptions } from '@tanstack/react-query'
import { getPurchaseFrequencyByPriceRange } from './purchase.api'
import { selectPurchaseFrequencyByPriceRange } from './purchase.lib'

export const queryKeys = {
  all: ['purchase'],
  frequencyByPriceRanges: () => [...queryKeys.all, 'frequencyByPriceRanges'],
  frequencyByPriceRange: (from: string | undefined, to: string | undefined) => [
    ...queryKeys.frequencyByPriceRanges(),
    { from, to },
  ],
}

export const frequencyByPriceRange = (period: { from: string | undefined; to: string | undefined }) =>
  queryOptions({
    queryKey: queryKeys.frequencyByPriceRange(period.from, period.to),
    queryFn: () => getPurchaseFrequencyByPriceRange(period),
    select: selectPurchaseFrequencyByPriceRange,
  })
