import React from 'react';
import ControlledCarousel from './ControlledCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomepageSlideshow.css';
const HomepageSlideshow = () => {
    return(
        <div className="container-fluid home">
            <div className="row">
                <div className="col-lg-6 about">
                    <h1>Section 1</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in metus vulputate eu. Volutpat maecenas volutpat blandit aliquam etiam erat velit. Mauris in aliquam sem fringilla ut morbi tincidunt augue. Justo laoreet sit amet cursus sit amet dictum sit amet. Purus sit amet luctus venenatis lectus magna fringilla urna porttitor. Ut consequat semper viverra nam libero. Odio aenean sed adipiscing diam donec adipiscing.</p>
                </div>
                <div className="col-lg-6 about">
                    <ControlledCarousel />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 about">
                    <h1>Section 3</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in metus vulputate eu. Volutpat maecenas volutpat blandit aliquam etiam erat velit. Mauris in aliquam sem fringilla ut morbi tincidunt augue. Justo laoreet sit amet cursus sit amet dictum sit amet. Purus sit amet luctus venenatis lectus magna fringilla urna porttitor. Ut consequat semper viverra nam libero. Odio aenean sed adipiscing diam donec adipiscing.</p>
                </div>
                <div className="col-lg-6 about">
                    <h1>Section 4</h1>
                    <p>Vel pharetra vel turpis nunc eget lorem. Et ligula ullamcorper malesuada proin libero. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. Elementum nisi quis eleifend quam adipiscing vitae proin. Pellentesque elit ullamcorper dignissim cras. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo.</p>
                </div>
            </div>
        </div>
    );

}

export default HomepageSlideshow;
