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
                    <figure><img className='h-full  w-full' src="https://i.ibb.co/7X90qrD/tablet.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className='text-[16px] font-bold'>Tablet</p>
                        <div className="card-actions justify-end">
                            <Link to='/category/1' className="btn border-none bg-[#7469B6]"><p className='text-white'>View All</p></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 h-[250px] bg-base-100 shadow-xl image-full">
                    <figure><img className='h-full w-full' src="https://i.ibb.co/Ypp2DHz/syrup.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className='text-[16px] font-bold'>Syrup</p>
                        <div className="card-actions justify-end">
                            <Link to='/category/2' className="btn border-none bg-[#7469B6]"><p className='text-white'>View All</p></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 h-[250px] bg-base-100 shadow-xl image-full">
                    <figure><img className='h-full w-full' src="https://i.ibb.co/C9GbpNL/capsule.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className='text-[16px] font-bold'>Capsule</p>
                        <div className="card-actions justify-end">
                            <Link to='/category/3' className="btn border-none bg-[#7469B6]"><p className='text-white'>View All</p></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 h-[250px] bg-base-100 shadow-xl image-full">
                    <figure><img className='h-full w-full' src="https://i.ibb.co/jLKv2GJ/drop.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className='text-[16px] font-bold'>Drop</p>
                        <div className="card-actions justify-end">
                            <Link to='/category/4' className="btn border-none bg-[#7469B6]"><p className='text-white'>View All</p></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 h-[250px] bg-base-100 shadow-xl image-full">
                    <figure><img className='h-full w-full' src="https://i.ibb.co/fvBdM2N/injection.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className='text-[16px] font-bold'>Injection</p>
                        <div className="card-actions justify-end">
                            <Link to='/category/5' className="btn border-none bg-[#7469B6]"><p className='text-white'>View All</p></Link>
                        </div>
                    </div>
                </div>
                <div className="card h-[250px] w-96 bg-base-100 shadow-xl image-full">
                    <figure><img className='h-full w-full' src="https://i.ibb.co/y0CjpNG/others.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className='text-[16px] font-bold '>Others</p>
                        <div className="card-actions justify-end">
                            <Link to='/category/6' className="btn border-none bg-[#7469B6]"><p className='text-white'>View All</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryContainer;