import React from 'react';
import './Faculty.css'
import FacultyCard from './FacultyCard';
import FacultyData from './FacultyData';

const Faculty = () => {
    return(
        <section id="faculty-section">
           <div className="faculty-body">
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
        </section>
    );
}

export default Faculty;