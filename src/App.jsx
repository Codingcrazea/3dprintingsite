import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import topmenu from './components/topmenu'
import Home from './pages/Home'




import './App.css'
import Login from './pages/Loginnlop'
import Signupp from './pages/Registerr'



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
    }
  ])

  return (
    <>




    <RouterProvider router = {approuter} />
 
    </>
  )
}

export default App
