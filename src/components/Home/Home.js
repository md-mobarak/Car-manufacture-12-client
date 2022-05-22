import React, { useEffect, useState } from 'react';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import MoreShop from '../MoreShop/MoreShop';
import PartsCar from '../PartsCar/PartsCar';
import TopBrands from '../TopBrands/TopBrands';
import UserReviews from '../UserReviews/UserReviews';

const Home = () => {
    const [partsProduct, setPartsProduct] = useState([])
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => {
                setPartsProduct(data);
            })
    }, [])
    return (
        <div>
            <h1 className='text-center italic hover:not-italic text-secondary my-4 text-5xl font-bold'>BRAND NEW PARTS</h1>
            <Banner></Banner>
            <h1 className='text-center text-primary my-8 text-3xl font-bold'>PARTS PRODUCT</h1>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-8 px-12'>
                {
                    partsProduct.map(product => <PartsCar product={product}></PartsCar>)
                }
            </div>
            <div>
                <h1 className='text-center text-info my-12 text-3xl font-bold'>CLIENT TRUST US</h1>
                <BusinessSummary></BusinessSummary>
            </div>
            <div>
                <h1 className='text-center text-accent my-12 text-3xl font-bold'>USER REVIEWS</h1>
                <UserReviews></UserReviews>
            </div>
            <div>
                <h1 className='text-center text-primary my-12 text-3xl font-bold'>WE CARRY TOP BRANDS</h1>
                <div className='px-12 mt-0'>
                    <TopBrands></TopBrands>
                </div>
            </div>
            <div>
                <h1 className='text-center text-primary my-12 text-3xl font-bold'>MORE SHOP</h1>
                <div className='px-12'>
                    <MoreShop></MoreShop>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Home;