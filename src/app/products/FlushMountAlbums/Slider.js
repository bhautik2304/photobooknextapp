"use client"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
function Slider() {



    return (
        <>
            {/* <!-- Categories (Slider) --> */}
            <Swiper
                // install Swiper modules
                // modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={3}
                // navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <img src="/images/prasentationsboxandsleeve.svg" alt="Ecommerce" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/prasentationsboxandsleeve.svg" alt="Ecommerce" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/prasentationsboxandsleeve.svg" alt="Ecommerce" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/prasentationsboxandsleeve.svg" alt="Ecommerce" />
                </SwiperSlide>
                ...
            </Swiper>
        </>
    )
}

export default Slider