import React, { useRef } from 'react';

const DynamicFormInputFocus = () => {
  const inputRefs = useRef([]);

  const handleFocus = (index) => {
    inputRefs.current[index].focus();
  };

  return (
    <div>
      <input ref={(el) => (inputRefs.current[0] = el)} type="text" />
      <input ref={(el) => (inputRefs.current[1] = el)} type="text" />
      <input ref={(el) => (inputRefs.current[2] = el)} type="text" />
      <button onClick={() => handleFocus(0)}>Focus Input 1</button>
      <button onClick={() => handleFocus(1)}>Focus Input 2</button>
      <button onClick={() => handleFocus(2)}>Focus Input 3</button>
    </div>
  );
};

export default DynamicFormInputFocus;
