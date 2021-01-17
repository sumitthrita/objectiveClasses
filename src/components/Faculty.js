import React from 'react';
import Header from './Header';
import './Faculty.css'
import FacultyCard from './FacultyCard';
import FacultyData from './FacultyData';

const Faculty = () => {
    return(
        <div className="faculty-body">
            <Header />
            <div className="container-flex">
                {FacultyData.map((faculty) => (
                    <FacultyCard 
                        key={faculty.name}
                        img={faculty.img}
                        name={faculty.name}
                        description={faculty.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default Faculty;