import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../image/logo.png';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src={Logo} alt="" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link navItem active" aria-current="page" to="/" >Home</Link>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link navItem" href="#">Service</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link navItem" href="#">About Us</a>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link navItem" to="/admin">Admin</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link navItem" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;