import React from 'react'
import { createBrowserRouter, Link } from 'react-router-dom'


const NavBar = () => {



  return (
    <div className='bg-gray-600'>
      <nav className=''>
        <ul className='flex gap-6 px-6 py-2 text-2xl text-white'>


          <Link to="/"><li className='hover:bg-amber-500 px-6 py-2 rounded-2xl'>Home</li></Link>
          <Link to="/About"><li className='hover:bg-amber-500 px-6 py-2 rounded-2xl'>About</li></Link>
          <Link to="/ContactUs"><li className='hover:bg-amber-500 px-6 py-2 rounded-2xl'>Contact Us</li></Link>
          <Link to="/Login"><li className='hover:bg-amber-500 px-6 py-2 rounded-2xl'>Login</li></Link>
          <Link to="/User"><li className='hover:bg-amber-500 px-6 py-2 rounded-2xl'>User</li></Link>



        </ul>
      </nav>
    </div>
  )
}

export default NavBar