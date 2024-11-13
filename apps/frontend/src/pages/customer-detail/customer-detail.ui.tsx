import { Suspense } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { CustomerPurchaseHistory } from '@/features/customer-purchase-history'
import { PageErrorBoundary } from '@/shared/ui/page-error-boundary'

import IconAngleLeft from './icon-angle-left.svg?react'

const CustomerDetailPage: React.FC = () => {
  const { customerId } = useParams()
  const navigate = useNavigate()
  return (
    <main>
      <div className="mb-10">
        <h1 className="text-2xl font-bold">
          <button className="size-8 align-bottom" onClick={() => navigate(-1)}>
            <span>
              <IconAngleLeft />
            </span>
          </button>
          #{customerId}
        </h1>
      </div>
      <PageErrorBoundary>
        <Suspense fallback={<p>로딩 중</p>}>
          <CustomerPurchaseHistory customerId={parseInt(customerId!)} />
        </Suspense>
      </PageErrorBoundary>
    </main>
  )
}

export default CustomerDetailPage
