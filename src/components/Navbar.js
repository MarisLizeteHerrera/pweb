import React from 'react';
import '../styles/navbarStyles.css';
import { Link, } from 'react-router-dom';
import { Image, } from "semantic-ui-react";
import eyeWS from "../images/eyeLogo/eyeWS.png";
import emailW from "../images/logos/emailW.png";
import githubW from "../images/logos/githubW.png";
import instagramW from "../images/logos/instagramW.png";
import linkedinW from "../images/logos/linkedinW.png";
import twitterW from "../images/logos/twitterW.png";

class NavBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = { copySuccess: '' }
  }

  copyToClipboard = (e) => {
    this.textArea.select();
    document.execCommand('copy');
    e.target.focus();
    this.setState({ copySuccess: 'Copied!' });
  };

  
  render() {
    return(
      <header className="navBar">
        <Image className='logo' src={eyeWS}/>
        <nav id='pageLinks'>
          <Link to='/'>H O M E</Link>
          <Link to="/about">A B O U T</Link>
          <Link to='/portfolio'>P O R T F O L I O</Link>
        </nav>
        <div>
          <a href="https://twitter.com/Nyanimania?lang=en">
            <Image className='socialMedia' src={twitterW}/>
          </a>
          <a href="https://www.instagram.com/nyanimania/?hl=en">
            <Image className='socialMedia' src={instagramW}/>
          </a>
          <a href="https://www.linkedin.com/in/marisherrera/">
            <Image className='socialMedia' src={linkedinW}/>
          </a>
          <div>
            {
              document.queryCommandSupported('copy') &&
              <a>
                <Image className='socialMedia' src={emailW} onClick={this.copyToClipboard}/>
                {this.state.copySuccess}
              </a>
            }
            <form>
              <textarea id='textHide'
                ref={(textarea) => this.textArea = textarea}
                value='maris.lizete.herrera@gmail.com'
              />
            </form>
          </div>
          <a href="https://github.com/MarisLizeteHerrera">
            <Image className='socialMedia' src={githubW}/>
          </a>
        </div>
      </header>
    );
  }
}

// const NavBar = () => (
//   <header className="navBar">
//     <Image className='logo' src={eyeWS}/>
//     <nav id='pageLinks'>
//       <Link to='/'>H O M E</Link>
//       <Link to="/about">A B O U T</Link>
//       <Link to='/portfolio'>P O R T F O L I O</Link>
//     </nav>
//     <div>
//       <a href="https://twitter.com/Nyanimania?lang=en">
//         <Image className='socialMedia' src={twitterW}/>
//       </a>
//       <a href="https://www.instagram.com/nyanimania/?hl=en">
//         <Image className='socialMedia' src={instagramW}/>
//       </a>
//       <a href="https://www.linkedin.com/in/marisherrera/">
//         <Image className='socialMedia' src={linkedinW}/>
//       </a>
//       {/* <a href="https://github.com/MarisLizeteHerrera"> */}
//         <Image className='socialMedia' src={emailW}/>
//       {/* </a> */}
//       <a href="https://github.com/MarisLizeteHerrera">
//         <Image className='socialMedia' src={githubW}/>
//       </a>
//     </div>
//   </header>
// )

export default NavBar;