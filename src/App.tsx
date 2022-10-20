import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  return (
  <div className="grid h-screen place-items-center">
    <div className="flex">
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <h1 className="text-3xl font-bold p-8">
          {counter}
      </h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  </div>
  );
}

export default App;
