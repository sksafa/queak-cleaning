import React from 'react';
import ExpertInfo from '../ExpertInfo/ExpertInfo';
import Footer from '../Footer/Footer';
import Banner from '../Header/Banner/Banner';
import Navbar from '../Header/Navbar/Navbar';
import RecentProject from '../RecentProject/RecentProject';
import Service from '../Service/Service';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Service></Service>
            <Testimonial></Testimonial>
            <ExpertInfo></ExpertInfo>
            <RecentProject></RecentProject>
            <Footer></Footer>
        </div>
    );
};

export default Home;