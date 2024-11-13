import { PurchaseFrequencyByPriceRangeResponseSchema } from './purchase.api'
import { PriceRangeString, PurchaseFrequencyByPriceRange } from './purchase.type'

export const isPriceRangeString = (str: string): str is PriceRangeString => /^\d+ - \d+$/.test(str)

export function getPriceRange(str: PriceRangeString): { from: number; to: number } {
  const [from, to] = str.split(' - ').map(Number)
  return { from, to }
}

export function selectPurchaseFrequencyByPriceRange(
  data: PurchaseFrequencyByPriceRangeResponseSchema,
): PurchaseFrequencyByPriceRange[] {
  return data.map(({ range, count }) => ({
    priceRange: getPriceRange(range),
    count,
  }))
}
