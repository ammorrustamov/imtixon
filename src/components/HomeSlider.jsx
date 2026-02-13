import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import img1 from "../assets/iphone.png"
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

export default function HomeSlider() {
  return (
    <div style={{width:"900px"}}>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">    
        <SwiperSlide>
            <img src={img1}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img1}/>
        </SwiperSlide>
       
        <SwiperSlide>
        <img src={img1}/></SwiperSlide>
           <SwiperSlide>
        <img src={img1}/></SwiperSlide>
      </Swiper>

    \
    </div>
  );
}
