import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

interface DayNightToggleProps {
  isNight: boolean
  onToggle: () => void
}

export default function DayNightToggle({ isNight, onToggle }: DayNightToggleProps) {
  return (
    <motion.button
      onClick={onToggle}
      className="fixed top-20 right-4 z-50 w-12 h-12 pixel-border bg-[#1A1A40] flex items-center justify-center hover:bg-[#8A63D2]/30 transition-colors"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.9 }}
      aria-label={isNight ? 'Switch to day mode' : 'Switch to night mode'}
    >
      <motion.div
        key={isNight ? 'moon' : 'sun'}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {isNight ? (
          <Moon className="w-5 h-5 text-[#F5D76E]" />
        ) : (
          <Sun className="w-5 h-5 text-[#F5D76E]" />
        )}
      </motion.div>
    </motion.button>
  )
}
