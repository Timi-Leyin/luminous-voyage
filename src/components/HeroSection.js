import React, { useState, useRef, useEffect } from "react";
// import Carousel from 'react-bootstrap/Carousel'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Swiper from "swiper";
import "swiper/css";
import Slide from './Slide'

function HeroSection(props) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    new Swiper(ref.current, {
      keyboard:true,
      loop:true,
      autoPlay:true,
      effect:'fade',
      pagination:{
        el:'.swiper-pagination',
        clickable:true
      },
      navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
      }
    });
  }, [ref]);
  return (
    <div className="swiper" ref={ref}>
      <div className="swiper-wrapper">
      {/* <Slide>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
              cupiditate ea nam praesentium debitis hic ber quibusdam
              voluptatibus officia expedita corpori.
      </Slide> */}
      <Slide heading='FNULA' src='https://rioslandscapingtree.files.wordpress.com/2021/09/114310.jpg' subHeading='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,' btn='Get Started' to='/' />
      <Slide heading='Second slide label' src='https://petapixel.com/assets/uploads/2021/06/Social-Medias-Impact-on-Landscape-and-Nature-Photography.jpg' subHeading='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,' btn='Get Started' to='/' />
      <Slide heading='Third slide label' src='https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-4.jpg?fit=1500%2C908&ssl=1' subHeading='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,' btn='Get Started' to='/' />
      </div>
     
     <div className='swiper-pagination swiper-pagination-white'></div>

     <div className='swiper-button-next swiper-button-white'></div>
     <div className='swiper-button-prev swiper-button-white'></div>
    </div>
  );
}

export default HeroSection;
