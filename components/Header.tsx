"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from "next/image"






const Submenu = ({ items }) => {
  return (
    <div className="submenu">
      {items.map((item:any, index:any) => (
        <div className=" text-white container  bg-blue-900" key={index}>
          <Link href={item.link}>{item.label}</Link>
        </div>
      ))}
    </div>
  );
};

const Header = () => {
  const [showSubmenu, setShowSubmenu] = useState(null);

  const handleSubmenuToggle = (index) => {
    setShowSubmenu(index);
  };

  const closeSubmenu = () => {
    setShowSubmenu(null);
  };

  const navigationLinks = [
    { 
      label: 'ԱՐՑԱՆՑ ԱՄՐԱԳՐՈՒՄ',
      link: '/#ԱՐՑԱՆՑ ԱՄՐԱԳՐՈՒՄ',
      submenu:[{label:"ԲԱՆԿԱՅԻՆ ՓՈԽԱՆՑՈՒՄՈՎ", link:"@/components/pages"},{label:"ԲԱՆԿԱՅԻՆ ԱՌՑԱՆՑ ՓՈԽԱՆՑՈՒՄՈՎ", link:"/components/pages"},{label:"ՎՃԱՐԱՅԻՆ ՀԱՄԱԿԱՐԳԵՐՈՎ", link:"/components/pages"}]
    },
    {
      label: 'ՓԱԹԵԹՆԵՐ',
      link: '/products',
      submenu: [{ label: 'ՓՆՏՐՄԱՆ ՀԱՄԱԿԱՐԳՈՎ', link: 'http://online.abstour.by/TourSearchClient' }],
    },
    {
      label: 'ԹՈՂՆԵԼ ՀԱՐՑՈՒՄ',
      link: 'https://shelby.am/?page_id=458'
    },
    {
      label: 'ԹԵԺ ԱՌԱՋԱՐԿՆԵՐ',
      link: '/departments',
      submenu: [{ label: 'ՀՐԱՊԱՐԱԿՈՒՄՆԵՐ', link: 'https://shelby.am/?page_id=483' }],
    },
    { label: 'ՄԵՐ ՄԱՍԻՆ', link: './about' },
  ];
  

  return (
    <header className=' absolute z-10 '>
      <div className='p-4 text-l text-white fixed  w-full'>
        <div className='relative'>
          <Image
            className='mr-3'
            src='/logo.png'
            alt='logo shelby'
            width={50}
            height={50}
            priority
          />
          <nav className='absolute left-12 top-3 ml-10 w-full flex  space-x-4'>
            {navigationLinks.map((link, index) => (
              <div
                key={index}
                className='ml-4 mr-10 text-xl  hover:text-yellow-700 transition-shadow'
                
                onMouseEnter={() => handleSubmenuToggle(index)} 
                onMouseLeave={closeSubmenu}
                style={{ cursor: 'pointer' }}

              >
                {link.label} | 
                {link.submenu && showSubmenu === index && <Submenu items={link.submenu} />}  
              </div>
            ))}
            <div className='absolute right-60 top-1 bottom-3'>
              <Link href="/#"><i className="fa-solid fa-phone w-9 absolute"></i></Link>
              <p className=' ml-10'>Call Us:55 6785</p>
              <Link href="https://www.facebook.com/"><i className="fa-brands fa-facebook left-44 bottom-6 relative"></i></Link>
              <Link href="https://twitter.com/"><i className="fa-brands fa-twitter left-48 bottom-6 relative"></i></Link>
              <Link href="https://www.pinterest.com/"><i className="fa-brands fa-pinterest left-52 bottom-6 relative"></i></Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;