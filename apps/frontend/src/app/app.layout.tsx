import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import { Link, Outlet } from 'react-router-dom'

import { PATH } from '@/shared/router'

import './app.style.css'

const AppLayout: React.FC = () => {
  return (
    <>
      <aside className="fixed h-screen w-48 bg-zinc-100 px-4 py-6">
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
      <div className="pl-48">
        <div className="container px-12 py-6">
          <QueryErrorResetBoundary>
            {({ reset }) => (
              <ErrorBoundary
                onReset={reset}
                fallbackRender={({ resetErrorBoundary }) => (
                  <div className="text-center">
                    <p className="mb-6 mt-72 text-lg">😢 페이지를 불러오는 도중 문제가 발생하였습니다.</p>
                    <button className="rounded-sm bg-blue-500 px-3 py-1 text-white" onClick={resetErrorBoundary}>
                      재시도
                    </button>
                  </div>
                )}
              >
                <Outlet />
              </ErrorBoundary>
            )}
          </QueryErrorResetBoundary>
        </div>
      </div>
    </>
  )
}

export default AppLayout
