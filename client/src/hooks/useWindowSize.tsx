"use client"

import { useEffect, useState } from "react"

const useWindowSize = () => {
  const [width, setWidth] = useState<number | null>(typeof window !== "undefined" ? window.innerWidth : null )

  useEffect(() => {
    const resize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", resize)

    return () => window.removeEventListener("resize", resize)
  }, [])

  console.log("width", width)
  return width
}

export default useWindowSize