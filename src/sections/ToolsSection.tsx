import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

interface Tool {
  name: string
  icon: string
  color: string
}

const unlockedSkills: Tool[] = [
  { name: 'HTML', icon: '🟧', color: '#E44D26' },
  { name: 'CSS', icon: '🟦', color: '#1572B6' },
  { name: 'JavaScript', icon: '⚡', color: '#F5D76E' },
  { name: 'Git', icon: '🔀', color: '#F05032' },
  { name: 'GitHub', icon: '🐙', color: '#F5F5F5' },
  { name: 'VS Code', icon: '💻', color: '#007ACC' },
  { name: 'React', icon: '⚛️', color: '#61DAFB' },
  { name: 'Figma', icon: '🎨', color: '#A259FF' },
  { name: 'Canva', icon: '🖼️', color: '#00C4CC' },
  { name: 'Tailwind CSS', icon: '💨', color: '#38BDF8' },
  { name: 'TypeScript', icon: '🔷', color: '#3178C6' },
]

const trainingSkills: Tool[] = [
  { name: 'Java', icon: '☕', color: '#ED8B00' },
  { name: 'Python', icon: '🐍', color: '#3776AB' },
  { name: 'Docker', icon: '🐳', color: '#2496ED' },
  { name: 'Spring Boot', icon: '🍃', color: '#6DB33F' },
  { name: 'Node.js', icon: '🟢', color: '#3CB043' },
  { name: 'FastAPI', icon: '⚡', color: '#009688' },
  { name: 'PostgreSQL', icon: '🐘', color: '#336791' },
]

export default function ToolsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredTool, setHoveredTool] = useState<string | null>(null)

  return (
    <section id="tools" className="relative py-52 bg-[#16213E]/30" ref={ref}>
      <div className="w-full px-6 sm:px-10 lg:px-20 xl:px-32">
        {/* Section title */}
        <motion.div
          className="text-center mb-20"
          initial={{ y: -20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
        >
          <h2 className="pixel-text text-base md:text-xl text-[#F5D76E]">
            TOOLS & TECHNOLOGIES
          </h2>
          <div className="w-24 h-1 bg-[#F5D76E] mx-auto mt-3" />
        </motion.div>

        {/* Two columns: Left = Unlocked, Right = Training */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* LEFT - Skills Unlocked */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 className="pixel-text text-[10px] md:text-xs text-[#3CB043] mb-6 text-center">
              ✓ SKILLS UNLOCKED
            </h3>
            <div className="bg-[#1A1A40]/70 p-6 md:p-8" style={{ borderWidth: '3px', borderStyle: 'solid', borderColor: '#3CB043' }}>
              {unlockedSkills.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  className="flex items-center gap-4 py-4 group cursor-pointer"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.05 * index }}
                  onMouseEnter={() => setHoveredTool(tool.name)}
                  onMouseLeave={() => setHoveredTool(null)}
                  whileHover={{ x: 4 }}
                >
                  <motion.div
                    className="w-9 h-9 flex items-center justify-center border border-[#3CB043]/30 bg-[#16213E] flex-shrink-0"
                    animate={hoveredTool === tool.name ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.4 }}
                  >
                    <span className="text-lg">{tool.icon}</span>
                  </motion.div>
                  <p className="pixel-text text-[8px] md:text-[9px] text-[#F5F5F5]/80 group-hover:text-[#3CB043] transition-colors">
                    {tool.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT - Currently Training */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <h3 className="pixel-text text-[10px] md:text-xs text-[#F5D76E] mb-6 text-center">
              ◉ CURRENTLY TRAINING
            </h3>
            <div className="bg-[#1A1A40]/70 p-6 md:p-8" style={{ borderWidth: '3px', borderStyle: 'solid', borderColor: '#F5D76E' }}>
              {trainingSkills.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  className="flex items-center gap-4 py-4 group cursor-pointer"
                  initial={{ opacity: 0, x: 10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + 0.05 * index }}
                  onMouseEnter={() => setHoveredTool(tool.name)}
                  onMouseLeave={() => setHoveredTool(null)}
                  whileHover={{ x: 4 }}
                >
                  <motion.div
                    className="w-9 h-9 flex items-center justify-center border border-[#F5D76E]/30 bg-[#16213E] flex-shrink-0"
                    animate={hoveredTool === tool.name ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.4 }}
                  >
                    <span className="text-lg">{tool.icon}</span>
                  </motion.div>
                  <p className="pixel-text text-[8px] md:text-[9px] text-[#F5F5F5]/80 group-hover:text-[#F5D76E] transition-colors">
                    {tool.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
