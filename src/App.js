import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet, 
} from "react-router-dom";
import Home from './pages/Home/Home'; 
import Product from './pages/Product/Product'
import Register from './pages/Register/Register';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
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
        path: "/products",
        element: <Product/>, 
      },
    ]
  },
  {
      path: "/Register",
      element: <Register/>,
      children: [] 
  }
]);
function App() {
  return <div>
    <RouterProvider router={router} />
  </div>
}

export default App;
