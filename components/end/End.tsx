import React from 'react'
import Style from './end.module.css'
import Link from 'next/link'

export default function End() {
  return (
    <div>
      <div className={Style.s1}>
        <div className={Style.s2}>
			<div className="textwidget">&copy; Copyright  
            <Link className={Style.s3} href="https://qodeinteractive.com/" rel="nofollow noopener" target="_blank"> Qode Interactive</Link>
            . This demo is a part of the 
            <Link href="https://themeforest.net/item/bridge-creative-multipurpose-wordpress-theme/7315054?ref=QODE">
            <span className={Style.sp}>Bridge theme
            </span>
            </Link>.
            </div>
		</div>
	</div>

    </div>


  )
}
