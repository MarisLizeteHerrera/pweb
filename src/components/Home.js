import React from "react";
import trees from "../images/trees.png";
import { Container, Header, Image, Icon, Divider, } from "semantic-ui-react";
import '../styles/homeStyles.css';

const Home = () => (
  <div id='background'>
    <Image id='homeBanner' src={trees}/>
    <Header id="servicesFont">S E R V I C E S</Header>
    <div id="row">
      <div className="block">
        <Icon className='serviceIcon' size="huge" name="paint brush"/>
      </div>
      <div className="block">
        <Icon className='serviceIcon' size="huge" name="code"/>
      </div>
      <div className="block">
        <Icon className='serviceIcon' size="huge" name="pencil"/>
      </div>
      <div className="block">
        <Icon className='serviceIcon' size="huge" name="cubes"/>
      </div>
      <div className="block">
        <Icon className='serviceIcon' size="huge" name="language"/>
      </div>       
    </div>

    <div id="textRow">
      <div className="text">
        <p >Art</p>
      </div>
      <div className="text">
        <p>Full-stack web development</p>
      </div>
      <div className="text">
        <p>Digital Media</p>
      </div>
      <div className="text">
        <p>Game Design <br /> & 3d Modeling</p>
      </div>
      <div className="text">
        <p>Language</p>
      </div>
    </div>
    <br />
    <Divider id='line'/>

    <div id="bottomRow">
      <ul className="bottomText">
        <li>Traditional</li>
        <li>Digital</li>
        <li>Mixed Media</li>
        <li>Hand Drawn Lightbox Animation</li>
      </ul>
      <ul className="bottomText">
        <li>React Nativel</li>
        <li>Ruby on rails</li>
        {/* <li>Github</li> */}
        {/* <li>JSON</li> */}
        <li>JavaScript</li>
        {/* <li>Redux.js</li> */}
        <li>CSS</li>
        <li>HTML5</li>
        {/* <li>jQuery</li> */}
        {/* <li>Git</li> */}
        <li>SQL</li>
        {/* <li>Node.js</li> */}
        {/* <li>HTML</li> */}
        <li>etc.(portfolio)</li>
      </ul>
      <ul className="bottomText">
        <li>Adobe Photoshop</li>
        <li>Adobe Illustrator</li>
      </ul>
      <ul className="bottomText">
        <li>3D Studio Max</li>
        <li>Autodesk Maya</li>
        <li>Zbrush</li>
      </ul>
      <ul className="bottomText">
        <li>Spanish</li>
        <li>English</li>
      </ul>
    </div>

    <div id='basics'>
      <Container textAlign='left'><Header> Left Aligned </Header></Container>
      <Container textAlign='center'><Header> Center Aligned </Header></Container>
      <Container textAlign='right'><Header> Right Aligned </Header></Container>
      <Container textAlign='justified'>
        <Header as='h1'>Basics</Header>
        <Divider />
        <p className="basicsParagraph">
          My name is Maris Herrera
          I'm a web developer and Artist based in Layton, Utah.
          Some of my hobbies include cosplaying, playing horror games, drawing, painting, and doing anything
          artsy/crafty. I love learning new skills to challenge myself! Im a pretty outgoing person and I
          don't have any issues talking with big groups of people or crowds.
          When it comes to web development I can do both front and back end. design or develope either way is
          fine with me.
          Im a very social person and i consider that a skill
          I speak both english and spanish

          some fun facts about me
          I don't have a favorite color, I have 4 because im indesisive. I also have favorite color pallets
          my favorite season is fall because I love fall colors and i love seeing the red leaves on the ground
          It makes everywhere look so gorgeous
          I listen to all kinds of music! I absolutely love music but the genres I listen to the most are
          pop-punk, indie, and Lo-fi.
        </p>
      </Container>
    </div>
  </div>
);

export default Home;