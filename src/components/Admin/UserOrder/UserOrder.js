import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../SideBar/SideBar';

const UserOrder = () => {
    const [myOrderList , setMyOrderList] = useState([]);
    const [loggedInUser, setLoggedInUser]  =  useContext(UserContext);

    useEffect(()=>{
        fetch('http://localhost:5000/userBookingOrderList?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(data =>setMyOrderList(data))
    },[])

    console.log(myOrderList)

    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 sidebar">
                        <SideBar></SideBar>
                    </div>

                    <div className="col-md-9 col-sm-12">
                        <h4 className="mt-2">My Order List</h4>
                        <div className="row">
                            {
                                myOrderList.map(myOrderList =>
                                    <div className="col-md-4 mb-5">
                                        <div className="viewItem">
                                            <p>Name : {myOrderList.customerName}</p>
                                            <p>Service: {myOrderList.serviceName}</p>
                                            <p>Address: {myOrderList.address} </p>
                                            <p>Service Date : {myOrderList.serviceDate} </p>
                                            <p>Issue Date : {myOrderList.issueDate}</p>
                                            <p>Price : ${myOrderList.servicePrice} </p>
                                            <p>status : {myOrderList.status} </p>
                                        </div>

                                    </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserOrder;