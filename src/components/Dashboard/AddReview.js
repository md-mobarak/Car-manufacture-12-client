import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const [disabled, setDisabled] = useState(false)
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = async data => {
        const reviewData = {
            ...data,
            email: user.email
        }
        const res = await axios.post('http://localhost:5000/review', reviewData)
        console.log(res);
        if (res.request.status === 200) {
            toast.success('Thank You My Dear Customer')
        }
        reset()
    };
    return (
        <div className='mx-auto'>
            <form className='card-body bg-base-300' onSubmit={handleSubmit(onSubmit)}>
                <div class="card w-96 bg-primary text-dark-content">
                    <div class="card-body">
                        <h2 class="card-title text-white">ADD REVIEW</h2>
                        <textarea
                            class="textarea "
                            {...register("description", { required: true })}
                            placeholder="Bio">
                        </textarea>
                        <input type="number"
                            name='rating'
                            placeholder="Type here"
                            {...register("rating", { min: 0, max: 5, required: true })}
                            class="input input-bordered w-full max-w-xs" />

                        <div class="card-actions justify-center">
                            {
                                <button class="btn">Add Review</button>
                            }
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddReview;