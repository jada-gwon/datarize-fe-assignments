import { Suspense } from 'react'
import { useParams } from 'react-router-dom'

import { CustomerPurchaseList } from '@/features/customer-purchase-list'

const CustomerDetailPage: React.FC = () => {
  const { customerId } = useParams()
  return (
    <main>
      <Suspense fallback={<p>로딩 중</p>}>
        <CustomerPurchaseList customerId={parseInt(customerId!)} />
      </Suspense>
    </main>
  )
}

export default CustomerDetailPage
