"use client"
import useWindowSize from '@/hooks/useWindowSize'
import { addProduct } from '@/slice'
import { RootState } from '@/store'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'

type Data = {
  data:  Product[]
}





const AllProducts = ({data}: Data) => {
    const width = useWindowSize() || 1000
    const cart = useSelector((state: RootState) => state.cart)
    console.log("cart", cart)
    const dispatch = useDispatch()
    const submitHandle = (product: Product) => {
    
        dispatch(

          addProduct({products: product, price: product.price})
        )


     
    }
  return (
    <>
   
      <div>
        <ul>
          <li><a href="">Tênis</a></li>
          <li><a href="">T-SHIRT</a></li>
          <li><a href="">Shorts</a></li>
          <li><a href="">Meias</a></li>
          <li><a href="">Futebol</a></li>
          <li><a href="">Luvas</a></li>
        </ul>
      </div>
      <main className='flex p-[20px]'>
        {width > 599 && (

        <aside className='w-[250px] bg-[#fff] p-[20px] rounded-[5px]'>
          <h2 className='text-[18px] mb-[15px]'>Categorias</h2>
          <ul className='p-0'>
            <li>Futebol</li>
            <li>Tênis</li>
            <li>Meias</li>
            <li>T-SHIRT</li>
          </ul>
          <h2>Filtrar por preço</h2>
          <input type="range" min="0" max="50" />
        </aside>
        )}

        <div className='content'>
          <section className='all-products'>
            {data.map((content: Product) => (
              <article key={content._id} className='bg-[#fff] p-[15px] rounded-[5px] text-center'>
                  <Image src={content.img} alt='img-item' className='w-full h-40 object-cover' width={0} height={0}  sizes="100vw"/>
                  <h3 className='text-[20px] my-[10px] text-black font-bold'>{content.title}</h3>
                  <p className='text-[16px] text-black font-bold'>R${content.price}</p>
                  <button className='inline-block p-[15px] bg-black text-[#fff] mt-[10px] text-[16px]' onClick={() => submitHandle(content)}>Adicionar ao carrinho</button>
              </article>
            ))}
          </section>
        </div>
      </main>
    
  </>
  )
}

export default AllProducts