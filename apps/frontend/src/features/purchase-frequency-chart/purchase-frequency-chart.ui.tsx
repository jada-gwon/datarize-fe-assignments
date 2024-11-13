import { PurchaseFrequencyChartProps } from './purchase-frequency-chart.type'
import usePurchaseFrequencyChartModel from './purchase-frequency-chart.model'

const PurchaseFrequencyChart: React.FC<PurchaseFrequencyChartProps> = ({ period }) => {
  const { data } = usePurchaseFrequencyChartModel({ period })

  return data.map(({ priceRange, count }) => (
    <li key={`${priceRange.from}-${priceRange.to}`}>
      {priceRange.from}~{priceRange.to}: {count}
    </li>
  ))
}

export default PurchaseFrequencyChart
