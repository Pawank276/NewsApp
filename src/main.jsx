import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import NewsStore from './store/index.js'
import Home from './routes/Home.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: "/", element: <Home pageSize={8} key="general" country="in" category="general" /> },
      { path: "/sports", element: <Home pageSize={8} key="sports" country="in" category="sports" /> },
      { path: "/entertainment", element: <Home pageSize={8} key="entertainment" country="in" category="entertainment" /> },
      { path: "/business", element: <Home pageSize={8} key="business" country="in" category="business" /> },
      { path: "/science", element: <Home pageSize={8} key="science" country="in" category="science" /> },
      { path: "/health", element: <Home pageSize={8} key="health" country="in" category="health" /> },
      { path: "/technology", element: <Home pageSize={8} key="technology" country="in" category="technology" /> },
    ]
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={NewsStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
