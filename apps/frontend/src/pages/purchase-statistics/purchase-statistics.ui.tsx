import { Suspense, useState } from 'react'

import { PeriodSelector } from '@/features/period-selector'
import { PurchaseFrequencyChart } from '@/features/purchase-frequency-chart'
import { PageErrorBoundary } from '@/shared/ui/page-error-boundary'

const PurchaseStatisticsPage: React.FC = () => {
  const [period, setPeriod] = useState<{ from: string; to: string } | null>(null)

  return (
    <main>
      <div className="mb-6 text-center">
        <h1 className="mb-3 text-lg font-semibold">가격대별 구매 빈도</h1>
        <PeriodSelector onChange={setPeriod} />
      </div>
      <PageErrorBoundary>
        <Suspense fallback={<p>로딩 중</p>}>
          <PurchaseFrequencyChart period={period} />
        </Suspense>
      </PageErrorBoundary>
    </main>
  )
}

export default PurchaseStatisticsPage
