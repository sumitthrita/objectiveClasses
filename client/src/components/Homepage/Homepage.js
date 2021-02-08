import React from 'react';
import Header from '../Header/Header';
import HomepageSlideshow from '../HomepageSlide/HomepageSlideshow';
import Faculty from '../Faculty/Faculty';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Advertise from '../Advertise/Advertise';
import Courses from '../Courses/Courses';
import HomeVideo from '../HomeVideo/HomeVideo';

const Hompepage = () => {
    return (
        <div>
            <Header />
            <Advertise />
            <HomepageSlideshow />
            <Courses />
            <Faculty />
            <HomeVideo />
            <Contact />
            <Footer />
        </div>
    );
};

export default Hompepage;