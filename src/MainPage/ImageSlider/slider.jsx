import React from "react";
// Core modules imports are same as usual
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

// Styles must use direct files imports
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss"; // Pagination module
import "swiper/modules/autoplay/autoplay";

import Bear from "./sliderImages/kamBears.jpg"; // картинка с медведями
import "./slider.css";

function MainPage() {
  return (
    <div className="slideBlock">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={3}
        spaceBetween={50}
        loop={true}
        navigation
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div class="sale__item">
            <img class="sale__img" src={Bear} alt="item" />
            <div class="sale__text">
              <p class="sale__p">медведи медведи медведи медведи </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="sale__item">
            <img class="sale__img" src={Bear} alt="item" />
            <div class="sale__text">
              <p class="sale__p">медведи</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="sale__item">
            <img class="sale__img" src={Bear} alt="item" />
            <div class="sale__text">
              <p class="sale__p">медведи</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="sale__item">
            <img class="sale__img" src={Bear} alt="item" />
            <div class="sale__text">
              <p class="sale__p">медведи</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="sale__item">
            <img class="sale__img" src={Bear} alt="item" />
            <div class="sale__text">
              <p class="sale__p">медведи</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="sale__item">
            <img class="sale__img" src={Bear} alt="item" />
            <div class="sale__text">
              <p class="sale__p">медведи </p>
            </div>
          </div>
        </SwiperSlide>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </Swiper>
    </div>
  );
}

export default MainPage;
