import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#0a0a1a] border-t-3 border-[#8A63D2] py-10 overflow-hidden" role="contentinfo">
      {/* Ground line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#2F8F46]" />
      
      <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-24 relative">
        {/* Campfire */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            <motion.div
              className="relative w-10 h-10"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              <svg viewBox="0 0 16 16" className="w-10 h-10" style={{ imageRendering: 'pixelated' }}>
                <rect x="4" y="12" width="8" height="2" fill="#5C3A1E" />
                <rect x="3" y="13" width="10" height="2" fill="#5C3A1E" />
                <rect x="6" y="4" width="4" height="2" fill="#F5D76E" />
                <rect x="5" y="6" width="6" height="2" fill="#FF7EB6" />
                <rect x="5" y="8" width="6" height="2" fill="#F5D76E" />
                <rect x="6" y="10" width="4" height="2" fill="#FF4500" />
              </svg>
            </motion.div>

            {/* Fire particles */}
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#F5D76E] rounded-full"
                style={{ left: `${35 + Math.random() * 30}%`, bottom: '60%' }}
                animate={{
                  y: [0, -20, -35],
                  opacity: [1, 0.5, 0],
                }}
                transition={{
                  duration: 1 + Math.random() * 0.5,
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
              />
            ))}
          </div>

          {/* Sleeping cat */}
          <motion.div
            className="mt-3"
            animate={{ y: [0, -0.5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <svg viewBox="0 0 20 8" className="w-12 h-6" style={{ imageRendering: 'pixelated' }}>
              <rect x="4" y="3" width="12" height="4" fill="#F5D76E" />
              <rect x="3" y="4" width="2" height="2" fill="#F5D76E" />
              <rect x="14" y="1" width="4" height="3" fill="#F5D76E" />
              <rect x="14" y="0" width="1" height="1" fill="#F5D76E" />
              <rect x="17" y="0" width="1" height="1" fill="#F5D76E" />
              <rect x="15" y="2" width="2" height="1" fill="#1A1A40" />
              <rect x="2" y="3" width="2" height="1" fill="#F5D76E" />
              <rect x="1" y="2" width="1" height="1" fill="#F5D76E" />
            </svg>
          </motion.div>
        </div>

        {/* Footer text */}
        <div className="text-center">
          <p className="pixel-text text-[8px] md:text-[9px] text-[#F5F5F5]/70 flex items-center justify-center gap-2">
            © 2025 Ruqhiya. All rights reserved.
            <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <Heart className="w-3 h-3 text-[#FF7EB6] fill-[#FF7EB6]" />
            </motion.span>
          </p>
          <p className="retro-text text-sm text-[#8A63D2]/50 mt-1.5">
            Built with pixels, love, and lots of coffee ☕
          </p>
        </div>
      </div>
    </footer>
  )
}
