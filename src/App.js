import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet, 
} from "react-router-dom";
import Home from './pages/Home/Home'; 
import Product from './pages/Product/Product'
import SearchByImage from './pages/SearchByImage/SearchByImage';
import Navbar from './components/Navbar/Navbar';
const Layout = () => {
  return (
    <div className = "app">
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
        path: "/products/:id",
        element: <SearchByImage/>
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
