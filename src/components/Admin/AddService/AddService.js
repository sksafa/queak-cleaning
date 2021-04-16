
import SideBar from '../SideBar/SideBar';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [file, setFile] = useState(null)
    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            description:data.description
            //imageUrl: imageUrl
        };
        const url = `http://localhost:5000/addService`
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productData)

        })
            .then(res => console.log(res))
            .then(result => {
                alert('Product Uploaded')
            })
    }


    const handelFileSubmit = e => {
        console.log(e.target.files[0])
        const newFile = e.target.files[0];
        setFile(newFile);

        // const imageData = new FormData();
        // imageData.set('key', '22a6bcd638cae7902f3480ed41288b00');
        // imageData.append('image', e.target.files[0])

        // axios.post('https://api.imgbb.com/1/upload', imageData)
        //     .then(function (response) {
        //         setImageUrl(response.data.data.display_url)
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 sidebar">
                        <SideBar></SideBar>
                    </div>

                    <div className="col-md-9 col-sm-12">
                        <h4 className="mb-3 mt-3">Product Add</h4>

                        <div className="rightSide">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <p>Service Name</p>
                                <input name="name" defaultValue="" ref={register({ required: true })} />
                                <br />
                                <p>Service Description</p>
                                <input name="description" defaultValue="" ref={register({ required: true })} />
                                <br />
                                <p>Service Price</p>
                                <input name="price" defaultValue="" ref={register({ required: true })} />
                                <br />
                                <p>Image Upload</p>
                                <input name="exampleRequired" type="file" onChange={handelFileSubmit} />
                                <br />

                                {errors.exampleRequired && <span>This field is required</span>}

                                <input className="mt-3 addButton" type="submit" value="Add Product" />
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddService;