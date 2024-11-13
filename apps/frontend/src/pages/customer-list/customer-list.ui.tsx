import { Suspense, useDeferredValue, useState } from 'react'

import { CustomerList } from '@/features/customer-list'
import { PageErrorBoundary } from '@/shared/ui/page-error-boundary'

import iconSearch from './icon-search.svg'

const CustomerListPage: React.FC = () => {
  const [searchKeyword, setSearchKeyword] = useState('')
  const deferredSearchKeyword = useDeferredValue(searchKeyword)
  return (
    <main>
      <PageErrorBoundary>
        <div className="mb-10">
          <h1 className="text-xl">구매 고객 목록</h1>
        </div>
        <div>
          <div className="relative">
            <img src={iconSearch} className="absolute left-2 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              className="block w-full rounded-full border border-zinc-300 px-9 py-1"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value.trim())}
            />
          </div>
        </div>
        <Suspense fallback={<p>로딩 중</p>}>
          <CustomerList searchKeyword={deferredSearchKeyword}></CustomerList>
        </Suspense>
      </PageErrorBoundary>
    </main>
  )
}

export default CustomerListPage
