import React from 'react';
import coma from '../../image/d.png';

const TestimonialDetails = (props) => {
    const { name,description,surname, image} =props.review;
    return (
        <div className="col-md-4 col-sm-12">
            <div className="reviewCard">
            <img className="imageSize" src={coma} alt=""/>
                <p className="cardText">{description}.</p>
                <div className="cardDetails d-flex">
                    <div className="cardImage">
                    <img src={`data:image/png;base64,${image.img}`} alt="" />
                    </div>
                    <div className="cardCaption ">
                        <h3>{name}</h3>
                        <h4>{surname}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialDetails;