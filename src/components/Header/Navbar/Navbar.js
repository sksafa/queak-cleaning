import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../image/logo.png';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={Logo} alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link navItem active" aria-current="page" to="/" >Home</Link>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link navItem" href="#">Service</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link navItem" href="#">About Us</a>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link navItem" to="/admin">Admin</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link navItem" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;