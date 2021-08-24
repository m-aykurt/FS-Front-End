import React, { useEffect, useState } from "react";

const FunctionalComponent = () => {
  const [counter, setCounter] = useState(0);

useEffect(()=>{
    console.log("use effect")
    // return ()=> {console.log("func comp will unmount")} // return dan sonra gelen ifade comp will unmount a karsılık geliyor
},[counter]);

  const increase = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="function">
      <h2>Functional Component</h2>
      <p>Counter: {counter}</p>
      <button onClick={increase} increase>
        Increase
      </button>
    </div>
  );
};

export default FunctionalComponent;
