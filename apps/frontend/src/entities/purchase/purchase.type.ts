export type PriceRangeString = `${number} - ${number}`

export type PurchaseFrequencyByPriceRange = {
  priceRange: string
  count: number
}
