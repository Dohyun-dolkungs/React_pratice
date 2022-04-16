import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name = "react" color = "green"/>
      <Hello color="pink"/> 
    </Wrapper>
  )
}

export default App;
