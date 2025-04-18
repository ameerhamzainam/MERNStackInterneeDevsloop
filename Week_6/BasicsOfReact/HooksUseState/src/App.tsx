import React, { useState } from 'react'
import Form from './Components/Form'
import Card from './Components/Card'
import burger from './assets/beef-burger.avif'
import pizza from './assets/Pizza.webp'
import kofta from './assets/Moroccan Beef Kofta.jpg'
import UserData from './Components/UserData'

const App = () => {





  return (
    <div >

      {/* I have already made Components of Card and Form and if you want to mount them in the App component you can do it like this:
      you can use thier components. */}





<UserData/>










      {/* <div className='flex gap-10 justify-center'>
        <Card recipeName='Burger' description='Taste The Real Burger' image={burger} />
        <Card recipeName="Pizza" description='Taste From Pizza Land' image={pizza} />
        <Card recipeName="Moroccan B.Kofta" description='Desi' image={kofta} />
      </div> */}




    </div>


  )
}

export default App