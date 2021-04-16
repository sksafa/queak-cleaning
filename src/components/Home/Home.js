import React from 'react';
import Banner from '../Header/Banner/Banner';
import Navbar from '../Header/Navbar/Navbar';
import Service from '../Service/Service';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Service></Service>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;