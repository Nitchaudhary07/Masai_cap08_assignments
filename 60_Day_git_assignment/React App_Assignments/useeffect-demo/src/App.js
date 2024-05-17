import React, { useState, useEffect } from 'react';
import './App.css';

const FetchDataComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const result = await response.json();
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Fetched Data</h2>
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

const MouseMovementComponent = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h2>Mouse Position</h2>
      <p>X: {mousePosition.x}, Y: {mousePosition.y}</p>
    </div>
  );
};

const DocumentTitleComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h2>Document Title</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <FetchDataComponent />
      <MouseMovementComponent />
      <DocumentTitleComponent />
    </div>
  );
}

export default App;
