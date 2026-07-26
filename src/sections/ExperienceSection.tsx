import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Star } from 'lucide-react'

interface Quest {
  role: string
  period: string
  description: string
  xp: number
  achievements: string[]
}

const quests: Quest[] = [
  {
    role: 'Frontend Developer',
    period: '2024 - Present',
    description: 'Building responsive, pixel-perfect web applications with modern frameworks and design systems.',
    xp: 85,
    achievements: ['React Mastery', 'Responsive Pro', 'Tailwind Expert'],
  },
  {
    role: 'UI Designer',
    period: '2023 - Present',
    description: 'Crafting intuitive user interfaces and experiences. Wireframing, prototyping, and design system creation.',
    xp: 78,
    achievements: ['Figma Wizard', 'User Flow Master', 'Design Systems'],
  },
  {
    role: 'Product Designer',
    period: '2023 - Present',
    description: 'Product thinking, user research, and building end-to-end digital experiences.',
    xp: 70,
    achievements: ['Product Thinker', 'UX Research', 'Info Architect'],
  },
]

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-48 bg-[#0d1025]/40" ref={ref}>
      <div className="w-full px-6 sm:px-10 lg:px-20 xl:px-32">
        {/* Section title - banner style */}
        <motion.div
          className="text-center mb-20"
          initial={{ y: -20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
        >
          <h2 className="pixel-text text-base md:text-xl text-[#3CB043]">
            ⚔️ QUEST LOG ⚔️
          </h2>
          <div className="w-20 h-1 bg-[#3CB043] mx-auto mt-3" />
          <p className="retro-text text-xl text-[#F5F5F5]/60 mt-4">Experience & Adventures</p>
        </motion.div>

        {/* Quest cards - 3 horizontal, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {quests.map((quest, index) => (
            <motion.div
              key={quest.role}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 * index }}
            >
              <motion.div
                className="border-2 border-[#8A63D2]/30 bg-[#1A1A40]/80 p-6 md:p-8 h-full flex flex-col"
                whileHover={{ y: -3 }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 border-2 border-[#8A63D2]/30 bg-[#16213E] flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-[#3CB043]" />
                  </div>
                  <div>
                    <h3 className="pixel-text text-[10px] text-[#FF7EB6]">{quest.role}</h3>
                    <p className="retro-text text-sm text-[#F5F5F5]/50 mt-1">{quest.period}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="retro-text text-2xl text-[#F5F5F5]/80 mb-6 flex-1 leading-relaxed">{quest.description}</p>

                {/* XP Bar */}
                <div className="mb-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="pixel-text text-[7px] text-[#8A63D2]">XP</span>
                    <span className="pixel-text text-[7px] text-[#F5D76E]">{quest.xp}/100</span>
                  </div>
                  <div className="w-full h-3 bg-[#16213E] border border-[#8A63D2]/30">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#8A63D2] to-[#FF7EB6]"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${quest.xp}%` } : {}}
                      transition={{ duration: 1.5, delay: 0.4 + index * 0.2 }}
                    />
                  </div>
                </div>

                {/* Achievements */}
                <div className="flex flex-wrap gap-2">
                  {quest.achievements.map((a, i) => (
                    <motion.span
                      key={a}
                      className="pixel-text text-[6px] md:text-[7px] px-2 py-1 bg-[#F5D76E]/10 text-[#F5D76E] border border-[#F5D76E]/30 flex items-center gap-1"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.8 + index * 0.2 + i * 0.1 }}
                    >
                      <Star className="w-2 h-2 flex-shrink-0" /> {a}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
