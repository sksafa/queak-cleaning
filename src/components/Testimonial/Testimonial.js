import React from 'react';
import testimonial from '../../image/testimonial-2.jpg';
import tes1 from '../../image/feedback-1.png';
import './Testimonial.css';
import coma from '../../image/d.png';


const Testimonial = () => {
    const style = {
        backgroundImage: ` url(${testimonial})`,
        height: '700px',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <section style={style} className="pt-5">
            <div className="container">
                <p className="ptext">Some Feedback</p>
                <h1 className="testimonialHeading">Happy Client Says About <br/> Our Company</h1>
                <div className="row">

                   <div className="col-md-4 col-sm-12">
                       <div className="reviewCard">
                           <img className="imageSize" src={coma} alt=""/>
                          <p className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo praesentium itaque autem excepturi porro.</p>
                          <div className="cardDetails d-flex">
                              <div className="cardImage">
                                  <img src={tes1} alt=""/>
                              </div>
                              <div className="cardCaption ">
                                  <h3>Rahul</h3>
                                  <h4>Cheif Executive</h4>
                              </div>
                          </div>
                       </div>
                   </div>

                   <div className="col-md-4 col-sm-12">
                       <div className="reviewCard">
                           <img className="imageSize" src={coma} alt=""/>
                          <p className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo praesentium itaque autem excepturi porro.</p>
                          <div className="cardDetails d-flex">
                              <div className="cardImage">
                                  <img src={tes1} alt=""/>
                              </div>
                              <div className="cardCaption ">
                                  <h3>Rahul</h3>
                                  <h4>Cheif Executive</h4>
                              </div>
                          </div>
                       </div>
                   </div>

                   <div className="col-md-4 col-sm-12">
                       <div className="reviewCard">
                           <img className="imageSize" src={coma} alt=""/>
                          <p className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo praesentium itaque autem excepturi porro.</p>
                          <div className="cardDetails d-flex">
                              <div className="cardImage">
                                  <img src={tes1} alt=""/>
                              </div>
                              <div className="cardCaption ">
                                  <h3>Rahul</h3>
                                  <h4>Cheif Executive</h4>
                              </div>
                          </div>
                       </div>
                   </div>


                </div>
            </div>
        </section>
    );
};

export default Testimonial;