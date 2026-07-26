import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

const LOADING_MESSAGES = [
  'Booting up...',
  'Loading pixels...',
  'Spawning cat...',
  'Planting trees...',
  'Lighting fireflies...',
  'Ready!'
]

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState('Booting up...')
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setProgress(prev => {
        const next = prev + 2
        const msgIndex = Math.min(Math.floor(next / 20), LOADING_MESSAGES.length - 1)
        setLoadingText(LOADING_MESSAGES[msgIndex])
        return next > 100 ? 100 : next
      })
    }, 40)
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1A1A40]"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Pixel Art Logo */}
      <motion.div
        className="mb-8"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg viewBox="0 0 16 16" className="w-16 h-16" style={{ imageRendering: 'pixelated' }}>
          <rect x="4" y="1" width="8" height="3" fill="#4A2C17" />
          <rect x="3" y="2" width="1" height="4" fill="#4A2C17" />
          <rect x="12" y="2" width="1" height="4" fill="#4A2C17" />
          <rect x="4" y="4" width="8" height="5" fill="#FDBCB4" />
          <rect x="5" y="5" width="2" height="2" fill="#1A1A40" />
          <rect x="9" y="5" width="2" height="2" fill="#1A1A40" />
          <rect x="6" y="7" width="4" height="1" fill="#FF7EB6" />
          <rect x="4" y="9" width="8" height="5" fill="#8A63D2" />
          <rect x="2" y="10" width="2" height="3" fill="#8A63D2" />
          <rect x="12" y="10" width="2" height="3" fill="#8A63D2" />
        </svg>
      </motion.div>

      {/* Title */}
      <h1 className="pixel-text text-[#FF7EB6] text-lg mb-6">RUQHIYA</h1>

      {/* Loading Bar */}
      <div className="w-64 h-6 pixel-border bg-[#16213E] relative overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#8A63D2] to-[#FF7EB6] transition-[width] duration-100"
          style={{ width: `${progress}%` }}
        />
        <div className="absolute inset-0 flex">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="flex-1 border-r border-[#1A1A40]/30" />
          ))}
        </div>
      </div>

      {/* Progress text */}
      <p className="pixel-text text-[10px] text-[#F5D76E] mt-4">{loadingText}</p>
      <p className="pixel-text text-[8px] text-[#F5F5F5]/60 mt-2">{progress}%</p>
    </motion.div>
  )
}
