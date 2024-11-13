import z from 'zod'

import { requestApi } from '@/shared/requestUtils'

/**
 * 주문 고객 목록 조회
 */
const customerListRequestQuery = z.object({
  sortBy: z.enum(['asc', 'desc']).optional(),
  name: z.string().optional(),
})
const customerListResponseSchema = z
  .object({
    id: z.number(),
    name: z.string(),
    count: z.number(),
    totalAmount: z.number(),
  })
  .array()

export type CustomerListRequestQuery = z.infer<typeof customerListRequestQuery>
export type CustomerListResponseSchema = z.infer<typeof customerListResponseSchema>

export const getCustomerList = (query: CustomerListRequestQuery) => {
  return requestApi({
    request: {
      method: 'GET',
      url: '/api/customers',
      query,
    },
    response: { schema: customerListResponseSchema },
  })
}

/**
 * 고객 구매 상품 조회
 */
const customerPurchaseListResponseSchema = z
  .object({
    date: z.string(),
    quantity: z.number(),
    product: z.string(),
    price: z.number(),
    imgSrc: z.string(),
  })
  .array()

export const getCustomerPurchaseList = (customerId: number) => {
  return requestApi({
    request: {
      method: 'GET',
      url: `/api/customers/${customerId}/purchases`,
      query: {},
    },
    response: { schema: customerPurchaseListResponseSchema },
  })
}
