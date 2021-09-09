import React, { useContext, useState } from "react";
import BookList from "./BookList";
import { BookContext } from "../context/BookContext";

function Book() {
  const [books, setBooks] = useContext(BookContext);
  return (
  <div>
      {books.map(item=> <BookList name={item} price={item.price}/>)}
  </div>
  )
}

export default Book;
