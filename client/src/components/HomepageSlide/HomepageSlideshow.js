import React from 'react';
import ControlledCarousel from './ControlledCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomepageSlideshow.css';
const HomepageSlideshow = () => {
    return(
        <div className="container-fluid home">
            <div className="row">
                <div className="col-lg-6 about">
                    <h1>ABOUT US</h1>
                    <p>Objective Classes,"Leaders in Learning"
                        A small group of IITians started the organization
                        in the state of Assam with the vision of maximum
                        selection ratio for the North East Students in the Engineering
                        and Medical Examinations.
                    </p>
                </div>
                <div className="col-lg-6 about">
                    <ControlledCarousel />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 about">
                    <h1>MENTORS</h1>
                    <p>6 Current and ex successful students from IIT Guwahati to provide mentorship to the students in the weekends.</p>
                    <p>Four students from Guwahati Medical College to mentor the NEET batch on weekends.</p>               
                </div>
                <div className="col-lg-6 about">
                    <h1>UNIQUE TEST PATTERN</h1>
                    <ul className="aboutList">
                        <li>Weekly exam paper</li>
                        <li>Continuos phase test</li>
                        <li>Continuos revision test</li>
                        <li>Daily practice paper</li>
                        <li>Test analysis report</li>
                        <li>Unique checking mechanism</li>
                    </ul>                
                </div>
            </div>
        </div>
    );

}

export default HomepageSlideshow;
