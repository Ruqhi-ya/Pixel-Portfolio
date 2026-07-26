import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface ShootingStar {
  id: number
  x: number
  y: number
  delay: number
}

export default function ShootingStars() {
  const [stars, setStars] = useState<ShootingStar[]>([])

  useEffect(() => {
    const createStar = () => {
      const star: ShootingStar = {
        id: Date.now(),
        x: Math.random() * 80,
        y: Math.random() * 30,
        delay: 0,
      }
      setStars(prev => [...prev, star])
      setTimeout(() => {
        setStars(prev => prev.filter(s => s.id !== star.id))
      }, 2000)
    }

    const interval = setInterval(createStar, 4000 + Math.random() * 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden" aria-hidden="true">
      {stars.map(star => (
        <motion.div
          key={star.id}
          className="absolute"
          style={{ left: `${star.x}%`, top: `${star.y}%` }}
          initial={{ opacity: 1, x: 0, y: 0 }}
          animate={{ opacity: 0, x: 200, y: 200 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_6px_#fff]" />
          <div className="absolute top-0 left-0 w-8 h-[1px] bg-gradient-to-l from-transparent to-white/80 -rotate-45 origin-right" />
        </motion.div>
      ))}
    </div>
  )
}
