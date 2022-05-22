import React from 'react';

const Banner = () => {
    return (
        <div>
            <div class="carousel w-full">
                <div id="slide1" class="carousel-item relative w-full">
                    <img src="https://cdn11.bigcommerce.com/s-e1qxwy2jhr/images/stencil/original/carousel/3/slide1.jpg?c=2" alt='' /> /
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <img src="https://cdn11.bigcommerce.com/s-e1qxwy2jhr/images/stencil/original/carousel/4/slide2.jpg?c=2" alt='' /> /
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img src="https://cdn11.bigcommerce.com/s-e1qxwy2jhr/images/stencil/original/carousel/5/slide3.jpg?c=2s" class="w-full" alt='' /> /
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>

                </div>
                <div id="slide4" class="carousel-item relative w-full">
                    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693" class="w-full" alt='' /> /
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;