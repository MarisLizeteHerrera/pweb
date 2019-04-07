import React from "react";
import cityLights from "../images/citylights.jpg";
import { Container, Header, Image, Grid, } from "semantic-ui-react";
import '../styles/homeStyles.css';

const Home = () => (
  <div id='background'>
    <Image id='homeBanner' src={cityLights}/>
    <Container>
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header as="h3" textAlign="center">
              Home my guy
              About me
              based in layton, ut
              cosplay art
              design n code
              fun facts n music
              skills  asdasd
              asdasdsaasdasdasda
              abouta
            </Header>
          </Grid.Column>
          <Grid.Column width={10}>
            <Header as="h3" textAlign="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis 
              laoreet fringilla quam id porta. Praesent vitae leo rutrum, 
              fringilla urna quis, tempus lorem. Vivamus dictum quis erat 
              et aliquam. Suspendisse potenti. Aliquam ullamcorper urna dolor. 
              Nulla vitae odio et sem viverra fringilla vitae id magna. Quisque 
              nulla purus, ultrices at pretium et, malesuada vitae mauris. Donec 
              nec dignissim sapien, ac varius sapien.
            </Header>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header as="h3" textAlign="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis 
              laoreet fringilla quam id porta. Praesent vitae leo rutrum, 
              fringilla urna quis, tempus lorem. Vivamus dictum quis erat 
              et aliquam. Suspendisse potenti. Aliquam ullamcorper urna dolor. 
              Nulla vitae odio et sem viverra fringilla vitae id magna. Quisque 
              nulla purus, ultrices at pretium et, malesuada vitae mauris. Donec 
              nec dignissim sapien, ac varius sapien.
            </Header>
          </Grid.Column>
        </Grid.Row> 
      </Grid>
    </Container>
  </div>
);

export default Home;