import { motion } from 'framer-motion'

export default function Fireflies() {
  const fireflies = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: 30 + Math.random() * 60,
    size: 2 + Math.random() * 3,
    duration: 3 + Math.random() * 4,
    delay: Math.random() * 5,
  }))

  return (
    <div className="fixed inset-0 z-[2] pointer-events-none" aria-hidden="true">
      {fireflies.map(fly => (
        <motion.div
          key={fly.id}
          className="absolute rounded-full"
          style={{
            left: `${fly.x}%`,
            top: `${fly.y}%`,
            width: fly.size,
            height: fly.size,
            backgroundColor: '#F5D76E',
            boxShadow: `0 0 ${fly.size * 2}px #F5D76E, 0 0 ${fly.size * 4}px #F5D76E40`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            x: [0, Math.random() * 30 - 15, Math.random() * 20 - 10, 0],
            y: [0, -Math.random() * 20, Math.random() * 15 - 10, 0],
          }}
          transition={{
            duration: fly.duration,
            repeat: Infinity,
            delay: fly.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
