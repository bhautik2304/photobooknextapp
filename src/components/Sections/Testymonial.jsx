"use client"

import React from 'react'
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Testymonial() {
    return (
        <>
            {/* Testyminial */}
            <div className="container">
                <section class="container py-5 mb-1 mb-sm-2 my-lg-3 my-xl-4 my-xxl-5">
                    <div class="row justify-content-center pt-2 pt-sm-4 pb-4 mb-2 mb-lg-3">
                        <div class="col-lg-8 col-xl-7 col-xxl-6 text-center pt-2">
                            <h2 class="h1 mb-1">what says our client</h2>
                        </div>
                    </div>
                    <div class="pb-2 pb-sm-4">
                        <div class="pt-5">
                            <div class="d-none d-md-block">
                                <Swiper
                                    spaceBetween={50}
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
                                        <div class="h-auto pt-5">
                                            <div class="card border-0 bg-faded-info h-100 text-center">
                                                <div class="polygon-avatar bg-info mx-auto translate-middle-y"><img src="assets/img/landing/mobile-app-showcase/testimonials/01.png" alt="Nick Williams" /></div>
                                                <div class="card-body pt-0 mt-n4">
                                                    <p class="card-text fs-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis libero vitae sem ornare ornare. Aliquam ut sapien vitae quam blandit egestas. Quisque nulla elit, fermentum et tincidunt tempor, rutrum at leo. Curabitur massa quam, aliquam eu sapien sed.</p>
                                                </div>
                                                <div class="card-footer border-0 pt-0">
                                                    <div class="h4 mb-1">Nick Williams</div><span>Student</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        {/* <!-- Item--> */}
                                        <div class=" h-auto pt-5">
                                            <div class="card border-0 bg-faded-warning h-100 text-center">
                                                <div class="polygon-avatar bg-warning mx-auto translate-middle-y"><img src="assets/img/landing/mobile-app-showcase/testimonials/02.png" alt="Lili Bocouse" /></div>
                                                <div class="card-body pt-0 mt-n4">
                                                    <p class="card-text fs-xl">Proin interdum purus non quam convallis, quis dignissim leo cursus. Praesent finibus elit nisl, sed ultrices elit lobortis in. Donec laoreet sit amet nulla quis hendrerit. Praesent venenatis mattis ante. Praesent justo elit, suscipit a libero sit amet, luctus posuere mi.</p>
                                                </div>
                                                <div class="card-footer border-0 pt-0">
                                                    <div class="h4 mb-1">Lili Bocouse</div><span>Student</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        {/* <!-- Item--> */}
                                        <div class=" h-auto pt-5">
                                            <div class="card border-0 bg-faded-primary h-100 text-center">
                                                <div class="polygon-avatar bg-primary mx-auto translate-middle-y"><img src="assets/img/landing/mobile-app-showcase/testimonials/04.png" alt="Esther Howard" /></div>
                                                <div class="card-body pt-0 mt-n4">
                                                    <p class="card-text fs-xl">Viverra aliquam interdum mauris facilisi commodo euismod sit est. Et auctor diam a ac vitae vestibulum, eu. Tortor id aliquet rhoncus at orci et tempus, dictum turpis. Purus sit porta lacus, velit. Bibendum at nunc et, ac id vitae nibh semper in dignissim ac nascetur lorem et.</p>
                                                </div>
                                                <div class="card-footer border-0 pt-0">
                                                    <div class="h4 mb-1">Esther Howard</div><span>Student</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        {/* <!-- Item--> */}
                                        <div class=" h-auto pt-5">
                                            <div class="card border-0 bg-faded-danger h-100 text-center">
                                                <div class="polygon-avatar bg-danger mx-auto translate-middle-y"><img src="assets/img/landing/mobile-app-showcase/testimonials/03.png" alt="Jane Cooper" /></div>
                                                <div class="card-body pt-0 mt-n4">
                                                    <p class="card-text fs-xl">Nam arcu ut in bibendum tincidunt quam massa vitae viverra sem eget. Felis morbi augue cras praesent arcu purus non id consequat dignissim sollicitudin tincidunt dui, dui felis ut ultricies vestibulum ipsum ullamcorper nunc at massa a aliquam massa lacus enim.</p>
                                                </div>
                                                <div class="card-footer border-0 pt-0">
                                                    <div class="h4 mb-1">Jane Cooper</div><span>Student</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* <!-- Item--> */}
                                        <div class="h-auto pt-5">
                                            <div class="card border-0 bg-faded-info h-100 text-center">
                                                <div class="polygon-avatar bg-info mx-auto translate-middle-y"><img src="assets/img/landing/mobile-app-showcase/testimonials/01.png" alt="Nick Williams" /></div>
                                                <div class="card-body pt-0 mt-n4">
                                                    <p class="card-text fs-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis libero vitae sem ornare ornare. Aliquam ut sapien vitae quam blandit egestas. Quisque nulla elit, fermentum et tincidunt tempor, rutrum at leo. Curabitur massa quam, aliquam eu sapien sed.</p>
                                                </div>
                                                <div class="card-footer border-0 pt-0">
                                                    <div class="h4 mb-1">Nick Williams</div><span>Student</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        {/* <!-- Item--> */}
                                        <div class=" h-auto pt-5">
                                            <div class="card border-0 bg-faded-warning h-100 text-center">
                                                <div class="polygon-avatar bg-warning mx-auto translate-middle-y"><img src="assets/img/landing/mobile-app-showcase/testimonials/02.png" alt="Lili Bocouse" /></div>
                                                <div class="card-body pt-0 mt-n4">
                                                    <p class="card-text fs-xl">Proin interdum purus non quam convallis, quis dignissim leo cursus. Praesent finibus elit nisl, sed ultrices elit lobortis in. Donec laoreet sit amet nulla quis hendrerit. Praesent venenatis mattis ante. Praesent justo elit, suscipit a libero sit amet, luctus posuere mi.</p>
                                                </div>
                                                <div class="card-footer border-0 pt-0">
                                                    <div class="h4 mb-1">Lili Bocouse</div><span>Student</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        {/* <!-- Item--> */}
                                        <div class=" h-auto pt-5">
                                            <div class="card border-0 bg-faded-primary h-100 text-center">
                                                <div class="polygon-avatar bg-primary mx-auto translate-middle-y"><img src="assets/img/landing/mobile-app-showcase/testimonials/04.png" alt="Esther Howard" /></div>
                                                <div class="card-body pt-0 mt-n4">
                                                    <p class="card-text fs-xl">Viverra aliquam interdum mauris facilisi commodo euismod sit est. Et auctor diam a ac vitae vestibulum, eu. Tortor id aliquet rhoncus at orci et tempus, dictum turpis. Purus sit porta lacus, velit. Bibendum at nunc et, ac id vitae nibh semper in dignissim ac nascetur lorem et.</p>
                                                </div>
                                                <div class="card-footer border-0 pt-0">
                                                    <div class="h4 mb-1">Esther Howard</div><span>Student</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        {/* <!-- Item--> */}
                                        <div class=" h-auto pt-5">
                                            <div class="card border-0 bg-faded-danger h-100 text-center">
                                                <div class="polygon-avatar bg-danger mx-auto translate-middle-y"><img src="assets/img/landing/mobile-app-showcase/testimonials/03.png" alt="Jane Cooper" /></div>
                                                <div class="card-body pt-0 mt-n4">
                                                    <p class="card-text fs-xl">Nam arcu ut in bibendum tincidunt quam massa vitae viverra sem eget. Felis morbi augue cras praesent arcu purus non id consequat dignissim sollicitudin tincidunt dui, dui felis ut ultricies vestibulum ipsum ullamcorper nunc at massa a aliquam massa lacus enim.</p>
                                                </div>
                                                <div class="card-footer border-0 pt-0">
                                                    <div class="h4 mb-1">Jane Cooper</div><span>Student</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* <!-- Item--> */}
                                        <div class="h-auto pt-5">
                                            <div class="card border-0 bg-faded-info h-100 text-center">
                                                <div class="polygon-avatar bg-info mx-auto translate-middle-y"><img src="assets/img/landing/mobile-app-showcase/testimonials/01.png" alt="Nick Williams" /></div>
                                                <div class="card-body pt-0 mt-n4">
                                                    <p class="card-text fs-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis libero vitae sem ornare ornare. Aliquam ut sapien vitae quam blandit egestas. Quisque nulla elit, fermentum et tincidunt tempor, rutrum at leo. Curabitur massa quam, aliquam eu sapien sed.</p>
                                                </div>
                                                <div class="card-footer border-0 pt-0">
                                                    <div class="h4 mb-1">Nick Williams</div><span>Student</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        {/* <!-- Item--> */}
                                        <div class=" h-auto pt-5">
                                            <div class="card border-0 bg-faded-warning h-100 text-center">
                                                <div class="polygon-avatar bg-warning mx-auto translate-middle-y"><img src="assets/img/landing/mobile-app-showcase/testimonials/02.png" alt="Lili Bocouse" /></div>
                                                <div class="card-body pt-0 mt-n4">
                                                    <p class="card-text fs-xl">Proin interdum purus non quam convallis, quis dignissim leo cursus. Praesent finibus elit nisl, sed ultrices elit lobortis in. Donec laoreet sit amet nulla quis hendrerit. Praesent venenatis mattis ante. Praesent justo elit, suscipit a libero sit amet, luctus posuere mi.</p>
                                                </div>
                                                <div class="card-footer border-0 pt-0">
                                                    <div class="h4 mb-1">Lili Bocouse</div><span>Student</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        {/* <!-- Item--> */}
                                        <div class=" h-auto pt-5">
                                            <div class="card border-0 bg-faded-primary h-100 text-center">
                                                <div class="polygon-avatar bg-primary mx-auto translate-middle-y"><img src="assets/img/landing/mobile-app-showcase/testimonials/04.png" alt="Esther Howard" /></div>
                                                <div class="card-body pt-0 mt-n4">
                                                    <p class="card-text fs-xl">Viverra aliquam interdum mauris facilisi commodo euismod sit est. Et auctor diam a ac vitae vestibulum, eu. Tortor id aliquet rhoncus at orci et tempus, dictum turpis. Purus sit porta lacus, velit. Bibendum at nunc et, ac id vitae nibh semper in dignissim ac nascetur lorem et.</p>
                                                </div>
                                                <div class="card-footer border-0 pt-0">
                                                    <div class="h4 mb-1">Esther Howard</div><span>Student</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        {/* <!-- Item--> */}
                                        <div class=" h-auto pt-5">
                                            <div class="card border-0 bg-faded-danger h-100 text-center">
                                                <div class="polygon-avatar bg-danger mx-auto translate-middle-y"><img src="assets/img/landing/mobile-app-showcase/testimonials/03.png" alt="Jane Cooper" /></div>
                                                <div class="card-body pt-0 mt-n4">
                                                    <p class="card-text fs-xl">Nam arcu ut in bibendum tincidunt quam massa vitae viverra sem eget. Felis morbi augue cras praesent arcu purus non id consequat dignissim sollicitudin tincidunt dui, dui felis ut ultricies vestibulum ipsum ullamcorper nunc at massa a aliquam massa lacus enim.</p>
                                                </div>
                                                <div class="card-footer border-0 pt-0">
                                                    <div class="h4 mb-1">Jane Cooper</div><span>Student</span>
                                                </div>
                                            </div>
                                        </div>
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
                                        <div class="h-auto pt-5">
                                            <div class="card border-0 bg-faded-info h-100 text-center">
                                                <div class="polygon-avatar bg-info mx-auto translate-middle-y"><img src="assets/img/landing/mobile-app-showcase/testimonials/01.png" alt="Nick Williams" /></div>
                                                <div class="card-body pt-0 mt-n4">
                                                    <p class="card-text fs-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis libero vitae sem ornare ornare. Aliquam ut sapien vitae quam blandit egestas. Quisque nulla elit, fermentum et tincidunt tempor, rutrum at leo. Curabitur massa quam, aliquam eu sapien sed.</p>
                                                </div>
                                                <div class="card-footer border-0 pt-0">
                                                    <div class="h4 mb-1">Nick Williams</div><span>Student</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        {/* <!-- Item--> */}
                                        <div class=" h-auto pt-5">
                                            <div class="card border-0 bg-faded-warning h-100 text-center">
                                                <div class="polygon-avatar bg-warning mx-auto translate-middle-y"><img src="assets/img/landing/mobile-app-showcase/testimonials/02.png" alt="Lili Bocouse" /></div>
                                                <div class="card-body pt-0 mt-n4">
                                                    <p class="card-text fs-xl">Proin interdum purus non quam convallis, quis dignissim leo cursus. Praesent finibus elit nisl, sed ultrices elit lobortis in. Donec laoreet sit amet nulla quis hendrerit. Praesent venenatis mattis ante. Praesent justo elit, suscipit a libero sit amet, luctus posuere mi.</p>
                                                </div>
                                                <div class="card-footer border-0 pt-0">
                                                    <div class="h4 mb-1">Lili Bocouse</div><span>Student</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        {/* <!-- Item--> */}
                                        <div class=" h-auto pt-5">
                                            <div class="card border-0 bg-faded-primary h-100 text-center">
                                                <div class="polygon-avatar bg-primary mx-auto translate-middle-y"><img src="assets/img/landing/mobile-app-showcase/testimonials/04.png" alt="Esther Howard" /></div>
                                                <div class="card-body pt-0 mt-n4">
                                                    <p class="card-text fs-xl">Viverra aliquam interdum mauris facilisi commodo euismod sit est. Et auctor diam a ac vitae vestibulum, eu. Tortor id aliquet rhoncus at orci et tempus, dictum turpis. Purus sit porta lacus, velit. Bibendum at nunc et, ac id vitae nibh semper in dignissim ac nascetur lorem et.</p>
                                                </div>
                                                <div class="card-footer border-0 pt-0">
                                                    <div class="h4 mb-1">Esther Howard</div><span>Student</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        {/* <!-- Item--> */}
                                        <div class=" h-auto pt-5">
                                            <div class="card border-0 bg-faded-danger h-100 text-center">
                                                <div class="polygon-avatar bg-danger mx-auto translate-middle-y"><img src="assets/img/landing/mobile-app-showcase/testimonials/03.png" alt="Jane Cooper" /></div>
                                                <div class="card-body pt-0 mt-n4">
                                                    <p class="card-text fs-xl">Nam arcu ut in bibendum tincidunt quam massa vitae viverra sem eget. Felis morbi augue cras praesent arcu purus non id consequat dignissim sollicitudin tincidunt dui, dui felis ut ultricies vestibulum ipsum ullamcorper nunc at massa a aliquam massa lacus enim.</p>
                                                </div>
                                                <div class="card-footer border-0 pt-0">
                                                    <div class="h4 mb-1">Jane Cooper</div><span>Student</span>
                                                </div>
                                            </div>
                                        </div>
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

export default Testymonial