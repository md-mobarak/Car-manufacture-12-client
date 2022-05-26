import React from 'react';

const SingleProduct = ({ product }) => {
    const { name, img, availableQuantity, orderQuantity, description, price, _id } = product
    const handleDelete = () => {
        const proceed = window.confirm("Are You Sure?")
        if (proceed) {
            fetch(`http://localhost:5000/manageProduct/${_id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                })
        }

    }
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
                    <p title={description}>{description}</p>
                    <div class="card-actions">
                        <button onClick={handleDelete} class="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SingleProduct;