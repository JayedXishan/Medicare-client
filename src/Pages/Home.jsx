import React from 'react';
import Banner from '../Components/Banner';
import Review from '../Components/Review';

const Home = () => {
    return (
        <div className='lg:w-[1170px] mx-auto'>
            <Banner></Banner>
            <Review></Review>
        </div>
    );
};

export default Home;