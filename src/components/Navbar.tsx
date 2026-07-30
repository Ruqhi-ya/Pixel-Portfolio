import { motion } from 'framer-motion'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

interface NavbarProps {
  activeSection: string
}

const navItems = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'tools', label: 'TOOLS' },
  { id: 'contact', label: 'CONTACT' },
]

export default function Navbar({ activeSection }: NavbarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A40]/95 backdrop-blur-sm border-b-[3px] border-[#8A63D2] w-full" role="navigation" aria-label="Main navigation">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2 group flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Go to home"
          >
            <span className="pixel-text text-[#FF7EB6] text-[10px] md:text-[11px]">&lt;</span>
            <span className="pixel-text text-[#F5D76E] text-[10px] md:text-[11px]">RUQHIYA</span>
            <span className="pixel-text text-[#FF7EB6] text-[10px] md:text-[11px]">/&gt;</span>
          </motion.button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-5 py-2.5 pixel-text text-[8px] lg:text-[9px] transition-all border-2 ${
                  activeSection === item.id
                    ? 'text-[#F5D76E] border-[#F5D76E] bg-[#F5D76E]/10 shadow-[0_0_10px_rgba(245,215,110,0.3)]'
                    : 'text-[#F5F5F5]/70 border-[#8A63D2]/40 bg-[#16213E]/50 hover:text-[#FF7EB6] hover:border-[#FF7EB6]/60 hover:bg-[#FF7EB6]/5'
                }`}
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0, y: -3 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg viewBox="0 0 10 6" className="w-4 h-2.5" style={{ imageRendering: 'pixelated' }}>
                      <rect x="2" y="2" width="6" height="3" fill="#F5D76E" />
                      <rect x="2" y="0" width="2" height="2" fill="#F5D76E" />
                      <rect x="6" y="0" width="2" height="2" fill="#F5D76E" />
                      <rect x="3" y="3" width="1" height="1" fill="#1A1A40" />
                      <rect x="6" y="3" width="1" height="1" fill="#1A1A40" />
                    </svg>
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>

          {/* Sun icon */}
          <div className="hidden md:flex items-center">
            <motion.div
              className="w-8 h-8 flex items-center justify-center border-2 border-[#8A63D2]/40 bg-[#16213E]/50"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <svg viewBox="0 0 8 8" className="w-4 h-4" style={{ imageRendering: 'pixelated' }}>
                <rect x="3" y="0" width="2" height="1" fill="#F5D76E" />
                <rect x="1" y="1" width="1" height="1" fill="#F5D76E" />
                <rect x="6" y="1" width="1" height="1" fill="#F5D76E" />
                <rect x="2" y="2" width="4" height="4" fill="#F5D76E" />
                <rect x="0" y="3" width="1" height="2" fill="#F5D76E" />
                <rect x="7" y="3" width="1" height="2" fill="#F5D76E" />
                <rect x="1" y="6" width="1" height="1" fill="#F5D76E" />
                <rect x="6" y="6" width="1" height="1" fill="#F5D76E" />
                <rect x="3" y="7" width="2" height="1" fill="#F5D76E" />
              </svg>
            </motion.div>
          </div>

          {/* Mobile menu */}
          <motion.button
            className="md:hidden text-[#FF7EB6] p-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {isMobileOpen && (
        <motion.div
          className="md:hidden bg-[#1A1A40] border-t-2 border-[#8A63D2] px-6 py-4 w-full"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="grid grid-cols-2 gap-3">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-4 py-3 pixel-text text-[9px] text-center border-2 ${
                  activeSection === item.id
                    ? 'text-[#F5D76E] border-[#F5D76E] bg-[#F5D76E]/10'
                    : 'text-[#F5F5F5]/70 border-[#8A63D2]/30 bg-[#16213E]/50'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}
