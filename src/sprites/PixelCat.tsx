import { motion } from 'framer-motion'

interface PixelCatProps {
  variant?: 'sitting' | 'walking' | 'sleeping'
  className?: string
}

export default function PixelCat({ variant = 'sitting', className = '' }: PixelCatProps) {
  if (variant === 'sleeping') {
    return (
      <motion.div className={`pixel-art ${className}`}>
        <svg viewBox="0 0 24 12" className="w-16 h-8" style={{ imageRendering: 'pixelated' }}>
          {/* Sleeping cat body */}
          <rect x="4" y="5" width="14" height="6" fill="#F5D76E" />
          <rect x="3" y="6" width="2" height="4" fill="#F5D76E" />
          {/* Head tucked */}
          <rect x="15" y="3" width="5" height="4" fill="#F5D76E" />
          {/* Ears */}
          <rect x="15" y="2" width="2" height="1" fill="#F5D76E" />
          <rect x="19" y="2" width="2" height="1" fill="#F5D76E" />
          <rect x="16" y="1" width="1" height="1" fill="#E8C84A" />
          <rect x="19" y="1" width="1" height="1" fill="#E8C84A" />
          {/* Closed eyes */}
          <rect x="16" y="4" width="2" height="1" fill="#2C1810" />
          {/* Tail curled */}
          <rect x="2" y="5" width="2" height="1" fill="#F5D76E" />
          <rect x="1" y="4" width="2" height="1" fill="#F5D76E" />
          {/* Zzz */}
          <motion.text
            x="21" y="2"
            fill="#F5F5F5"
            fontSize="2"
            fontFamily="monospace"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            z
          </motion.text>
        </svg>
      </motion.div>
    )
  }

  if (variant === 'walking') {
    return (
      <motion.div
        className={`pixel-art ${className}`}
        animate={{ x: [0, 10, 0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <svg viewBox="0 0 16 14" className="w-12 h-10" style={{ imageRendering: 'pixelated' }}>
          {/* Body */}
          <rect x="3" y="5" width="10" height="5" fill="#F5D76E" />
          {/* Head */}
          <rect x="10" y="2" width="5" height="5" fill="#F5D76E" />
          {/* Ears */}
          <rect x="10" y="1" width="2" height="1" fill="#F5D76E" />
          <rect x="14" y="1" width="2" height="1" fill="#F5D76E" />
          {/* Eyes */}
          <motion.g
            animate={{ scaleY: [1, 1, 0.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <rect x="11" y="3" width="1" height="2" fill="#2C1810" />
            <rect x="14" y="3" width="1" height="2" fill="#2C1810" />
          </motion.g>
          {/* Nose */}
          <rect x="12" y="5" width="2" height="1" fill="#FFB0B0" />
          {/* Legs with walking animation */}
          <motion.g
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            <rect x="4" y="10" width="2" height="3" fill="#E8C84A" />
            <rect x="7" y="10" width="2" height="3" fill="#E8C84A" />
          </motion.g>
          <motion.g
            animate={{ rotate: [5, -5, 5] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            <rect x="10" y="10" width="2" height="3" fill="#E8C84A" />
          </motion.g>
          {/* Tail */}
          <motion.rect
            x="1" y="4" width="2" height="2"
            fill="#F5D76E"
            animate={{ rotate: [-15, 15, -15] }}
            transition={{ duration: 1, repeat: Infinity }}
            style={{ transformOrigin: '3px 5px' }}
          />
        </svg>
      </motion.div>
    )
  }

  // Sitting variant (default)
  return (
    <motion.div
      className={`pixel-art ${className}`}
      animate={{ y: [0, -2, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <svg viewBox="0 0 16 16" className="w-14 h-14" style={{ imageRendering: 'pixelated' }}>
        {/* Body */}
        <rect x="3" y="8" width="10" height="6" fill="#F5D76E" />
        {/* Head */}
        <rect x="3" y="3" width="10" height="6" fill="#F5D76E" />
        {/* Ears */}
        <rect x="3" y="1" width="3" height="2" fill="#F5D76E" />
        <rect x="10" y="1" width="3" height="2" fill="#F5D76E" />
        <rect x="4" y="1" width="1" height="1" fill="#E8C84A" />
        <rect x="11" y="1" width="1" height="1" fill="#E8C84A" />
        {/* Eyes */}
        <motion.g
          animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.45, 0.5, 0.55, 1] }}
        >
          <rect x="5" y="5" width="2" height="2" fill="#2C1810" />
          <rect x="9" y="5" width="2" height="2" fill="#2C1810" />
          {/* Eye shine */}
          <rect x="5" y="5" width="1" height="1" fill="#FFFFFF" />
          <rect x="9" y="5" width="1" height="1" fill="#FFFFFF" />
        </motion.g>
        {/* Nose */}
        <rect x="7" y="7" width="2" height="1" fill="#FFB0B0" />
        {/* Whiskers */}
        <rect x="1" y="6" width="2" height="1" fill="#F5D76E" opacity="0.7" />
        <rect x="13" y="6" width="2" height="1" fill="#F5D76E" opacity="0.7" />
        <rect x="1" y="7" width="2" height="1" fill="#F5D76E" opacity="0.7" />
        <rect x="13" y="7" width="2" height="1" fill="#F5D76E" opacity="0.7" />
        {/* Tail */}
        <motion.g
          animate={{ rotate: [-10, 10, -10] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ transformOrigin: '13px 12px' }}
        >
          <rect x="13" y="10" width="2" height="2" fill="#F5D76E" />
          <rect x="14" y="8" width="2" height="2" fill="#F5D76E" />
          <rect x="15" y="7" width="1" height="1" fill="#F5D76E" />
        </motion.g>
        {/* Front paws */}
        <rect x="4" y="13" width="3" height="2" fill="#E8C84A" />
        <rect x="9" y="13" width="3" height="2" fill="#E8C84A" />
      </svg>
    </motion.div>
  )
}
