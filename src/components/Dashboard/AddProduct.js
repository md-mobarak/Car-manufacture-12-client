import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const [imageURL, setImageURL] = useState('')

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const serviceData = {
            ...data,
            img: imageURL,
        }
        const res = await axios.post('https://whispering-lowlands-83696.herokuapp.com/addProduct', serviceData)
        console.log(res);
        reset()
        setImageURL("")
    }
    const handleSubmitImage = (e) => {
        const image = e.target.files[0]
        const formData = new FormData()
        formData.set("image", image)
        axios.post('https://api.imgbb.com/1/upload?key=13ac64a50e615cb2aadefb6ca184b4ae', formData)
            .then((res) => {
                setImageURL(res.data.data.display_url)
            }).catch((error) => {
                console.log(error);
            })


    }
    return (
        <div>

            <div className='h-screen w-full flex justify-center items-center mt-12'>

                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
                    <div class="card-body">
                        <h1 className='text-2xl text-primary'>Add Products</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Product Name</span>
                                </label>
                                <input type="text" {...register('name')} class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Product Price</span>
                                </label>
                                <input type="number" {...register('price')} class="input input-bordered" />

                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Order Quantity</span>
                                </label>
                                <input type="number" {...register('orderQuantity')} class="input input-bordered" />

                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Available Quantity</span>
                                </label>
                                <input type="number" {...register('availableQuantity')} class="input input-bordered" />

                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Product Description</span>
                                </label>
                                <input type="text" {...register('description')} class="input input-bordered" />

                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Images</span>
                                </label>
                                <input type="file" onChange={handleSubmitImage} class="input input-bordered" />
                            </div>

                            <div class="form-control mt-6">
                                <button type='submit' class="btn btn-primary">Add Product</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;