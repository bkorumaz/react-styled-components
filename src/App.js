import React, { useState } from 'react';
import './App.css';

function App() {

  const [showIndex, setShowIndex] = useState(true);
  const [classes, setClasses] = useState([])
  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  let index = null

  if(showIndex) {
    style.backgroundColor = 'red';
    index = (
      <div>
        <p className={classes.join(' ')}>This is Index</p>
        <button onClick={() => setClasses([...classes, 'red'])}>Red</button><button onClick={() => setClasses([...classes, 'bold'])}>Bold</button>
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

export default App;
