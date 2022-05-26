import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = ({ children }) => {
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    };
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <div class="drawer drawer-end ">
                <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col">
                    {/* <!-- Navbar --> */}
                    <div class="w-full navbar px-12 bg-primary">
                        <div class="flex-1 px-2 mx-2">
                            <NavLink className='text-white' to='/'>Home</NavLink>
                            <NavLink className='text-white px-4' to='/MyPortfolio'>My Portfolio</NavLink>
                        </div>
                        <div class="flex-none lg:hidden">
                            <label for="my-drawer-3" class="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block text-white w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>

                        <div class="flex-none hidden lg:block">
                            <ul class="menu menu-horizontal">
                                {/* <!-- Navbar menu content here --> */}
                                <NavLink className='mx-4 mt-3 rounded-lg text-white' to='/blog'>Blog</NavLink>
                                {
                                    user &&
                                    <NavLink className='mx-4 mt-3 text-white rounded-lg' to='/dashboard'>Dashboard</NavLink>
                                }
                                {user ?
                                    <NavLink onClick={logout} className='mx-4 py-3  bg-primary text-white rounded-lg ' to='/'>LogOut</NavLink>
                                    :
                                    <NavLink className='mx-4 py-3  bg-primary text-white rounded-lg ' to='/login'>Login</NavLink>
                                }

                            </ul>
                        </div>
                    </div>
                    {/* <!-- Page content here --> */}
                    {children}
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-3" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                        {/* <!-- Sidebar content here --> */}
                        <NavLink className='mx-4 py-3 mt-4 bg-primary rounded-lg text-white' to='/blog'>Blog</NavLink>
                        <NavLink className='mx-4 py-3 mt-4 bg-primary text-white rounded-lg' to='/dashboard'>Dashboard</NavLink>
                        {user ?
                            <NavLink onClick={logout} className='mx-4 mt-4 py-3  bg-primary text-white rounded-lg ' to='/'>LogOut</NavLink>
                            :
                            <NavLink className='mx-4 py-3 mt-4 bg-primary text-white rounded-lg ' to='/login'>Login</NavLink>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Navbar;