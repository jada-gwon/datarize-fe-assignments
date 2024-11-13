import { useSuspenseQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import { customerQueries } from '@/entities/customer'
import { PATH } from '@/shared/router'

export type CustomerListProps = {
  sortBy: '' | 'asc' | 'desc'
  searchKeyword: string
}

const CustomerList: React.FC<CustomerListProps> = ({ searchKeyword, sortBy }) => {
  const navigate = useNavigate()
  const { data } = useSuspenseQuery(customerQueries.customerList({ name: searchKeyword, sortBy }))

  return (
    <tbody>
      {data?.map((customer) => (
        <tr
          key={customer.id}
          className="h-12 cursor-pointer odd:bg-white even:bg-slate-50"
          tabIndex={1}
          onClick={() => {
            navigate(PATH.customer.detail.getUrl(customer.id))
          }}
        >
          <td className="text-center">{customer.id}</td>
          <td>{customer.name}</td>
          <td className="text-center">{customer.count}</td>
          <td className="pr-4 text-right">{customer.totalAmount.toLocaleString()}원</td>
        </tr>
      ))}
    </tbody>
  )
}

export const CustomerListFallback: React.FC = () => {
  return (
    <tbody>
      <tr className="h-12">
        <td className="text-center" colSpan={4}>
          로딩 중
        </td>
      </tr>
    </tbody>
  )
}

export default CustomerList
