import React from 'react';
import { Link } from 'react-router-dom';

const Orders = ({ order, index, }) => {
    const { name, img, price, orderQuantity, email, _id, paid } = order
    const handleDelete = () => {
        const proceed = window.confirm("Are You Sure?")
        if (proceed) {
            fetch(`https://whispering-lowlands-83696.herokuapp.com/order/${_id}`, {
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
            <td>
                {(price && !paid) && <Link to={`/dashboard/payment/${_id}`}><button class="btn btn-primary btn-xs">Payment</button></Link>}
            </td>
            <td>
                {(price && paid) && <span className='text-primary'>paid</span>}
            </td>
        </tr>
    );
};

export default Orders;