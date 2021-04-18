import React from 'react';
import './Footer.css';
import logo from '../../image/logo-2.png'

const Footer = () => {
    return (
       <footer className="footer mt-5 ">
           <div className="container">
               <div className="row">
                   <div className="col-md-4 col-sm-12">
                       <img src={logo} alt=""/>
                       <p>Sea, male stars darkn hess teno to deun dantly fifth face created aire one you are fly place for lesser firmament canbearin bathering think faces do perter common gender on cheap more</p>
                   </div>
                   <div className="col-md-4 col-sm-12">
                       <h2>Our Best Service</h2>
                       <li>Home Cleaning</li>
                       <li>Toilet Cleaning</li>
                       <li>Car Cleaning</li>
                       <li>Washroom Cleaning</li>
                       <li>Office Cleaning</li>
                   </div>
                   <div className="col-md-4 col-sm-12">
                       <h2>Contact Info</h2>
                       <p>Morningview Lane Artland Latimer, NA 5045 / 23654</p>
                       <p>0023 - 25 365 2654</p>
                       <p>webtend@gmail.com</p>
                       <p>ariclawyerfirm.com</p>
                   </div>
                   <p className="text-center">Copyright © 2021 safawat All Rights Reserved</p>
               </div>
              
           </div>
        
       </footer>
    );
};

export default Footer;