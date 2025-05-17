import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import topmenu from './components/topmenu'
import Home from './pages/Home'




import './App.css'
import Login from './pages/Loginnlop'
import Signupp from './pages/Registerr'
import ProductDetail from './components/roductDetail'
import About from "./components/Aboutusoage";
import Contactus3dhub from "./components/Contactuspage";
import Privacy from "./pages/PrivacyPolicy";

function App() {
  const [count, setCount] = useState(0);





  const approuter = createBrowserRouter([
    
    {
      path: "/",
      element:<Home/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/register3dp",
      element: <Signupp/>
    },
    {
      path:"/product_detail",
      element:<ProductDetail/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/contact3dhub",
      element:<Contactus3dhub/>
    },
    {
      path:"/privacy",
      element:<Privacy/>
    }
  ])

  return (
    <>




    <RouterProvider router = {approuter} />
 
    </>
  )
}

export default App
