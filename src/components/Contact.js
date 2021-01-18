import React, { Component } from "react";
import Button from "./Button";
import "./Contact.css";
import ContactInfo from "./ContactInfo";
import Header from "./Header";
// import Footer from "./Footer";
import {Link} from "react-router-dom";
import Image from "./assets/logo.jpg";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: null,
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="contactContainer">
        <Header />
        <header className="contactHeader">
          <h1>Contact Us</h1>
          <div className="barid"></div>
        </header>
        <div className="contactBody">
          <div className="contactInfo">
            <ContactInfo />
            <img className="header__logoImage contact_image" src={Image} alt="twn-logo" />
          </div>
          <div className="contactBox">
            <h2 className="contactSubtitle">Reach Us Anytime.</h2>
            <form className="contactForm">
              <input
                onChange={this.handleChange}
                value={this.state.name}
                type="text"
                name="name"
                placeholder="Name"
                className="contactInput"
              />
              <input
                onChange={this.handleChange}
                value={this.state.email}
                type="email"
                name="email"
                placeholder="Email"
                className="contactInput"
              />
              <input
                onChange={this.handleChange}
                value={this.state.phone}
                type="text"
                maxLength="10"
                name="contact"
                placeholder="Contact Number"
                className="contactInput"
              />
              <textarea
                onChange={this.handleChange}
                row="20"
                value={this.state.message}
                type="text"
                name="message"
                placeholder="Your Message"
                className="contactInput contactMessage"
              />
              <div className="contactButton">
                <Button buttonName="Contact Us" />
              </div>
            </form>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Contact;
