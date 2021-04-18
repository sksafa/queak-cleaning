import React from 'react';
import SideBar from '../SideBar/SideBar';
import './Admin.css'

const Admin = () => {
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 sidebar">
                        <SideBar></SideBar>
                    </div>
                    <div className="col-md-10">
                       <div className="text-center mt-5">
                           <h2> WelCome To Admin Panel</h2>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Admin;