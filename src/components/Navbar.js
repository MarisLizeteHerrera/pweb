import React from 'react';
import '../styles/navbarStyles.css';
import { Link, } from 'react-router-dom';


// class NavBar extends React.Component {
//   render() {
//     return(
//       <h2>NavBar.js</h2>
//     );
//   }
// }

const NavBar = () => (
  <header className="navBar">
    <Link to='/'>Home</Link>
    <Link to="/about">About</Link>
    <Link to='/portfolio'>Portfolio</Link>
  </header>
)

export default NavBar;