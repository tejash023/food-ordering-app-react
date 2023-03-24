import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";

import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import { ShimmerBlock } from "./components/Shimmer";
import RestaurantDetails from "./components/RestaurantDetails";
import { Provider } from "react-redux";
import store from "./utils/store";

//lazy load about component
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  return (
    <Provider store={store}>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<ShimmerBlock />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
