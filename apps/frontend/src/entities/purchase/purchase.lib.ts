import { PurchaseFrequencyByPriceRangeResponseSchema } from './purchase.api'
import { PriceRangeString, PurchaseFrequencyByPriceRange } from './purchase.type'

export const isPriceRangeString = (str: string): str is PriceRangeString => /^\d+ - \d+$/.test(str)

export function getPriceRange(str: PriceRangeString): string {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, to] = str.split(' - ').map(Number)
  return `~${to / 10000}만 원`
}

export function selectPurchaseFrequencyByPriceRange(
  data: PurchaseFrequencyByPriceRangeResponseSchema,
): PurchaseFrequencyByPriceRange[] {
  return data.map(({ range, count }) => ({
    priceRange: getPriceRange(range),
    count,
  }))
}
