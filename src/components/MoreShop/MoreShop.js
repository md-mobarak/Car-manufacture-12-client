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
                        <p class="mb-5 text-white">I was placed in the perfect car. It looked brand new being a used car and my customer service rep handled me very well. He was very knowledgeable about the vehicles there, kind and knew just what I wanted based on my interests. I walked out happily and appreciate the great customer service..</p>
                        <button class="btn btn-warning bg-red-700 text-white">SHOP NOW</button>
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
                        <p class="mb-5 text-white">When you want to find honest opinions about different aspects of the automotive industry, then this is the website to check out. Jalopnik strives to bring forth all the latest updates on cars, racing, technology, transportation, and automotive news with a refreshing honesty that you won't find elsewhere..</p>
                        <button class="btn btn-warning bg-red-700 text-white">SHOP NOW</button>
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
                        <p class="mb-5 text-white">Lauren Fix, The Car Coach® is America's top woman in car care, car education and automotive industry news. She tells it like it is with facts, a unique perspective and fun. The award-winning author, Lauren Fix, not only has 3 automotive books on her resume, she also has motor oil running through her veins that led to her becoming an automotive expert. Find articles, reviews, car care tips, and His Turn-Her Turn drives, her own line of automotive products, and snippets of her appearances on her blog.</p>
                        <button class="btn btn-warning bg-red-700 text-white">SHOP NOW</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MoreShop;