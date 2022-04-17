import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      {/* conditional rendering => if you forgot to state boolean variable than it's ture */}
      <Hello name = "react" color = "green" isSpecial/>
      <Hello color="pink"/> 
    </Wrapper>
  )
}

export default App;
