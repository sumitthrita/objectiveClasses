import React from 'react';
import {Button} from 'react-bootstrap';
import "./Button.css";


const Buttons = (props) => {
    return(
        <div className="buttonMain" >
            <Button  id="button" >
                <span className="buttonName" > {props.buttonName} </span>
            </Button>
        </div>
    );
};


export default Buttons;