import React from 'react';

const Review = ({ review }) => {
    // console.log(review);
    const { description, rating } = review
    return (
        <div class="card w-96 bg-primary shadow-xl">
            <div class="card-body">
                <div class="avatar">
                    <div class="w-12 rounded-full">
                        <img className='rounded-xl' src="https://api.lorem.space/image/face?hash=53273" alt='' />
                    </div>
                </div>
                <h2 class="card-title text-white ">RATING: {rating}</h2>
                <p className='text-white'>{description}</p>

            </div>
        </div>
    );
};

export default Review;