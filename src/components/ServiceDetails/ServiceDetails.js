import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetails = (props) => {
    const { name, description,price,_id,image} = props.serviceInfo;
    return (
        <div className="col-md-4 col-sm-4">
            <div className="serviceContent text-center">
                <img src={`data:image/png;base64,${image.img}`} alt="" />
                <h4>{name}</h4>
                <p> { description} </p>
                <h5>${price}</h5>
            <Link to={`/booking/${_id}`}> <button className="btn btn-success">Go For Service</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetails;