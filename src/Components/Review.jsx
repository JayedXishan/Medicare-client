import React from "react";
import Slider from "react-slick";
const Review = () => {
  
  return (
    <div className="lg:w-[1170px] mx-auto mt-36">
      <div className="p-2 lg:flex lg:justify-between lg:items-center w-full lg:h-[290px] h-[480px] bg-gradient-to-r from-[#7469B6] via-[#AD88C6] to-[#E1AFD1]">
        <div className="flex-1  my-7  lg:my-0">
            <div className="w-[80%] ml-4">
                <h3 className="text-2xl font-bold text-[#D1BB9E] mb-3">Review</h3>
                <p className="text-white">Reliable online pharmacy offering a wide range of medicines, fast delivery, competitive prices, and excellent customer service.</p>
            </div>
        </div>
        <div className="flex-1">
          <div className="mr-4">
            <div className="relative h-[250px] flex flex-col lg:flex-row lg:items-center lg:justify-around bg-[#7469B6] p-8 text-white rounded-2xl">
              <div className=" carousel w-[100%] ">
                <div id="review1" className="carousel-item w-full">
                  <div
                    id="item1"
                    className="carousel-item w-full container flex flex-col lg:w-[50%]  p-6 mx-auto divide-y rounded-m"
                  >
                    <div className="flex justify-between p-4">
                      <div className="flex space-x-4">
                        <div>
                          <img
                            src="https://source.unsplash.com/100x100/?portrait"
                            alt=""
                            className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#D1BB9E]">
                            Leroy Jenkins
                          </h4>
                          <span className="text-xs dark:text-gray-600">
                            2 days ago
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 dark:text-yellow-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="text-orange-500 w-5 h-5 fill-current"
                        >
                          <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                        </svg>
                        <span className="text-orange-500 text-xl font-bold">
                          4.5
                        </span>
                      </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                      <p>
                      Excellent service! My order arrived quickly, and the prices were unbeatable. Highly recommend this pharmacy                      </p>
                      
                    </div>
                  </div>
                </div>
                <div id="review2" className="carousel-item w-full">
                  <div
                    id="item1"
                    className="carousel-item w-full container flex flex-col lg:w-[50%]  p-6 mx-auto divide-y rounded-m"
                  >
                    <div className="flex justify-between p-4">
                      <div className="flex space-x-4">
                        <div>
                          <img
                            src="https://source.unsplash.com/100x100/?portrait"
                            alt=""
                            className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#D1BB9E]">
                            Jhon Depp
                          </h4>
                          <span className="text-xs dark:text-gray-600">
                            5 days ago
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 dark:text-yellow-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="text-orange-500 w-5 h-5 fill-current"
                        >
                          <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                        </svg>
                        <span className="text-orange-500 text-xl font-bold">
                          4.8
                        </span>
                      </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                      <p>
                      Great experience! The website is easy to navigate, and the customer support was very helpful. Will buy again!
                      </p>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[35%] space-y-4 left-8">
                <div>
                  <a href="#review1" className="btn btn-xs rounded-full">
                    1
                  </a>
                </div>
                <div>
                  <a href="#review2" className="btn btn-xs rounded-full">
                    2
                  </a>
                </div>
              </div>

        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
