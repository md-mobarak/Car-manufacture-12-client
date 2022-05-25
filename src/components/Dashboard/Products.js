import React from 'react';

const Products = ({ product }) => {

    const { name, img, price, availableQuantity, orderQuantity, description } = product
    return (
        <div className='shadow-xl'>
            <div class="card w-96 bg-base-300 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <h2 class="card-title">Price:{price}</h2>
                    <p>AvailableQuantity:{availableQuantity}</p>
                    <p>OrderQuantity: {orderQuantity}</p>
                    <p title={description}>{description.slice(0, 60) + "..."}</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;