import React from 'react';
import Image from './assets/logo.jpg';
import { Navbar } from "react-bootstrap";
import YoutubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
// import Social from './Social';
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

        <div className="footer__social">
            <ul class="footer__socialList">
                <li>
                    <a href="https://www.instagram.com/objectiveclasses/?hl=en">
                        <InstagramIcon />
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCE98fUsVj8JJWGjHCSkHjPg">
                        <YoutubeIcon />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/thewheelsnation?s=09">
                        <TwitterIcon />
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/objectiveclassesedu">
                        <FacebookIcon />
                    </a>
                </li>
            </ul>
        </div>
        {/* <Social /> */}
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