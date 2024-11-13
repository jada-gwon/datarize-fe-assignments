import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import { Outlet } from 'react-router-dom'

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
          <Outlet />
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}

export default AppLayout
