import React from 'react';

const ViewOrderDetails = (props) => {
   const{paymentId,_id,status,servicePrice,serviceName,customerName,address,issueDate,serviceDate } = props.viewOrder;
  
    console.log(props.viewOrder)
    const onGoing = (id)=>{
        const status = 'ongoing';
        const updateInfo = {id,status}
        fetch(`http://localhost:5000/update/${id}`,{
            method: 'PATCH',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(updateInfo)
        })
        .then(res => res.json())
        .then(data => {
           if(data){
             alert('status Update successfully')
           }
        })
    }
  
    const done = (id)=>{
        const status = 'done';
        const updateInfo = {id,status}
        fetch(`http://localhost:5000/update/${id}`,{
            method: 'PATCH',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(updateInfo)
        })
        .then(res => res.json())
        .then(data => {
           if(data){
             alert('status Update successfully')
           }
        })
    }

    const pending = (id)=>{
        const status = 'pending';
        const updateInfo = {id,status}
        fetch(`http://localhost:5000/update/${id}`,{
            method: 'PATCH',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(updateInfo)
        })
        .then(res => res.json())
        .then(data => {
           if(data){
             alert('status Update successfully')
           }
        })
    }

    return (
        <div className="col-md-4 mb-5">
        <div className="viewItem">
            <p>Name :{customerName} </p>
            <p>Service: {serviceName}</p>
            <p>Address: {address} </p>
            <p>Service Date : {serviceDate} </p>
            <p>Issue Date : {issueDate}</p>
            <p>Price : ${servicePrice} </p>
            <p>Payment Id : {paymentId}</p>
            <p>status : {status} </p>
            <div className="status">
            <button  onClick={() => pending(_id)}>Pending</button>
            <button  onClick={() => onGoing(_id)}>OnGoing</button>
            <button  onClick={() => done(_id)}>Done</button>
            </div>
        </div>

    </div>
    );
};

export default ViewOrderDetails;