"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Importando a imagem corretamente
import { rocket } from "../../public/images";

const Banner = () => {
  return (
    <div className="w-full bg-[#FFFFFF]">
      
      <Swiper
        spaceBetween={300}
        autoplay={{
          delay: 0,
          disableOnInteraction: true
        }}
        speed={10000}
        loop={true}
        slidesPerView={1}
      >
        {[1, 2].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="w-full flex mt-[-1px] z-auto  bg-[#FFFFFF]  justify-center gap-5 uppercase p-5">
              
                <Image src={rocket} alt="rocket"className="w-[40px]" />
             
              <h1 className="text-3xl font-semibold text-black whitespace-nowrap">
                Flash Sale
                <span className="text-white span-h2"> save up to 20%</span>
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
