import React from "react";
import trees from "../images/trees.png";
import { Container, Header, Image, Icon, Divider, } from "semantic-ui-react";
import '../styles/homeStyles.css';

const Home = () => (
  <div id='background'>
    <Image id='homeBanner' src={trees}/>
    <Header id="font">S E R V I C E S</Header>
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
        <p>Game Development
          <br />
          {/* Videogame Design 3d modeling */}
        </p>
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
        <p className="basicsParagraph">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
          Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
          arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
          pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
          Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
          ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
          nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
          augue. Curabitur ullamcorper ultricies nisi.
        </p>
      </Container>
    </div>
  </div>
);

export default Home;