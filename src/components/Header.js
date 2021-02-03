import React from 'react';
import Image from './assets/logo.jpg';
import './Header.css';
import {Navbar,Nav} from 'react-bootstrap';
import  {NavLink} from 'react-router-dom';



const Header =()=>{


return (
    <Navbar sticky="top" className="headnav" expand="lg">
    <Navbar.Brand href="/"><img className="header__logoImage" src={Image} alt="twn-logo" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" id="navbar-toggler-icon"/>
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <NavLink to="/" id="element" exact activeClassName="navbar__link--active"   >Home</NavLink>
        <NavLink to="/Courses" id="element"  activeClassName="navbar__link--active">Courses</NavLink>
        <NavLink to="/registration" id="element"  activeClassName="navbar__link--active">Admission</NavLink>
        <Nav.Link href="/#faculty-section" id="element">Faculty</Nav.Link>
        <Nav.Link href="/#contact-section" id="element">Contact</Nav.Link>
        <NavLink to="/login" id="element"  activeClassName="navbar__link--active">Login</NavLink>
        <NavLink to="/signup" id="element" activeClassName="navbar__link--active" >SignUp</NavLink>
      </Nav>
      
    </Navbar.Collapse>
  </Navbar>
);
}

export default Header;

