import React from 'react';
import './MoreShop.css'

const MoreShop = () => {

    return (
        <div className='grid gap-12 grid-cols-1 lg:grid-cols-3'>
            <div
                class="hero min-h-screen rounded-lg" style={{ backgroundImage: 'url(https://cdn11.bigcommerce.com/s-35csgqmz9s/product_images/uploaded_images/category-card-11.jpg)', backgroundRepeat: 'no-repeat' }}>
                <div class="hero-overlay bg-opacity-20"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl text-white font-bold">CUSTOM BODY KITS</h1>
                        <p class="mb-5 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-warning bg-red-700 text-white">Get Started</button>
                    </div>
                </div>
            </div>
            <div
                class="hero min-h-screen rounded-lg" style={{ backgroundImage: 'url(https://cdn11.bigcommerce.com/s-35csgqmz9s/product_images/uploaded_images/category-card-12.jpg)' }}>
                <div class="hero-overlay bg-opacity-20"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl text-white font-bold">
                            CUSTOM WHEELS</h1>
                        <p class="mb-5 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-warning bg-red-700 text-white">Get Started</button>
                    </div>
                </div>
            </div>
            <div
                class="hero min-h-screen rounded-lg" style={{ backgroundImage: 'url(https://cdn11.bigcommerce.com/s-35csgqmz9s/product_images/uploaded_images/category-card-13.jpg)' }}>
                <div class="hero-overlay bg-opacity-20"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl text-white font-bold">
                            EXHAUTS SYSTEMS</h1>
                        <p class="mb-5 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-warning bg-red-700 text-white">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MoreShop;