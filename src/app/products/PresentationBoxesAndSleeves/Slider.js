"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const img = [
    "/images/JT8A4619.jpg",
    "/images/JT8A4622.jpg",
    "/images/JT8A4625.jpg",
    "/images/JT8A4818.jpg",
    "/images/JT8A4823.jpg",
    "/images/JT8A4840.jpg",
    "/images/JT8A4852.jpg",
    "/images/JT8A4946.jpg",
]

function Slider() {
    return (
        <>
            <Swiper
                spaceBetween={50}
                autoplay={{
                    delay: 5000
                }}
                slidesPerView={1}
                modules={[Navigation, Pagination, A11y, Autoplay]}
                breakpoints={{
                    430: {
                        slidesPerView: 1,
                        spaceBetween: 50,
                    },
                }}
                loop={true}
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {img.map((imgs, i) => <SwiperSlide><img class="d-block order-lg-2 me-auto me-lg-0 ms-auto" src={imgs} key={i} width="750" alt="Image" /></SwiperSlide>)}
            </Swiper >
        </>
    )
}

export default Slider