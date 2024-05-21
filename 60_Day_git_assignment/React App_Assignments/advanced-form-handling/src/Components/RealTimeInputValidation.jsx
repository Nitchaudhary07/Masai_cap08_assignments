import React, { useRef, useState } from 'react';

const RealTimeInputValidation = () => {
  const inputRef = useRef(null);
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const inputValue = inputRef.current.value;
    if (inputValue.length >= 3) {
      console.log('Form submitted with value:', inputValue);
    } else {
      setIsValid(false); 
    }
  };

  const handleChange = () => {
    const inputValue = inputRef.current.value;
    setIsValid(inputValue.length >= 3);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" onChange={handleChange} />
        {!isValid && <p style={{ color: 'red' }}>Input must be at least 3 characters long.</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RealTimeInputValidation;

