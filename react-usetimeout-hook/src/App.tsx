import React from 'react';
import logo from './logo.svg';
import {Settimeout} from './Settimeout'

function App() {

  const ready = Settimeout(5000)
  return (
    <div  className="app">
      <h1>{ready ? "ready":"not ready"}</h1>
       
    </div>
  );
}

export default App;
