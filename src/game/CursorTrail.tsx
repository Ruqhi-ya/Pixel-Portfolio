import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  id: number
  x: number
  y: number
}

export default function CursorTrail() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    let throttle = false
    const handleMouseMove = (e: MouseEvent) => {
      if (throttle) return
      throttle = true
      setTimeout(() => { throttle = false }, 100)

      const particle: Particle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      }
      setParticles(prev => [...prev.slice(-8), particle])
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== particle.id))
      }, 600)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 z-[9998] pointer-events-none" aria-hidden="true">
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{ left: particle.x, top: particle.y }}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0, y: -10 }}
          transition={{ duration: 0.6 }}
        >
          <svg viewBox="0 0 6 6" className="w-2 h-2" style={{ imageRendering: 'pixelated' }}>
            <rect x="2" y="0" width="2" height="2" fill="#F5D76E" opacity="0.8" />
            <rect x="0" y="2" width="2" height="2" fill="#FF7EB6" opacity="0.6" />
            <rect x="4" y="2" width="2" height="2" fill="#8A63D2" opacity="0.6" />
            <rect x="2" y="4" width="2" height="2" fill="#3CB043" opacity="0.4" />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}
