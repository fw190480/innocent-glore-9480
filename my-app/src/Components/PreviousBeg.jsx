import React from 'react'
// import Swiper from 'swiper'
import { Swiper,SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import Heading from './Heading'

export default function PreviousBeg() {
    return (
        <div>
            <Heading key={1000} title='PREVIOUS BAGS' />
            <div className='bottom-box-slider' >
                <Swiper
                    slidesPerView={4}
                    spaceBetween={18}
                    pagination={
                        { clickable: true }
                    }
                >
                    <SwiperSlide>
                      <div>
                      <img src='https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-1_large.gif?v=1656064858' /> 
                      </div>
                      <div>
                        <p>Jul 22 the Beauty Bundle flag beg</p>
                        <h3>Rs. 599.00</h3>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div>
                      <img src='https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-2---Skincare-3_large.gif?v=1655088937' /> 
                      </div>
                      <div>
                        <p>Apr'22 The Sassy Spring Fab Bag</p>
                        <h3>From Rs. 599.00 </h3>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div>
                      <img src='https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Skincare-2-With-BONUS_large.gif?v=1652238042' /> 
                      </div>
                      <div>
                        <p>Mar'22 The Empow-HER Fab Bag</p>
                        <h3>Rs. 649.00 </h3>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div>
                      <img src='https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal-3_1728264b-2e0f-4314-9a3c-0fde458d72a7_large.png?v=1649483317' /> 
                      </div>
                      <div>
                        <p>Feb'22 The Colour Me Cupid Fab Bag</p>
                        <h3>Rs. 799.00 </h3>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div>
                      <img src='https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal-3_large.png?v=1646971494' /> 
                      </div>
                      <div>
                        <p>Jun'22 The Make it Reign Fab Bag</p>
                        <h3> From Rs. 399.00 </h3>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div>
                      <img src='https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal-2_large.gif?v=1644395072' /> 
                      </div>
                      <div>
                        <p>May'22 The AweSummer May Fab</p>
                        <h3>From Rs. 599.00 </h3>
                      </div>
                    </SwiperSlide>
                  
                 
                 

                </Swiper>
            </div>
        </div>
    )
}
