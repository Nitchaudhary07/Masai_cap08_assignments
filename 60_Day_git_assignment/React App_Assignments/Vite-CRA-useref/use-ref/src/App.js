import React from 'react';
import AutoFocusInput from './Components/AutoFocusInput';
import UncontrolledInput from './Components/UncontrolledInput';
import ChangeColorBox from './Components/ChangeColorBox';

const App = () => {
  return (
    <div>
      <h1>useRef Hook Examples</h1>
      <AutoFocusInput />
      <UncontrolledInput />
      <ChangeColorBox />
    </div>
  );
};

export default App;
