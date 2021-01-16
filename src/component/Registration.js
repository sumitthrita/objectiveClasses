import React, {Component} from 'react';
import "./Registration.css";


class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            contact:"",
            email:"",
            course:"",
            address:""
        };
        this.handleChange= this.handleChange.bind(this);
    };

    handleChange(e) {
    //    var stateName=e.target.name;
    
        this.setState({course:e.target.value})
    }

    render(){
        return (
            <div className="registration" >
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
                <div className="inputSectionAddress" >
                    <textarea rows="3" cols="48" maxLength="100" name="address" value={this.state.address} className="form__inputAddress" autoComplete="off" required />
                    <label for ="address" className="form__labelAddress" >
                        <span className="form__content" >Address</span>
                    </label>
                </div>
                <div className="inputSection" >
                    <select value={this.state.course} className="form__input" name="course" onChange={this.handleChange} >
                        <option value="JEE Mains & Advance">JEE Mains & Advance</option>
                        <option value="JEE Mains">JEE Mains</option>
                        <option value="JEE Advance">JEE Advance</option>
                        <option value="NEET">NEET</option>
                    </select>
                    <label for="course" className="form__label" >
                        <span className="form__content">Course</span>
                    </label>
                </div>
                <h1>{this.state.course} </h1>
            </div>
        );
    };
};


export default Registration;
