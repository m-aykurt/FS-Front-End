import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Html from "./pages/Html";
import Css from "./pages/Css";
import Logo from "./pages/Home";
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/html" component={Html} />
        <Route path="/css" component={Css} />
        <Route path="/logo" component={Logo} />
        <Route path="/services" component={Services} />
      </Switch>
      <Footer path="https://google.com" />
    </Router>
  );
}

export default App;
