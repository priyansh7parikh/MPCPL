import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cctv from './cctv-scaled.jpg';
import computer from './computer-scaled.jpg';
import macbook from './filiberto-santillan-heyfnqapslq-unsplash-scaled.jpg';
import './Slider.css';

const MySlider = () => {
    // Settings for the slider
    const settings = {
        dots: true, // Show navigation dots
        infinite: true, // Enable infinite scrolling
        speed: 500, // Transition speed in milliseconds
        slidesToShow: 1, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll at a time
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Autoplay interval in milliseconds
    };

    return (
        <div>
            <h2> DISTRIBUTION ◦ SUPPORT ◦ RETAIL</h2>
            <Slider {...settings}>
                {/* Add your slides here */}
                <div className='slides'>
                    <img src={computer} alt="Slide 1"/>
                    <p></p>
                </div>
                <div className='slides'>
                    <img src={macbook} alt="Slide 2"/>
                </div>
                <div className='slides'>
                    <img src={cctv} alt="Slide 3"/>
                </div>
                {/* Add more slides as needed */}
            </Slider>
        </div>
    );
};

export default MySlider;
