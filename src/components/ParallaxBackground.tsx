import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface ParallaxBackgroundProps {
  isNight: boolean
}

export default function ParallaxBackground({ isNight }: ParallaxBackgroundProps) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none w-full h-full" aria-hidden="true">
      {/* Sky gradient */}
      <div
        className={`absolute inset-0 transition-colors duration-1000 ${
          isNight
            ? 'bg-gradient-to-b from-[#0a0a1a] via-[#1A1A40] to-[#16213E]'
            : 'bg-gradient-to-b from-[#1a3a6e] via-[#16213E] to-[#1A1A40]'
        }`}
      />

      {/* Stars layer */}
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      >
        {Array.from({ length: 60 }).map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() > 0.7 ? '2px' : '1px',
              height: Math.random() > 0.7 ? '2px' : '1px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Moon */}
      <motion.div
        className="absolute top-16 right-[10%] md:right-[15%]"
        style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <svg viewBox="0 0 32 32" className="w-16 h-16 md:w-24 md:h-24" style={{ imageRendering: 'pixelated' }}>
          <rect x="10" y="2" width="12" height="2" fill="#F5D76E" />
          <rect x="6" y="4" width="4" height="2" fill="#F5D76E" />
          <rect x="22" y="4" width="4" height="2" fill="#F5D76E" />
          <rect x="4" y="6" width="2" height="4" fill="#F5D76E" />
          <rect x="26" y="6" width="2" height="4" fill="#F5D76E" />
          <rect x="6" y="6" width="20" height="20" fill="#F5D76E" />
          <rect x="4" y="10" width="2" height="12" fill="#F5D76E" />
          <rect x="26" y="10" width="2" height="12" fill="#F5D76E" />
          <rect x="6" y="22" width="4" height="2" fill="#F5D76E" />
          <rect x="22" y="22" width="4" height="2" fill="#F5D76E" />
          <rect x="10" y="24" width="12" height="2" fill="#F5D76E" />
          {/* Moon craters */}
          <rect x="10" y="10" width="3" height="3" fill="#D4B84A" />
          <rect x="18" y="14" width="4" height="4" fill="#D4B84A" />
          <rect x="12" y="18" width="2" height="2" fill="#D4B84A" />
        </svg>
      </motion.div>

      {/* Clouds layer */}
      <div className="absolute inset-0" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
        {[
          { x: '5%', y: '12%', size: 'w-20 md:w-28', speed: 60 },
          { x: '45%', y: '8%', size: 'w-16 md:w-22', speed: 80 },
          { x: '75%', y: '18%', size: 'w-18 md:w-24', speed: 70 },
        ].map((cloud, i) => (
          <motion.div
            key={`cloud-${i}`}
            className={`absolute ${cloud.size} opacity-15`}
            style={{ left: cloud.x, top: cloud.y }}
            animate={{ x: [-15, 15, -15] }}
            transition={{ duration: cloud.speed, repeat: Infinity, ease: 'linear' }}
          >
            <svg viewBox="0 0 32 16" className="w-full h-auto" style={{ imageRendering: 'pixelated' }}>
              <rect x="8" y="0" width="8" height="4" fill="#F5F5F5" />
              <rect x="4" y="4" width="16" height="4" fill="#F5F5F5" />
              <rect x="0" y="8" width="24" height="4" fill="#F5F5F5" />
              <rect x="4" y="12" width="28" height="4" fill="#F5F5F5" />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Mountains layer */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <svg viewBox="0 0 1200 200" className="w-full h-full" preserveAspectRatio="xMidYMax slice" style={{ imageRendering: 'pixelated' }}>
          <polygon points="0,200 100,80 200,200" fill="#1a2a4a" />
          <polygon points="150,200 300,60 450,200" fill="#1a2a4a" />
          <polygon points="400,200 550,90 700,200" fill="#1a2a4a" />
          <polygon points="600,200 800,50 1000,200" fill="#1a2a4a" />
          <polygon points="900,200 1050,70 1200,200" fill="#1a2a4a" />
          <polygon points="0,200 150,100 300,200" fill="#152238" />
          <polygon points="250,200 450,110 650,200" fill="#152238" />
          <polygon points="550,200 750,90 950,200" fill="#152238" />
          <polygon points="850,200 1050,100 1200,200" fill="#152238" />
        </svg>
      </div>

      {/* Trees layer */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <div className="flex items-end justify-around px-4 h-32 overflow-hidden">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={`tree-${i}`}
              className="flex-shrink-0"
              animate={{ rotate: [-1, 1, -1] }}
              transition={{ duration: 4 + i, repeat: Infinity }}
            >
              <svg viewBox="0 0 16 24" className="w-6 h-10 md:w-10 md:h-16" style={{ imageRendering: 'pixelated' }}>
                <rect x="6" y="16" width="4" height="8" fill="#5C3A1E" />
                <rect x="4" y="8" width="8" height="4" fill="#2F8F46" />
                <rect x="2" y="12" width="12" height="4" fill="#2F8F46" />
                <rect x="6" y="4" width="4" height="4" fill="#3CB043" />
                <rect x="3" y="8" width="10" height="4" fill="#3CB043" />
              </svg>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
