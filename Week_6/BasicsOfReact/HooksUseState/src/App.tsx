import React, { useState } from 'react'
import Form from './Components/Form'
import Card from './Components/Card'
import burger from './assets/beef-burger.avif'
import pizza from './assets/Pizza.webp'
import kofta from './assets/Moroccan Beef Kofta.jpg'
import UserData from './Components/UserData'
import useLocalStorage from './Components/useLocalStorage'


const App = () => {


  const [theme, setTheme] = useLocalStorage('theme', 'light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#222', color: theme === 'light' ? '#000' : '#fff', padding: 20 }}>
      <h2>Current Theme: {theme}</h2>
      <button className= 'bg-amber-400 px-4 py-2 mb-2 rounded'onClick={toggleTheme}>Toggle Theme</button>
      <UserData />
      <UserData />
      <UserData />
      <UserData />


    </div>
  );

}

{/* <div className='flex gap-10 justify-center'>
        <Card recipeName='Burger' description='Taste The Real Burger' image={burger} />
        <Card recipeName="Pizza" description='Taste From Pizza Land' image={pizza} />
        <Card recipeName="Moroccan B.Kofta" description='Desi' image={kofta} />
      </div> */}





export default App