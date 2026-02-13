import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

// Import images
import img1 from "../assets/iphone.png";

// Import required modules
import { Navigation } from 'swiper/modules';

export default function HomeSlider() {
  return (
    <div className="slider-container">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        spaceBetween={20}
        slidesPerView={1} // default mobile
        breakpoints={{
          430: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
      >
        <SwiperSlide><img src={img1} alt="slider" className="slider-img" /></SwiperSlide>
        <SwiperSlide><img src={img1} alt="slider" className="slider-img" /></SwiperSlide>
        <SwiperSlide><img src={img1} alt="slider" className="slider-img" /></SwiperSlide>
        <SwiperSlide><img src={img1} alt="slider" className="slider-img" /></SwiperSlide>
      </Swiper>
    </div>
  );
}
  