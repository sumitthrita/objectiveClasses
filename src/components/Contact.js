import React, {Component} from 'react';
import Header from './Header';
import Button from './Button';
import "./Contact.css";
import Footer from './Footer';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            contact:"",
            email:"",
            response:""
        };
        this.handleChange= this.handleChange.bind(this);
    };

    handleChange(e) {
      //  var stateName=e.target.name;
    
        this.setState({address:e.target.value})
    }

    render(){
        return (
            <div id="contact-section">
            <div className="contact" >
                <div className="inputSection" >
                    <input type="text" name="name" value={this.state.name} className="form__input" autoComplete="off" required onChange={this.handleChange} />
                    <label for ="name" className="form__label" >
                        <span className="form__content" >Name</span>
                    </label>
                </div>
                <div className="inputSection" >
                    <input type="text" maxLength="10" name="contact" value={this.state.contact} className="form__input" autoComplete="off" required />
                    <label for ="contact" className="form__label" >
                        <span className="form__content" >Contact</span>
                    </label>
                </div>
                <div className="inputSection" >
                    <input type="email" name="email" value={this.state.email} className="form__input" autoComplete="off" required />
                    <label for ="email" className="form__label" >
                        <span className="form__content" >Email Id</span>
                    </label>
                </div>
                <div className="inputSectionResponse" >
                    <textarea rows="3" cols="48" maxLength="100" name="response" value={this.state.address} className="form__inputResponse" autoComplete="off" required onChange={this.handleChange} />
                    <label for ="response" className="form__labelResponse" >
                        <span className="form__content" >Response</span>
                    </label>
                </div>
                <div  >
                    <Button buttonName="Contact"  />
                </div> 
            </div>
            </div>
        );
    };
};


export default Contact;
