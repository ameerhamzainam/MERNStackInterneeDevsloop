import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import ContactUs from './components/ContactUs'
import Login from './components/Login'
import User from './components/User'


function App() {
  
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><NavBar/><Home/></>
    },
    {
      path:"/About",
      element:<><NavBar/><About/></>
    },
    {
      path:"/ContactUs",
      element:<><NavBar/><ContactUs/></>
    },
    {
      path:"/Login",
      element:<><NavBar/><Login/></>
    },
    {
      path:"/User/:username",
      element:<><NavBar/><User/></>
    },
   
  ])

  return (
    <div className=''>
      
    <RouterProvider router={router}/>


    </div>
  )
}

export default App
