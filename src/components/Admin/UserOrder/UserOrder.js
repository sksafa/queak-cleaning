import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../SideBar/SideBar';

const UserOrder = () => {
    const [myOrderList, setMyOrderList] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:5000/userBookingOrderList?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setMyOrderList(data))
    }, [])

    console.log(myOrderList)

    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 sidebar">
                        <SideBar></SideBar>
                    </div>

                    <div className="col-md-9 col-sm-12">
                        <h4 className="mt-2 text-center">My Order List</h4>
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
                                        </tr>

                                        {
                                            myOrderList.map(myOrderList =>
                                                <tr>
                                                    <td><p className="tablePtext">{myOrderList.customerName} </p></td>
                                                    <td><p className="tablePtext">{myOrderList.serviceName}</p></td>
                                                    <td><p className="tablePtext">{myOrderList.address} </p></td>
                                                    <td><p className="tablePtext">{myOrderList.serviceDate} </p></td>
                                                    <td><p className="tablePtext">{myOrderList.issueDate} </p></td>
                                                    <td><p className="tablePtext">{myOrderList.servicePrice} </p></td>
                                                    <td><p className="tablePtext">{myOrderList.paymentId} </p></td>
                                                    <td><p className="status">{myOrderList.status} </p></td>
                                                </tr>)
                                        }

                                    </table>

                                </div>
                            </div>






                            {/* {
                                myOrderList.map(myOrderList =>










                                    // <div className="col-md-4 mb-5">
                                    //     <div className="viewItem">
                                    //         <p>Name : {myOrderList.customerName}</p>
                                    //         <p>Service: {myOrderList.serviceName}</p>
                                    //         <p>Address: {myOrderList.address} </p>
                                    //         <p>Service Date : {myOrderList.serviceDate} </p>
                                    //         <p>Issue Date : {myOrderList.issueDate}</p>
                                    //         <p>Price : ${myOrderList.servicePrice} </p>
                                    //         <p>status : {myOrderList.status} </p>
                                    //     </div>

                                    // </div>
                                    
                                    )
                            } */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserOrder;