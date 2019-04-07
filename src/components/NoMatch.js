import React from "react";
import { Link, } from "react-router-dom";
import { Header, Icon, } from "semantic-ui-react";
import '../styles/noMatchStyles.css';

const NoMatch = () => (
  <div id="noMatch">
    <Icon className='iconStyle' name='map signs' size='huge' />
    <Header as="h1" className="paddingLeft" textAlign="center">
    .  .  .  .  .  .
    </Header>
    <br />
    <Header as="h2" className="paddingLeft" textAlign="center">
      Oh no! looks like you've lost your way.
      <br />
      404 Page not found.
    </Header>
    <Header as="h1" className="paddingLeft" textAlign="center">
    .  .  .  .  .  .
    </Header>
    <Link to="/" className="paddingLeft">
      <Icon className='iconStyle' name='home' size='huge' /><br />
      Home
    </Link>
  </div>
)

export default NoMatch;