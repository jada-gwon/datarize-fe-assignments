import { Suspense } from 'react'

import { PurchaseFrequencyChart } from '@/features/purchase-frequency-chart'
import { PageErrorBoundary } from '@/shared/ui/page-error-boundary'

import usePurchaseStatisticsModel from './purchase-statistics.model'

const PurchaseStatisticsPage: React.FC = () => {
  const { data } = usePurchaseStatisticsModel()
  return (
    <main>
      <PageErrorBoundary>
        <Suspense fallback={<p>로딩 중</p>}>
          <PurchaseFrequencyChart period={data.chartPeriod} />
        </Suspense>
      </PageErrorBoundary>
    </main>
  )
}

export default PurchaseStatisticsPage
