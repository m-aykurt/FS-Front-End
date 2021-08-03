// import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';


function App() {
  return (
    <div className="App">
        <ClassComponent name = "murat aykurt"/>
        <FunctionalComponent name="Murat Aykurt" dateBirth = "1992" />
    </div>
  );
}

export default App;
