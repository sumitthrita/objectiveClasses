import React from 'react';
import Header from './Header';
import HomepageSlideshow from './HomepageSlideshow';
import Faculty from './Faculty';
import Contact from './Contact';
import Footer from './Footer';

const Hompepage = () => {
    return (
        <div>
            <Header />
            <HomepageSlideshow />
            <Faculty />
            <Contact />
            <Footer />
        </div>
    );
};

export default Hompepage;