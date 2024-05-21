import React, { useRef } from 'react';

const ChangeColorBox = () => {
  const boxRef = useRef(null);

  const handleBoxClick = () => {
    boxRef.current.style.backgroundColor = 'lightblue';
  };

  return (
    <div
      ref={boxRef}
      onClick={handleBoxClick}
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: 'lightgray',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
      }}
    >
      Click me to change color
    </div>
  );
};

export default ChangeColorBox;
