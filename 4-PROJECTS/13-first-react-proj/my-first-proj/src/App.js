import './App.css';

// import Navbar from './components/navbar/Navbar';
// import Header from './components/header/Header';
// import Cards from './components/cards/Card';
import NavBs from './components/navbar/NavBs';
import HeaderBs from './components/header/HeaderBs';
import CardBs from './components/cards/CardBs';




function App() {
  return (
    <div className="text-center bg-secondary">
      {/* <Navbar />
      <Header />
      <Cards /> */}
      <NavBs />
      <HeaderBs />
      <CardBs />
    </div>
  );
}

export default App;
