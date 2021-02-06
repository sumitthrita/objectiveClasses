import React, {Component} from 'react';
import Button from './Button';
import "./Contact.css";


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
        const name = e.target.name;
        const value = e.target.value;

        switch (name) {
            case "name":
                this.setState({name: value});
                break;
            case "contact":
                this.setState({contact: value});
                break;
            case "email":
                this.setState({email: value});
                break;
            case "response":
                this.setState({address: value});
                break;
            default:
                break;
        }
    }

    render(){
        return (
            <div id="contact-section">
            <div className="contact" >
                <div className="c__inputSection" >
                    <input type="text" name="name" value={this.state.name} className="c__form__input" autoComplete="off" required onChange={this.handleChange} />
                    <label for ="name" className="c__form__label" >
                        <span className="c__form__content" >Name</span>
                    </label>
                </div>
                <div className="c__inputSection" >
                    <input type="text" maxLength="10" name="contact" value={this.state.contact} className="c__form__input" autoComplete="off" required onChange={this.handleChange} />
                    <label for ="contact" className="c__form__label" >
                        <span className="c__form__content" >Contact</span>
                    </label>
                </div>
                <div className="c__inputSection" >
                    <input type="email" name="email" value={this.state.email} className="c__form__input" autoComplete="off" required onChange={this.handleChange} />
                    <label for ="email" className="c__form__label" >
                        <span className="c__form__content" >Email Id</span>
                    </label>
                </div>
                <div className="c__inputSectionResponse" >
                    <textarea rows="3" cols="48" maxLength="100" name="response" value={this.state.address} className="c__form__inputResponse" autoComplete="off" required onChange={this.handleChange} />
                    <label for ="response" className="c__form__labelResponse" >
                        <span className="c__form__content" >Response</span>
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
