import React from 'react';
import Image from '../assets/logo.jpg';
import { Navbar } from "react-bootstrap";
import YoutubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import './Footer.css';



const Footer = () => (
    <footer>
        <div className="footer">
            <div className="footer_item">
                <div className="footerLogoSection">
                    <Navbar.Brand href="/">
                        <img className="footer_logo" src={Image} alt="obj-classes" />
                    </Navbar.Brand>
                </div>
            </div>
            <div className="footer_item">
                <p className="address">
                    Objective Classes <br /> Ullubari, B. Barua Road <br/> Opposite Royal Enclave <br />
                    Guwahati, Assam <br/> 560029 <br/> 8876811793, 8250567454 
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
        <div className="footer__legal">
            <ul className="footer__legalList">
                <li>
                    <a href="/termCondition">Terms &amp; Conditions</a>
                </li>
                <li>&copy; 2021 Copyright Objective Classes</li>
            </ul>
        </div>
    </footer>
)

export default Footer;