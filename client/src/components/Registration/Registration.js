import React, {Component} from 'react';
import Header from '../Header/Header';
import "./Registration.css";
import Footer from '../Footer/Footer';
import axios from 'axios';



class Registration extends Component {
    constructor(props) {
        super(props);

        this.handleChange= this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: "",
            contact:"",
            email:"",
            address:"",
            course:""
        }
        
    }

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
            case "address":
                this.setState({address: value});
                break;
            case "course":
                this.setState({course: value});
                break;
            default:
                break;
        }
    }



    onSubmit(e) {
            e.preventDefault();
            const body = {
                name:this.state.name,
                contact: this.state.contact,
                email: this.state.email,
                address: this.state.address,
                course: this.state.course
            }
            // console.log(body);

            axios.post("http://localhost:5000/api/registration", body)
            .then(res =>  alert(res.data))
            .catch(err => alert("There is some error. Please try again later."));
            
                this.setState({
                    name:"",
                    contact:"",
                    email:"",
                    address:"",
                    course:""
                    });
            
    }

    render(){
        return (
            <div>
            <Header />
            <div  >
            <form  onSubmit={this.onSubmit} className="registration">
                <div className="inputSection" >
                    <input type="text" name="name" value={this.state.name} className="form__input" autoComplete="off" required onChange={this.handleChange} />
                    <label for ="name" className="form__label" >
                        <span className="form__content" >Name</span>
                    </label>
                </div>
                <div className="inputSection" >
                    <input type="text" maxLength="10" name="contact" value={this.state.contact} className="form__input" autoComplete="off" required onChange={this.handleChange}/>
                    <label for ="contact" className="form__label" >
                        <span className="form__content" >Contact</span>
                    </label>
                </div>
                <div className="inputSection" >
                    <input type="email" name="email" value={this.state.email} className="form__input" autoComplete="off" required onChange={this.handleChange} />
                    <label for ="email" className="form__label" >
                        <span className="form__content" >Email Id</span>
                    </label>
                </div>
                <div className="inputSectionAddress" >
                    <textarea rows="3" cols="48" maxLength="100" name="address" value={this.state.address} className="form__inputAddress" autoComplete="off" required onChange={this.handleChange} />
                    <label for ="address" className="form__labelAddress" >
                        <span className="form__content" >Address</span>
                    </label>
                </div>
                <div className="inputSection" >
                    <select value={this.state.course} className="form__input" name="course" onChange={this.handleChange} >
                        <option value="JEE Mains Crash Course">Crash Course (JEE)</option>
                        <option value="NEET Crash Course">Crash Course (NEET)</option>
                        <option value="JEE Mains & Advance">Crash Course (CEE)</option>
                        <option value="JEE Mains">JEE Mains</option>
                        <option value="JEE Advance">JEE Advance</option>
                        <option value="NEET">NEET</option>
                    </select>
                    <label for="course" className="form__label" >
                        <span className="form__content">Course</span>
                    </label>
                </div>
                <div className="r_ButtonMain" >
                    <input type="submit" value="Register" className="r_ButtonName" />
                </div>
                </form>
            </div>
            <Footer />
            </div>
        );
    };
};


export default Registration;
