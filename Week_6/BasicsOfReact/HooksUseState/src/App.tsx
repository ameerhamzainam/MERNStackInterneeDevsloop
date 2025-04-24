import React from'react';
import Form from './Components/Form';
import Card from './Components/Card';
import burger from './assets/beef-burger.avif';
import pizza from './assets/Pizza.webp';
import kofta from './assets/Moroccan Beef Kofta.jpg';
import UserData from './Components/UserData';
import useLocalStorage from './Components/useLocalStorage';

const App = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  const toggleTheme = () => {
    setTheme(theme === 'light'? 'dark' : 'light');
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${theme === 'light'? 
        'bg-white text-black' : 'bg-gray-900 text-white'} p-5`}>
      <div className="sticky top-0">
        <h2 className="text-xl mb-2">Current Theme: {theme}</h2>
        <button
          className="bg-amber-400 px-4 py-2 mb-6 rounded hover:bg-amber-500 transition"
          onClick={toggleTheme}>
          Toggle Theme
        </button>
      </div>
      <UserData />
      {/* Pass the theme prop here */}
      <Form theme={theme} />
      <div className='flex gap-10 justify-center mt-10' >
        <Card recipeName='Burger' description='Taste The Real Burger' image={burger} />
        <Card recipeName="Pizza" description='Taste From Pizza Land' image={pizza} />
        <Card recipeName="Moroccan B.Kofta" description='Desi' image={kofta} />
      </div> 
    </div>
  );
};

export default App;