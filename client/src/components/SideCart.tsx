"use client"

import Image from "next/image";

import { useSelector } from "react-redux";
import { RootState } from "@/store";

type Card = {
  setCard: (value: boolean) => void;
}

const SideCart = ({setCard}: Card) => {
  const cart = useSelector((state: RootState) => state.cart)
  return (
 

      <div className="">
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
          <div className="w-96 h-full bg-white shadow-lg overflow-y-auto">
            <div className="p-6 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold">Seu Carrinho</h2>
              <button onClick={() => setCard(false)} className="text-black">&times;</button>
            </div>
            <div className="p-6 space-y-4">
              {cart.products.map((data, index) => (

              <div key={index} className="flex items-center justify-between">
                <Image src={data.img} alt="ball" width={48} height={48} className=" object-cover"  />
                <div className="flex-1 ml-4">
                  <h3 className="text-lg font-medium">{data.title}</h3>
                  <p className="text-gray-600">R${data.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-2 py-1 border">-</button>
                  <span>{cart.qtd}</span>
                  <button className="px-2 py-1 border">+</button>
                </div>
              </div>
              ))}
              
            </div>
            <div className="border-t pt-4">
              <p>{cart.total}</p>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default SideCart