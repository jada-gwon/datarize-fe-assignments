import { useSuspenseQuery } from '@tanstack/react-query'

import { customerQueries } from '@/entities/customer'

export type CustomerPurchaseListProps = {
  customerId: number
}

const CustomerPurchaseList: React.FC<CustomerPurchaseListProps> = ({ customerId }) => {
  const { data } = useSuspenseQuery(customerQueries.customerPurchaseList(customerId))
  return (
    <ul>
      {data?.map(({ product }, idx) => (
        <li key={idx}>{product}</li>
      ))}
    </ul>
  )
}

export default CustomerPurchaseList
