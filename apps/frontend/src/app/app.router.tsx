import { createBrowserRouter, Navigate } from 'react-router-dom'

import { CustomerDetailPage } from '@/pages/customer-detail'
import { CustomerListPage } from '@/pages/customer-list'
import { PurchaseStatisticsPage } from '@/pages/purchase-statistics'
import { PATH } from '@/shared/router'

import AppLayout from './app.layout'

const router = createBrowserRouter([
  {
    path: PATH.root,
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate replace to={PATH.statistics.purchase.getUrl()} />,
      },
      {
        path: PATH.statistics.purchase.path(),
        element: <PurchaseStatisticsPage />,
      },
      {
        path: PATH.customer.list.path(),
        element: <CustomerListPage />,
      },
      {
        path: PATH.customer.detail.path(),
        element: <CustomerDetailPage />,
      },
    ],
  },
])

export default router
