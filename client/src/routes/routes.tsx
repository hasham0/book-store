import App from "../App";
import { lazy } from "react";
import Home from "../pages/home/Home";
import { createBrowserRouter } from "react-router-dom";
import SuspenseWrapper from "../components/suspense-wapper";

// lazy imports
const Login = lazy(() => import("../pages/auth/Login"));
const Register = lazy(() => import("../pages/auth/Register"));
const Cart = lazy(() => import("../pages/books/Cart"));
const DynamicBook = lazy(() => import("../pages/books/Dynamic-Book"));
const Checkout = lazy(() => import("../pages/books/Checkout"));

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
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
        path: "/books/:id",
        element: (
          <SuspenseWrapper>
            <DynamicBook />
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

export default Router;
