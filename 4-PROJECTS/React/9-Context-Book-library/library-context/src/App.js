import "./App.css";
import { BookProvider } from "./context/BookContext";
import Nav from "./components/Nav";
import Book from "./components/Book";
import AddBook from "./components/AddBook";

function App() {
  return (
    <BookProvider>
      <div className="App">
        <Nav /> 
        <div className="book-div">
          <div>
            <h2>Kitap Listesi</h2>
            <Book />
          </div>
          <div>
            <AddBook/>
          </div>
        </div>
      </div>
    </BookProvider>
  );
}

export default App;
