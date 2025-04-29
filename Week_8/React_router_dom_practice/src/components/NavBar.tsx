import React from 'react'

const NavBar = () => {
  return (
    <div className='bg-gray-600'>
        <nav className=''>
          <ul className='flex gap-6 px-6 py-2 text-2xl text-white'>
            <li className='hover:bg-amber-500 px-6 py-2 rounded-2xl'>Home</li>
            <li className='hover:bg-amber-500 px-6 py-2 rounded-2xl'>About</li>
            <li className='hover:bg-amber-500 px-6 py-2 rounded-2xl'>Contact Us</li>
            <li className='hover:bg-amber-500 px-6 py-2 rounded-2xl'>Login</li>
          </ul>
        </nav>
    </div>
  )
}

export default NavBar