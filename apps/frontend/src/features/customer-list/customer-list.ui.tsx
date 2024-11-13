import { useSuspenseQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import { customerQueries } from '@/entities/customer'
import { PATH } from '@/shared/router'

export type CustomerListProps = {
  searchKeyword: string
}

const CustomerList: React.FC<CustomerListProps> = ({ searchKeyword }) => {
  const { data } = useSuspenseQuery(customerQueries.customerList({ name: searchKeyword, sortBy: 'desc' }))
  const navigate = useNavigate()
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200">
      <table className="w-full">
        <colgroup>
          <col style={{ width: '8ch' }}></col>
          <col></col>
          <col style={{ width: '8ch' }}></col>
          <col style={{ width: '200px' }}></col>
        </colgroup>
        <thead className="h-12 border-b border-slate-200 bg-slate-50">
          <tr>
            <th>ID</th>
            <th className="text-left">이름</th>
            <th>구매 횟수</th>
            <th className="pr-10">총 구매 금액</th>
          </tr>
        </thead>
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
              <td className="pr-10 text-right">{customer.totalAmount.toLocaleString()}원</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CustomerList
