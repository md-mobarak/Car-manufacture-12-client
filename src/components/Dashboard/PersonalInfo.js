import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const PersonalInfo = () => {
    const [user, loading, error] = useAuthState(auth);
    const email = user.email
    const [userData, setUserData] = useState({})
    useEffect(() => {
        fetch(`https://whispering-lowlands-83696.herokuapp.com/profile/${email}`)
            .then(res => res.json())
            .then(data => {

                setUserData(data)
            })
    }, [userData])
    return (
        <div class=" bg-base-200 mt-8">
            <div class="hero-content">

                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-secondary ">
                    <div class="card-body ">
                        <h2 class="card-title text-white">Personal Info</h2>
                        <p className='text-white'>Name: {userData?.name}</p>
                        <p className='text-white'>Email:  {user.email}</p>
                        <p className='text-white'>Phone: {userData?.phone}</p>
                        <p className='text-white'>Location: {userData?.location}</p>
                        <p className='text-white'>Linkdin: {userData?.linkdin}</p>
                        <div class="card-actions justify-end">
                            <button disabled class="btn btn-secondary text-secondary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;