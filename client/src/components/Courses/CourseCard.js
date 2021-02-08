import React from 'react';
import "./CourseCard.css";


const CourseCard = (props) => {
    return (
        <div className="courseCardMain">
                <h2 className="courseTitle" > {props.title} </h2>
            <div className="courseBody" >
                <h3> {props.duration} </h3>
                <h3> {props.program} </h3>
                <h6> {props.fee} </h6>
            </div>
        </div>
    );
};

export default CourseCard;