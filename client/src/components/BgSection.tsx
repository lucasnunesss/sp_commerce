import React from 'react'


const BgSection = ({bg, subTitle, btn, children}: bgSection) => {
  
  return (
    <div className='relative w-full h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center text-white text-center px-10 z-10 bgSection' style={{backgroundImage: bg}}>
        <div className='absolute top-[30%] font-["Oswald"]'>
          <p className='text-white text-lg uppercase tracking-wide'>{subTitle}</p>
          <h1 className='text-[3em] font-bold uppercase'>{children}</h1>
          <div className='mt-6 flex justify-center gap-4 font-["Roboto"]'>
            {btn && (

            <>
              <button className='bg-red-700 text-white px-6 py-3 font-semibold rounded-md shadow-md hover:bg-red-700 transition'>Compre Agora →</button>
              <button className='bg-white text-black px-6 py-3 font-semibold rounded-md shadow-md hover:bg-gray-200 transition'>Mais informações →</button>
            </>
            )}
          </div>
        </div>
    </div>
  )
}

export default BgSection