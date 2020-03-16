import React, { useState } from 'react';

function App() {

  const [showIndex, setShowIndex] = useState(true);

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
    index = (<div>This is Index</div>);
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
