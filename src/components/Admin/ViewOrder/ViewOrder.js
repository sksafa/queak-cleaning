import React, { useEffect, useState } from 'react';
import ViewOrderDetails from '../Admin/ViewOrderDetails/ViewOrderDetails';
import SideBar from '../SideBar/SideBar';
import './ViewOrder.css';

const ViewOrder = () => {

    const [viewOrder, setViewOrder] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/bookingOrderList')
            .then(res => res.json())
            .then(data => setViewOrder(data))
    }, [viewOrder])
    



    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 sidebar">
                        <SideBar></SideBar>
                    </div>

                    <div className="col-md-9 col-sm-12">
                        <h4 className="mt-2">Order List</h4>
                        <div className="row">
                            {
                                viewOrder.map(viewOrder => <ViewOrderDetails viewOrder={viewOrder} ></ViewOrderDetails> )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ViewOrder;