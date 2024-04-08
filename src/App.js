import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet, 
} from "react-router-dom";
import Home from './pages/Home/Home'; 
import Product from './pages/Product/Product'
import SignIn from './pages/SignIn/SignIn';
import Navbar from './components/Navbar/Navbar';
const Layout = () => {
  return (
    <div className = "App">
      <Navbar/>
      <Outlet/>
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
        path: "/products/:id",
        element: <Product/>, 
      },
    ]
  },
 
]);
function App() {
  return <div>
    <RouterProvider router={router} />
  </div>
}

export default App;
