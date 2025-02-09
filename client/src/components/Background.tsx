import Image from 'next/image'
import React from 'react'
import { boot } from '../../public/images'
import ShopNow from './ShopNow'

const Background = () => {
  return (
    <div className='boot-div'>
      <Image src={boot} alt='boot' className='boot-img'  />
      <div className='boot-text'>
        <span className='z-10'>Welcome to our soccer club</span>
        <div className='boot-title'>
          <h1>Champions <div className='inline mark'>rise,</div> heroes are made</h1>
        </div>
        <div className='flex justify-center gap-5'>
          <ShopNow text={"Shop Now"} bg='#AF101A' textColor='white' />
          <ShopNow text={"See Collection"} bg='#ffffff' textColor='black' />
        </div>
      </div>
    </div>
  )
}

export default Background