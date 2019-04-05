import React from "react";
import cityLights from "../images/citylights.jpg";
import { Header, Image, Grid, } from "semantic-ui-react";
// import { Link, } from "react-router-dom";
import '../styles/homeStyles.css';



const Home = () => (
<div id='background'>
  <Image id='homeBanner' src={cityLights}/>
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
          semanticdasd
          a
          semanticdasd
          asdasd
          dasdaasdsddfdsfdfgggdghghfh
          hhghgffhfghffhgghhghj
          jh
          jhfjh
          fjhfjhjhjfjjhjhffjhfjhfjhfjhjh
          fjhfjhjhjhhjhjfhjfhjfhjfhj
          hfjfjhhjhjhjfhjfhjfhjjhffjh
          sdafs
          defaultasf
          aboutfsdadfsadsfafdff
          factsd
          sdafsdf
          defaultdfadf
          dsf

          sdfdfsf
          dasdaasdsddfdsfdfgggdghghfhadfs

          sdfdfsfdsf
          defaultasfdsfd
          fsdfsdfsdsfdsfdfsfssfdsdfa
          fsdfsdfsdsfdsfdfsfssfdsdfafds
          fds
          fds jhfjhjhfhj
          fjhfjhjhjfjjhjhffjhfjhfjhfjhjhfhj
          fjhfjhjhjfjjhjhffjhfjhfjhfjhjhhj 
        </Header>
      </Grid.Column>
      <Grid.Column width={3}>
        <Header as="h3" textAlign="center">
          fdsfdsdfsfsdfsdfsdfsf
          factsddfs
          factsddfsaf
          s
          adfa
          jfhjhf
        </Header>
      </Grid.Column>
    </Grid.Row> 
  </Grid>
</div>
)

export default Home;