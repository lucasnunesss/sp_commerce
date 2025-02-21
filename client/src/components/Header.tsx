"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { spfc } from '../../public/images'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faHeart} from "@fortawesome/free-regular-svg-icons"
import {faMagnifyingGlass, faCartShopping, faBars} from "@fortawesome/free-solid-svg-icons"
import useWindowSize from '@/hooks/useWindowSize'

import Sidebar from './Sidebar'
import { useSelector } from 'react-redux'
import SideCart from './SideCart'
import { RootState } from '@/store'
const Header = () => {
    const width = useWindowSize() || 1000
    const [clickMenu, setMenu] = useState(false);
    const cartQtd = useSelector((state: RootState) => state.cart.qtd)
    const cartTotal = useSelector((state: RootState) => state.cart.total)
    const [clickCart, setCart] = useState(false)
  return (
    <>
    <header className='fixed flex justify-between items-center py-[15px] px-[30px] h-24 z-30  w-full'>
      {clickMenu && <Sidebar />}
        {width < 765 ? (
          
              <FontAwesomeIcon icon={faBars} className='w-5 h-5 cursor-pointer text-white' onClick={() => setMenu(!clickMenu)} />
          
        ) : null}
        <Image src={spfc} alt='logo' width={150} height={100} className=' mt-[-40px] mr-auto ml-auto mb-auto md:m-0'  />
    
      <nav>
        <ul className='hidden min-[800px]:flex lg:flex lg:gap-[100px] xl:gap-[120px] md:gap-[20px]'>
          
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/"}>Shop</Link>
            </li>
            <li>
              <Link href={"/"}>Blog</Link>
            </li>
            <li>
              <Link href={"/"}>Sobre</Link>
            </li>
            <li>
              <Link href={"/"}>Contato</Link>
            </li>
        
        </ul>
      </nav>
      <div className='nav-icons flex md:items-center gap-[15px]  '>
      <a href="#" className='hidden md:block'>
        <FontAwesomeIcon className='text-white w-5 h-5' icon={faUser} />
      </a>
      <a href="#" className='hidden md:block'>
        <FontAwesomeIcon className='text-white w-5 h-5' icon={faMagnifyingGlass} />
      </a>
      <a href="#" className='hidden md:block'>
        <FontAwesomeIcon className='text-white w-5 h-5' icon={faHeart} />
        <span className='absolute top-[-5px] right-[-10px] bg-red-600 text-white rounded-[50%] text-[12px] py-[2px] px-[6px]'>0</span>
      </a>
      <a href="#" onClick={() => setCart(!clickCart)} >
        <FontAwesomeIcon className='text-white w-5 h-5' icon={faCartShopping} />
        <span className='absolute top-[-5px] right-[-10px] bg-red-600 text-white rounded-[50%] text-[12px] py-[2px] px-[6px]'>{cartQtd}</span>
        <span className='hidden md:block md:absolute mr-[5px] text-[14px]'>{cartTotal}</span>
      </a>
      </div>
    </header>

      {clickCart && (
        <div>
          <SideCart setCard={setCart} />
        </div>
      )}
    </>
  )
}

export default Header