import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Declaring a component
interface CardProps {
  title: string;
}

const Card = ({ title }: CardProps) => {
  const [count,setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  useEffect(()=>{
    console.log(`${title} has been liked: ${hasLiked}`)
  },[hasLiked])


  return (
    // recomended method insted of using only count + 1
    
    <div className="card" onClick={ ()=> setCount( (prevState)=> prevState + 1 )}>  
      <h2>{title} - {count} </h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? '💘' : '💖'}
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="card-container">
      <Card title="The Lion King" />
      <Card title="Avatar" />
      <Card title="Titanic" />
    </div>
  );
};

export default App;