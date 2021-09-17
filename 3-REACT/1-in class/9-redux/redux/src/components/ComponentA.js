import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {arttır,eksilt,reset,arttır2} from  "../redux/actions"

function ComponentA() {
  const myCounter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App" style={{ background: "yellow", height: "200px" }}>
      <h2>comp A</h2>
      <h2> Count : {myCounter}</h2>
      <br />
      <button onClick={() => dispatch(arttır())}>
        Arttır
      </button>

      <button onClick={() => dispatch(eksilt())}>
        Eksilt
      </button>
      <button onClick={() => dispatch(arttır2())}>
        2 ARTTIR
      </button>
      <br />
      <button onClick={() => dispatch(reset())}>RESET</button>
    </div>
  );
}

export default ComponentA;
