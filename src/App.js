import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Home from './pages/Home/Home';
import Product from './pages/Product/Product'
import Cart from './pages/Cart/Cart'
import SignIn from './pages/SignIn/SignIn';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Checkout from './pages/Checkout/Checkout';
import OrderManagement from './shop/pages/OrderManagement/OrderManagement';
import AuthenSide from './components/AuthenSide/AuthenSide'
import SignIn from './pages/SignIn/SignIn'
import ResetPassword from './pages/ResetPassword/ResetPassword'
import ResetPassword1 from './pages/ResetPassword/ResetPassword1'
import ResetPassword2 from './pages/ResetPassword/ResetPassword2'
import SearchByImageFound from './pages/SearchByImage/SearchByImageFound'
const Layout = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const AuthenLayout = () => {
  return (
    <div className="AuthenContainer">
      <AuthenSide />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: "/products",
        element: <Product/>, 
      },
      {
        path: "/cart",
        element: <Cart/>, 
      },
      {
        path: "/checkout",
        element: <Checkout/>, 
      },
      {
        path: "/shop",
        element: <OrderManagement/>, 
      },
      {
        path: "/shop/orders",
        element: <OrderManagement/>, 
      },
      {
        path: "/shop/products",
        element: <OrderManagement/>, 
      },
      {
        path: "/shop/accounts",
        element: <OrderManagement/>, 
      }
    ]
  },

  {
    element: <AuthenLayout />,
    children: [
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/SignIn",
        element: <SignIn />,
      },
      {
        path: "/ResetPassword",
        element: <ResetPassword />,
      }, {
        path: "/ResetPassword1",
        element: <ResetPassword1 />,
      }, {
        path: "/ResetPassword2",
        element: <ResetPassword2 />,
      },
    ]
  }, 
  {
      path: "/SearchByImageFound",
      element: <SearchByImageFound />,
  }
]);
function App() {

  return <div>
    <RouterProvider router={router} />
  </div>
}

export default App;
