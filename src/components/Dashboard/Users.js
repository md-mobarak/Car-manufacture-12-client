import React from 'react';
import { toast } from 'react-toastify';

const Users = ({ user, index, refetch, id }) => {
    // console.log(id);
    const { email, role } = user
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('filed to make an admin')
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Success Make an Admin')
                    refetch()
                }
            })
    }
    return (

        <tr class="hover">
            <th>{index + 1}</th>
            <td>Name</td>
            <td>{email}</td>
            <td>
                {role !== 'admin' &&
                    <button onClick={makeAdmin} class="btn btn-primary btn-xs">Make Admin</button>}
            </td>
        </tr>

    );
};

export default Users;