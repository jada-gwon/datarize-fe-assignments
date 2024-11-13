import { useSuspenseQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

import { customerQueries } from '@/entities/customer'
import { PATH } from '@/shared/router'

export type CustomerListProps = {
  searchKeyword: string
}

const CustomerList: React.FC<CustomerListProps> = ({ searchKeyword }) => {
  const { data } = useSuspenseQuery(customerQueries.customerList({ name: searchKeyword, sortBy: 'desc' }))
  return (
    <ul>
      {data?.map((customer) => (
        <li key={customer.id}>
          <Link to={PATH.customer.detail.getUrl(customer.id)}>{customer.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default CustomerList
