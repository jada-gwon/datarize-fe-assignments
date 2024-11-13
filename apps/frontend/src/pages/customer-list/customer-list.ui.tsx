import { Suspense } from 'react'

import { CustomerList } from '@/features/customer-list'

const CustomerListPage: React.FC = () => {
  return (
    <main>
      <Suspense fallback={<p>로딩 중</p>}>
        <CustomerList searchKeyword=""></CustomerList>
      </Suspense>
    </main>
  )
}

export default CustomerListPage
