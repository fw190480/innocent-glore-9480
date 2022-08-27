import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Heading from './Heading';


export default function Section1() {
    return (
        <>
            <Heading title = "WHAT'S IN THE BEG" />
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                pagination={
                    { clickable: true }
                }
            >
                <div className='section1-item' key={11}>
                    <SwiperSlide >
                        <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-3_c51024ea-e8b5-49e6-a60f-7ebadf441433_2048x.png?v=1659674566" alt="" />
                    </SwiperSlide>
                    
                    
                </div>
                <div className='section1-item' key={12}>
                    <SwiperSlide >
                        <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-5_6626eab8-e174-491f-9b2e-ec771773381a_2048x.png?v=1659887286" alt="" />
                    </SwiperSlide>
                </div>
                <div className='section1-item' key={13}>
                    <SwiperSlide >
                        <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-4_194ea6fc-6a60-49cd-9f31-04cab8aa4296_2048x.png?v=1660019997" alt="" />
                    </SwiperSlide>
                </div>
                <div className='section1-item' key={14}>
                    <SwiperSlide >
                        <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-7_2048x.gif?v=1661148766" alt="" />
                        </SwiperSlide>
                </div>
                <div className='section1-item' key={15}>
                    <SwiperSlide >
                        <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-6_1_2048x.gif?v=1660802195" alt="" />
                    </SwiperSlide>
                </div>
                <div className='section1-item' key={16}>
                    <SwiperSlide >
                        <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-7_2048x.gif?v=1661148766" alt="" />
                    </SwiperSlide>
                </div>
                <div className='section1-item' key={17}>
                    <SwiperSlide >
                        <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-2_9bedf574-c534-4874-91c5-e28b5c916023_2048x.png?v=1659500490" alt="" />
                    </SwiperSlide>
                </div>
            </Swiper>
        </>
    )
}

