import React from 'react';



const BusinessSummary = () => {
    const people = "https://cdn-icons-png.flaticon.com/512/33/33308.png"
    const parts = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSC00zr1Ruq3_6mlj7lOSiGAh36uiL6gOftQ&usqp=CAU"
    const revenue = "https://cdn-icons-png.flaticon.com/512/1420/1420439.png"
    const review = "https://www.kindpng.com/picc/m/255-2555599_review-review-icon-png-transparent-png.png"
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 p-12'>
            <div className='shadow-lg'>
                <img className='w-28 mx-auto' src={people} alt="" />
                <h1 className='text-center font-bold text-5xl text-primary'>100+</h1>

                <p className='text-center text-2xl text-info'> we served  customers</p>
            </div>
            <div className='shadow-lg'>
                <img className='w-28 mx-auto' src={revenue} alt="" />
                <h1 className='text-center font-bold text-5xl text-primary'>120M+</h1>
                <p className='text-center text-2xl text-info'> Annual revenue</p>
            </div>
            <div className='shadow-lg'>
                <img className='w-32 pb-2 mx-auto' src={parts} alt="" />
                <h1 className='text-center font-bold text-5xl text-primary'>50+</h1>
                <p className='text-center text-2xl text-info'> Parts</p>
            </div>
            <div className='shadow-lg'>
                <img className='w-24 mx-auto' src={review} alt="" />
                <h1 className='text-center font-bold text-5xl text-primary'>33K+</h1>
                <p className='text-center text-2xl text-info'> Reviews</p>
            </div>
        </div>
    );
};

export default BusinessSummary;