import { useSuspenseQuery } from '@tanstack/react-query'

import { customerQueries } from '@/entities/customer'

export type CustomerPurchaseListProps = {
  customerId: number
}

const CustomerPurchaseHistory: React.FC<CustomerPurchaseListProps> = ({ customerId }) => {
  const { data } = useSuspenseQuery(customerQueries.customerPurchaseHistory(customerId))
  return (
    <>
      <div className="mb-2">
        <h1 className="text-lg font-semibold">구매 기록</h1>
      </div>
      <div className="overflow-hidden rounded-xl border border-slate-200">
        <table className="w-full">
          <colgroup>
            <col style={{ width: '16ch' }}></col>
            <col style={{ width: '96px' }}></col>
            <col></col>
            <col style={{ width: '6ch' }}></col>
            <col style={{ width: '160px' }}></col>
          </colgroup>
          <thead className="h-12 border-b border-slate-200 bg-slate-50">
            <tr>
              <th>구매 일</th>
              <th className="text-left" colSpan={2}>
                상품
              </th>
              <th>수량</th>
              <th className="pr-10">금액</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((purchaseHistory, idx) => (
              <tr key={idx} className="odd:bg-white even:bg-slate-50">
                <td className="text-center">{purchaseHistory.date}</td>
                <td>
                  <img src={purchaseHistory.imgSrc} className="my-1.5 size-20 rounded-sm object-cover" />
                </td>
                <td className="pl-4">{purchaseHistory.product}</td>
                <td className="text-center">{purchaseHistory.quantity}</td>
                <td className="pr-10 text-right">{purchaseHistory.price.toLocaleString()}원</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default CustomerPurchaseHistory
