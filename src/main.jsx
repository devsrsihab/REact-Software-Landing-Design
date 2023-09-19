import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Views/Home/Home.jsx";
import Price from "./Components/Price/Price.jsx";
import Blogs from "./Components/Blogs/Blogs.jsx";
import Target from "./Components/Target/Target.jsx";
import SingleBlog from "./Components/Blogs/SingleBlog";
import Banner from "./Components/Banner/Banner";
import NotFound from "./Components/NotFound/NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/price",
        element: <Price />,
      },
      {
        path: "/banner",
        element: <Banner />,
      },
      {
        path: "/target",
        element: <Target />,
      },
      {
        path: "/blogs",
        loader: () => fetch("http://localhost:3004/blogs"),
        element: <Blogs />,
      },
      {
        path: "blog/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3004/blogs/${params.id}`),
        element: <SingleBlog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
