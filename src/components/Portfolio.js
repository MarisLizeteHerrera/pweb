import React from 'react';
import { Icon, } from "semantic-ui-react";
// import { Link, } from 'react-router-dom';
import tableapp from "../images/tableapp.png";
import zerotwo from "../images/artPics/02.jpg";
import edge from "../images/artPics/edge.jpg";
import emo from "../images/artPics/emo.jpg";
import gold from "../images/artPics/gold.jpg";
import hand from "../images/artPics/hand.jpg";
import pink from "../images/artPics/pink.png";
import tattoo from "../images/artPics/tattoo.jpg";
import vamp from "../images/artPics/vamp.jpg";
//seperate images
import chibi from "../images/3dPics/chibi.jpg";
import girl from "../images/3dPics/girl.png";
import house from "../images/3dPics/house.jpg";
import monkey from "../images/3dPics/monkey.png";
import train from "../images/3dPics/train.png";
import '../styles/portfolioStyles.css';
import { Slide } from 'react-slideshow-image';

const artSlideImages = [
  zerotwo,
  edge,
  emo,
  gold,
  hand,
  pink,
  tattoo,
  vamp
];

const threeDSlideImages = [
  chibi,
  girl,
  house,
  monkey,
  train
];


const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicatiors: true,
  arrows: true
}

const Portfolio = () => {
  return(
  <div className="portfolioWrap">
    <p id="portfolioFont">P O R T F O L I O</p>
    <p id="name"as='h1' id="ppHeader">&<br />Personal Projects</p>

    <div className="colorBlock">
      <p id="taTitle" as='h2' floated='left'>
        TABLE-APP
      </p>
      <div className="dottedLine"/>
      <div className="underLine"/>
      <a href="https://w18-table-app.herokuapp.com/">
        <img id="tableappPic" src={tableapp}/>
      </a>
      <p id="projectDesc">
        Table-App is an Application that would allow customers
        an easier way to find and reserve tables at a nightclub.
        I worked on a team of five developers to architect and
        create the app. Technologies used include a custom Ruby
        on Rails Backend API Server, and React JS Client Side.
      </p>
      <p id="projectSText">
        <Icon className="heart" name='heart' size='large' />
        CHECK OUT TABLE-APP 
        <Icon className="heart" name='heart' size='large' />
      </p>
      <div id="blueLine"/>
      <p id="projectLText">
        CLICK IMAGE
      </p>
    </div>

    <br />
    <br />




    <div className="colorBlock">
      <p id="artTitle" as='h2' floated='left'>
        ART
      </p>
      <div className="dottedLine"/>
      <div className="underLine"/>

      <Slide className="slide-cont" {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${artSlideImages[0]})`}}/>
        </div>

        <div className="each-slide">
          <div style={{'backgroundImage': `url(${artSlideImages[1]})`}}/>
        </div>

        <div className="each-slide">
          <div style={{'backgroundImage': `url(${artSlideImages[2]})`}}/>
        </div>

        <div className="each-slide">
          <div style={{'backgroundImage': `url(${artSlideImages[3]})`}}/>
        </div>

        <div className="each-slide">
          <div style={{'backgroundImage': `url(${artSlideImages[4]})`}}/>
        </div>

        <div className="each-slide">
          <div style={{'backgroundImage': `url(${artSlideImages[5]})`}}/>
        </div>

        <div className="each-slide">
          <div style={{'backgroundImage': `url(${artSlideImages[6]})`}}/>
        </div>

        <div className="each-slide">
          <div style={{'backgroundImage': `url(${artSlideImages[7]})`}}/>
        </div> 
      </Slide>
      <p id="projectSText2">
        <Icon className="heart" name='heart' size='big' />
        IF YOU WOULD LIKE TO SEE MORE ART, CHECK OUT MY 
        <Icon className="heart" name='heart' size='big' />
      </p>
      <div id="blueLine2"/>
      <a href="https://www.instagram.com/nyanimania/?hl=en">
        <p id="projectLText2">
          INSTAGRAM
        </p>
      </a>
    </div>


    <br />
    <br />
    <div id="colorBlock3">
      <p id="threeDTitle" as='h2' floated='left'>
        3D Modeling
      </p>
      <div className="dottedLine"/>
      <div className="underLine"/>

      <Slide className="slide-cont" {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${threeDSlideImages[0]})`}}/>
        </div>

        <div className="each-slide">
          <div style={{'backgroundImage': `url(${threeDSlideImages[1]})`}}/>
        </div>

        <div className="each-slide">
          <div style={{'backgroundImage': `url(${threeDSlideImages[2]})`}}/>
        </div>

        <div className="each-slide">
          <div style={{'backgroundImage': `url(${threeDSlideImages[3]})`}}/>
        </div>

        <div className="each-slide">
          <div style={{'backgroundImage': `url(${threeDSlideImages[4]})`}}/>
        </div>     
      </Slide>
      
      <p id="projectDesc3">
      I have taken courses and learned how to use programs such
      as but not limited to: Autodesk 3ds Max, Autodesk Maya,
      ZBrush, GameMaker Studio 2, Adobe Photoshop, and Adobe
      Illustrator. In addition, I have taken Storyboard and Animation
      courses. While I attended High School at AISU (American International
      School of Utah), I also took related tech classes and learned the 
      basics of Microsoft Excel and Autodesk AutoCAD.

      </p>
    </div>

  </div>

  )
}

export default Portfolio;