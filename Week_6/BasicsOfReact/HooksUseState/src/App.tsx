import React, { useState } from 'react'
import Form from './Components/Form'
import Card from './Components/Card'
import burger from './assets/beef-burger.avif'
import pizza from './assets/Pizza.webp'
import kofta from './assets/Moroccan Beef Kofta.jpg'



const App = () => {





  return (
    <div >


      <div className='flex gap-10 justify-center'>
        <Card recipeName='Burger' description = 'Taste The Real Burger' image = {burger} />
        <Card recipeName="Pizza" description = 'Taste From Pizza Land' image = {pizza}/>
        <Card recipeName="Moroccan B.Kofta" description = 'Desi' image = {kofta}/>

      </div>




    </div>


  )
}

export default App