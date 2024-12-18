import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//PAGES
import MainLayout from './layouts/MainLayout.jsx';
import Login from "./pages/Login"; 
import Products from "./pages/products";

import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Products />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <ToastContainer position="bottom-right" /> */}
  </StrictMode>,
)
