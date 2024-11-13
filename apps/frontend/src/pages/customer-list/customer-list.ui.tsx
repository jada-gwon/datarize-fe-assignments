import { Suspense, useDeferredValue, useState } from 'react'

import { CustomerList } from '@/features/customer-list'
import { PageErrorBoundary } from '@/shared/ui/page-error-boundary'

import IconSearch from './icon-search.svg?react'

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
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">
              <IconSearch />
            </span>
            <input
              type="text"
              className="block w-full rounded-full border border-zinc-300 py-1.5 pl-10 pr-4"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value.trim())}
            />
          </div>
        </div>
        <div className="mt-6">
          <Suspense fallback={<p>로딩 중</p>}>
            <CustomerList searchKeyword={deferredSearchKeyword}></CustomerList>
          </Suspense>
        </div>
      </PageErrorBoundary>
    </main>
  )
}

export default CustomerListPage
