import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import arrl from './Section5data'
import { Swiper, SwiperSlide } from 'swiper/react';
import './Section5.css';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
const Section5 = () => {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        // navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        id="lali">
        {arrl.map((i) => (
          <SwiperSlide id='prani'>
            <img id='imageswi' src={i.shiva} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Section5
