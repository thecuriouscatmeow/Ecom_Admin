import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";

import './index.css'
import App from './App.jsx'

// const router = createBrowserRouter([
//     {
//       element: <MainLayout />,
//       children: [
//         {
//           path: "/",
//           element: <Dashboard />,
//         },
//         {
//           path: "/products",
//           element: <PostListPage />,
//         },
//         {
//           path: "/:slug",
//           element: <SinglePostPage />,
//         },
//         {
//           path: "/write",
//           element: <Write />,
//         },
//         {
//           path: "/login",
//           element: <LoginPage />,
//         },
//         {
//           path: "/register",
//           element: <RegisterPage />,
//         },
//       ],
//     },
//   ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <App />
    </Router>
    {/* <RouterProvider router={router} />
    <ToastContainer position="bottom-right" /> */}
  </StrictMode>,
)
