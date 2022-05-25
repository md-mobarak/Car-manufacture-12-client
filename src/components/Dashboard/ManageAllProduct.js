import React, { useEffect, useState } from 'react';
import Products from './Products';

const ManageAllProduct = () => {
    const [allOrders, setAllProducts] = useState([])
    console.log(allOrders);
    useEffect(() => {
        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => {
                setAllProducts(data);
            })
    }, [allOrders])
    if (!allOrders) {
        <button className='btn btn-loading'>Loading...</button>
    }
    return (
        <div>
            {/* <h1 className='text-4xl text-primary my-8 font-bold text-center'>Manage All Products</h1>
            <div className='grid lg:grid-cols-2 grid-cols-1 mb-12 gap-8 px-12'>
                {
                    allProducts.map(p => <Products
                        product={p}
                    ></Products>)
                }

            </div> */}
        </div>
    );
};

export default ManageAllProduct;