import React from "react";
import { Header, Container, Image, } from "semantic-ui-react";
// import { Link, } from "react-router-dom";
import pfp from "../images/pfppink1.jpg";
import trees from "../images/trees.png";
import '../styles/aboutStyles.css';

const About = () => (
  <div>
    <div id="headerColor">
      <Image className="img" src={pfp} size='medium' circular />
      <div id="circle-container">
        <div className="position circle"></div>
      </div>
      <p id="name"as='h1'>Maris <br /> Herrera</p>
      {/* <Header id="name"as='h1'>Maris <br /> Herrera</Header> */}
      <p id="smallHeader">Artist Designer Coder </p>
    </div>
    <Image id='backgroundBanner' src={trees}/>
    <Container>
      <Header as='h2'>Header</Header>
      <p>
        My name is Maris Herrera, I'm a web developer, artist, digital media designer, and a 3d Modeler.
        About me
        based in layton, ut
        cosplay art
        design n code
        fun facts n music
        skills  asdasd
        asdasdsaasdasdasda
        about
      </p>
    </Container>
  </div>
)
export default About;