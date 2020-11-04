import React from 'react';
import logo from './logo.svg';
import './App.css';
import Lanes from './Lanes';
import Cars from './Cars';
import Clock from './Clock';
const lanes = [1, 2, 3, 4];
const cars = [1, 2, 3, 4];

function App() {
  function handleClick(e) {
    lanes.push(7);
  }
  return (
    <div className="App">

      <div id="container">
        <Lanes />
        <Cars />
      </div>
      <Clock />
      <button onClick={handleClick}>Add Lane</button>
    </div>
  );
}

export default App;
