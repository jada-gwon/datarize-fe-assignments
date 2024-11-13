import { Suspense } from 'react'

import { CustomerList } from '@/features/customer-list'
import { PageErrorBoundary } from '@/shared/ui/page-error-boundary'

const CustomerListPage: React.FC = () => {
  return (
    <main>
      <PageErrorBoundary>
        <Suspense fallback={<p>로딩 중</p>}>
          <CustomerList searchKeyword=""></CustomerList>
        </Suspense>
      </PageErrorBoundary>
    </main>
  )
}

export default CustomerListPage
