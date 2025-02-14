import React from 'react'
import { boot } from '../../public/images'

const BgSection = () => {
  const bgStyle = `url(${boot.src})`
  return (
    <div className='relative w-full h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center text-white text-center px-10 z-10 bgSection' style={{backgroundImage: bgStyle}}>
        <div className='absolute top-[30%] font-["Oswald"]'>
          <p className='text-white text-lg uppercase tracking-wide'>O Maior das Américas!</p>
          <h1 className='text-[3em] font-bold uppercase'>Esporte Clube Atlético <span className='bg-red-700 rounded-md py-1 px-2 italic'>Paulistano</span></h1>
          <div className='mt-6 flex justify-center gap-4 font-["Roboto"]'>
            <button className='bg-red-700 text-white px-6 py-3 font-semibold rounded-md shadow-md hover:bg-red-700 transition'>Compre Agora →</button>
            <button className='bg-white text-black px-6 py-3 font-semibold rounded-md shadow-md hover:bg-gray-200 transition'>Mais informações →</button>
          </div>
        </div>
    </div>
  )
}

export default BgSection