import React from 'react';
import Image from './assets/logo.jpg';
import { Navbar } from "react-bootstrap";
import Social from './Social';
import './Footer.css';



const Footer = () => (
    <footer>
        <div className="footer">
            <div className="footer_item">
                <Navbar.Brand href="/">
                    <img className="footer_logo" src={Image} alt="obj-classes" />
                </Navbar.Brand>
            </div>
            <div className="footer_item">
                <p className="address">
                    Bannerghatta Main Rd, Bhavani Nagar, <br/> Bengaluru, Karnataka 560029<br/>
                    8105003848
                </p>
            </div>
        </div>
        <Social />
        <div className="footer__legal">
            <ul className="footer__legalList">
                <li>
                    <a href="./App.js">Terms &amp; Conditions</a>
                </li>
                <li>&copy; 2021 Copyright Objective Classes</li>
            </ul>
        </div>
    </footer>
)

export default Footer;