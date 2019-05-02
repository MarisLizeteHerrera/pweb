import React from "react";
import { Header, Image, Segment, Icon, } from "semantic-ui-react";
import { Link, } from 'react-router-dom';
import tableapp from "../images/tableapp.png";
import '../styles/portfolioStyles.css';

const Portfolio = () => (
  <div>
    <p id="portfolioFont">P O R T F O L I O</p>
    <p id="name"as='h1' id="ppHeader">&<br />Personal Projects</p>
    {/* <div id="circle-container2">
        <div className="position2 circle2 shadow2s"></div>
    </div> */}
    
    <div className="colorBlock">
      <p className="projectTitle" as='h2' floated='left'>
        TABLE-APP
      </p>
      <div className="underLine"/>
      <a href="/">
        <Image id="portfolioPic" src={tableapp}/>
      </a>
      <p className="projectDesc">
        Table-App is an Application that would allow customers<br />
        an easier way to find and reserve tables at a nightclub.<br />
        I worked on a team of five developers to architect and<br />
        create the app. Technologies used include a custom Ruby<br />
        on Rails Backend API Server, and React JS Client Side.
      </p>
      <p className="projectLinkText">
        CHECK OUT TABLE APP 
        <Icon id="arrow" name='long arrow alternate right' size='small' />
      </p>
      <div className="underLine2"/>
      <div className="pageLinks2">
        <Link to="/">
          CLICK ME
        </Link>
      </div>
    </div>
    <br />
    <br />
  </div>
)

export default Portfolio;