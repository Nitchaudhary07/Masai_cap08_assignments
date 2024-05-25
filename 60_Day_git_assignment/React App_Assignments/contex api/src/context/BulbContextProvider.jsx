import { createContext, useState } from "react";

export const BulbContext = createContext();

export function BulbContextProvider(props) {
  const [isOn, setIsOn] = useState(false);

  const switchOn = () => {
    setIsOn(true);
  };

  const switchOff = () => {
    setIsOn(false);
  };

  return (
    <BulbContext.Provider
      value={{
        isOn,
        switchOn,
        switchOff,
      }}
    >
      {props.children}
    </BulbContext.Provider>
  );
}
