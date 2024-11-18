import { lazy } from "react";
import App from "../App";
import Home from "../pages/home/Home";
import { createBrowserRouter } from "react-router-dom";
import SuspenseWrapper from "../components/suspense-wapper";
import Checkout from "../pages/books/Checkout";

const Login = lazy(() => import("../pages/auth/Login"));
const Register = lazy(() => import("../pages/auth/Register"));
const Cart = lazy(() => import("../pages/books/Cart"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/orders", element: <h1>orders page</h1> },
      { path: "/orders", element: <h1>orders page</h1> },
      { path: "/about", element: <h1>about page</h1> },
      {
        path: "/login",
        element: (
          <SuspenseWrapper>
            <Login />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/register",
        element: (
          <SuspenseWrapper>
            <Register />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/cart",
        element: (
          <SuspenseWrapper>
            <Cart />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/checkout",
        element: (
          <SuspenseWrapper>
            <Checkout />
          </SuspenseWrapper>
        ),
      },
    ],
  },
]);

export default router;
