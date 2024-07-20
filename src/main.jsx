import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import {routes} from "./router/AllRouter.jsx"
import './index.css'

const router = createBrowserRouter(routes,
  {
    basename: '/New-Edu',
  });


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
