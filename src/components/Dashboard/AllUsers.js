import React from 'react';
import { useQuery } from 'react-query';
import MyProfile from './MyProfile';
import Users from './Users';

const AllUsers = () => {
    const { isLoading, error, data, refetch } = useQuery('user', () =>
        fetch('https://whispering-lowlands-83696.herokuapp.com/user', {
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
                                id={user._id}
                            >
                            </Users>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;