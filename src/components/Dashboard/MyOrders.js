import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Orders from './Orders';

const MyOrders = () => {
    const navigate = useNavigate()
    const [orders, setOrders] = useState([])
    const [user, loading, error] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {

                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        navigate('/')
                        localStorage.removeItem('accessToken')
                    }
                    return res.json()
                })
                .then(data => {
                    setOrders(data)
                })
        }
    }, [user, orders])


    return (
        <div>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Email</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Payment</th>
                            <th>Paid</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map((order, index) => <Orders
                                order={order}
                                index={index}
                            >
                            </Orders>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;