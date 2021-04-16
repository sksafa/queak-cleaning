import React from 'react';
import SideBar from '../SideBar/SideBar';
import './Admin.css'

const Admin = () => {
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 sidebar">
                        <SideBar></SideBar>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Admin;