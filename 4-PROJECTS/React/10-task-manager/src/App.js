import "./App.css";
import TaskList from "./components/TaskList";
import TaskListContextProvider from "./context/TaskListContext";
import Header from "./components/Header";
import TaskForm from './components/TaskForm'


function App() {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
    <TaskForm/>
          <div className="main">
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
