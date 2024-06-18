import React from 'react';
import Banner from '../Components/Banner';
import Review from '../Components/Review';
import CategoryContainer from '../Components/CategoryContainer';

const Home = () => {
    return (
        <div className='lg:w-[1170px] mx-auto'>
            <Banner></Banner>
            <CategoryContainer></CategoryContainer>
            <Review></Review>
        </div>
    );
};

export default Home;