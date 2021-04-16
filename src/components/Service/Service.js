import React from 'react';
import './Service.css'
import s1 from '../../image/service-1.jpg';
import s2 from '../../image/service-2.jpg';
import s3 from '../../image/service-3.jpg';

const Service = () => {
    return (
        <section className="service pt-5 pb-5">
            <h1 className="titleText">Our Cleaning Services</h1>
            <div className="container">
                <div className="row mt-5">

                    <div className="col-md-4 col-sm-4">
                        <div className="serviceContent text-center">
                            <img src={s1} alt=""/>
                            <h4>Home Cleaning</h4>
                           <p> Indignation & dislike men who are beguiled and demoralized by the charms of pleasure of the </p>
                           <h5>Charge: $400</h5>
                           <button className="btn btn-success">Go For Service</button>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-4">
                        <div className="serviceContent text-center">
                            <img src={s2} alt=""/>
                            <h4>Glass Cleaning</h4>
                           <p> Indignation & dislike men who are beguiled and demoralized by the charms of pleasure of the </p>
                           <h5>Charge: $400</h5>
                           <button className="btn btn-success">Go For Service</button>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-4">
                        <div className="serviceContent text-center">
                            <img src={s3} alt=""/>
                            <h4>kitchen Cleaning</h4>
                           <p> Indignation & dislike men who are beguiled and demoralized by the charms of pleasure of the </p>
                           <h5>Charge: $400</h5>
                           <button className="btn btn-success">Go For Service</button>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Service;