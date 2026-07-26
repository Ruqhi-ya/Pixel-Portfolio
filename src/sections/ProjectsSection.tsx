import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, X } from 'lucide-react'

interface Project {
  title: string
  description: string
  tags: string[]
  color: string
  status: 'completed' | 'in-progress' | 'upcoming'
  link?: string
}

const projects: Project[] = [
  {
    title: 'Catrimonial AI',
    description: 'An AI-powered platform for cat parents to create profiles, find breed matches, explore adoption options and manage their cat\'s health.',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    color: '#FF7EB6',
    status: 'completed',
    link: '#',
  },
  {
    title: 'SaaS Landing Page',
    description: 'A modern and responsive SaaS landing page design with clean UI, engaging sections and smooth user experience.',
    tags: ['Figma', 'HTML', 'Tailwind CSS'],
    color: '#8A63D2',
    status: 'completed',
    link: '#',
  },
  {
    title: 'Wanderly Travel Website',
    description: 'A full-stack travel website to explore destinations, plan trips, and book experiences seamlessly.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    color: '#3CB043',
    status: 'in-progress',
  },
  {
    title: 'House Price Prediction',
    description: 'A machine learning project to predict house prices based on various features using regression models.',
    tags: ['Python', 'ML', 'Scikit-learn'],
    color: '#F5D76E',
    status: 'upcoming',
  },
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="relative py-48" ref={ref}>
      <div className="w-full px-6 sm:px-10 lg:px-20 xl:px-32">
        {/* Section title - banner style */}
        <motion.div
          className="text-center mb-20"
          initial={{ y: -20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
        >
          <h2 className="pixel-text text-base md:text-xl text-[#F5D76E]">
            ⭐ FEATURED PROJECTS ⭐
          </h2>
          <div className="w-24 h-1 bg-[#F5D76E] mx-auto mt-3" />
          <p className="retro-text text-xl text-[#F5F5F5]/60 mt-4">Buildings in my pixel village</p>
        </motion.div>

        {/* Project grid - 2 LARGE featured on top + 2 smaller on bottom */}
        <div className="space-y-16">
          {/* Top row - 2 large featured cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.slice(0, 2).map((project, index) => (
              <motion.div
                key={project.title}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 * index }}
                onClick={() => setSelectedProject(project)}
              >
                <motion.div
                  className="border-4 border-[#8A63D2] bg-[#1A1A40]/80 p-8 md:p-10 h-full flex flex-col relative overflow-hidden"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-1.5" style={{ backgroundColor: project.color, opacity: 0.8 }} />

                  {/* Building icon + status */}
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

                  {/* Title */}
                  <h3 className="pixel-text text-[10px] md:text-xs text-[#FF7EB6] mb-4">{project.title}</h3>

                  {/* Description */}
                  <p className="retro-text text-2xl text-[#F5F5F5]/80 leading-relaxed mb-6 flex-1">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="pixel-text text-[7px] px-3 py-1 bg-[#8A63D2]/15 text-[#8A63D2] border border-[#8A63D2]/20">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  {project.link && (
                    <div className="flex items-center gap-2 pixel-text text-[8px] text-[#F5D76E] group-hover:text-[#FF7EB6] transition-colors">
                      VIEW PROJECT <ExternalLink className="w-3 h-3" />
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom row - 2 smaller cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.slice(2, 4).map((project, index) => (
              <motion.div
                key={project.title}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 * (index + 2) }}
                onClick={() => setSelectedProject(project)}
              >
                <motion.div
                  className="border-2 border-[#8A63D2]/30 bg-[#1A1A40]/80 p-6 md:p-8 h-full flex flex-col relative overflow-hidden"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: project.color, opacity: 0.6 }} />

                  {/* Building icon + status */}
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

                  {/* Title */}
                  <h3 className="pixel-text text-[10px] text-[#FF7EB6] mb-3">{project.title}</h3>

                  {/* Description */}
                  <p className="retro-text text-2xl text-[#F5F5F5]/80 leading-relaxed mb-5 flex-1">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="pixel-text text-[7px] px-3 py-1 bg-[#8A63D2]/15 text-[#8A63D2] border border-[#8A63D2]/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="border-4 border-[#8A63D2] bg-[#1A1A40] p-8 md:p-10 max-w-lg w-full relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            onClick={e => e.stopPropagation()}
          >
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 text-[#FF7EB6] hover:text-white" aria-label="Close">
              <X className="w-5 h-5" />
            </button>
            <h3 className="pixel-text text-xs text-[#FF7EB6] mb-4">{selectedProject.title}</h3>
            <p className="retro-text text-xl text-[#F5F5F5]/90 mb-6">{selectedProject.description}</p>
            <div className="flex flex-wrap gap-2">
              {selectedProject.tags.map(tag => (
                <span key={tag} className="pixel-text text-[8px] px-3 py-1 bg-[#8A63D2]/20 text-[#8A63D2] border border-[#8A63D2]/30">{tag}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
