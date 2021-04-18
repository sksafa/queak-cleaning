import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Payment from '../Payment/Payment';

const BookingInfo = ({info,orderDate}) => {
    const [userInfo , setUserInfo]  = useState(null)
    const [userAddress, setUserAddress] = useState(null);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const currentDate = new Date();
    const bookingDate = currentDate.toDateString();

    const handelBlur= e =>{
        const  address = e.target.value;
        setUserAddress(address);
    }

    const orderInfoSubmit = (e) => {

        const orderInfo = {
            serviceName:info.name,
            servicePrice:info.price,
            serviceDate:orderDate,
            address:userAddress
            
        }

        setUserInfo(orderInfo);
        e.preventDefault() 
    }

    const handelPaymentSuccess = paymentId=>{

        const orderDetails = { 
            customerName:loggedInUser.email,
            serviceName:info.name,
            servicePrice:info.price,
            issueDate:bookingDate,
            serviceDate:orderDate,
            address:userAddress,
            paymentId,
            status:'pending'
        }
        fetch('http://localhost:5000/bookingOrderList', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(orderDetails)
    
        })
          .then(res => res.json())
          .then(data => {
            if (data) {
              alert('your order Confirm')
            }
          })
      }

    return (
        <div>
        <div style={{display:userInfo?'none':'block'}} >
        <div className="rightSide mt-5">
            <form onSubmit={orderInfoSubmit}>
                <label>Customer Name</label>
                <div className="form-group">
                    <input readOnly className="form-control" value={loggedInUser.name} />
                </div>

                <div className="form-group">
                    <label>Service Name</label>
                    <input type="text" readOnly className="form-control" name="name" value={info.name} />
                </div>

                <div className="form-group">
                    <label>Price</label>
                    <input type="text" readOnly className="form-control" name="price" value={info.price} />
                </div>

                <div className="form-group">
                    <label>Order Date</label>
                    <input type="text" readOnly className="form-control" value={orderDate} />
                </div>

                <div className="form-group">
                    <label>Address</label>
                    <input type="text" required className="form-control" name="address" onBlur={handelBlur} placeholder="Enter Your Address" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
            </div>
         <div className=" mt-5" style={{display:userInfo?'block':'none'}}>
             <h3>Confirm Your Order With Payment</h3>
             <Payment handelPaymentSuccess={handelPaymentSuccess}></Payment>
         </div>
        </div>
    );
};

export default BookingInfo;