import React from "react";
import Header from "./components/Header";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Profile from "./components/pages/Profile";
import NotFound from "./components/pages/NotFound";
import Post from "./components/pages/Post";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
        <Route path="/post/:id" component={Post} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
