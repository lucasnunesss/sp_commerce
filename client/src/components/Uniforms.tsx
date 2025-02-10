"use client"
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { itens1 } from '../../data';
const Uniforms = () => {
  return (
    <div className='bg-white h-auto w-auto p-10'>
      <Swiper
        spaceBetween={20} 
        slidesPerView={3}
        className='swiper-items h-[17rem]'
      >
        {itens1.map((data) => (
          <SwiperSlide key={data.id} className='bg-gray-300 p-4'>
      
            <div className="relative w-full h-40 bg-gray-300 overflow-hidden">
              <Image 
                src={data.img} 
                alt='socks' 
                className='object-contain w-full h-full'  
              />
            </div>
            <div className='text-itens text-black flex flex-col font-bold text-center mt-2'>
              <span>{data.title}</span>
              <span className='text-red-600'>{data.qtd}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Uniforms