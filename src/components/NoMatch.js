import React from "react";
import { Link, } from "react-router-dom";
import { Header, Icon, } from "semantic-ui-react";

const NoMatch = () => (
  <div>
    <Icon name='home' size='huge' />
    <Header as="h3" textAlign="center">
      Oh no! looks like you've lost your way
      404 Page not found.
      <Link to="/">Home</Link>
    </Header>
  </div>
)

export default NoMatch;