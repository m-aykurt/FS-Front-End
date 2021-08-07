// import logo from './logo.svg';
import './App.css';
// import ClassComponent from './components/ClassComponent';
// import FunctionalComponent from './components/FunctionalComponent';
// import MyHeader from './components/Styling';
// import MyComponent from './components/Header';
import Stylesheet from './components/Stylesheet';
// import "./appstyle.css"
// import styles from "./appstyle.module.css"


function App() {
  return (
    <div className="App">
      <Stylesheet primary = {true}  />
      {/* <MyComponent/>
      <MyHeader />
      <ClassComponent name = "murat aykurt"/>
      <FunctionalComponent name="Murat Aykurt" dateBirth = "1992" /> */}
    </div>
  );
}

export default App;
