import React from 'react';
import TimerComponent from './components/TimerComponent'; 
import ScrollEventComponent from './components/ScrollEventComponent'; 


function App() {
  return (
    <div className="App">
      <h1>React useEffect Cleanup Example</h1>
      <TimerComponent />
      <ScrollEventComponent />
    </div>
  );
}

export default App;
