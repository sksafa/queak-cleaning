import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './SideBar.css'

const SideBar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
            <div className="sidebar">
                <li><Link className="textStyle" to="/"> Home </Link></li>
                <li><Link className="textStyle" to="/review">Create Review </Link></li>
                <li><Link className="textStyle" to="/myOrder">My Order</Link></li>
             {isAdmin &&   <div>
                <li><Link className="textStyle" to="/addService"> Add Service </Link></li>
                <li><Link className="textStyle" to="/manageService"> Manage Service </Link></li>
                <li><Link className="textStyle" to="/viewOrder">View Order </Link></li>
                <li><Link className="textStyle" to="/addAdmin"> Add Admin </Link></li>
                <li><Link className="textStyle" to="admin"> Admin Dashboard </Link></li>
                </div>
}
            </div>
    );
};
export default SideBar;