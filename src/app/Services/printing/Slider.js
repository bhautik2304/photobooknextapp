"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


function Slider({ img = [] }) {
    return (
        <>
            <Swiper
                spaceBetween={50}
                autoplay={{
                    delay: 5000,
                    pauseOnMouseEnter: true
                }}
                slidesPerView={2}
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 2,
                    },
                }}
                loop={true}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination-custom',
                    renderBullet: function (index, className) {
                        return `<span class="${className}" tabindex="0" role="button" aria-label="Go to slide ${index + 1}"></span>`;
                    },
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {img.map((imgs, i) => (
                    <SwiperSlide key={i}>
                        <center>
                            <img src={imgs} style={{ height: "100%", borderRadius: "5px", }} />
                        </center>
                    </SwiperSlide>
                ))}
                <div className="swiper-pagination-custom"></div>
            </Swiper >
        </>
    )
}

export default Slider