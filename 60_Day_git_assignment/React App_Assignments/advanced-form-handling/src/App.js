import React from 'react';
import './App.css'; 


import DynamicFormInputFocus from './Components/DynamicFormInputFocus';
import RealTimeInputValidation from './Components/RealTimeInputValidation';

const App = () => {
  return (
    <div className="App">
      <h1>Dynamic Form Input Focus Example</h1>
      <DynamicFormInputFocus />

      <h1>Real-time Input Validation Example</h1>
      <RealTimeInputValidation />
    </div>
  );
};

export default App;
