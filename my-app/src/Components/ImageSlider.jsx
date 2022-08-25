import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from 'react';

export default function ImageSlider() {
    
    return (
        <div>
            <Swiper
                // pagination={{
                //     type: "fraction",
                // }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src='https://images.pexels.com/photos/3800060/pexels-photo-3800060.jpeg?auto=compress&cs=tinysrgb&w=900' /></SwiperSlide>
                <SwiperSlide><img src='https://images.pexels.com/photos/7290089/pexels-photo-7290089.jpeg?auto=compress&cs=tinysrgb&w=900' /></SwiperSlide>
                <SwiperSlide><img src='https://images.pexels.com/photos/7440054/pexels-photo-7440054.jpeg?auto=compress&cs=tinysrgb&w=900' /></SwiperSlide>
                <SwiperSlide><img src='https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=900' /></SwiperSlide>
                <SwiperSlide><img src='https://images.unsplash.com/photo-1631390179406-0bfe17e9f89d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJlYXV0eSUyMHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60' /></SwiperSlide>
                <SwiperSlide><img src='https://images.pexels.com/photos/1029894/pexels-photo-1029894.jpeg?auto=compress&cs=tinysrgb&w=900' /></SwiperSlide>
            </Swiper>
        </div>
    )
}
