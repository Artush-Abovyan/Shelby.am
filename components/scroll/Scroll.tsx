"use client"
import style from "./style1.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons/faCircleArrowUp";



export default function Scroll() {
  

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth'});
  };

  return (
    <div>
      <div onClick={scrollToTop} className={style.ts}><FontAwesomeIcon icon={faCircleArrowUp} /></div>      
    </div>
  );
}


