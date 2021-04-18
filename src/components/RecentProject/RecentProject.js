import React from 'react';
import './RecentProject.css';
import pic1 from '../../image/project-1.jpg';
import pic2 from '../../image/project-2.jpg';
import pic3 from '../../image/project-3.jpg';

const RecentProject = () => {
    return (
        <section className="pt-5 mb-5">
            <div className="container">
                <p className="ptext">Finished Project</p>
                <h1 className="testimonialHeading mb-5">Recent Completed <br />Project View </h1>
                <div className="row">

                    <div className="col-md-4 col-sm-4">
                        <div className=" text-center">
                            <img className="mb-5" src={pic1} alt="" />
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-4">
                        <div className=" text-center">
                            <img className="mb-5" src={pic2} alt="" />
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-4">
                        <div className=" text-center">
                            <img className="mb-5" src={pic3} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default RecentProject;