import React from "react";
import trees from "../images/trees.png";
import { Container, Header, Image, Icon, Grid, } from "semantic-ui-react";
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
        <p >some text under icon asdkfjalkdsjfalkdsjfkljsf</p>
      </div>
      <div className="text">
        <p>some text under icon</p>
      </div>
      <div className="text">
        <p>some text under icon</p>
      </div>
      <div className="text">
        <p>some text under icon</p>
      </div>
    </div>
  </div>
);

{/* <Icon className='serviceIcon' size="huge" name="video"/>
<Icon className='serviceIcon' size="huge" name="eye"/>
<Icon className='serviceIcon' size="huge" name="cube"/> */}


{/* <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis 
laoreet fringilla quam id porta. Praesent vitae leo rutrum, 
fringilla urna quis, tempus lorem. Vivamus dictum quis erat 
et aliquam. Suspendisse potenti. Aliquam ullamcorper urna dolor. 
Nulla vitae odio et sem viverra fringilla vitae id magna</p> */}

{/* <Container>
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
</Container> */}

export default Home;