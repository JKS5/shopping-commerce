import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import NotFound from "./Pages/NotFound";
import Category from "./Pages/Category";
import Clothes from "./Pages/Clothes";
import ClothesDetail from "./Pages/ClothesDetail";
import Cart from "./Pages/Cart";
import Write from "./Pages/Write";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Clothes /> },
      { path: "/clothes", element: <Clothes /> },
      { path: "/clothes/men", element: <Category /> },
      { path: "/clothes/women", element: <Category /> },
      { path: "/clothes/men/:keyword", element: <Clothes /> },
      { path: "/clothes/women/:keyword", element: <Clothes /> },
      { path: "/clothes/detail/:clothesId", element: <ClothesDetail /> },
      { path: "/clothes/detail/:clothesId", element: <ClothesDetail /> },
      { path: "/user/myCart", element: <Cart /> },
      { path: "/admin/write", element: <Write /> },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
