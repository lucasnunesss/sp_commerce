import React from 'react'
import ShopNow from './ShopNow'
import { art1 } from '../../public/images'

const ArticleBg = () => {
  return (
    <div   style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${art1.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}  className='h-96 flex flex-col  justify-center text-white p-1 txt-shadow'>
        <div className='text-left text-3xl font-bold'>
          <span className='text-xl font-normal'>Be well dressed</span>
          <h1>Ultimate men&apos; shoes</h1>
     
        </div>
        <ShopNow text='Shop Now' bg='black' textColor='white' />
    </div>
  )
}

export default ArticleBg