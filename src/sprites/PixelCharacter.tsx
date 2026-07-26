import { motion } from 'framer-motion'

export default function PixelCharacter() {
  return (
    <motion.div
      className="relative pixel-art"
      animate={{ y: [0, -2, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg viewBox="0 0 64 80" className="w-36 h-44 sm:w-44 sm:h-56 md:w-52 md:h-64" style={{ imageRendering: 'pixelated' }}>
        {/* Hair */}
        <rect x="18" y="2" width="28" height="4" fill="#3D2314" />
        <rect x="14" y="6" width="36" height="4" fill="#3D2314" />
        <rect x="12" y="10" width="4" height="20" fill="#3D2314" />
        <rect x="48" y="10" width="4" height="20" fill="#3D2314" />
        <rect x="14" y="10" width="36" height="6" fill="#4A2C17" />
        {/* Hair bangs */}
        <rect x="16" y="14" width="8" height="4" fill="#3D2314" />
        <rect x="38" y="14" width="8" height="4" fill="#3D2314" />
        
        {/* Face */}
        <rect x="16" y="16" width="32" height="20" fill="#FDBCB4" />
        
        {/* Eyes */}
        <motion.g
          animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.45, 0.5, 1] }}
        >
          <rect x="20" y="22" width="6" height="6" fill="#2C1810" />
          <rect x="36" y="22" width="6" height="6" fill="#2C1810" />
          {/* Eye shine */}
          <rect x="22" y="22" width="2" height="2" fill="#FFFFFF" />
          <rect x="38" y="22" width="2" height="2" fill="#FFFFFF" />
        </motion.g>
        
        {/* Blush */}
        <rect x="18" y="28" width="4" height="2" fill="#FFB0B0" opacity="0.6" />
        <rect x="40" y="28" width="4" height="2" fill="#FFB0B0" opacity="0.6" />
        
        {/* Mouth - smile */}
        <rect x="26" y="30" width="10" height="2" fill="#E88B8B" />
        <rect x="24" y="30" width="2" height="2" fill="#E88B8B" />
        <rect x="36" y="30" width="2" height="2" fill="#E88B8B" />
        
        {/* Neck */}
        <rect x="28" y="36" width="8" height="4" fill="#FDBCB4" />
        
        {/* Body / Hoodie */}
        <rect x="16" y="40" width="32" height="24" fill="#8A63D2" />
        <rect x="12" y="44" width="4" height="16" fill="#8A63D2" />
        <rect x="48" y="44" width="4" height="16" fill="#8A63D2" />
        
        {/* Hoodie detail */}
        <rect x="26" y="40" width="12" height="4" fill="#7B54C3" />
        <rect x="28" y="44" width="8" height="8" fill="#7B54C3" />
        
        {/* Arms resting on laptop */}
        <rect x="8" y="56" width="12" height="4" fill="#FDBCB4" />
        <rect x="44" y="56" width="12" height="4" fill="#FDBCB4" />
        
        {/* Laptop */}
        <rect x="14" y="60" width="36" height="4" fill="#333333" />
        <rect x="16" y="56" width="32" height="4" fill="#1a1a2e" />
        {/* Screen */}
        <rect x="18" y="56" width="28" height="3" fill="#0d1117" />
        
        {/* Laptop code animation */}
        <motion.g
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <rect x="20" y="57" width="8" height="1" fill="#3CB043" />
          <rect x="30" y="57" width="6" height="1" fill="#FF7EB6" />
          <rect x="38" y="57" width="4" height="1" fill="#F5D76E" />
        </motion.g>
        
        {/* Legs */}
        <rect x="20" y="64" width="10" height="8" fill="#2C3E50" />
        <rect x="34" y="64" width="10" height="8" fill="#2C3E50" />
        
        {/* Shoes */}
        <rect x="18" y="72" width="12" height="4" fill="#E74C3C" />
        <rect x="34" y="72" width="12" height="4" fill="#E74C3C" />
      </svg>
    </motion.div>
  )
}
