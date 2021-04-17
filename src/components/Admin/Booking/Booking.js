import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import SideBar from '../SideBar/SideBar';
import './Booking.css'
import BookingInfo from '../BookingInfo/BookingInfo';


const Booking = () => {

    const { _id } = useParams();
    const [bookingInformation, setBookingInfo] = useState({});

    const [value, onChange] = useState(new Date());


    const orderDate = value.toDateString();

    useEffect(() => {
        fetch('http://localhost:5000/bookingInfo/' + _id)
            .then(res => res.json())
            .then(data => setBookingInfo(data))
    }, [_id]);

    return (
        <section className="bodyColor">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 sidebar">
                        <SideBar></SideBar>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-5">
                                <h3 className="mb-4 mt-4">Select Service Date</h3>
                                <Calendar
                                    onChange={onChange}
                                    value={value}
                                />
                            </div>
                            <div className="col-md-7 ">
                                <BookingInfo info={bookingInformation} orderDate={orderDate} ></ BookingInfo>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Booking;