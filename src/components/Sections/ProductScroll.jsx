"use client"
import Image from 'next/image'
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
            <div className="container-fluid">
                <section class="">
                    <div class="">
                        <div class="pt-5">
                            <div class="d-none d-md-block">
                                <Swiper
                                    spaceBetween={0}
                                    slidesPerView={2}
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
                                        <img src="http://localhost:3000/assets/img/albumSwiper/3D_AcrylicCoverBrown.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* <!-- Item--> */}
                                        <img src="http://localhost:3000/assets/img/albumSwiper/3D_Album_1.jpg" />
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
                                        <img src="./assets/img/graphics/card.png" width={500} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* <!-- Item--> */}
                                        <img src="./assets/img/graphics/card.png" width={500} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* <!-- Item--> */}
                                        <img src="./assets/img/graphics/card.png" width={500} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* <!-- Item--> */}
                                        <img src="./assets/img/graphics/card.png" width={500} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* <!-- Item--> */}
                                        <img src="./assets/img/graphics/card.png" width={500} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* <!-- Item--> */}
                                        <img src="./assets/img/graphics/card.png" width={500} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* <!-- Item--> */}
                                        <img src="./assets/img/graphics/card.png" width={500} />
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