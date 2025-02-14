"use client"

import { useEffect, useState } from "react"

const useWindowSize = () => {
  const [width, setWidth] = useState<number | undefined>(undefined)


  useEffect(() => {
      if(typeof window === "undefined") return; 
      
      const resize = () => setWidth(window.innerWidth);
  
      setWidth(window.innerWidth)
      window.addEventListener("resize", resize)
  
      return () => window.removeEventListener("resize", resize)
    
  }, [])

  console.log("width", width)
  return width
}

export default useWindowSize