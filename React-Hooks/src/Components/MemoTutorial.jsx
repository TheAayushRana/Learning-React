import axios from "axios";
import React, { useState, useEffect, useMemo } from "react";

function MemoTutorial() {
  const [data, setData] = useState();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data));
  }, []);

  // Whenever a state changes full component gets re-render and function will be recreated
  // so we get console.log everytime when we click on toggle button
  const findLongestTitle = (posts) => {
    if (!posts) {
      console.log("No posts");
      return null;
    }

    let longestTitle = "";
    for (let i = 0; i < posts.length; i++) {
      const element = posts[i].title;
      while (element.length > longestTitle.length) {
        longestTitle = element;
      }
    }
    console.log("longest");
    return longestTitle;
  };

  // useMemo is used to optimize performance by memoizing (storing data) the result of a
  // function that is expensive to compute. It takes a function & list of dependencies &
  // returns a cached value that is only re-computed if any of the dependencies change.
  const longestTitle = useMemo(() => findLongestTitle(data), [data]);

  return (
    <div>
      {longestTitle}
      <br />
      <button onClick={() => setToggle(!toggle)}>Toggle Me</button>
      {toggle && <p>Toggle</p>}
    </div>
  );
}

export default MemoTutorial;
