import  styles  from './style.module.css'
import Link from 'next/link'
import React from 'react'

const Section1 = () => {
  return (
    <div className=" container mx-auto mb-12">

        <div className=" flex  justify-center items-center py-13">
            <h3 className={styles.text1}>2016 TOP SUMMER DESTINATIONS NOW ON SALE</h3>
        </div>

        <div className="grid grid-cols-3">

            <div className=" m-6 p-6 text-center " >
                <img src="images/travel-2.jpg" alt="" />
                <h3 className={styles.text2}  >SPIRITUAL BALI ISLANDS</h3>
                <p className={styles.nkaragrutyun1}>For the vast majority of its history, agriculture can be described as having been organic; only during the 20th century was a large supply.</p>
                <Link className={styles.link1} href="#" >SEE PROMOTIONS</Link>
            </div>
            
            <div className=" m-6 p-6 text-center">
            <img src="/travel-12.jpg" alt="" />
            <h3 className={styles.text2} >MAGNIFICENT CITY OF PARIS</h3>
            <p>For the vast majority of its history, agriculture can be described as having been organic; only during the 20th century was a large supply.</p>
            <Link  className={styles.link1} href="#">SEE PROMOTIONS</Link>
            </div>

            <div className=" m-6 p-6 text-center">
            <img src="/travel-9.jpg" />
            <h3 className={styles.text2} >MYSTERIOUS PYRAMIDS</h3>
            <p className={styles.nkaragrutyun1} >For the vast majority of its history, agriculture can be described as having been organic; only during the 20th century was a large supply.</p>
            <Link  className={styles.link1} href="#">SEE PROMOTIONS</Link>
            </div>

        </div>

        </div>
        
  )
}

export default Section1