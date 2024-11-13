import { useQueryErrorResetBoundary } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

const PageErrorBoundary: React.FC<PropsWithChildren> = ({ children }) => {
  const { reset } = useQueryErrorResetBoundary()
  return (
    <ErrorBoundary
      onReset={reset}
      fallbackRender={({ resetErrorBoundary }) => (
        <div className="text-center">
          <p className="mb-6 mt-72 text-lg">😢 페이지를 불러오는 도중 문제가 발생하였습니다.</p>
          <button
            className="h-9 rounded-full bg-blue-500 px-3 py-1 text-white"
            onClick={() => {
              resetErrorBoundary()
            }}
          >
            재시도
          </button>
        </div>
      )}
    >
      {children}
    </ErrorBoundary>
  )
}

export default PageErrorBoundary
