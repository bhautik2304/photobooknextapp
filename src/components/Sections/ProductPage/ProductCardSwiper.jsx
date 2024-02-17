"use client"
import React from 'react'
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


function ProductCardSwiper() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={24}
                modules={[Pagination]}
                pagination={{
                    "el": ".swiper-pagination",
                    "clickable": true
                }}
                breakpoints={{
                    "560": {
                        "slidesPerView": 2
                    },
                    "960": {
                        "slidesPerView": 3
                    }
                }}
            >
                <SwiperSlide>
                    <a href="#" className="card card-hover zoom-effect border-0 rounded-5 overflow-hidden">
                        <span className="position-absolute top-0 start-0 w-100 h-100 z-1" style={{ background: "linear-gradient(180deg, rgba(18, 21, 25, 0.00) 35.56%, #121519 95.3%)" }}></span>
                        <div className="position-absolute bottom-0 w-100 z-2 p-4">
                            <div className="px-md-3">
                                <h3 className="h4 text-white mb-0">E-commerce</h3>
                                <div className="d-flex align-items-center justify-content-between opacity-0">
                                    <span className="text-white fs-xs text-truncate opacity-70 pe-3">Order processing, price suggestions, user research</span>
                                    <i className="ai-circle-arrow-right fs-3 text-primary"></i>
                                </div>
                            </div>
                        </div>
                        <div className="zoom-effect-wrapper">
                            <div className="zoom-effect-img">
                                <img src="assets/img/landing/saas-4/categories/ecommerce.jpg" alt="Ecommerce" />
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="#" className="card card-hover zoom-effect border-0 rounded-5 overflow-hidden">
                        <span className="position-absolute top-0 start-0 w-100 h-100 z-1" style={{ background: "linear-gradient(180deg, rgba(18, 21, 25, 0.00) 35.56%, #121519 95.3%)" }}></span>
                        <div className="position-absolute bottom-0 w-100 z-2 p-4">
                            <div className="px-md-3">
                                <h3 className="h4 text-white mb-0">Transportation</h3>
                                <div className="d-flex align-items-center justify-content-between opacity-0">
                                    <span className="text-white fs-xs text-truncate opacity-70 pe-3">Itinerary planning, freight pricing culculations, etc.</span>
                                    <i className="ai-circle-arrow-right fs-3 text-primary"></i>
                                </div>
                            </div>
                        </div>
                        <div className="zoom-effect-wrapper">
                            <div className="zoom-effect-img">
                                <img src="assets/img/landing/saas-4/categories/transportation.jpg" alt="Transportation" />
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="#" className="card card-hover zoom-effect border-0 rounded-5 overflow-hidden">
                        <span className="position-absolute top-0 start-0 w-100 h-100 z-1" style={{ background: "linear-gradient(180deg, rgba(18, 21, 25, 0.00) 35.56%, #121519 95.3%)" }}></span>
                        <div className="position-absolute bottom-0 w-100 z-2 p-4">
                            <div className="px-md-3">
                                <h3 className="h4 text-white mb-0">Marketing</h3>
                                <div className="d-flex align-items-center justify-content-between opacity-0">
                                    <span className="text-white fs-xs text-truncate opacity-70 pe-3">Market research, data visualization, user testing</span>
                                    <i className="ai-circle-arrow-right fs-3 text-primary"></i>
                                </div>
                            </div>
                        </div>
                        <div className="zoom-effect-wrapper">
                            <div className="zoom-effect-img">
                                <img src="assets/img/landing/saas-4/categories/marketing.jpg" alt="Marketing" />
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="#" className="card card-hover zoom-effect border-0 rounded-5 overflow-hidden">
                        <span className="position-absolute top-0 start-0 w-100 h-100 z-1" style={{ background: "linear-gradient(180deg, rgba(18, 21, 25, 0.00) 35.56%, #121519 95.3%)" }}></span>
                        <div className="position-absolute bottom-0 w-100 z-2 p-4">
                            <div className="px-md-3">
                                <h3 className="h4 text-white mb-0">Robotics</h3>
                                <div className="d-flex align-items-center justify-content-between opacity-0">
                                    <span className="text-white fs-xs text-truncate opacity-70 pe-3">Enhancing robot learning, improve robotic precision</span>
                                    <i className="ai-circle-arrow-right fs-3 text-primary"></i>
                                </div>
                            </div>
                        </div>
                        <div className="zoom-effect-wrapper">
                            <div className="zoom-effect-img">
                                <img src="assets/img/landing/saas-4/categories/robotics.jpg" alt="Robotics" />
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="#" className="card card-hover zoom-effect border-0 rounded-5 overflow-hidden">
                        <span className="position-absolute top-0 start-0 w-100 h-100 z-1" style={{ background: "linear-gradient(180deg, rgba(18, 21, 25, 0.00) 35.56%, #121519 95.3%)" }}></span>
                        <div className="position-absolute bottom-0 w-100 z-2 p-4">
                            <div className="px-md-3">
                                <h3 className="h4 text-white mb-0">Programming</h3>
                                <div className="d-flex align-items-center justify-content-between opacity-0">
                                    <span className="text-white fs-xs text-truncate opacity-70 pe-3">Code generation, code debugging and optimization</span>
                                    <i className="ai-circle-arrow-right fs-3 text-primary"></i>
                                </div>
                            </div>
                        </div>
                        <div className="zoom-effect-wrapper">
                            <div className="zoom-effect-img">
                                <img src="assets/img/landing/saas-4/categories/programming.jpg" alt="Programming" />
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
            </Swiper>

            <div className="swiper-pagination position-relative bottom-0 pt-2 pt-md-3 mt-4"></div>
        </>
    )
}

export default ProductCardSwiper