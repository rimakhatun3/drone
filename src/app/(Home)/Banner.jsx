"use client"

import React from 'react';
import img1 from "../../../public/banner1.jpg"
import img2 from "../../../public/banner2.jpg"
import img3 from "../../../public/banner3.jpg"

// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
// import { Autoplay, Navigation ,Pagination} from 'swiper/modules';

import "swiper/css/bundle";
// import bannerData from '@/data/bannerData';
// import SingleBanner1 from './SingleBanner1';
import Image from 'next/image';

const Banner = () => {
    return (
        <div >

<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <Image width={1300} height={500} alt=''src={img3} ></Image>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
    <div className='absolute top-1/3 left-1/4 text-white'>
      <h1 className='text-5xl font-bold my-3'>Get Your <span className='text-sky-700'> Drone</span></h1>
      <p className='text-xl font-semibold'>If you’re buying a drone for the first time, you may want to consider the features, <br/> flight time, <span className='text-sky-700'>camera resolution</span>, accessories and easy of use.</p>

     <div className='justify-center'>
     <button className=' border rounded-2xl bg-sky-700 hover:bg-sky-400 py-4 text-white  px-8 my-5 '>Get Started</button>
     </div>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <Image width={1300} height={500} alt=''src={img2} ></Image>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
    <div className='absolute top-1/3 left-1/4 text-white'>
      <h1 className='text-5xl font-bold my-3'>Get Your <span className='text-sky-700'> Drone</span></h1>
      <p className='text-xl font-semibold'>If you’re buying a drone for the first time, you may want to consider the features, <br/> flight time, <span className='text-sky-700'>camera resolution</span>, accessories and easy of use.</p>

     <div className='justify-center'>
     <button className=' border rounded-2xl bg-sky-700 hover:bg-sky-400 py-4 text-white  px-8 my-5 '>Get Started</button>
     </div>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <Image width={1300} height={500} alt=''src={img1} ></Image>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
    <div className='absolute top-1/3 left-1/4 text-white'>
      <h1 className='text-5xl font-bold my-3'>Get Your <span className='text-sky-700'> Drone</span></h1>
      <p className='text-xl font-semibold'>If you’re buying a drone for the first time, you may want to consider the features, <br/> flight time, <span className='text-sky-700'>camera resolution</span>, accessories and easy of use.</p>

     <div className='justify-center'>
     <button className=' border rounded-2xl bg-sky-700 hover:bg-sky-400 py-4 text-white  px-8 my-5 '>Get Started</button>
     </div>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <Image width={1300} height={500} alt=''src={img3} ></Image>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
    <div className='absolute top-1/3 left-1/4 text-white'>
      <h1 className='text-5xl font-bold my-3'>Get Your <span className='text-sky-700'> Drone</span></h1>
      <p className='text-xl font-semibold'>If you’re buying a drone for the first time, you may want to consider the features, <br/> flight time, <span className='text-sky-700'>camera resolution</span>, accessories and easy of use.</p>

     <div className='justify-center'>
     <button className=' border rounded-2xl bg-sky-700 hover:bg-sky-400 py-4 text-white  px-8 my-5 '>Get Started</button>
     </div>
    </div>
  </div>
</div>


            {/* <Swiper
       spaceBetween={30}
       
       centeredSlides={true}
       autoplay={{
         delay: 2500,
         disableOnInteraction: false,
       }}
       pagination={{
         clickable: true,
       }}
       navigation={true}
       modules={[Autoplay,  Navigation, Pagination]}
        
        
      >
        {bannerData.map((slider) => (
          <SwiperSlide key={slider.id}>
           <SingleBanner1 slider={slider}/>
          </SwiperSlide>
        ))}

        <SwiperSlide>
            <Image alt='' src={img1}></Image>
        </SwiperSlide>
        <SwiperSlide>
            <Image alt='' src={img2}></Image>
        </SwiperSlide>
        <SwiperSlide>
            <Image alt='' src={img3}></Image>
        </SwiperSlide>
      </Swiper> */}
        </div>
    );
};

export default Banner;