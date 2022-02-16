import { useState, useEffect } from 'react'

export default function useIsTablet() {
  const TABLET_SIZE = 720
  const [isTablet, setIsTablet] = useState(false)
  const handleResize = () => {
    setIsTablet(Math.min(document.documentElement.clientWidth,window.innerWidth) <= TABLET_SIZE)
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()
    console.log(Math.min(document.documentElement.clientWidth,window.innerWidth))
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return isTablet
}
