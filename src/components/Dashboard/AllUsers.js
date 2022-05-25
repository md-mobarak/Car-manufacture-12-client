import React from 'react';
import { useQuery } from 'react-query';
import Users from './Users';

const AllUsers = () => {
    const { isLoading, error, data, refetch } = useQuery('user', () =>
        fetch('http://localhost:5000/user', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <p>Loading....</p>
    }


    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((user, index) => <Users
                                index={index}
                                user={user}
                                refetch={refetch}
                                key={user._id}
                            >
                            </Users>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;