import  Style  from "./style.module.css";
import Link from "next/link";
import React from 'react'
export default function Page() {
const images = [
    {img:"/travel-6.jpg",text:"THAILAND & VIETNAM",description:"Southeast Asia"},
    {img:"/travel-7.jpg",text:"BALI & BORNEO",description:"Southeast Asia"},
    {img:"/travel-8.jpg",text:"MOUNTAINS OF PERU",description:"South America"},
    {img:"/travel-9.jpg",text:"EGYPT",description:"Northeast Africa"},
    {img:"/travel-10.jpg",text:"NEW YORK",description:"Northeast America"},
    {img:"/travel-11.jpg",text:"MOUNTAINS OF PERU",description:"South America"},
    {img:"/travel-12.jpg",text:"FRANCE",description:"North France"},
    {img:"/travel-7.jpg",text:"BALI & BORNEO",description:"Southeast Asia"},
    {img:"travel-9.jpg",text:"MOUNTAINS OF PERU",description:"South America"}
]
    return (
        <div >
            <div className="mb-16">
                <div className="  bg-slate-100 text-center">
                <h4 className={Style.text1}>For the vast majority of its history, agriculture can be described as having been organicorganic</h4>
                </div>
                <div className=" flex justify-center items-center py-13">
                    <h3 className={Style.text2}>2016 TOP SUMMER DESTINATIONS NOW ON SALE</h3>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
                    {
                        images.map((el, index) => <div className=" m-4 p-4 text-center">
                            <div className={Style.photo}>
                                <img src={el.img} className=" w-full"alt="" />
                            <div className={Style.text3}>
                                <h3 className={Style.text4}><Link href="#">{el.text}</Link></h3>
                                <span className={Style.description}>{el.description}</span>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}
export {Page}