import { Suspense } from 'react'
import { useParams } from 'react-router-dom'

import { CustomerPurchaseList } from '@/features/customer-purchase-list'
import { PageErrorBoundary } from '@/shared/ui/page-error-boundary'

const CustomerDetailPage: React.FC = () => {
  const { customerId } = useParams()
  return (
    <main>
      <PageErrorBoundary>
        <Suspense fallback={<p>로딩 중</p>}>
          <CustomerPurchaseList customerId={parseInt(customerId!)} />
        </Suspense>
      </PageErrorBoundary>
    </main>
  )
}

export default CustomerDetailPage
