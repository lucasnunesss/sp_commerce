"use client";
import Image from "next/image";
import React, { useState } from "react";
import { boot } from "../../public/images";
import ShopNow from "./ShopNow";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
// Import Swiper styles

import DOMPurify from "isomorphic-dompurify";
import "swiper/css";
import { dataBg } from "../../data";
import parse from "html-react-parser";

enum SlideIndex {
  A = 0,
  B = 1,
}

const Background = () => {
  SwiperCore.use([Navigation, Autoplay]);
  const [slideDisplay, setSlide] = useState<SlideIndex>(SlideIndex.A);
  
  const slideChange = (slide: number) => {
    if (slide === 0) {
      setSlide(SlideIndex.A);
    }

    if (slide === 1) {
      setSlide(SlideIndex.B);
    }
  };

 
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoHeight={true}
      style={{ height: "500px" }}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
      // autoplay={{ delay: 3000, disableOnInteraction: true }}
      loop={true}
      onSlideChange={(e) => slideChange(e.activeIndex)}
    >
      {dataBg.map((data) =>  (
        
        <SwiperSlide key={data.id}>
          <div className="boot-div">
            <Image src={boot} alt="boot" className="boot-img" />
            <div className="boot-text">
              <span className="z-10">{data.subText}</span>
              <div className="boot-title">
            
                <h1>{parse(DOMPurify.sanitize(data.title))}</h1>
              </div>
              <div className="flex justify-center gap-5">
                <ShopNow text={"Shop Now"} bg="#AF101A" textColor="white" />
                <ShopNow
                  text={"See Collection"}
                  bg="#ffffff"
                  textColor="black"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div
        className={`swiper-button-next bg-white text-black absolute bottom-96 z-10 left-[90%] rounded-full w-12 h-12 flex items-center justify-center cursor-pointer font-semibold ${
          slideDisplay === 1 ? "hidden" : ""
        }`}
      >
        &#8594;
      </div>

      {/* Botão de Navegação "Prev" */}
      <div
        className={`swiper-button-prev bg-white text-black relative bottom-96 z-10 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer font-semibold ${
          slideDisplay === 0 ? "hidden" : ""
        }`}
      >
        &#8592;
      </div>

    </Swiper>
  );
};

export default Background;
