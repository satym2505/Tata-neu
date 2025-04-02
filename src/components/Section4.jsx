import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import './Section4.css'
import { IoIosArrowRoundForward } from "react-icons/io"
import { IoIosPeople } from "react-icons/io";
import CountUp from 'react-countup';

const Section4 = () => {
  return (
    <>
      <div id='sec3'>
    <div id='Career'> 
                 <h1>Careers</h1> 
             </div>
      <div id='sec4'>
        <div id='sec31'>
        <img src='https://www.tata.com/content/dam/tata/images/careers/desktop/fakejobs_card_hz_desktop_390x362.jpg' id='imgr'/>
            <div id='sect1'></div>
            <div id='sect2'>
              <p id='cr1'>CAREERS</p>
              <h1>Beware of Job Scams</h1>
              <p id='cr2'>We do not charge/accept any amount or security deposit from job seekers. Read disclaimer.</p>
              <IoIosArrowRoundForward id='aree1'/>
            </div>
        </div>
        <div id='sec32'>
        <p id='tr1'>#IMAGINETHAT</p>
        <div id='bxb'>
          <h1 id='tr2'>Tata Imagination Challenge 2023</h1>
         <span> <p>Meet the winners!</p> </span>
         
        </div>
        <IoIosArrowRoundForward id='aree2'/>
        </div>
        <div id='sec33'>
          <p id='pin'> IN NUMBERS</p>
          <IoIosPeople id='peop' />
          <h1 id='nu'>
            <CountUp start={0} end={1000000} duration={2} delay={0}/>
          </h1>  
          <p id='epl'>Employees at the Tata <span> group </span></p>
          <IoIosArrowRoundForward id='aree3'/>
        </div>
        <div id='sec34'>
        <div id='sid3'>
                              <p>CAREERS</p>
                              <h1>Featured Jobs</h1>
                            </div>
                           
        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay
                            ]}
                            spaceBetween={50}
                            slidesPerView={1}
                            autoplay={{ delay: 3000 }}
                            // navigation
                            pagination={{ clickable: true }}
                            // scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            id='twstw' >
                            <SwiperSlide className='tws2'>
                            <div className='lin'>
                                <p> Project Planner

                                    <br /> <span> JLR, Gaydon</span>
                                    </p>
                                    </div>
                      <div className='lin'>
                                    <p>Manager, BIU and Analytics
                                    <span>Tata AIA Life, Mumbai </span>
                                    </p>
                                    </div>

                                
                            </SwiperSlide>
                            <SwiperSlide className='tws2'>
                            <div className='lin'>
                                <p> Senior Project Planner

                                    <br /> <span> JLR, Gaydon</span>
                                    </p>
                                    </div>
                                    <div className='lin'>
                                    <p>Manager, BIU and Analytics
                                    <span>Tata AIA Life, Mumbai </span>
                                    </p>
                                    </div>

                                
                            </SwiperSlide>
                            <SwiperSlide className='tws2'>
                            <div className='lin'>
                                <p>Senior Project Planner

                                    <br /> <span> JLR, Gaydon</span>
                                    </p>
                                    </div>
                                    <div className='lin'>
                                    <p>Manager, BIU and Analytics
                                    <span>Tata AIA Life, Mumbai </span>
                                    </p>
                                    </div>

                                
                            </SwiperSlide>
                         </Swiper>
                         <IoIosArrowRoundForward id='aree4'/>
                    </div>
        </div>
      </div>
    </>
  )
}

export default Section4
