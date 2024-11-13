import { useQueryErrorResetBoundary } from '@tanstack/react-query'
import { isAxiosError } from 'axios'
import { Suspense, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { PeriodSelector } from '@/features/period-selector'
import { PurchaseFrequencyChart } from '@/features/purchase-frequency-chart'
import { PageErrorBoundary } from '@/shared/ui/page-error-boundary'

const PurchaseStatisticsPage: React.FC = () => {
  const [period, setPeriod] = useState<{ from: string; to: string } | null>(null)

  return (
    <main>
      <PageErrorBoundary>
        <div className="mb-6 text-center">
          <h1 className="mb-3 text-lg font-semibold">가격대별 구매 빈도</h1>
          <PeriodSelector onChange={setPeriod} />
        </div>
        <div className="mx-auto aspect-[3/2] w-4/5">
          <ChartErrorBoundary>
            <Suspense fallback={<p>로딩 중</p>}>
              <PurchaseFrequencyChart period={period} />
            </Suspense>
          </ChartErrorBoundary>
        </div>
      </PageErrorBoundary>
    </main>
  )
}

const ChartErrorBoundary: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { reset } = useQueryErrorResetBoundary()
  const renderErrorMessage = (error: unknown) => {
    if (isAxiosError(error)) {
      if (error.response?.status === 404) {
        return '데이터가 없습니다.'
      }
      if (error.response?.status === 500) {
        return '서버 오류가 발생하였습니다.'
      }
      if (error.response?.data?.error != null) {
        return error.response.data.error
      }
      return '네트워크 오류가 발생하였습니다.'
    }
    return '차트를 불러오는 도중 문제가 발생하였습니다.'
  }
  return (
    <ErrorBoundary
      onReset={reset}
      fallbackRender={({ error, resetErrorBoundary }) => (
        <div>
          {renderErrorMessage(error)}{' '}
          <button onClick={resetErrorBoundary} className="text-blue-400 underline">
            재시도
          </button>
        </div>
      )}
    >
      {children}
    </ErrorBoundary>
  )
}

export default PurchaseStatisticsPage
