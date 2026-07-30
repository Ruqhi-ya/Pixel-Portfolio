import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink } from 'lucide-react'

interface ProjectCardData {
  id: string
  title: string
  description: string
  tags: string[]
  color: string
  status: 'completed' | 'in-progress' | 'upcoming'
}

const projects: ProjectCardData[] = [
  {
    id: 'catrimonial-ai',
    title: 'Catrimonial AI',
    description: 'An AI-powered platform for cat parents to create profiles, find breed matches, explore adoption options and manage their cat\'s health.',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    color: '#FF7EB6',
    status: 'completed',
  },
  {
    id: 'saas-landing-page',
    title: 'SaaS Landing Page',
    description: 'A modern and responsive SaaS landing page design with clean UI, engaging sections and smooth user experience.',
    tags: ['Figma', 'HTML', 'Tailwind CSS'],
    color: '#8A63D2',
    status: 'completed',
  },
  {
    id: 'wanderly-travel',
    title: 'Wanderly Travel Website',
    description: 'A full-stack travel website to explore destinations, plan trips, and book experiences seamlessly.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    color: '#3CB043',
    status: 'in-progress',
  },
  {
    id: 'house-price-prediction',
    title: 'House Price Prediction',
    description: 'A machine learning project to predict house prices based on various features using regression models.',
    tags: ['Python', 'ML', 'Scikit-learn'],
    color: '#F5D76E',
    status: 'upcoming',
  },
]

interface ProjectsSectionProps {
  onProjectClick: (projectId: string) => void
}

export default function ProjectsSection({ onProjectClick }: ProjectsSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="relative py-24" ref={ref}>
      <div className="section-container">
        {/* Section title */}
        <motion.div
          className="text-center mb-20"
          initial={{ y: -20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
        >
          <h2 className="pixel-text text-base md:text-xl text-[#F5D76E]">
            ⭐ FEATURED PROJECTS ⭐
          </h2>
          <div className="w-24 h-1 bg-[#F5D76E] mx-auto mt-3" />
          <p className="retro-text text-xl text-[#F5F5F5]/60 mt-4">Click a project to explore details</p>
        </motion.div>

        {/* Project grid */}
        <div className="space-y-16">
          {/* Top row - 2 large featured cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {projects.slice(0, 2).map((project, index) => (
              <motion.div
                key={project.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 * index }}
                onClick={() => onProjectClick(project.id)}
              >
                <motion.div
                  className="border-4 border-[#8A63D2] bg-[#1A1A40]/80 p-8 md:p-10 h-full flex flex-col relative overflow-hidden"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="absolute top-0 left-0 right-0 h-1.5" style={{ backgroundColor: project.color, opacity: 0.8 }} />

                  <div className="flex items-center justify-between mb-6">
                    <svg viewBox="0 0 24 24" className="w-12 h-12" style={{ imageRendering: 'pixelated' }}>
                      <rect x="4" y="4" width="16" height="16" fill={project.color} opacity="0.2" />
                      <rect x="4" y="4" width="16" height="2" fill={project.color} />
                      <rect x="4" y="4" width="2" height="16" fill={project.color} />
                      <rect x="18" y="4" width="2" height="16" fill={project.color} />
                      <rect x="4" y="18" width="16" height="2" fill={project.color} />
                      <rect x="9" y="14" width="6" height="6" fill={project.color} opacity="0.5" />
                      <rect x="7" y="7" width="3" height="3" fill="#F5D76E" opacity="0.7" />
                      <rect x="14" y="7" width="3" height="3" fill="#F5D76E" opacity="0.7" />
                    </svg>
                    <span className={`pixel-text text-[7px] px-3 py-1.5 ${
                      project.status === 'completed' ? 'bg-[#3CB043]/20 text-[#3CB043]' :
                      project.status === 'in-progress' ? 'bg-[#F5D76E]/20 text-[#F5D76E]' :
                      'bg-[#8A63D2]/20 text-[#8A63D2]'
                    }`}>
                      {project.status === 'completed' ? '✓ COMPLETE' :
                       project.status === 'in-progress' ? '◉ IN PROGRESS' : '◌ UPCOMING'}
                    </span>
                  </div>

                  <h3 className="pixel-text text-[10px] md:text-xs text-[#FF7EB6] mb-4">{project.title}</h3>
                  <p className="retro-text text-2xl text-[#F5F5F5]/80 leading-relaxed mb-6 flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="pixel-text text-[7px] px-3 py-1 bg-[#8A63D2]/15 text-[#8A63D2] border border-[#8A63D2]/20">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pixel-text text-[8px] text-[#F5D76E] group-hover:text-[#FF7EB6] transition-colors">
                    VIEW DETAILS <ExternalLink className="w-3 h-3" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom row - 2 smaller cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {projects.slice(2, 4).map((project, index) => (
              <motion.div
                key={project.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 * (index + 2) }}
                onClick={() => onProjectClick(project.id)}
              >
                <motion.div
                  className="border-2 border-[#8A63D2]/30 bg-[#1A1A40]/80 p-6 md:p-8 h-full flex flex-col relative overflow-hidden"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: project.color, opacity: 0.6 }} />

                  <div className="flex items-center justify-between mb-5">
                    <svg viewBox="0 0 24 24" className="w-10 h-10" style={{ imageRendering: 'pixelated' }}>
                      <rect x="4" y="4" width="16" height="16" fill={project.color} opacity="0.2" />
                      <rect x="4" y="4" width="16" height="2" fill={project.color} />
                      <rect x="4" y="4" width="2" height="16" fill={project.color} />
                      <rect x="18" y="4" width="2" height="16" fill={project.color} />
                      <rect x="4" y="18" width="16" height="2" fill={project.color} />
                      <rect x="9" y="14" width="6" height="6" fill={project.color} opacity="0.5" />
                      <rect x="7" y="7" width="3" height="3" fill="#F5D76E" opacity="0.7" />
                      <rect x="14" y="7" width="3" height="3" fill="#F5D76E" opacity="0.7" />
                    </svg>
                    <span className={`pixel-text text-[7px] px-2 py-1 ${
                      project.status === 'completed' ? 'bg-[#3CB043]/20 text-[#3CB043]' :
                      project.status === 'in-progress' ? 'bg-[#F5D76E]/20 text-[#F5D76E]' :
                      'bg-[#8A63D2]/20 text-[#8A63D2]'
                    }`}>
                      {project.status === 'completed' ? '✓ COMPLETE' :
                       project.status === 'in-progress' ? '◉ IN PROGRESS' : '◌ UPCOMING'}
                    </span>
                  </div>

                  <h3 className="pixel-text text-[10px] text-[#FF7EB6] mb-3">{project.title}</h3>
                  <p className="retro-text text-2xl text-[#F5F5F5]/80 leading-relaxed mb-5 flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="pixel-text text-[7px] px-3 py-1 bg-[#8A63D2]/15 text-[#8A63D2] border border-[#8A63D2]/20">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pixel-text text-[8px] text-[#F5D76E] group-hover:text-[#FF7EB6] transition-colors">
                    VIEW DETAILS <ExternalLink className="w-3 h-3" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
