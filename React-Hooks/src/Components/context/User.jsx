import React, { useContext } from "react";
import { NameContextFile } from "./NameContext";

function User() {
  const { name } = useContext(NameContextFile);

  return (
    <div>
      <h1>User: {name}</h1>
    </div>
  );
}

export default User;
