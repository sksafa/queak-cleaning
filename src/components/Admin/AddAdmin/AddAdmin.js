import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';

const AddAdmin = () => {
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
        formData.append('email', info.email);

        fetch('https://secure-tor-31436.herokuapp.com/addAdmin', {
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
                    <h4 className="mb-5 mt-3 text-center">Add Admin</h4>

                    <div className="rightSide">
                        <form onSubmit={handleSubmit}>

                            <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Email</label>
                                <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter Email" />
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

export default AddAdmin;