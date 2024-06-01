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
                    delay: 5000
                }}
                slidesPerView={1}
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                breakpoints={{
                    430: {
                        slidesPerView: 1,
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

                            <div
                                className="card shadow-lg h-100 border-0 overflow-hidden"
                                style={{ minHeight: "100%", borderRadius: "5px", width: "100%" }}
                            >
                                {/* <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-10"></span> */}
                                <div className="">
                                    <img src={imgs} />
                                </div>
                            </div>
                        </center>
                    </SwiperSlide>
                ))}
                <div className="swiper-pagination-custom"></div>
            </Swiper>
        </>
    )
}

export default Slider