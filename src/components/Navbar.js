import React from 'react';
import '../styles/navbarStyles.css';
import { Link, } from 'react-router-dom';
import { Image, Icon, Message } from "semantic-ui-react";
import eyeWS from "../images/eyeLogo/eyeWS.png";
import Toggle from './Toggle';

class NavBar extends React.Component {

  state = { copySuccess: '', showResults: false };

  copyToClipboard = (e) => {
    e.preventDefault();
    // Create an HTML object
    let textField = document.createElement('textarea');
    // Set the value of the HTML object to something
    textField.innerText = 'maris.lizete.herrera@gmail.com';
    // Put the textField on the HTML itself
    document.body.appendChild(textField);
    // Select the textfield
    textField.select();
    // Copy the value of the Textarea
    document.execCommand('copy');
    // Delete the textField from the browser
    textField.remove();
  };
  
  render() {
    const { showResults } = this.state
    return(
      <div>
        <header className="navBar">
          <Image id="header-logo" src={eyeWS} />
          <nav id='pageLinks'>
            <Link to='/'>H O M E</Link>
            <Link to="/about">A B O U T</Link>
            <Link to='/portfolio'>P O R T F O L I O</Link>
          </nav>
          <div id="social-icons">
            <a href="https://twitter.com/Nyanimania?lang=en">
              <Icon className='socialMedia' name='twitter' size='large' />
            </a>
            <a href="https://www.instagram.com/nyanimania/?hl=en">
              <Icon className='socialMedia' name='instagram' size='large' />
            </a>
            <a href="https://www.linkedin.com/in/marisherrera/">
              <Icon className='socialMedia' name='linkedin' size='large' />
            </a>

            <Toggle>
              {
                ({on, toggle}) => 
                (
                  <a href="#" onClick={ this.copyToClipboard }>
                  {on && <Message id="alert" floating compact color='green'>sucessfully coppied email to clipboard!</Message>}
                    <Icon className='socialMedia' name='mail outline' size='large' onClick={toggle}/>
                  </a>
                )
              }
            </Toggle>

            <a href="https://github.com/MarisLizeteHerrera">
              <Icon className='socialMedia' name='github' size='large' />
            </a>
          </div>
        </header>
      </div>
    );
  }
}

export default NavBar;