import React, { useContext } from "react";
import { NameContextFile } from "./NameContext";

function Login() {
  const { setName } = useContext(NameContextFile);
  return (
    <div>
      <input
        type="text"
        name="name"
        id="name"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default Login;
