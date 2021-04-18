import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import './ManageService.css'

const ManageService = () => {

    const [service, setService] = useState([])
    useEffect(() => {
        fetch('https://secure-tor-31436.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setService(data))
    }, [service])


    const deleteService = (id) => {

        fetch("https://secure-tor-31436.herokuapp.com/deleteService/" + id, {
            method: 'DELETE',
            // headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify(id)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                }
            })


    }


    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 sidebar">
                        <SideBar></SideBar>
                    </div>

                    <div className="col-md-9 col-sm-12">

                        <h4 className="mt-2 text-center">Service List</h4>
                        <div className="deleteProduct mt-5 mb-5">
                            <table>
                                <tr>
                                    <td className="textBold"><p>Service Name</p></td>
                                    <td className="textBold"><p>Service Price</p></td>
                                    <td className="textBold"><p>Action</p></td>
                                </tr>
                                {
                                    service.map(delService => <tr id="removeElement">
                                        <td><p>{delService.name}</p></td>
                                        <td><p>{delService.price}</p></td>
                                        <td> <button className="deleteButton" onClick={() => deleteService(delService._id)}>Delete</button> </td>
                                    </tr>)
                                }
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManageService;