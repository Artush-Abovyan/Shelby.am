import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
export default function Footer() {
    return (
        <div className=" h-auto bottom-14 grid grid-cols-4 bg-zinc-900 text-white mt-10 ">
            <div className="m-2 p-2 relative text-center mt-10">
                <Image
                    className=' relative top-10 left-10'
                    src="/logo.png"
                    alt="logo shelby"
                    width={100}
                    height={100}
                    priority
                />
                <div className=" absolute m-10 right-1 top-5 ">
                    <p className=" text-start w-auto bottom-7 relative top-40">The SHELBY company is a tour operator for inbound tourism, has good price offers for the hotel base and is specialized in work both in the external and in the domestic tourism market, cooperating with the most reliable foreign partners.</p>
                    <i className="fa-solid fa-phone top-44 relative"></i>
                    <p className=' ml-10 top-40 relative text-start font-bold bottom-5'>Call Us:(011) 508484</p>
                    <p className=" relative font-bold top-40 ml-10 text-start bottom-5">shelby.am.co@gmail.com</p>
                    <p className=" relative font-bold text-start ml-10 top-40">Amiryan 18 - Teryan 54/3 - Yerevan Mall-MegaMall Yerevan, Armenia</p>
                    {/* 
                    
                    <i className=" relative fa-regular fa-location-dot col-auto"></i>
                     */}
                </div>
            </div>

            <div className="m-2 p-6">
                <div className=" relative grid grid-cols-1 mb-5">
                    <h3 className=" mt-14 font-bold">Additional Links</h3>
                    <Link className=" top-4 relative hover:text-yellow-300 m-2" href="#">Առցանց ամրագրում</Link>
                    <Link className="top-4 relative hover:text-yellow-300 m-2 left-2" href="#">Բանկային փոխանցումով</Link>
                    <Link className="top-4 relative hover:text-yellow-300 m-2 left-2" href="#">Բանկային առցանց քարտով</Link>
                    <Link className="top-4 relative hover:text-yellow-300 m-2 left-2" href="#">Վճարային համակարգերով</Link>
                    <Link className="top-4 relative hover:text-yellow-300 m-2 left-2" href="#">Ապառիկ</Link>
                    <Link className="top-4 relative hover:text-yellow-300 m-2" href="#">Փաթեթներ</Link>
                    <Link className="top-4 relative hover:text-yellow-300 m-2 left-2" href="#">Փնտրման համակարգ</Link>
                    <Link className="top-4 relative hover:text-yellow-300 m-2" href="#">Թողնել հարցում</Link>
                    <Link className="top-4 relative hover:text-yellow-300 m-2" href="#">Թեժ առաջարկներ </Link>
                    <Link className="top-4 relative hover:text-yellow-300 m-2 left-2" href="#">Հրապարակումներ</Link>
                    <Link className="top-4 relative hover:text-yellow-300 m-2" href="#">Մեր մասին</Link>
                </div>
            </div>

            <div className="m-2 p-2">
                <div className=" relative grid grid-cols-1">
                    <h3 className=" mt-14 font-bold">Additional Links</h3>
                    <Link className=" top-4 relative hover:text-yellow-300 m-2" href="#">Առցանց ամրագրում</Link>
                    <Link className="top-4 relative left-2 hover:text-yellow-300 m-2" href="#">Բանկային փոխանցումով</Link>
                    <Link className="top-4 relative left-2 hover:text-yellow-300 m-2" href="#">Բանկային առցանց քարտով</Link>
                    <Link className="top-4 relative left-2 hover:text-yellow-300 m-2" href="#">Վճարային համակարգերով</Link>
                    <Link className="top-4 relative left-2 hover:text-yellow-300 m-2" href="#">Ապառիկ</Link>
                    <Link className="top-4 relative hover:text-yellow-300 m-2" href="#">Փաթեթներ</Link>
                    <Link className="top-4 relative left-2 hover:text-yellow-300 m-2" href="#">Փնտրման համակարգ</Link>
                    <Link className="top-4 relative hover:text-yellow-300 m-2" href="#">Թողնել հարցում</Link>
                    <Link className="top-4 relative hover:text-yellow-300 m-2" href="#">Թեժ առաջարկներ </Link>
                    <Link className="top-4 relative left-2 hover:text-yellow-300 m-2" href="#">Հրապարակումներ</Link>
                    <Link className="top-4 relative hover:text-yellow-300 m-2" href="#">Մեր մասին</Link>
                </div>
            </div>
            <div>
            <h3 className=" mt-14 font-bold">Our Instagram Feed</h3>
            </div>
        </div>
    )
}
export { Footer }