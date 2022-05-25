import React from 'react';

const Orders = ({ order, index, }) => {
    const { name, img, price, orderQuantity, email, _id } = order
    const handleDelete = () => {
        const proceed = window.confirm("Are You Sure?")
        if (proceed) {
            fetch(`http://localhost:5000/order/${_id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                })
        }

    }
    return (
        <tr className="hover">
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-24 rounded-full">
                    <img src={img} alt='' />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{price}</td>
            <td>{orderQuantity}</td>
            <td>
                <button onClick={handleDelete} class="btn btn-primary btn-xs">Delete Order</button>
            </td>
        </tr>
    );
};

export default Orders;