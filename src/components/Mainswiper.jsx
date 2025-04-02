import React, { useState } from 'react'
import { Navigation, Autoplay,Scrollbar } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import arr from './Mianswiperdata'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import './Mainswiper.css'
import { IoIosArrowRoundForward } from "react-icons/io"
import { Fade } from "react-awesome-reveal";
import { LiaAngleRightSolid } from "react-icons/lia";
import { LiaAngleLeftSolid } from "react-icons/lia";
import { BsChevronDown } from "react-icons/bs";
import { FiPlay } from "react-icons/fi";
import { VscDebugPause } from "react-icons/vsc";

const Mainswiper = () => {
  const [a,seta] = useState(1);
  const [isAutoplay, setIsAutoplay] = useState(true);

    const toggleAutoplay = () => {
        setIsAutoplay(!isAutoplay);
    };

  const plusOne = () => {
    let incrementedValue = a + 1;
    if (incrementedValue === 4) {
      seta(1);
    } else {
      seta(incrementedValue);
    }
  }

  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Autoplay,Scrollbar]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={isAutoplay ? { delay: 3000 } : false}
        navigation={{
          nextEl:'.swiper-botton-next',
          prevEl:'.swiper-botton-prev',
        }}
        scrollbar={{
          el:'.swiper-scrollbar',
        }}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        id='swiperr'
      >
        {arr.map((i) => (

          <SwiperSlide className='slid'>
            <div id='slider'>
            <Fade duration={2000}>

              <div id='content'>
                <div id='bl'>{i.bl}</div>
                <h1>{i.heading}</h1>
                <div id='igit'>
                  <p>{i.igit}</p>
                  <div id='vt'><p1>{i.vt}</p1> <IoIosArrowRoundForward id='p'/></div>
                </div>
              </div>
            </Fade>
            <div className="dark-overlay"></div>
              <img  src={i.image} id='igti2'/>
            </div>
            <div id='arri'>
    
            <BsChevronDown id='i1' className='iit21'/>
            <BsChevronDown id='i2' className='iit21'/>
            <BsChevronDown id='i3' className='iit21'/>
            <BsChevronDown id='i4' className='iit21'/>
      </div>
          </SwiperSlide>

        ))}
        
        <div id='container'>
        <div className='pagenum' id='pagr'>{a}/3</div>
       <div className='swiper-scrollbar' id='strt'></div>
        <div className='swiper-botton-next' id='next' onClick={()=>plusOne()}>Next  <LiaAngleRightSolid id='rig' /></div>
       <div className='swiper-botton-prev' id='prev' > <LiaAngleLeftSolid id='nex'/>Prev </div>
       <button id='btn1' onClick={()=>toggleAutoplay()} style={{ border: 'none', background: 'none', padding: 0 }}>
                        
                        {isAutoplay ? <FiPlay /> :<VscDebugPause /> }
                    </button>
        </div>
        
    
      </Swiper>

    </>
  )
}

export default Mainswiper
