import React, { useState } from "react";
import "./App.css";

function App() {
  const [bardakSayisi, setBardakSayisi] = useState(0);
  // const [metin, setMetin] = useState({ text: "ictigim su bardak sayisi" });

  // const suIctim = () => {
  //   setBardakSayisi((prevState) => prevState + 1);
  //   setMetin({ text: "text ictiğim su bardagı adedi" });
  // };
  return (
    <div>
    
      <h3>{bardakSayisi}</h3>
      {/* <p>{metin}</p> */}
      <button>Su ictim</button>
    </div>
  );
}

export default App;
