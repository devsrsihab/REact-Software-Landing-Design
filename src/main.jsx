import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Views/Home/Home.jsx";
import Price from "./Components/Price/Price.jsx";
import Blogs from "./Components/Blogs/Blogs.jsx";
import Target from "./Components/Target/Target.jsx";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    children: [
      {
        path: '/price',
        element: <Price/>
      },
      {
        path: '/target',
        element: <Target/>
      },
      {
        path: '/blogs',
        element: <Blogs/>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
