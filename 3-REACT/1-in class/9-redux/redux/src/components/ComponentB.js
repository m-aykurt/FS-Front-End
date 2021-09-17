import React from "react";
import { useSelector } from "react-redux";

function ComponentB() {
  const myCounter = useSelector((state) => state.counter);

  return (
    <div className="App" style={{ background: "green", height: "200px" }}>
      <h2>Comp B</h2>
      <h2> Count : {myCounter}</h2>
    </div>
  );
}

export default ComponentB;
