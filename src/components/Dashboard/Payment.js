import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L3aalI91qInqKJOIAqYBOQOdXZn76vNUqa36AQts178GmeLrYGwFWH2smTlGkytVjjHsvS5Rm8O5RHveOueLnAu00gchEF5KD');

const Payment = () => {
    const { id } = useParams()
    const url = `https://whispering-lowlands-83696.herokuapp.com/order/${id}`
    const { data, isLoading } = useQuery(['order', id], () => fetch(url).then(res => res.json()))

    if (isLoading) {
        return <button className='btn btn-loading'>Loading...</button>
    }
    return (
        <div>
            <div class="card w-96 bg-primary text-primary-content">
                <div class="card-body">
                    <h2 class="card-title">{data.name}</h2>
                    <p>Please Pay{data.price}</p>

                </div>
            </div>

            <div class="card w-96 bg-base-100 my-12 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm data={data} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;