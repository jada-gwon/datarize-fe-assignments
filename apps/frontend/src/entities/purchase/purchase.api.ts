import z from 'zod'

import { requestApi } from '@/shared/requestUtils'
import { isISODateString } from '@/shared/utils'

import { isPriceRangeString } from './purchase.lib'

const purchaseFrequencyByPriceRangeRequestQuery = z
  .object({
    from: z.string().refine(isISODateString),
    to: z.string().refine(isISODateString),
  })
  .nullable()

const purchaseFrequencyByPriceRangeResponseSchema = z
  .object({
    range: z.string().refine(isPriceRangeString),
    count: z.number(),
  })
  .array()

export type PurchaseFrequencyByPriceRangeRequestQuery = z.infer<typeof purchaseFrequencyByPriceRangeRequestQuery>
export type PurchaseFrequencyByPriceRangeResponseSchema = z.infer<typeof purchaseFrequencyByPriceRangeResponseSchema>

export const getPurchaseFrequencyByPriceRange = (query: PurchaseFrequencyByPriceRangeRequestQuery) =>
  requestApi({
    request: {
      method: 'GET',
      url: '/api/purchase-frequency',
      query,
    },
    response: { schema: purchaseFrequencyByPriceRangeResponseSchema },
  })
