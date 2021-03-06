import React from 'react';
import NavBar from "./components/NavBar.js";
import About from "./components/About";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import NoMatch from "./components/NoMatch";
import { Switch, Route, } from "react-router-dom";

const App = () => (
  <div>
    <NavBar />
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </div>
);

export default App;