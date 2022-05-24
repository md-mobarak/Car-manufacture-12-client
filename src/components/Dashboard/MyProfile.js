import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className='mx-auto'>
            <form action="" className='ml-12 my-12'>
                <label class="label">
                    <span class="label-text"> Your Name</span>

                </label>
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" value={user.name ? user.name : 'your name block'} />
                <label class="label">
                    <span class="label-text"> Your Email</span>

                </label>
                <input type="text" value={user.email} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
            </form>
        </div>
    );
};

export default MyProfile;