import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet, 
} from "react-router-dom";
import { useEffect, useState } from "react";
import Home from './pages/home/Home'; 
import Product from './pages/Product/Product'
import Cart from './pages/Cart/Cart'
import SignIn from './pages/SignIn/SignIn';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Checkout from './pages/Checkout/Checkout';
import OrderManagement from './shop/pages/OrderManagement/OrderManagement';
const Layout = () => {
  return (
    <div className = "App">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>, 
    children: [
      {path: '/', 
      element: <Home/>,  
      }, 
      {
        path: "/SignIn",
        element: <SignIn/>
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
 
]);
function App() {

  return <div>
    <RouterProvider router={router} />
  </div>
}

export default App;
