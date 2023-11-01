import styles from "./style.module.css"
import Link from 'next/link'

import React from 'react'
export default function Page1() {
  return <div className='container mx-auto'>
    <div className=" bg-slate-50">
      <div className=' flex'>
        <div className='text-center w-2/4 px-12'>
          <h3 className={styles.text1}>2016 TOP SUMMER DESTINATIONS NOW ON SALE</h3>
          <p className={styles.description1}>For the vast majority of its history, agriculture can be described new products agriculture can be described as having been organi as having been organic of its history,was a large supply of new products agriculture can be described as having been organic; only during the 20th century was a large supply of new products.</p>
          <Link href="#" className={styles.link1}>Locations</Link>
        </div>
        <div className='w-2/4'>
          <img className='h-[500px]' src="travel-23.jpg" alt="" />
        </div>
      </div>
      <div className=' flex'>
        <div className='w-2/4'>
          <img className='h-[500px]' src="travel-22.jpg" alt="" />
        </div>
        <div className=' text-center w-2/4 p-16'>
          <h3 className={styles.text1}>2016 TOP SUMMER DESTINATIONS NOW ON SALE</h3>
          <p className={styles.description1}>For the vast majority of its history, agriculture can be described new products agriculture can be described as having been organi as having been organic of its history,was a large supply of new products agriculture can be described as having been organic; only during the 20th century was a large supply of new products.</p>
          <Link href="#" className={styles.link1}>Locations</Link>
        </div>
      </div>
    </div>
  </div>
}
export {Page1}