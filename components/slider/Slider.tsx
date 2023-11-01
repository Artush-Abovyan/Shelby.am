"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Link from "next/link";
import Styles from "./slider.module.css";

const Slider = () => {
    const images =[
        {
            img:"images/travel-1.jpg",
            text1:"EXPLORE SOUTH AMERICA",
            text2:"UNIT $1000",
            animation:"animation_1",
            btnText:"READ MORE",
        },
        {
            img:"images/travel-24.jpg",
            text1:"2016 BEST SUMMER",
            text2:"DESTINATION",
            animation:"animation_2",
            btnText:"LOCATION",  
        },
        {
            img:"images/travel-25.jpg",
            text1:"FANTASTIC SALES",
            text2:"ON ACUMANDATION",
            animation:"animation_3",
            btnText:"LOCATION",
        }
    ]

  return (
    <div className=" h-[100vh] overflow-hidden bg-fixed">
        <Swiper 
        className="bg-fixed h-full w-full"
        loop={true}
        modules={[Autoplay, Pagination, EffectCoverflow]}
        pagination={{clickable:false}}
        autoplay={{delay:7000,disableOnInteraction:false}}
        effect="coverflow"
        speed={1100}
        slidesPerView={1}
        >,
        {
        images.map((el,index)=><SwiperSlide key={index} className=" table relative z-0 w-full h-[100vh]"> 
          <div className=" absolute text-center text-white text-6xl font-black">
           <span className=" justify-center items-center">
            <div className={Styles.line}>
                    <span className={Styles.lineUp}>{el.text1}</span><br/>
                    <span className={Styles.lineUp}>{el.text2}</span>
                </div>
           </span>
                
            <span className=" text-center">
                <Link href="#" className={Styles.box_button}>{el.btnText}</Link>
            </span>
            <img src={el.img} alt={el.img} className=" text-center bg-fixed w-full h-full object-cover"/>
          </div>
          
          
          </SwiperSlide>)
        }
        </Swiper>
    </div>
    
  )
}

export default Slider