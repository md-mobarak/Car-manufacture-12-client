import React, { useEffect, useState } from 'react';
import ManageOrder from './ManageOrder';


const ManageAllProduct = () => {
    const [allOrders, setAllProducts] = useState([])
    // console.log(allOrders);
    useEffect(() => {
        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => {
                setAllProducts(data);
            })
    }, [allOrders])
    if (!allOrders) {
        return <button className='btn btn-loading'>Loading...</button>
    }
    return (
        <div>
            <h1 className='text-4xl text-primary my-8 font-bold text-center'>Manage All Orders</h1>
            <div className='grid lg:grid-cols-2 grid-cols-1 mb-12 gap-8 px-12'>

                {
                    allOrders.map(order => <ManageOrder order={order}
                        key={order._id}
                    ></ManageOrder>)
                }
            </div>
        </div>
    );
};

export default ManageAllProduct;