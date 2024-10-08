import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect} from "react";
import { useLocation} from "react-router-dom";


import Home from './pages/home/Home';
import Product from './pages/Product/Product'
import Cart from './pages/Cart/Cart'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Checkout from './pages/Checkout/Checkout';
import OrderManagement from './shop/pages/OrderManagement/OrderManagement';
import ProductManagement from "./shop/pages/ProductManagement/ProductManagement";
import AccountManagement from "./shop/pages/AccountManagement/AccountManagement";
import { EditAccount } from "./shop/pages/EditAccount/EditAccount";
import { EditProduct } from "./shop/pages/EditProduct/EditProduct";
import { EditOrder } from "./shop/pages/EditOrder/EditOrder";
import AuthenSide from './components/AuthenSide/AuthenSide'
import SignIn from './pages/SignIn/SignIn'
import Register from './pages/Register/Register'
// import ResetPassword from './pages/ResetPassword/ResetPassword'
// import ResetPassword1 from './pages/ResetPassword/ResetPassword1'
// import ResetPassword2 from './pages/ResetPassword/ResetPassword2'
import SearchByImage from './pages/SearchByImage/SearchByImage'
import Sidebar from './user/components/Sidebar/Sidebar';
import BillingInfo from './user/pages/BillingInfo/BillingInfo';
import UserInfo from './user/pages/UserInfo/UserInfo';
import UserOrders from './user/pages/Orders/UserOrders';
import ChangePass from './user/pages/ChangePass/ChangePass';
import DetectTracking from './data-scientist/pages/DetectTracking/DetectTracking';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat',
    ].join(','),
  },
});

const Layout = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const UserLayout = () => {
  return (
    <div>
      <Navbar />
      <div className = "UserContainer">
      <Sidebar/>
      <Outlet/>
      </div>
      <Footer/>
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
      { path: "/", element: <Home /> },
      {
        path: "/products/:productId",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/shop",
        element: <OrderManagement />,
      },
      {
        path: "/shop/orders",
        element: <OrderManagement />,
      },
      {
        path: "/shop/products",
        element: <ProductManagement />,
      },
      {
        path: "/shop/accounts",
        element: <AccountManagement/>, 
      },
      {
        path: "/shop/accounts/:accountId",
        element: <EditAccount/>, 
      },
      {
        path: "/shop/products/:productId",
        element: <EditProduct/>, 
      },
      {
        path: "/shop/orders/:orderId",
        element: <EditOrder/>, 
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
      // {
      //   path: "/ResetPassword",
      //   element: <ResetPassword />,
      // }, {
      //   path: "/ResetPassword1",
      //   element: <ResetPassword1 />,
      // }, {
      //   path: "/ResetPassword2",
      //   element: <ResetPassword2 />,
      // },
    ]
  }, 
  {
      path: "/SearchByImage",
      element: <SearchByImage />,
  }, 
  {
    path: "/data-scientist",
    element: <DetectTracking/>, 
  },
  {
    element: <UserLayout />,
    children: [
      {
        path: "/user/info",
        element: <UserInfo />,
      }, 
      {
        path: "/user/changePwd",
        element: <ChangePass/>,
      }, 
      {
        path: "/user/orders",
        element: <UserOrders />,
      },
      {
        path: "/user/billing",
        element: <BillingInfo />,
      }
    ]
  }
]);
function App() {


  return <div>
      <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
    </ThemeProvider>
  </div>
}

export default App;
