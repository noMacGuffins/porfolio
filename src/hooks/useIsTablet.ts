import { useState, useEffect } from 'react'

export default function useIsTablet() {
  const TABLET_SIZE = 720
  const [isTablet, setIsTablet] = useState(false)

  const handleResize = () => {
    setIsTablet(window.innerWidth < TABLET_SIZE)
  }

  useEffect(() => {
    setIsTablet(window.innerWidth < TABLET_SIZE)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return [isTablet, setIsTablet]
}
