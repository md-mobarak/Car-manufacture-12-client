import React from 'react';

const ManageOrder = ({ order }) => {
    console.log(order);
    const { img, email, name, orderQuantity, price, address, number } = order
    return (
        <div className='shadow-xl'>
            <div class="card w-96 bg-base-300 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <h2 class="card-title">Price:{price}</h2>
                    <p>Phone: {number}</p>
                    <p>Email: {email}</p>
                    <p>OrderQuantity: {orderQuantity}</p>
                    <p>Location: {address}</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageOrder;