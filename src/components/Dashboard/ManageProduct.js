import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';

const ManageProduct = () => {
    const [Products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://whispering-lowlands-83696.herokuapp.com/manageProduct')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [Products])
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 mb-12 gap-8 px-12'>
            {
                Products.map(product => <SingleProduct
                    key={product._id}
                    product={product}
                ></SingleProduct>)
            }

        </div>
    );
};

export default ManageProduct;