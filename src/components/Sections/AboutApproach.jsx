"use client"
import React from 'react'
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


function AboutApproach() {
    return (
        <>
            <Swiper
                spaceBetween={24}
                modules={[Pagination]}
                pagination={{
                    el: ".swiper-pagination",
                    clickable: true
                }}
                breakpoints={{ 
                    "576": { "slidesPerView": 2 },
                    "992": { "slidesPerView": 2 }
                 }}
            >
                <SwiperSlide>
                    <div class="card border-0 bg-secondary rounded-5 h-100">
                        <div class="card-body">
                            <svg class="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                <g class="text-info">
                                    <path d="M20.0004 36.0226L10.982 21.3535C9.42594 23.3156 8.49609 25.7968 8.49609 28.4955C8.49609 34.8492 13.6467 39.9998 20.0004 39.9998C26.3541 39.9998 31.5047 34.8492 31.5047 28.4955C31.5047 25.7969 30.5749 23.3156 29.0188 21.3535L20.0004 36.0226Z" fill="currentColor"></path>
                                </g>
                                <g class="text-primary">
                                    <path d="M39.3962 0H0.605469L20.0009 31.5477L39.3962 0ZM25.7601 7.62359L20.0009 16.9914L14.2416 7.62359H25.7601Z" fill="currentColor"></path>
                                </g>
                            </svg>
                            <h3 class="h4">Attention to Detail</h3>
                            <p class="mb-0">Photokrafft's professional approach to album printing is characterized by meticulous attention to detail at every stage of the process. From initial design consultations to final quality checks, our team ensures that every aspect of the album meets the highest standards of excellence.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card border-0 bg-secondary rounded-5 h-100">
                        <div class="card-body">
                            <svg class="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                <g class="text-info">
                                    <path d="M26.307 23.1116C26.307 28.3136 22.09 32.5307 16.888 32.5307C11.6859 32.5307 7.46891 28.3136 7.46891 23.1116C7.46891 17.9096 11.6859 13.6925 16.888 13.6925C17.1467 13.6925 17.4028 13.7038 17.6562 13.7243V6.24121C17.4016 6.22973 17.1455 6.22363 16.888 6.22363C7.56102 6.22363 0 13.7846 0 23.1116C0 32.4386 7.56102 39.9996 16.888 39.9996C26.2149 39.9996 33.7759 32.4386 33.7759 23.1116C33.7759 22.8541 33.7698 22.598 33.7584 22.3433H26.2753C26.2958 22.5968 26.307 22.8529 26.307 23.1116Z" fill="currentColor"></path>
                                </g>
                                <g class="text-primary">
                                    <path d="M40 20C40 8.9543 31.0457 0 20 0V20H40Z" fill="currentColor"></path>
                                </g>
                            </svg>
                            <h3 class="h4">Expertise and Experience</h3>
                            <p class="mb-0">With over a decade of experience in the industry, Photokrafft brings a wealth of expertise to every project. Our team of skilled designers, printers, and craftsmen have honed their craft through years of practice and innovation. We leverage our collective knowledge and technical proficiency to overcome challenges</p>
                        </div>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div class="card border-0 bg-secondary rounded-5 h-100">
                        <div class="card-body">
                            <svg class="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                <g class="text-primary">
                                    <path d="M25.2791 12.7502C28.1954 9.83389 28.1954 5.10556 25.2791 2.18921C22.3627 -0.727136 17.6344 -0.727137 14.718 2.18921C11.8017 5.10556 11.8017 9.83389 14.718 12.7502C17.6344 15.6666 22.3627 15.6666 25.2791 12.7502Z" fill="currentColor"></path>
                                </g>
                                <g class="text-info">
                                    <path d="M14.6859 29.3056C15.6559 27.0123 16.9202 24.8838 18.4577 22.9467C13.8666 17.9802 7.29664 14.8701 0 14.8701V40.0004H12.5259C12.5259 36.2925 13.2527 32.6942 14.6859 29.3056Z" fill="currentColor"></path>
                                </g>
                                <g class="text-primary">
                                    <path d="M40.0014 40.0004V14.8701C26.1223 14.8701 14.8711 26.1214 14.8711 40.0004H40.0014Z" fill="currentColor"></path>
                                </g>
                            </svg>
                            <h3 class="h4">Step by step work</h3>
                            <p class="mb-0">More erat leo proin odio est sed sit felis facilisi integer sed congue neque turpis dictumst sit sed volutpat aliquet tortor.</p>
                        </div>
                    </div>
                </SwiperSlide> */}
                <div class="swiper-pagination position-relative bottom-0 mt-2 pt-4 d-lg-none"></div>
            </Swiper>
        </>
    )
}

export default AboutApproach