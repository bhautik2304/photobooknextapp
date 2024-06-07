"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const img = [
  "/images/slider/FlushMount/3D_Album_1.jpg",
  "/images/slider/FlushMount/3D_Album_3.jpg",
  "/images/slider/FlushMount/3D_Album_4.jpg",
  "/images/slider/FlushMount/3D_Album_5.jpg",
  "/images/slider/FlushMount/3D_AcrylicCoverBrown.jpg",
  "/images/slider/FlushMount/3D_LinenCover_2.jpg",
  "/images/slider/FlushMount/3D_Photobox_Photocover_2.jpg",
  "/images/slider/FlushMount/3D_AcrylicCoverBrown.jpg",
];

function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={50}
        autoplay={{
          delay: 3000,
        }}
        slidesPerView={1}
        modules={[Navigation, Pagination, A11y, Scrollbar, Autoplay]}
        breakpoints={{
          430: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        loop={true}
        pagination={{
          clickable: true,
          el: ".swiper-pagination-custom",
          renderBullet: function (index, className) {
            return `<span class="${className}" tabindex="0" role="button" aria-label="Go to slide ${
              index + 1
            }"></span>`;
          },
        }}
        // scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {img.map((imgs, i) => (
          <SwiperSlide>
            <img
              class="d-block order-lg-2 me-auto me-lg-0 ms-auto"
              src={imgs}
              key={i}
              width="750"
              alt="Image"
            />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination-custom text-center"></div>
      </Swiper>
    </>
  );
}

export default Slider;
