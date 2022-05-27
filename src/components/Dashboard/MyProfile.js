import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import PersonalInfo from './PersonalInfo';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const email = user?.email;
        const { linkdin, location, phone, name } = data
        const currentUser = { linkdin, location, phone, name }
        console.log(currentUser);
        if (email) {
            fetch(`https://whispering-lowlands-83696.herokuapp.com/profile/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }

        reset()
    };

    return (
        <div>
            <h1 className='text-center text-4xl text-primary font-bold my-4'> My Profile</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 bg-base-200'>
                <div class=" bg-base-200 mt-8">

                    <div class="hero-content">

                        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div class="card-body">
                                <h1 className='text-primary text-2xl font-bold'>Update Profile</h1>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Name</span>
                                        </label>
                                        <input type="text"
                                            class="input input-bordered"
                                            {...register("name", { required: true })}
                                        />
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Email</span>
                                        </label>
                                        <input type="text"
                                            value={user.email}
                                            readOnly
                                            class="input input-bordered"
                                            {...register("email", { required: true })}
                                        />
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Location</span>
                                        </label>
                                        <input type="text"
                                            class="input input-bordered"
                                            {...register("location", { required: true })}
                                        />
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Phone</span>
                                        </label>
                                        <input type="number"
                                            class="input input-bordered"
                                            {...register("phone", { required: true })}
                                        />
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Linkdin</span>
                                        </label>
                                        <input type="text"
                                            class="input input-bordered"
                                            placeholder='URL'
                                            {...register("linkdin", { required: true })}
                                        />
                                    </div>
                                    <div class="form-control mt-6">
                                        <button class="btn btn-primary">Update</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <PersonalInfo></PersonalInfo>
            </div>
        </div>
    );
};

export default MyProfile;