import React from 'react';
import pic1 from "../../image/blog-1.jpg";
import pic2 from "../../image/blog-2.jpg";
import pic3 from "../../image/blog-3.jpg";

const ExpertInfo = () => {
    return (
        <section className="service pt-5 pb-5">
            <h1 className="titleText">Expert Cleaning Service<br/> you Can Trust.</h1>
            <p className="ptext text-center">Special Feature</p>
            <div className="container">
                <div className="row mt-5">

                    <div className="col-md-4 col-sm-4">
                        <div className="serviceContent text-center">
                            <img src={ pic1} alt="" />
                            <h4>Multiply gathered all lights fruit the winged star.</h4>
                            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-4">
                        <div className="serviceContent text-center">
                            <img src={ pic3} alt="" />
                            <h4> Have saying created own dry lesser divided. </h4>
                            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-4">
                        <div className="serviceContent text-center">
                            <img src={ pic2} alt="" />
                            <h4>Image upon sen day move now saying in wherein.</h4>
                            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ExpertInfo;