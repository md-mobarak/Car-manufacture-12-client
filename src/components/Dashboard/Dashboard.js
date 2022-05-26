import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">
                    {/* <!-- Page content here --> */}
                    <h1 className='text-3xl text-purple-600 font-bold text-center'>Welcome To Your Dashboard</h1>
                    <Outlet></Outlet>
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Dashboard</label>

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {!admin &&
                            <li><Link to='/dashboard'>My Orders</Link></li>
                        }
                        {!admin &&
                            <li><Link to='/dashboard/addReview'>Add Review</Link></li>
                        }
                        <li><Link to='/dashboard/myProfile'>My Profile</Link></li>
                        {
                            admin &&
                            <li><Link to='/dashboard/allUsers'>Make Admin</Link></li>
                        }
                        {
                            admin &&
                            <li><Link to='/dashboard/manageAllOrders'>Manage All Orders</Link></li>
                        }
                        {
                            admin &&
                            <li><Link to='/dashboard/addProducts'>Add Products</Link></li>
                        }
                        {
                            admin &&
                            <li><Link to='/dashboard/manageProduct'>Manage Product</Link></li>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;