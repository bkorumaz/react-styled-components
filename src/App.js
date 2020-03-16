import React, { useState } from 'react';
import './App.css';
import Radium from 'radium';

function App() {

  const [showIndex, setShowIndex] = useState(true);
  const [isRed, setRed] = useState(false);
  const [isBold, setBold] = useState(false);
  
  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'lightgreen',
      color: 'black'
    }
  };

  let index = null

  if(showIndex) {
    style.backgroundColor = 'red';
    style[':hover']= {
      backgroundColor: 'lightred',
      color: 'black'
    };
    index = (
      <div>
        <p className={`${isRed ? 'red' : ''} ${isBold ? 'bold' : ''}`}>This is Index</p>
        <button onClick={() => setRed(!isRed)}><div className='red'>Red</div></button><button onClick={() => setBold(!isBold)}><div className='bold'>Bold</div></button>
      </div>
      );
  }

  const handleToggleIndex = () => setShowIndex(!showIndex);
  
  return (
    <div>
      <h1>Hello World!</h1>
      <button
      style={style}
      onClick={handleToggleIndex}
      >
        Toggle the Index
      </button>
      {index}
    </div>
  );
}

export default Radium(App);
