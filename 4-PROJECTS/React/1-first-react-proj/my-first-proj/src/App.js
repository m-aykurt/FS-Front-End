import './App.css';
import React , {useState} from "react"
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
// import Cards from './components/cards/Card';
import Card from './components/cards/Card-in-class';

// import NavBs from './components/navbar/NavBs';
// import HeaderBs from './components/header/HeaderBs';
// import CardBs from './components/cards/CardBs';
// import Card from './components/cards/Card-in-class';



function App() {
  const [isVisible, setIsVisible] = useState(false);

  const onMouseClick = ()=>{
    setIsVisible(!isVisible)
  }

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Card isVisible={isVisible} onMouseClick={onMouseClick} />
      {/* <Cards /> */}
      {/* <NavBs />
      <HeaderBs />
      <CardBs /> */}
    </div>
  );
}

export default App;
