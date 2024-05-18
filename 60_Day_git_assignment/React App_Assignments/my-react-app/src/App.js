import React from 'react';
import './App.css';
import './Counter.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <marquee  direction="right">Hello! Welcome to My Counter App...</marquee>
        <Counter />
      </header>
    </div>
  );
}

export default App;
