// import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/InClass/ClassComponent';
import FunctionalComponent from './components/InClass/FunctionalComponent';
// import HookCounterTwo from './components/counter/HookCounterTwo';
// import ClassCounter from './components/counter/ClassCounter';
// import HookCounter from './components/counter/HookCounter';
import {useState} from "react"



function App() {

  const [isVisible, setVisible] = useState(true);

  return (
    <div className="App">
      <button onClick={()=>setVisible(!isVisible)}>Toggle</button>
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <ClassComponent /> */}
      {/* <FunctionalComponent /> */}
      {true && <ClassComponent />}
      {isVisible ? <FunctionalComponent /> : null}


    </div>
  );
}

export default App;
