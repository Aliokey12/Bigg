import React from 'react'
import Slid, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import Marquee from "react-fast-marquee";

export default function Herosection() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        cssEase: "linear"
    };

   
    return (
        <div className='mt-5'>
            <a id='İndirimler'  href="#">İndirimler</a>
          
          <Marquee className='bg-black w-full h-7 text-white  '>
<h1 className='pr-12'>
500TL VE ÜZERİ SİPARİŞLERİNİZDE ÜCRETSİZ KARGO

  </h1>
  
  <h1 className='pr-12'>
500TL VE ÜZERİ SİPARİŞLERİNİZDE ÜCRETSİZ KARGO

  </h1>

  <h1 >
500TL VE ÜZERİ SİPARİŞLERİNİZDE ÜCRETSİZ KARGO

  </h1>
  
          </Marquee>

          <div id='slick' className="relative h-auto md:h-[600px]   before:bg-gradient-to-r before:from-slate-900 before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10 ">


        <Slider {...settings}>
          <div>
            <img className="w-full h-[600px] object-cover"  src="https://cdn.discordapp.com/attachments/931978220163694612/1092503568252153947/xxxtentacion.png" alt="" />
          </div>
          <div>
            <img className="w-full h-[600px] object-cover" src="https://cdn.discordapp.com/attachments/931978220163694612/1092503568663199794/bigg_reflektor.png" alt="" />
          </div>
          <div>
            <img className="w-full h-[600px] object-cover" src="https://cdn.discordapp.com/attachments/931978220163694612/1092503568940027996/carti_red.png" alt="" />
          </div>
          <div>
           <img className="w-full h-[600px] object-cover" src="https://cdn.discordapp.com/attachments/931978220163694612/1092503569242013736/golden_rose.png" alt="" />
          </div>
          
        </Slider>
          </div>
      </div>
    );
  
}
