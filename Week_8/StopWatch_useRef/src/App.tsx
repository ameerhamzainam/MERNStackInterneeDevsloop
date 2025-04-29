import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StopWatch from './components/StopWatch'

function App() {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLButtonElement>(null);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked && ref.current) {
      ref.current.style.backgroundColor = "red";
      ref.current.style.borderRadius = "10px";

    }
  }, [clicked]);


  return (
    <div className='flex items-center flex-col'>

      <h1 className='text-4xl text-white'>useRef Hook</h1>
      <StopWatch>

      </StopWatch>
      <div className="card">
        <button className='px-6 py-1 bg-white rounded-2xl text-2xl' ref={ref} onClick={() => {
          setCount(count + 1);
          setClicked(true)
        }}>
          count is {count}
        </button>
        
      </div>
    </div>
  )
}

export default App
