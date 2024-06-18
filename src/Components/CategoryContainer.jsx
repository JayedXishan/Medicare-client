import React from 'react';
import { Link } from 'react-router-dom';
const CategoryContainer = () => {
    return (
        <div className='lg:w-[1170px] mx-auto my-[100px]'>
            <div className='w-full mb-[60px]'>
                <h3 className='text-center text-2xl font-bold mb-4' >All Categories</h3>
                
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
                <div className="card w-96 h-[250px] bg-base-100 shadow-xl image-full">
                    <figure><img className='h-full  w-full' src="https://i.ibb.co/w0bGXps/landscape.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className='text-[16px] font-bold'>Tablet</p>
                        <div className="card-actions justify-end">
                            <Link to='/category/1' className="btn border-none bg-[#102C57]"><p className='text-white'>View All</p></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 h-[250px] bg-base-100 shadow-xl image-full">
                    <figure><img className='h-full w-full' src="https://i.ibb.co/4Y99qY2/portrait.webp" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className='text-[16px] font-bold'>Syrup</p>
                        <div className="card-actions justify-end">
                            <Link to='/category/2' className="btn border-none bg-[#102C57]"><p className='text-white'>View All</p></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 h-[250px] bg-base-100 shadow-xl image-full">
                    <figure><img className='h-full w-full' src="https://i.ibb.co/KFPy9c0/watercolour.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className='text-[16px] font-bold'>Capsule</p>
                        <div className="card-actions justify-end">
                            <Link to='/category/3' className="btn border-none bg-[#102C57]"><p className='text-white'>View All</p></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 h-[250px] bg-base-100 shadow-xl image-full">
                    <figure><img className='h-full w-full' src="https://i.ibb.co/rQqmy7f/oil.webp" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className='text-[16px] font-bold'>Drop</p>
                        <div className="card-actions justify-end">
                            <Link to='/category/4' className="btn border-none bg-[#102C57]"><p className='text-white'>View All</p></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 h-[250px] bg-base-100 shadow-xl image-full">
                    <figure><img className='h-full w-full' src="https://i.ibb.co/BGcGMH7/charcoal.webp" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className='text-[16px] font-bold'>Injection</p>
                        <div className="card-actions justify-end">
                            <Link to='/category/5' className="btn border-none bg-[#102C57]"><p className='text-white'>View All</p></Link>
                        </div>
                    </div>
                </div>
                <div className="card h-[250px] w-96 bg-base-100 shadow-xl image-full">
                    <figure><img className='h-full w-full' src="https://i.ibb.co/jMc1jtQ/cartoon.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className='text-[16px] font-bold '>Others</p>
                        <div className="card-actions justify-end">
                            <Link to='/category/6' className="btn border-none bg-[#102C57]"><p className='text-white'>View All</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryContainer;