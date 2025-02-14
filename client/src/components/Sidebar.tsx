"use client"
import {faXmark, faMagnifyingGlass, faChevronDown, faUserGroup} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useEffect, useRef, useState } from "react"
const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true)
  const sideRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      if(!sideRef?.current?.contains(e.target as Node)){
        setShowSidebar(false)
      }
    } 


    if(showSidebar) window.addEventListener("mousedown", clickHandler)

    return () => window.removeEventListener("mousedown", clickHandler)
  }, [showSidebar])

  return (
    showSidebar && (
      <div className="bg-white z-50 ">
        <div className='fixed w-[300px] bg-white  top-0 left-0 p-[20px] h-screen sidebar' ref={sideRef}>
        <div className='bg-red-500 text-white p-[10px] text-center cursor-pointer font-bold uppercase' onClick={() => setShowSidebar(false)}>Fechar <FontAwesomeIcon icon={faXmark} /></div>
        <h3 className='uppercase font-["Oswald"] text-center mt-[20px] text-black font-bold'>O que está procurando?</h3>
        <div className='flex align-middle w-full mt-5  gap-3'>
          <input type="search" name="search" className='p-[5px]' placeholder='Pesquisar...'/>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='text-xl m-auto text-center' />
        </div>
          <ul className='links-sidebar p-0 mt-7'>
            <li><Link href={"/"}>Home</Link></li>
            <li className='flex justify-between'><Link href={"/"}>Compras</Link><FontAwesomeIcon icon={faChevronDown} /></li>
            <li className='flex justify-between'><Link href={"/"}>Páginas</Link><FontAwesomeIcon icon={faChevronDown} /></li>
            <li><Link href={"/"}>Sobre Nós</Link></li>
            <li className='flex justify-between'><Link href={"/"}>Blog</Link><FontAwesomeIcon icon={faChevronDown} /></li>
            <li><Link href={"/"}>Entre em Contato</Link></li>
            <li><Link href={"/"}>Wishlist {"0"}</Link></li>
            <li><Link href={"/"}>Comparar {"0"}</Link></li>
            <li><FontAwesomeIcon icon={faUserGroup} />{" "}<Link href={"/"}>Login / Register</Link></li>
          </ul>
            </div>
      </div>
    )

  )
}

export default Sidebar