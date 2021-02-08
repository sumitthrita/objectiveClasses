import React from 'react';
import CourseData from './CourseData';
import CourseCard from './CourseCard';
import "./Courses.css";

const Courses = () => {
    return(
        <section id="courses-section" >
        <div className="coursesMain" >
            <h1 className="coursesHeader" >Courses</h1>
            <div className="coursesContainer">
                {CourseData.map((course) => {
                    return (
                        <CourseCard 
                          title={course.title}
                          duration={course.duration}
                          program={course.program}
                          fee={course.fee}
                        />
                    );
                })}
            </div>
        </div>
        </section>
    );
}

export default Courses;