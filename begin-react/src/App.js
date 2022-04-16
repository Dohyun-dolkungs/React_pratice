import React from 'react';
import Hello from './Hello';
import './App.css';

function App() {
  const name = 'react';
  
  // style should be applied by const
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  };

  return (
    // use fragment tag<> to cover more than 2 tags
    <>
      {/* JSX grammar => always tag should be closed */}
      <Hello />
      
      {/* use values by using {} */}
      <div style={style}>{name}</div> 
      
      {/* Use className than class */}
      <div className="gray-box"></div>
    </>
  );
}

export default App;
