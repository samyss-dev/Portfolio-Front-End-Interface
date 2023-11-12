import { Home } from './pages/Home'
import { Work } from './pages/Work'
import { Contact } from './pages/Contact'
import { NotFound } from './pages/NotFound'
import { Default } from './layout/Default'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/work',
        element: <Work />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
])
