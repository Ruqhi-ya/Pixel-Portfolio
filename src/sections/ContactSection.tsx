import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Send, Globe, AtSign, Code2, X } from 'lucide-react'
import PixelCat from '../sprites/PixelCat'

const contactLinks = [
  { icon: Mail, label: 'rruqhiya3@gmail.com', href: 'mailto:rruqhiya3@gmail.com', color: '#FF7EB6' },
  { icon: Globe, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ruqhiya-969b00370', color: '#0A66C2' },
  { icon: Code2, label: 'GitHub', href: 'https://github.com/Ruqhi-ya', color: '#F5F5F5' },
  { icon: AtSign, label: 'Instagram', href: 'https://www.instagram.com/craftbyui?igsh=MXR6bHBhcDlkdWo5aQ==', color: '#E4405F' },
]

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section id="contact" className="relative py-56" ref={ref}>
      <div className="w-full px-6 sm:px-10 lg:px-20 xl:px-32">
        {/* Section title */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: -20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
        >
          <h2 className="pixel-text text-base md:text-xl text-[#FF7EB6]">
            ✉️ LET'S CONNECT! ✉️
          </h2>
          <div className="w-20 h-1 bg-[#FF7EB6] mx-auto mt-3" />
          <p className="retro-text text-2xl text-[#F5F5F5]/60 mt-6">
            I'm currently open to freelance, internship and full-time opportunities.
          </p>
          <p className="retro-text text-2xl text-[#F5F5F5]/60 mt-2">
            Let's build something amazing together! ✨
          </p>
        </motion.div>

        {/* Mailbox - centered */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: 0.3, type: 'spring' }}
        >
          <motion.button
            onClick={() => setIsOpen(true)}
            className="relative group"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Open mailbox"
          >
            <svg viewBox="0 0 48 48" className="w-32 h-32 md:w-40 md:h-40" style={{ imageRendering: 'pixelated' }}>
              <rect x="22" y="32" width="4" height="14" fill="#5C3A1E" />
              <rect x="10" y="14" width="28" height="18" fill="#8A63D2" />
              <rect x="10" y="14" width="28" height="3" fill="#7B54C3" />
              <rect x="8" y="10" width="32" height="4" fill="#9B74E3" />
              <rect x="38" y="14" width="3" height="12" fill="#5C3A1E" />
              <rect x="38" y="14" width="8" height="5" fill="#FF7EB6" />
              <rect x="18" y="22" width="12" height="2" fill="#1A1A40" />
              <rect x="22" y="25" width="4" height="3" fill="#FF7EB6" />
            </svg>
            <motion.p
              className="pixel-text text-[9px] md:text-[10px] text-[#F5D76E] mt-4 text-center"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              CLICK TO OPEN
            </motion.p>
          </motion.button>

          {/* Sleeping cat */}
          <div className="mt-8">
            <PixelCat variant="sleeping" />
          </div>
        </motion.div>
      </div>

      {/* POPUP MODAL - appears when mailbox is clicked */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            className="bg-[#1A1A40] p-8 md:p-12 max-w-lg w-full relative"
            style={{ borderWidth: '3px', borderStyle: 'solid', borderColor: '#FF7EB6' }}
            initial={{ scale: 0.7, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 200 }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-[#FF7EB6] hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="text-center mb-10 pb-6 border-b border-[#8A63D2]/30">
              <Send className="w-7 h-7 text-[#FF7EB6] mx-auto mb-4" />
              <p className="pixel-text text-xs text-[#F5F5F5]">CONTACT INFO</p>
            </div>

            {/* Links */}
            <div className="space-y-6">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-5 border-2 border-[#8A63D2]/20 hover:border-[#FF7EB6]/40 hover:bg-[#8A63D2]/10 transition-all group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <link.icon className="w-6 h-6 flex-shrink-0 group-hover:scale-110 transition-transform" style={{ color: link.color }} />
                  <span className="retro-text text-2xl text-[#F5F5F5]/90 group-hover:text-[#FF7EB6] transition-colors">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Thank you */}
            <motion.div
              className="mt-10 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="inline-block bg-[#F5D76E]/10 px-8 py-3" style={{ borderWidth: '3px', borderStyle: 'solid', borderColor: '#F5D76E' }}>
                <p className="pixel-text text-[9px] text-[#F5D76E]">THANK YOU FOR VISITING!</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
