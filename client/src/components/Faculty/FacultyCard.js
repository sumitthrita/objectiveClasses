import React from 'react';

const FacultyCard = (props) => {
    return(
        <div className="card">
            <img className="faculty-img" src={props.img} alt="faculty_img" />
            <h2 className="cardTitle" >{props.name}</h2>
            <h3>{props.subject}</h3>
            <h4>{props.college}</h4>
        </div>
    );
}

export default FacultyCard;