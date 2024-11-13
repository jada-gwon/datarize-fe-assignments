import { createBrowserRouter, Navigate } from 'react-router-dom'

import { PATH } from '@/shared/router'
import { PurchaseStatisticsPage } from '@/pages/purchase-statistics'
import { CustomerList } from '@/pages/customer-list'
import { CustomerDetail } from '@/pages/customer-detail'

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
        element: <CustomerList />,
      },
      {
        path: PATH.customer.detail.path(),
        element: <CustomerDetail />,
      },
    ],
  },
])

export default router
