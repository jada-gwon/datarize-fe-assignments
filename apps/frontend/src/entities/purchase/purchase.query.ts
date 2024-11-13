import { queryOptions } from '@tanstack/react-query'

import { getPurchaseFrequencyByPriceRange } from './purchase.api'
import { selectPurchaseFrequencyByPriceRange } from './purchase.lib'

export const queryKeys = {
  all: ['purchase'],
  frequencyByPriceRanges: () => [...queryKeys.all, 'frequencyByPriceRanges'],
  frequencyByPriceRange: (period: { from: string; to: string }) => [...queryKeys.frequencyByPriceRanges(), period],
}

export const frequencyByPriceRange = (period: { from: string; to: string } | null) =>
  queryOptions({
    queryKey: queryKeys.frequencyByPriceRange(period ?? { from: '', to: '' }),
    queryFn: () => getPurchaseFrequencyByPriceRange(period),
    select: selectPurchaseFrequencyByPriceRange,
  })
