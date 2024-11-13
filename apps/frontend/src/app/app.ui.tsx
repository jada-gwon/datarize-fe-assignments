import { RouterProvider } from 'react-router-dom'

import router from './app.router'

import './app.style.css'

const App: React.FC = () => {
  return (
    <>
      <h1 className="flex p-4 text-teal-500">jada-gwon/datarize-fe-assignments</h1>
      <RouterProvider router={router} />
    </>
  )
}

export default App
