import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { Autoplay } from 'swiper/modules';

const AddSlider = () => {
  return (
        <Swiper
        style={{pointerEvents: "none"}}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
    >
        <SwiperSlide><img className='w-100' style={{borderRadius : "10px "}} src="https://varanibo.com/assets/img/uploaded/ads/202405070838Add-Banner-For-Varanibo.jpg" alt="img" /></SwiperSlide>
        <SwiperSlide><img className='w-100' style={{borderRadius : "10px "}} src="https://varanibo.com/assets/img/uploaded/ads/202405070838Add-Banner-For-Varanibo.jpg" alt="img" /></SwiperSlide>
        <SwiperSlide><img className='w-100' style={{borderRadius : "10px "}} src="https://varanibo.com/assets/img/uploaded/ads/202405070838Add-Banner-For-Varanibo.jpg" alt="img" /></SwiperSlide>
    </Swiper>
  )
}

export default AddSlider
