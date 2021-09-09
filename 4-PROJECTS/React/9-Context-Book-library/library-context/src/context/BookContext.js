import React, { createContext, useState } from "react";

export const BookContext = createContext();

export const BookProvider = (props) => {
  const [books, setBooks] = useState([
    { id: 1, name: "ADIM KIRMIZI", price: "TL 55,00" },
    { id: 1, name: "HAYVAN CİFTLİGİ", price: "TL 40,00" },
    { id: 1, name: "BEN ROBOT", price: "TL 55,00" },
  ]);
  return (
    <BookContext.Provider value={[books, setBooks]}>{props.children}</BookContext.Provider>
  );
};
