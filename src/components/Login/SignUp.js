import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        createUserWithEmailAndPassword(data.email, data.password)
        console.log(data)
        reset()
    };

    const navigate = useNavigate()
    return (
        <div>

            <div class="hero min-h-screen bg-base-200">


                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text"
                                    placeholder="Name"
                                    class="input input-bordered"
                                    {...register("Name", { required: true })}
                                />
                                <p className='text-red-700'>{errors.Name?.type === 'required' && "First name is required"}</p>
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="email"
                                    placeholder="email"
                                    class="input input-bordered"
                                    {...register("email", { required: true })}
                                />
                                <p className='text-red-700'>{errors.email?.type === 'required' && "Email is required"}</p>
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    class="input input-bordered"
                                    {...register("password", { required: true })}
                                />
                                <p className='text-red-700'>{errors.password?.type === 'required' && "Password is required"}</p>

                            </div>
                            <div>
                                <p>Are You Registered?<button onClick={() => navigate('/login')} class="btn btn-link">Please Login</button></p>
                            </div>
                            <div class="form-control mt-6">

                                <input className='btn btn-primary' type="submit" value="SignIn" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default SignUp;