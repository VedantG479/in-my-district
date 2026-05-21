import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import LandingPage from './pages/LandingPage.jsx'

const router = createBrowserRouter([
  {
    path: '/', 
    element: <LandingPage/>
  }, 
  {
    path: '/home', 
    element: <HomePage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>,
)
