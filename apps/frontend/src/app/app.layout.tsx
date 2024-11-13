import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import { Link, Outlet } from 'react-router-dom'

import { PATH } from '@/shared/router'

import './app.style.css'

const AppLayout: React.FC = () => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={({ resetErrorBoundary }) => (
            <div>
              에러 발생
              <button onClick={resetErrorBoundary}>재시도</button>
            </div>
          )}
        >
          <aside className="fixed h-screen w-60 bg-zinc-100 px-4 py-6">
            <nav>
              <ul className="-my-1.5">
                <li>
                  <Link to={PATH.statistics.purchase.getUrl()}>
                    <div className="py-1.5">가격대별 구매 빈도</div>
                  </Link>
                </li>
                <li>
                  <Link to={PATH.customer.list.getUrl()}>
                    <div className="py-1.5">구매 고객 목록</div>
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>
          <div className="pl-60">
            <div className="px-12 py-6">
              <Outlet />
            </div>
          </div>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}

export default AppLayout
