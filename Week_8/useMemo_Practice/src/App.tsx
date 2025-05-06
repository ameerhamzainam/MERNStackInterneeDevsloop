import React, { useState } from 'react';
import Calculation from './components/Calculation';

const App = () => {
  const [num, setNum] = useState(0); // Initial value set to 25

  const handleIncrement = () => {
    setNum(num + 1); // Increment the num value
  };

  return (
    <div>
      <h1>Current num: {num}</h1>
      <button onClick={handleIncrement}>Increment num</button>

      {/* Pass the num prop to the Calculation component */}
      <Calculation num={num} />
    </div>
  );
};

export default App;
