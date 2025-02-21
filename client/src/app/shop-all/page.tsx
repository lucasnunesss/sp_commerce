
import BgSection from '@/components/BgSection'
import React from 'react'
import { allProducts } from '../../../public/images'

import AllProducts from '@/components/AllProducts'

const ShopAll = async() => {
 const query = await fetch("http://localhost:3000/api/shop")
const data = await query.json()
  const bgImage = `url(${allProducts.src})`

  return (
    <>
      <div>
          <BgSection bg={bgImage} subTitle='produtos' btn={false}>
              a
          </BgSection>
      </div>
    <AllProducts data={data} />
    </>
  )
}

export default ShopAll