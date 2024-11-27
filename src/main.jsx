import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout.jsx'
import Career from './pages/Careers.jsx'
import CareerDetail from './pages/CareerDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    exact: true,
    element: <Layout/>,
    children:[
      {
        path: '/',
        element: <App />
      },
      {
        path: '/career',
        element: <Career />
      },
      {
        path: '/career/:jobRole',
        element: <CareerDetail/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
