"use client";
import Image from "next/image";
import React from "react";
import { boot } from "../../public/images";
import ShopNow from "./ShopNow";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, Navigation} from "swiper/modules";
// Import Swiper styles


import "swiper/css";
const Background = () => {
  SwiperCore.use([Navigation, Autoplay]);
  return (
    <Swiper spaceBetween={50} slidesPerView={1} autoHeight={true}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next"
      }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
    >
      <SwiperSlide>
        <div className="boot-div">
          <Image src={boot} alt="boot" className="boot-img" />
          <div className="boot-text">
            <span className="z-10">Welcome to our soccer club</span>
            <div className="boot-title">
              <h1>
                Champions <div className="inline mark">rise,</div> heroes are
                made
              </h1>
            </div>
            <div className="flex justify-center gap-5">
              <ShopNow text={"Shop Now"} bg="#AF101A" textColor="white" />
              <ShopNow text={"See Collection"} bg="#ffffff" textColor="black" />
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="boot-div">
          <Image src={boot} alt="boot" className="boot-img" />
          <div className="boot-text">
            <span className="z-10">Welcome to our soccer club</span>
            <div className="boot-title">
              <h1>
                Champions <div className="inline mark">rise,</div> heroes are
                made
              </h1>
            </div>
            <div className="flex justify-center gap-5">
              <ShopNow text={"Shop Now"} bg="#AF101A" textColor="white" />
              <ShopNow text={"See Collection"} bg="#ffffff" textColor="black" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <div className="swiper-button-prev">a</div>
      <div className="swiper-button-next">n</div>
    </Swiper>
  );
};

export default Background;
