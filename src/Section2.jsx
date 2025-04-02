import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import './Section2.css';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { SlSocialTwitter } from "react-icons/sl";
import { IoIosArrowRoundForward } from "react-icons/io";
import { SlSocialFacebook } from "react-icons/sl";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { PiInstagramLogoLight } from "react-icons/pi";
const Section2 = () => {
    return (
        <>

            <div id='news'>
                <h1>In the News</h1>
            </div>
            <div id='sv1'>
                <div id='sv2'>
                    <div className='ic' id='ic1'>
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
                            id="swip1"
                        >
                            <SwiperSlide className='sdi'>
                                <img src='https://www.tata.com/content/dam/tata/images/newsroom/press_releases/desktop/fab3_card_hz_desktop_390x362.jpg' />
                                <div className='triangle'></div>
                                <div>
                                    <p className='pr'>PRESS RELEASE</p>
                                    <h1>
                                        Prime Minister Narendra Modi lays the foundation stones for semiconductor fab and semiconductor assembly & test centres
                                    </h1>
                                    <p className='pr1'>Investment outlay of Rs 118,000 crores to generate nearly 50,000 direct and indirect jobs
                                        Arrow</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='sdi'>
                                <img src='https://www.tata.com/content/dam/tata/images/newsroom/press_releases/desktop/fab1_card_hz_desktop_390x362.jpg' />
                                <div className='triangle'></div>
                                <div>
                                    <p className='pr'>PRESS RELEASE</p>
                                    <h1>
                                        Tata Group to Build the Nation’s First Indigenous Semiconductor Assembly and Test facility in Assam to Serve Global Customers
                                    </h1>
                                    <p className='pr1'>INR 27,000 crore investment in a greenfield facility that will serve global customers
                                        Arrow
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='sdi'>
                                <img src='https://www.tata.com/content/dam/tata/images/newsroom/press_releases/desktop/fab2_card_hz_desktop_390x362.jpg' />
                                <div>
                                    <p className='pr'>PRESS RELEASE</p>
                                    <h1>
                                        Tata Group to Build the Nation’s First Fab in Dholera

                                    </h1>
                                    <p className='pr1'>
                                        The fab construction will begin this year with a total investment of up to INR 91,000 cror...

                                    </p>
                                </div>
                                <div className='triangle'></div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='ic' id='ic2'>

                        <SlSocialTwitter id='twicon' />
                        <IoIosArrowRoundForward id='ar1' />
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
                            id='twss' >
                            <SwiperSlide className='tws'>

                                <p>This #WorldPopulationDay we celebrate JRD Tata’s efforts towards establishing the Family Planning Foundation and International Institute of Population Studies. #ThisIsTata https://t.co/GXjF4cJALY...
                                    <br /> <span> 8 months ago</span>
                                </p>
                            </SwiperSlide>
                            <SwiperSlide className='tws'>
                                <p>Sometimes the smallest things, are the biggest innovations. The world’s thinnest watch Titan Edge, created by Titan in 2002, is just one such example. #ThisIsTata https://t.co/EBF1QZ0j16
                                    <br /> <span> 8 months ago</span>

                                </p>
                            </SwiperSlide>
                            <SwiperSlide className='tws'>
                                <p>Timeless words of wisdiom to live by. #WednesdiayWisdiom #ThisIsTata https://t.co/TJA3CTLVcI
                                    <br /> <span> 9 months ago</span>

                                </p>

                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='icc' id='ic3'>
                        {/* <img src='https://scontent-xsp1-1.xx.fbcdn.net/v/t15.5256-10/429985532_394352866868935_7591611477539573095_n.jpg?stp=dst-jpg_p720x720&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=n1uih034sZAAb4V1p0R&_nc_ht=scontent-xsp1-1.xx&edm=AKIiGfEEAAAA&oh=00_AfBrVt8nhS4zLJ6pha0JGLk4Pfxz_FOEpp-XJBJmViVfeg&oe=6626FB2C' /> */}
                        <SlSocialFacebook id='fb1' />
                        <p>
                            Here’s a quick recap of the month. #TataHighlights #ThisIsTata Tata Motors amã Stays & Trails Tata Power Rallis India Ltd.
                            <br /> <span>2 day ago </span>
                        </p>
                        <FaArrowUpRightFromSquare id='arr1' />
                    </div>
                    <div className='icc' id='ic4'>
                        <PiInstagramLogoLight id='in1' />
                        <p>
                            Celebrating 100 years of sustainable growth and the rich heritage of Bombay House. #ThisIsTata
                            <br /> <span>2 day ago </span>
                        </p>
                        <FaArrowUpRightFromSquare id='arr2' />
                        {/* <img src='https://scontent-xsp2-1.cdninstagram.com/v/t51.29350-15/438997615_1177073723462032_6366724926368883373_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=2IzEz9e7cpYAb5b6GXB&_nc_ht=scontent-xsp2-1.cdninstagram.com&edm=AL-3X8kEAAAA&oh=00_AfCrnK3BXe3U-0p0dAegHAlPnehpWOMAxA48kn1immi1DA&oe=6626FC60' /> */}

                    </div>
                </div>
            </div>

        </>
    )
}

export default Section2
