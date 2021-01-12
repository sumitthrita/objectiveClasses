import React from 'react';
import Image from './logo.jpeg';
import './Header.css';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
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
        <NavLink to="/Admissiion" id="element"  activeClassName="navbar__link--active">Admission</NavLink>

        <NavDropdown title="Faculty" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Maths</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Physics</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Chemistry</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Director</NavDropdown.Item>
        </NavDropdown>
        <NavLink to="/contact" id="element" activeClassName="navbar__link--active">Contact</NavLink>
        <NavLink to="/login" id="element"  activeClassName="navbar__link--active">Login</NavLink>
        <NavLink to="/signup" id="element" activeClassName="navbar__link--active" >SignUp</NavLink>
      </Nav>
      
    </Navbar.Collapse>
  </Navbar>
);
}

export default Header;

