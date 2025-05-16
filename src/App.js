import React, { useState } from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState(0);

  function inc() {
    setNum(num + 1);
  }

  function dec() {
    if(num > 0){
      setNum(num - 1);
    }
  }

  function reset() {
    setNum(0);
  }

  return (
    <div className="main-container">
      <h1>Counter App 🔥</h1>
      <div className="counter-circle">
        {num}
      </div>
      <div className="button-group">
        <button className="btn inc" onClick={inc}>+</button>
        <button className="btn dec" onClick={dec}>-</button>
        <button className="btn reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
