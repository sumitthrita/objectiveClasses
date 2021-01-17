import React from 'react';

const FacultyCard = (props) => {
    return(
        <div className="card">
            <img className="faculty-img" src={props.img} alt="faculty_img" />
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>
    );
}

export default FacultyCard;