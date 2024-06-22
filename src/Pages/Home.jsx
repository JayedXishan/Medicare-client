import React from 'react';
import Banner from '../Components/Banner';
import Review from '../Components/Review';
import CategoryContainer from '../Components/CategoryContainer';
import DiscountContainer from '../Components/DiscountContainer';
import Faq from '../Components/Faq';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className='lg:w-[1170px] mx-auto'>
            <Helmet>
                <title>Medicare | Home</title>
            </Helmet>
            <Banner></Banner>
            <CategoryContainer></CategoryContainer>
            <DiscountContainer></DiscountContainer>
            <Review></Review>
            <Faq></Faq>
        </div>
    );
};

export default Home;