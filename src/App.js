import React, { Fragment, } from 'react';
import NavBar from "./components/NavBar";
import About from "./components/About";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import NoMatch from "./components/NoMatch";
import { Switch, Route, } from "react-router-dom";
import { Container, } from "semantic-ui-react";


const App = () => (
  <div>
    <NavBar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </div>
);

export default App;