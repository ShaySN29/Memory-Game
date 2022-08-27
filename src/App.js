// import React, {useState} from 'react';
import React from 'react';
import './App.css';
// Import Components
import ShuffledCards from './Components/ShuffledCards';
import HelpButton from './Components/HelpButton';


function App() {
  
  return (
    <div className="App">
      <h1>A Memory Game Of Thrones</h1>
      <HelpButton className="Help Button" /> <br />
      <ShuffledCards />
    </div>
  );
}

export default App;
