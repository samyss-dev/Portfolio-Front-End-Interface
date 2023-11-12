import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './routes'
import { RouterProvider } from 'react-router-dom'
import { FetchProvider } from './context/FetchContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FetchProvider>
      <RouterProvider router={router} />
    </FetchProvider>
  </React.StrictMode>,
)
