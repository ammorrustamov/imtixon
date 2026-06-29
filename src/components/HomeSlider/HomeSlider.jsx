import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./HomeSilider.css";

import img1 from "../../assets/Iphone.png";

const HomeSlider = () => {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
      >
        <SwiperSlide>
          <img src={img1} alt="iPhone" className="slider-img" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={img1} alt="iPhone" className="slider-img" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={img1} alt="iPhone" className="slider-img" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={img1} alt="iPhone" className="slider-img" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;