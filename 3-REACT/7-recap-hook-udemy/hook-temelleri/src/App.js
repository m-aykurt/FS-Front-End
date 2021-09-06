import React, { useState } from "react";
import "./App.css";
import Basla from "./components/Basla";
import Not from "./components/Not";

function App() {
  const [bardakSayisi, setBardakSayisi] = useState(0);
  const [metin, setMetin] = useState({ text: "ictigim su bardak sayisi" });

  // const suIctim = () => {
  //   setBardakSayisi((prevState) => prevState + 1);
  //   setMetin({ text: "text ictiğim su bardagı adedi" });
  // };
  return (
    <div>
      <Basla />
      <Not ad="bilgisayar oyunuz yaz" aciklama="acıklama1" tarih="6 eylül" />
      <Not ad="Alısverise git" aciklama="acıklama2" tarih="6 eylül" />
      <Not ad="Kitap oku" aciklama="acıklama3" />
      <h3>{bardakSayisi}</h3>
      <p>{metin}</p>
      <button>Su ictim</button>
    </div>
  );
}

export default App;
