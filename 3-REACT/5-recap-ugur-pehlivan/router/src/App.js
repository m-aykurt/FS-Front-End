import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CardPhone from "./components/CardPhone";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/:user" component={CardPhone} />
      </Switch>
    </Router>
  );
}

export default App;
