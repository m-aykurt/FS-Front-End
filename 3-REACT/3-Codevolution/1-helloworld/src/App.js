import logo from './logo.svg';
import './App.css';
import Greet from './Components/FunctionalComponent';
import Welcome from './Components/ClassComponent';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Hello World !  */}
        </p>
        {/* <Greet /> */}
        {/* <Welcome /> */}
        {/* <Message /> */}
        <Counter />
 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
