import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

export const NameContextFile = createContext();

function NameContext() {
  const [name, setName] = useState();

  return (
    <NameContextFile.Provider value={{ name, setName }}>
      <User />
      <Login />
    </NameContextFile.Provider>
  );
}

export default NameContext;
