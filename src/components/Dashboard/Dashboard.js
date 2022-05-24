import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
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
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Orders</Link></li>
                        <li><Link to='/dashboard/addReview'>Add Review</Link></li>
                        <li><Link to='/dashboard/myProfile'>My Profile</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;