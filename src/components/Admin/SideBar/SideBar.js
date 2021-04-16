import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'

const SideBar = () => {
    return (
      
            <div className="sidebar">
                <li><Link to="/"> Home </Link></li>
                <li><Link to="addService"> Add Service </Link></li>
                <li><Link to="addService"> Add Service </Link></li>
                <li><Link to="addService"> Add Service </Link></li>
                <li><Link to="addService"> Add Service </Link></li>
                <li><Link to="addService"> Add Service </Link></li>
                <li><Link to="admin"> Admin </Link></li>
            </div>
    );
};

export default SideBar;