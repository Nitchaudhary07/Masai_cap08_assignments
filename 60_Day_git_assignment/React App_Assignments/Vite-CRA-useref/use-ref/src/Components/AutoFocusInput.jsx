import React, { useEffect, useRef } from 'react';

const AutoFocusInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus me on mount" />
    </div>
  );
};

export default AutoFocusInput;
