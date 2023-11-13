"use client"

import React from 'react'
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function ProductScroll() {
    return (
        <>
            {/* Testyminial */}
            <div className="container">
                <section class="">
                    <div class="">
                        <div class="pt-5">
                            <div class="d-none d-md-block">
                                <Swiper
                                    spaceBetween={50}
                                    slidesPerView={6}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    // navigation={true}
                                    modules={[Autoplay]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        {/* <!-- Item--> */}
                                        <img src="./assets/img/graphics/card.png" className="m-5" width={150} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* <!-- Item--> */}
                                        <img src="./assets/img/graphics/card.png" className="m-5" width={150} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* <!-- Item--> */}
                                        <img src="./assets/img/graphics/card.png" className="m-5" width={150} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* <!-- Item--> */}
                                        <img src="./assets/img/graphics/card.png" className="m-5" width={150} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* <!-- Item--> */}
                                        <img src="./assets/img/graphics/card.png" className="m-5" width={150} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* <!-- Item--> */}
                                        <img src="./assets/img/graphics/card.png" className="m-5" width={150} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* <!-- Item--> */}
                                        <img src="./assets/img/graphics/card.png" className="m-5" width={150} />
                                    </SwiperSlide>
                                </Swiper>
                            </div>

                            <div class="d-md-none d-lg-none">
                                <Swiper
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    // navigation={true}
                                    modules={[Autoplay]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        {/* <!-- Item--> */}
                                        <img src="./assets/img/graphics/card.png" className="m-5" width={150} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* <!-- Item--> */}
                                        <img src="./assets/img/graphics/card.png" className="m-5" width={150} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* <!-- Item--> */}
                                        <img src="./assets/img/graphics/card.png" className="m-5" width={150} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* <!-- Item--> */}
                                        <img src="./assets/img/graphics/card.png" className="m-5" width={150} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* <!-- Item--> */}
                                        <img src="./assets/img/graphics/card.png" className="m-5" width={150} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* <!-- Item--> */}
                                        <img src="./assets/img/graphics/card.png" className="m-5" width={150} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* <!-- Item--> */}
                                        <img src="./assets/img/graphics/card.png" className="m-5" width={150} />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        {/* <!-- Pagination (bullets)--> */}
                        {/* <div class="swiper-pagination position-relative bottom-0 mt-2 mt-lg-3 pt-4"></div> */}
                    </div>
                </section>
            </div>
        </>
    )
}

export default ProductScroll