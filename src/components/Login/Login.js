import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Login = () => {
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate()
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
        reset()
    };

    const handleGoogle = () => {
        signInWithGoogle()
    }

    if (error) {
        return <p>Error{error.message}</p>
    }

    navigate(from, { replace: true });
    return (
        <div>

            <div class="hero min-h-screen bg-base-200">


                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <div class="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
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
                                <p>New To Car?<button onClick={() => navigate('/signup')} class="btn btn-link">Please Register</button></p>
                            </div>
                            <div class="form-control mt-6">

                                <input className='btn btn-primary' type="submit" value="Login" />
                            </div>
                        </form>
                        <div class="form-control mt-6">

                            <input onClick={handleGoogle} className='btn btn-success font-bold' type="submit" value="Google SignIn" />
                        </div>
                    </div>

                </div>
            </div>


        </div >
    );
};

export default Login;