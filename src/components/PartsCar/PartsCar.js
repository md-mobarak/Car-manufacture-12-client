import React from 'react';
import { useNavigate } from 'react-router-dom';

const PartsCar = ({ product }) => {
    // console.log(product);
    const navigate = useNavigate()
    const { name, price, img, description, availableQuantity, orderQuantity, _id } = product
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
                        <button onClick={() => navigate(`/product/${_id}`)} class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartsCar;