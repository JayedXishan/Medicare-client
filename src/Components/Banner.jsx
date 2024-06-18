import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Typewriter from "typewriter-effect";
const Banner = () => {
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
        <SwiperSlide className="bgImg1">
          <div className="flex-col text-center mx-20 my-20">
            <h3 className="text-white text-4xl font-extrabold">
              <Typewriter
                options={{
                  strings: ["Empower Your Community", "Make Strong Connection"],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  typeSpeed: 120,
                  deleteSpeed: 80,
                }}
              />
            </h3>
            <p className="mx-auto text-white opacity-75 mt-6 lg:mt-8 w-[90%] lg:w-[70%]">
              {" "}
              VolunteerHub Connects Passion with Purpose - Join Today for
              Meaningful Opportunities, Impactful Projects, and Lasting
              Relationships. Make a Difference, One Click at a Time
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bgImg2">
          <div className="flex-col text-center mx-20 my-20">
            <h3 className="text-white text-4xl font-extrabold">
              <Typewriter
                options={{
                  strings: ["Empower Your Community", "Make Strong Connection"],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  typeSpeed: 120,
                  deleteSpeed: 80,
                }}
              />
            </h3>
            <p className="mx-auto text-white opacity-75 mt-6 lg:mt-8 w-[90%] lg:w-[70%]">
              {" "}
              VolunteerHub Connects Passion with Purpose - Join Today for
              Meaningful Opportunities, Impactful Projects, and Lasting
              Relationships. Make a Difference, One Click at a Time
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bgImg3">
          <div className="flex-col text-center mx-20 my-20">
            <h3 className="text-white text-4xl font-extrabold">
              <Typewriter
                options={{
                  strings: ["Empower Your Community", "Make Strong Connection"],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  typeSpeed: 120,
                  deleteSpeed: 80,
                }}
              />
            </h3>
            <p className="mx-auto text-white opacity-75 mt-6 lg:mt-8 w-[90%] lg:w-[70%]">
              {" "}
              VolunteerHub Connects Passion with Purpose - Join Today for
              Meaningful Opportunities, Impactful Projects, and Lasting
              Relationships. Make a Difference, One Click at a Time
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
