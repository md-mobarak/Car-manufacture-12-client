import React from 'react';

const Review = ({ review }) => {
    // console.log(review);
    const { description, rating } = review
    return (
        <div class="card w-96 bg-primary shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-white ">RATING: {rating}</h2>
                <p className='text-white'>{description}</p>

            </div>
        </div>
    );
};

export default Review;