import { Suspense } from 'react'

import { PurchaseFrequencyChart } from '@/features/purchase-frequency-chart'

import usePurchaseStatisticsModel from './purchase-statistics.model'

const PurchaseStatisticsPage: React.FC = () => {
  const { data } = usePurchaseStatisticsModel()
  return (
    <main>
      <ul>
        <Suspense fallback={<p>로딩 중</p>}>
          <PurchaseFrequencyChart period={data.chartPeriod} />
        </Suspense>
      </ul>
    </main>
  )
}

export default PurchaseStatisticsPage
