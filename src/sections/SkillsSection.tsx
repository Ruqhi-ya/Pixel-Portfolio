import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

interface Skill {
  name: string
  level: number
  color: string
  icon: string
  category: string
}

const skills: Skill[] = [
  { name: 'HTML', level: 90, color: '#E44D26', icon: '🟧', category: 'Frontend' },
  { name: 'CSS / SCSS', level: 88, color: '#1572B6', icon: '🟦', category: 'Frontend' },
  { name: 'JavaScript', level: 85, color: '#F5D76E', icon: '⚡', category: 'Frontend' },
  { name: 'React.js', level: 82, color: '#61DAFB', icon: '⚛️', category: 'Frontend' },
  { name: 'Tailwind CSS', level: 90, color: '#38BDF8', icon: '💨', category: 'Frontend' },
  { name: 'Responsive Design', level: 88, color: '#FF7EB6', icon: '📱', category: 'Frontend' },
  { name: 'Figma', level: 85, color: '#A259FF', icon: '🎨', category: 'Design' },
  { name: 'Wireframing', level: 80, color: '#8A63D2', icon: '📐', category: 'Design' },
  { name: 'UI Design', level: 85, color: '#FF7EB6', icon: '✨', category: 'Design' },
  { name: 'Prototyping', level: 78, color: '#3CB043', icon: '🔄', category: 'Design' },
  { name: 'Design Systems', level: 75, color: '#F5D76E', icon: '📦', category: 'Design' },
  { name: 'User Research', level: 72, color: '#61DAFB', icon: '🔍', category: 'Design' },
  { name: 'Product Thinking', level: 80, color: '#FF7EB6', icon: '💡', category: 'Product' },
  { name: 'User Flows', level: 82, color: '#3CB043', icon: '🌊', category: 'Product' },
  { name: 'User Personas', level: 78, color: '#8A63D2', icon: '👤', category: 'Product' },
  { name: 'Info Architecture', level: 76, color: '#F5D76E', icon: '🏗️', category: 'Product' },
]

const categories = ['Frontend', 'Design', 'Product']

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>('Frontend')

  const filteredSkills = skills.filter(s => s.category === activeCategory)

  return (
    <section id="skills" className="relative py-44" ref={ref}>
      <div className="w-full px-6 sm:px-10 lg:px-20 xl:px-32">
        {/* Section title - banner style */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
        >
          <h2 className="pixel-text text-base md:text-xl text-[#8A63D2]">
            ⭐ SKILLS ⭐
          </h2>
          <div className="w-20 h-1 bg-[#8A63D2] mx-auto mt-3" />
          <p className="retro-text text-xl text-[#F5F5F5]/60 mt-4">Inventory of abilities</p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          {categories.map(cat => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`pixel-text text-[9px] md:text-[10px] px-6 py-3 transition-all border-2 ${
                activeCategory === cat
                  ? 'border-[#F5D76E] bg-[#F5D76E]/10 text-[#F5D76E]'
                  : 'border-[#8A63D2]/30 text-[#F5F5F5]/60 hover:text-[#FF7EB6] hover:border-[#FF7EB6]/50'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.toUpperCase()}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid - small uniform items */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 * index }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <motion.div
                className="border-2 border-[#8A63D2]/30 bg-[#1A1A40]/80 p-6 flex flex-col items-center gap-5 cursor-pointer h-full"
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Icon */}
                <motion.div
                  className="text-3xl"
                  animate={hoveredSkill === skill.name ? { y: [-2, 2, -2] } : {}}
                  transition={{ duration: 0.4, repeat: hoveredSkill === skill.name ? Infinity : 0 }}
                >
                  {skill.icon}
                </motion.div>

                {/* Name */}
                <p className="pixel-text text-[8px] md:text-[9px] text-center text-[#F5F5F5]">
                  {skill.name}
                </p>

                {/* Level bar */}
                <div className="w-full h-2 bg-[#16213E] border border-[#8A63D2]/30 mt-auto">
                  <motion.div
                    className="h-full"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.1 * index }}
                  />
                </div>

                {/* Level */}
                <p className="pixel-text text-[6px] text-[#F5F5F5]/50">
                  LVL {Math.floor(skill.level / 10)}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
