import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Download, Eye, Heart } from 'lucide-react'
import PixelCharacter from '../sprites/PixelCharacter'
import PixelCat from '../sprites/PixelCat'

export default function HeroSection() {
  const [currentText, setCurrentText] = useState(0)
  const speechTexts = ['Code.', 'Design.', 'Create Impact.']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % speechTexts.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-40 overflow-hidden">
      {/* Grass ground */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#2F8F46] to-[#3CB043] z-[1]">
        {/* Grass blades */}
        <div className="absolute top-0 left-0 right-0 flex overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 w-[3px] bg-[#4DD35D] origin-bottom mx-[2px]"
              style={{ height: `${10 + Math.random() * 12}px`, marginTop: '-6px' }}
              animate={{ skewX: [-3, 3, -3] }}
              transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: i * 0.05 }}
            />
          ))}
        </div>
        {/* Small flowers */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`flower-${i}`}
            className="absolute"
            style={{ left: `${8 + i * 15}%`, bottom: `${25 + Math.random() * 25}%` }}
            animate={{ scale: [1, 1.1, 1], rotate: [-2, 2, -2] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
          >
            <svg viewBox="0 0 6 8" className="w-3 h-4" style={{ imageRendering: 'pixelated' }}>
              <rect x="2" y="4" width="2" height="4" fill="#2F8F46" />
              <rect x="1" y="1" width="2" height="2" fill={i % 2 === 0 ? '#FF7EB6' : '#F5D76E'} />
              <rect x="3" y="1" width="2" height="2" fill={i % 2 === 0 ? '#FF7EB6' : '#F5D76E'} />
              <rect x="2" y="2" width="2" height="2" fill="#F5D76E" />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Birds flying across */}
      {Array.from({ length: 2 }).map((_, i) => (
        <motion.div
          key={`bird-${i}`}
          className="absolute z-[2]"
          style={{ top: `${10 + i * 10}%` }}
          animate={{ x: ['-60px', 'calc(100vw + 60px)'] }}
          transition={{ duration: 18 + i * 5, repeat: Infinity, delay: i * 8, ease: 'linear' }}
        >
          <svg viewBox="0 0 12 6" className="w-5 h-3" style={{ imageRendering: 'pixelated' }}>
            <rect x="0" y="2" width="2" height="2" fill="#F5F5F5" opacity="0.6" />
            <rect x="2" y="1" width="2" height="2" fill="#F5F5F5" opacity="0.6" />
            <rect x="4" y="2" width="4" height="2" fill="#F5F5F5" opacity="0.6" />
            <rect x="8" y="1" width="2" height="2" fill="#F5F5F5" opacity="0.6" />
            <rect x="10" y="2" width="2" height="2" fill="#F5F5F5" opacity="0.6" />
          </svg>
        </motion.div>
      ))}

      {/* Main content */}
      <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Character */}
          <motion.div
            className="flex flex-col items-center lg:items-center relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Speech bubble */}
            <motion.div
              className="relative mb-4 pixel-border bg-[#1A1A40]/90 px-5 py-2.5"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: 'spring' }}
            >
              <motion.p
                key={currentText}
                className="pixel-text text-[#F5D76E] text-[10px] md:text-xs whitespace-nowrap"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {speechTexts[currentText]}
              </motion.p>
              {/* Speech bubble tail */}
              <div className="absolute -bottom-2 left-8 w-3 h-2 bg-[#8A63D2]"
                style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
              />
            </motion.div>

            {/* Character + Cat */}
            <div className="relative flex items-end gap-2">
              <PixelCharacter />
              <div className="mb-2">
                <PixelCat variant="sitting" />
              </div>
            </div>
          </motion.div>

          {/* Right side - Text content */}
          <motion.div
            className="text-center lg:text-left order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.p
              className="pixel-text text-[#F5F5F5] text-xs md:text-sm mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              HI, I'M
            </motion.p>

            <motion.h1
              className="pixel-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FF7EB6] mb-4 leading-[1.3]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              RUQHIYA
              <motion.span
                className="inline-block ml-2 align-middle"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-5 h-5 md:w-7 md:h-7 text-[#FF7EB6] fill-[#FF7EB6] inline" />
              </motion.span>
            </motion.h1>

            {/* Subtitle / Roles */}
            <motion.div
              className="mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <p className="retro-text text-lg md:text-2xl text-[#8A63D2]">
                Frontend Developer • UI Designer • Product Designer
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              className="retro-text text-base md:text-xl text-[#F5F5F5]/80 mb-8 max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              I design & build digital experiences that are meaningful, usable and pixel-perfect.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
            >
              <motion.a
                href="#projects"
                className="pixel-border bg-[#8A63D2] px-5 py-2.5 pixel-text text-[9px] md:text-[10px] text-white flex items-center gap-2 hover:bg-[#9B74E3] transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye className="w-3.5 h-3.5" />
                VIEW MY WORK
              </motion.a>
              <motion.a
                href="#"
                className="pixel-border-pink bg-transparent px-5 py-2.5 pixel-text text-[9px] md:text-[10px] text-[#FF7EB6] flex items-center gap-2 hover:bg-[#FF7EB6]/10 transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-3.5 h-3.5" />
                DOWNLOAD CV
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-[#F5D76E]/40 rounded-full"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 70}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        />
      ))}
    </section>
  )
}
