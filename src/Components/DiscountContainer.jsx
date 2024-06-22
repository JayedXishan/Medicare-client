import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";
import { Link, useLoaderData } from "react-router-dom";

const DiscountContainer = () => {
  const medis = useLoaderData();

  return (
    <div>
      <div className="w-full mb-[60px]">
        <h3 className="text-center text-2xl font-bold mb-4">Offer Price</h3>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {/* <SwiperSlide>Slide 1</SwiperSlide> */}
        {medis.map((medi) =>
          medi.discount == "0" ? (
            <></>
          ) : (
            <>
              <div key={medi._id} className="">
                <SwiperSlide>
                  <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                      <img
                        src={medi.image}
                        alt="Shoes"
                        className="rounded-xl"
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{medi.medicine_name}</h2>
                      <small>
                        Discount :{" "}
                        <span className="text-[#E1AFD1] font-semibold text-xl">
                          {medi.discount}%
                        </span>{" "}
                      </small>
                      <p>{medi.description}</p>
                      <div className="card-actions">
                        <Link to={`/medidetails/${medi._id}`}  className="btn text-white bg-[#7469B6]">
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </>
          )
        )}
      </Swiper>
    </div>
  );
};

export default DiscountContainer;
