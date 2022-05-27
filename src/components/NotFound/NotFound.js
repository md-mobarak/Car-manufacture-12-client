import React from 'react';

const NotFound = () => {
    const img = "https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?t=st=1653623458~exp=1653624058~hmac=5cb290eb2c94e8c5f3acb9645c00ae48ff0977c9dd350240681f2fc28e852fc2&w=740"
    return (
        <div className='mx-auto'>
            <img src={img} alt="" />
        </div>
    );
};

export default NotFound;