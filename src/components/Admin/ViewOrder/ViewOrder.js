import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import './ViewOrder.css';

const ViewOrder = () => {

    const [viewOrder, setViewOrder] = useState([])
    useEffect(() => {
        fetch('https://secure-tor-31436.herokuapp.com/bookingOrderList')
            .then(res => res.json())
            .then(data => setViewOrder(data))
    }, [viewOrder])

    const onGoing = (id) => {
        const status = 'ongoing';
        const updateInfo = { id, status }
        fetch(`https://secure-tor-31436.herokuapp.com/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('status Update successfully')
                }
            })
    }

    const done = (id) => {
        const status = 'done';
        const updateInfo = { id, status }
        fetch(`https://secure-tor-31436.herokuapp.com/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('status Update successfully')
                }
            })
    }

    const pending = (id) => {
        const status = 'pending';
        const updateInfo = { id, status }
        fetch(`https://secure-tor-31436.herokuapp.com/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('status Update successfully')
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
                        <h4 className="mt-2 text-center">Order List</h4>
                        <div className="row">
                                <div className="viewItem">
                                    <table>
                                        <tr>
                                            <td><p className="tableText">Name</p></td>
                                            <td><p className="tableText">Service Name</p></td>
                                            <td><p className="tableText">Address</p></td>
                                            <td><p className="tableText">ServiceDate</p></td>
                                            <td><p className="tableText">IssueDate</p></td>
                                            <td><p className="tableText">Price</p></td>
                                            <td><p className="tableText">PaymentId</p></td>
                                            <td><p className="tableText">Status</p></td>
                                            <td><p className="tableText">Action</p></td>
                                        </tr>

                                        {
                                            viewOrder.map(viewOrder =>
                                                <tr>
                                                    <td><p className="tablePtext">{viewOrder.customerName} </p></td>
                                                    <td><p className="tablePtext">{viewOrder.serviceName}</p></td>
                                                    <td><p className="tablePtext">{viewOrder.address} </p></td>
                                                    <td><p className="tablePtext">{viewOrder.serviceDate} </p></td>
                                                    <td><p className="tablePtext">{viewOrder.issueDate} </p></td>
                                                    <td><p className="tablePtext">{viewOrder.servicePrice} </p></td>
                                                    <td><p className="tablePtext">{viewOrder.paymentId} </p></td>
                                                    <td><p className="status">{viewOrder.status} </p></td>
                                                    <td>
                                                        <button className="pending" onClick={() => pending(viewOrder._id)}>Pending</button>
                                                        <button className="onGoing" onClick={() => onGoing(viewOrder._id)}>OnGoing</button>
                                                        <button className="done" onClick={() => done(viewOrder._id)}>Done</button>
                                                    </td>

                                                </tr>)
                                        }

                                    </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ViewOrder;