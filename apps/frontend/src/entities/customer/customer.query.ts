import { queryOptions } from '@tanstack/react-query'

import { CustomerListRequestQuery, getCustomerList, getCustomerPurchaseList } from './customer.api'

const queryKeys = {
  all: ['customer'],
  lists: () => [...queryKeys.all, 'lists'],
  list: (sortBy: string, name: string) => [...queryKeys.lists(), { sortBy, name }],
  purchaseLists: () => [...queryKeys.all, 'purchases'],
  purchaseList: (customerId: number) => [...queryKeys.purchaseLists(), { customerId }],
}

export const customerList = (query: { sortBy?: CustomerListRequestQuery['sortBy']; name?: string }) =>
  queryOptions({
    queryKey: queryKeys.list(query.sortBy ?? 'desc', query.name ?? ''),
    queryFn: () => getCustomerList(query),
  })

export const customerPurchaseHistory = (customerId: number) =>
  queryOptions({
    queryKey: queryKeys.purchaseList(customerId),
    queryFn: () => getCustomerPurchaseList(customerId),
  })
