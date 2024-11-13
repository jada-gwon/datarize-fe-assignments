export type PriceRangeString = `${number} - ${number}`

export type PurchaseFrequencyByPriceRange = {
  priceRange: { from: number; to: number }
  count: number
}
