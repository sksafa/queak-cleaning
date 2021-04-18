
import SideBar from '../SideBar/SideBar';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import './AddService.css'

const AddService = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
       
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('description', info.description);
        formData.append('price', info.price);

        fetch('https://secure-tor-31436.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
            e.preventDefault()     
    }
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 sidebar">
                        <SideBar></SideBar>
                    </div>

                    <div className="col-md-9 col-sm-12">
                        <h4 className="mb-3 mt-3 text-center">Add Service</h4>

                        <div className="rightSide">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Service Name</label>
                                    <input onBlur={handleBlur} type="text"className="form-control"  name="name" placeholder="Enter service name" />
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                    <input onBlur={handleBlur} type="text" className="form-control" name="description" placeholder="description" />
                                </div>
                                <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Price</label>
                                    <input onBlur={handleBlur} type="text" className="form-control" name="price" placeholder="Price" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Upload a image</label>
                                    <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddService;