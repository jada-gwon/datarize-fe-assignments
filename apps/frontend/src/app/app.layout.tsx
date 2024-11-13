import { Link, Outlet } from 'react-router-dom'

import { PATH } from '@/shared/router'

const AppLayout: React.FC = () => {
  return (
    <>
      <aside className="fixed h-screen w-48 border-r border-slate-200 bg-slate-50 px-4 py-6">
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
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default AppLayout
