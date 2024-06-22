import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Typewriter from "typewriter-effect";
import useBanner from "../Hooks/useBanner";
const Banner = () => {
  const [banner] = useBanner();

  return (
    <div className="lg:w-[1170px] lg:h-[500px] w-[340px] h-[220px] mx-auto">
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {banner.map((b) => (
          <SwiperSlide key={b._id}>
            <div className="lg:flex lg:justify-around lg:items-center lg:p-10 p-4">
              <div className="mx-auto lg:mx-0 w-[100px] lg:w-[650px]">
                <img
                  className="w-full border-2 border-white rounded-lg"
                  src={b.image}
                  alt=""
                />
              </div>

              <div className="flex-col text-center lg:mx-20 lg:my-24">
                <h3 className="text-white lg:text-4xl lg:font-extrabold font-semibold text-2xl">
                  <Typewriter
                    options={{
                      strings: [`${b.name}`, `${b.name}`],
                      autoStart: true,
                      loop: true,
                      delay: 75,
                      typeSpeed: 120,
                      deleteSpeed: 80,
                    }}
                  />
                </h3>
                <p className="mx-auto text-white opacity-75 mt-6 lg:mt-8 w-[90%] lg:w-[70%] lg:text-lg text-sm">
                  {" "}
                  {b.description}
                  
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
