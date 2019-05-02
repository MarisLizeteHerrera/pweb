import React from "react";
import { Header, Container, Image, Divider } from "semantic-ui-react";
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
      <p id="smallHeader">Artist Designer Coder </p>
    </div>
    <Image id='backgroundBanner' src={trees}/>
    <Container>
      <Header id="aboutFont">A B O U T</Header>
      <Divider id='underline'/>
      <div className="aboutParagraph">
        <p>
          My name is Maris Herrera, I'm a web developer, artist, digital media designer, and a 3d Modeler based in Layton, UT.
        </p>
        <br />
        <Header className="smallHeaders">E D U C A T I O N</Header>
        <p>
          The University of Utah | DevPoint Labs<Container textAlign='right'>2019</Container>
          Professional Education, Salt Lake City, Utah<br />	                                      		
          Certificate, Full-time Web Development<br />
          <br />
          <br />
          Davis Technical College<Container textAlign='right'>2018</Container>
          Digital Media Design, Kaysville, Utah<br />							
          Certificate, Digital Media Design<br />
          <br />
          <br />
          American International School of Utah<Container textAlign='right'>2016</Container>
          High School, Murray, Utah<br />		                                      		
          High School Diploma<br />
        </p>
        <br />
        <Header className="smallHeaders">E X P E R I E N C E</Header>
        <p>
          Production
          <br />
          UST Corp., Layton, UT<Container textAlign='right'>2018</Container>
          I have previously been working at UST in production, packaging vitamin bottles and printing labels.<br />
          <br />
          <br />
          Full-Stack Development
          <br />
          DevPoint Studios, Salt Lake City, UT<Container textAlign='right'>December 2018 - 2019</Container>
          Software development firm working with local companies to build web-based applications.<br />							
          <ul>
            <li>Collaborated with other team members to create Table-App, a social media integrated platform built with back-end functionality, front-end design, and used an integrated sales platform</li>
            <li>Developed an Admin dashboard in the application which allowed an Admin to make changes to the website and convert users to an Admin role</li>
            <li>Implemented Phabricator to update and fetch the Git Repository</li>
            <li>Implemented & followed Agile and Scrum frameworks</li>
            <li>Worked on early stages of platform development including UI/UX</li>
          </ul> 
          <br />
          <br />
          Customer Service
          <br />
          Anna’s Restaurant<Container textAlign='right'>2015 - 2017</Container>
          I ran the cashier, waited tables, and bused tables. Gained experience working in teams and with customers.
        </p>
      </div>
    </Container>
  </div>
)
export default About;