import React, { useEffect, useState } from "react";
import axios from "axios";

function EffectTutorial() {
  const [email, setEmail] = useState("");
  // useEffect is a function which is called whenever page re-renders
  // it has a dependency array whenever any element of that array changes useEffect is called
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        console.log(response.data);
        setEmail(response.data[0].email);
      });
  }, []);

  return (
    <div className="text-center mt-5">
      <h3>Use Effect Tutorial</h3>
      <p>Email of 1st User: {email} </p>
    </div>
  );
}

export default EffectTutorial;
