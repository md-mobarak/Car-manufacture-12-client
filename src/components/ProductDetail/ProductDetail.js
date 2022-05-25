import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const ProductDetail = () => {
    const [user] = useAuthState(auth)
    // console.log(user);
    const { productId } = useParams()
    const [pdDetail, setpdDetail] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/product/${productId}`)
            .then(res => res.json())
            .then(data => {
                setpdDetail(data)
                if (!pdDetail) {
                    <button className='btn btn-loading'> Loading...</button>
                }
            })
    }, [pdDetail])

    const handleDecrease = () => {
        const xQuantity = pdDetail.orderQuantity
        const orderQuantity = xQuantity - 1
        const updateInfo = { orderQuantity }
        const url = `http://localhost:5000/product/${productId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInfo)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                setpdDetail(data)
            })
    }

    const handleUpdateQuantity = (e) => {
        e.preventDefault()
        const preQuantity = pdDetail.orderQuantity;

        const newQuantity = parseInt(e.target.stock.value);

        const orderQuantity = preQuantity + newQuantity;

        const updateInfo = { orderQuantity };

        const url = `http://localhost:5000/product/${productId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('Are You Sure??')
                e.target.reset()
            })

    }
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { address, email, userName, number } = data
        const { img, name, price, orderQuantity } = pdDetail
        const allData = { img, name, price, orderQuantity, address, email, userName, number }
        console.log(allData);
        const url = `http://localhost:5000/user`
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('Success Your Booking Product')
                }
            })
        reset()

    }


    return (
        <div className='mx-auto my-12'>
            <div class="card card-compact w-96 bg-base-200 shadow-xl">
                <figure><img src={pdDetail.img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Name:{pdDetail.name}</h2>
                    <h2 class="card-title">Price:{pdDetail.price}</h2>
                    <p className='text-lg'>Description:{pdDetail.description}</p>
                    <p className='text-2xl font-bold'>Available-Quantity:{pdDetail.availableQuantity}</p>
                    <p className='text-2xl font-bold'>Order-Quantity:{pdDetail.orderQuantity}</p>
                    <p className='text-2xl font-bold'>Minimum Order-Quantity:1000</p>
                    <div class="card-actions ">
                        <button onClick={handleDecrease} class="btn btn-primary w-full text-xl">Order -</button>
                        <label for="my-modal-6" class="btn modal-button btn-primary w-full">SUbmit Your Information</label>
                    </div>
                </div>
            </div>
            <div className='w-full my-5  mx-auto '>
                <form className='flex' onSubmit={handleUpdateQuantity}>
                    <input type="text"
                        name='stock'
                        placeholder="Minimum Quantity 1000"
                        class="input input-bordered input-primary w-full max-w-xs" />

                    <input className='bg-primary btn btn-primary
                      rounded-lg text-white'
                        type="submit"
                        value="Quantity Add" />

                </form>
            </div>
            <div>
                <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">
                        <h3 class="font-bold text-2xl">Congratulations Dear Customer!</h3>
                        <form className='grid grid-cols-1' onSubmit={handleSubmit(onSubmit)} >
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text"
                                    value={user.displayName ? user.displayName : 'user name is empty'}

                                    class="input input-bordered"
                                    {...register("userName", { required: true })}
                                />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="email"
                                    value={user.email}

                                    class="input input-bordered"
                                    {...register("email", { required: true })}
                                />

                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Phone</span>
                                </label>
                                <input type="number"
                                    placeholder="Your Number"
                                    class="input input-bordered"
                                    {...register("number", { required: true })}
                                />

                            </div>
                            <div class="form-control mb-6">
                                <label class="label">
                                    <span class="label-text">Address</span>
                                </label>
                                <input type="address"
                                    placeholder="Address"
                                    class="input input-bordered"
                                    {...register("address", { required: true })}
                                />

                            </div>


                            <button for="my-modal-6" class="btn btn-primary modal-button w-56 text-xl">SUbmit</button>
                        </form>
                        <div class="modal-action">
                            <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProductDetail;