import React, {Component} from 'react';
import axios from 'axios';
import "./Contact.css";


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            contact:"",
            email:"",
            message:""
        };
        this.handleChange= this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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
            case "message":
                this.setState({message: value});
                break;
            default:
                break;
        }
    };

    onSubmit(e) {
        e.preventDefault();
        const body = {
            name: this.state.name,
            contact: this.state.contact,
            email: this.state.email,
            message: this.state.message
        };

        axios.post("http://localhost:5000/api/contact", body)
        .then(res => alert(res.data))
        .catch(err => alert("There is some error. Please try again later."));
    };

    render(){
        return (
            <div  id="contact-section" >
              <form className="contact" onSubmit={this.onSubmit} >
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
                <div className="c__inputSectionMessage" >
                    <textarea rows="3" cols="48" maxLength="100" name="message" value={this.state.message} className="c__form__inputMessage" autoComplete="off" required onChange={this.handleChange} />
                    <label for ="message" className="c__form__labelMessage" >
                        <span className="c__form__content" >Message</span>
                    </label>
                </div>
                <div className="c_ButtonMain" >
                    <input type="submit" value="Submit" className="c_ButtonName" />
                </div>
              </form>
            </div>
        );
    };
};


export default Contact;
