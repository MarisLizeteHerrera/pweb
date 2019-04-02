import React from "react";
import { Header, } from "semantic-ui-react";
import { Link, } from "react-router-dom";

const About = () => (
  <Header as="h3" textAlign="center">
    About my guy
    About me
    based in layton, ut
    cosplay art
    design n code
    fun facts n music
    skills
    
    <Link to="/portfolio">Portfolio</Link>
    <Link to="/adfafa">NoMatch</Link>
  </Header>
)

export default About;