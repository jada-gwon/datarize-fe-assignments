import clsx from 'clsx'
import { Suspense, useDeferredValue, useState } from 'react'

import { CustomerList, CustomerListFallback } from '@/features/customer-list'
import { PageErrorBoundary } from '@/shared/ui/page-error-boundary'

import IconArrowDown from './icon-arrow-down.svg?react'
import IconSearch from './icon-search.svg?react'

const CustomerListPage: React.FC = () => {
  const [searchKeyword, setSearchKeyword] = useState('')
  const [sortBy, setSortBy] = useState<'' | 'asc' | 'desc'>('')
  const deferredSearchKeyword = useDeferredValue(searchKeyword)

  const toggleSortBy = () => setSortBy(sortBy === 'desc' ? 'asc' : 'desc')

  return (
    <main>
      <PageErrorBoundary>
        <div className="mb-10">
          <h1 className="text-2xl font-bold">구매 고객 목록</h1>
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
          <div className="overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full">
              <colgroup>
                <col style={{ width: '8ch' }}></col>
                <col></col>
                <col style={{ width: '8ch' }}></col>
                <col style={{ width: '160px' }}></col>
              </colgroup>
              <thead className="h-12 border-b border-slate-200 bg-slate-50">
                <tr>
                  <th>ID</th>
                  <th className="text-left">이름</th>
                  <th>구매 횟수</th>
                  <th className="cursor-pointer pr-4" onClick={toggleSortBy}>
                    총 구매 금액
                    <span
                      className={clsx(
                        'inline-block align-bottom',
                        { 'rotate-180': sortBy === 'asc' },
                        { invisible: !sortBy },
                      )}
                    >
                      <IconArrowDown />
                    </span>
                  </th>
                </tr>
              </thead>
              <Suspense fallback={<CustomerListFallback />}>
                <CustomerList searchKeyword={deferredSearchKeyword} sortBy={sortBy}></CustomerList>
              </Suspense>
            </table>
          </div>
        </div>
      </PageErrorBoundary>
    </main>
  )
}

export default CustomerListPage
