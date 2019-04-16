import React from "react";
import { Header, Container, Image, } from "semantic-ui-react";
// import { Link, } from "react-router-dom";
import pfp from "../images/pfppink1.jpg";
import '../styles/aboutStyles.css';

const About = () => (
  <div>
    <Image src={pfp} size='small' circular />
    <div className="circle-container">
      <div className="center circle shadow"></div>
    </div>
    <Container>
      <Header as='h2'>Header</Header>
      <p>
        Home my guy
        About me
        based in layton, ut
        cosplay art
        design n code
        fun facts n music
        skills  asdasd
        asdasdsaasdasdasda
        abouta
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis 
        laoreet fringilla quam id porta. Praesent vitae leo rutrum, 
        fringilla urna quis, tempus lorem. Vivamus dictum quis erat 
        et aliquam. Suspendisse potenti. Aliquam ullamcorper urna dolor. 
        Nulla vitae odio et sem viverra fringilla vitae id magna. Quisque 
        nulla purus, ultrices at pretium et, malesuada vitae mauris. Donec 
        nec dignissim sapien, ac varius sapien.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis 
        laoreet fringilla quam id porta. Praesent vitae leo rutrum, 
        fringilla urna quis, tempus lorem. Vivamus dictum quis erat 
        et aliquam. Suspendisse potenti. Aliquam ullamcorper urna dolor. 
        Nulla vitae odio et sem viverra fringilla vitae id magna. Quisque 
        nulla purus, ultrices at pretium et, malesuada vitae mauris. Donec 
        nec dignissim sapien, ac varius sapien.
      </p>
    </Container>
  </div>
)
export default About;