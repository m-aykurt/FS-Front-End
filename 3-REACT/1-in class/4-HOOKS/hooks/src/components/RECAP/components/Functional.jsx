import React, { useState, useEffect } from "react";
export default function Functional() {
  /////////////////useState
  const [count, setCount] = useState(0); //count değerimiz, setCount değeri değiştirme yöntemimiz
  const [empty, setEmpty] = useState(0);
  const [full, setFull] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      //count 0 ın altına indiğinde eksiltmeye izin vermez
      setCount(count - 1);
    }
  };
  //////////////////useEffect
  useEffect(() => {
    //effect ilk başlangıçta, bir şey update edildiğinde ve comp öldüğünde çalışır
    console.log("useEffect");

    // setEmpty(empty + 1); //BU YANLIŞ. useEffect içerisine mümkün olduğunca state değişikliği koymamalıyız, loop a sokar
  }, [count,empty,full]); //Sona ,[] koyarsak sadece başlangıçta çalışır. Boş bırakırsak update edildiğinde çalışır(örneğin: buttonlara tıklanıp count un değiştirilmesi).[count] yazarsak sadece count değeri değiştiğinde çalışır. [empty, full] yazarsak sadece count ve full değeri değiştiğinde çalışır.
  return (
    <div>
      <div>
        <button onClick={increment}>+</button>
        <h1> {count} </h1>
        <button onClick={decrement}>-</button>
        <br />
        <br />
        <button onClick={() => setEmpty(empty + 1)}>+</button>
        <h1>{empty}</h1>
        <button onClick={() => setFull(full + 1)}>+</button>
        <h1>{full}</h1>
      </div>
    </div>
  );
}
