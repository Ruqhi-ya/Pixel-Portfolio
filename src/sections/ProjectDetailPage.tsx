import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Code2, Image } from 'lucide-react'

export interface ProjectDetail {
  id: string
  title: string
  overview: string
  features: string[]
  technologies: string[]
  role: string
  color: string
  status: 'completed' | 'in-progress' | 'upcoming'
  github?: string
  liveDemo?: string
}

const projectsData: ProjectDetail[] = [
  {
    id: 'catrimonial-ai',
    title: 'Catrimonial AI',
    overview: 'An AI-powered platform designed for cat parents to create profiles for their cats, find breed matches, explore adoption options, and manage their cat\'s health records. The platform uses machine learning to suggest compatible breeds and connects cat owners with shelters.',
    features: [
      'User authentication and profile creation',
      'AI-powered breed matching algorithm',
      'Cat health record management',
      'Adoption center integration',
      'Real-time chat between cat owners',
      'Responsive design for all devices',
    ],
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Express.js', 'JWT Auth'],
    role: 'Full-Stack Developer — Designed and developed the entire application from frontend UI to backend API and database architecture.',
    color: '#FF7EB6',
    status: 'completed',
    github: '#',
    liveDemo: '#',
  },
  {
    id: 'saas-landing-page',
    title: 'SaaS Landing Page',
    overview: 'A modern, conversion-focused SaaS landing page with clean UI, engaging sections, smooth scroll animations, and optimized user experience. Built with a design-first approach in Figma and then implemented with pixel-perfect accuracy.',
    features: [
      'Hero section with CTA',
      'Feature showcase with icons',
      'Pricing table comparison',
      'Testimonials carousel',
      'FAQ accordion section',
      'Newsletter signup form',
      'Fully responsive layout',
    ],
    technologies: ['Figma', 'HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript'],
    role: 'UI/UX Designer & Frontend Developer — Created the design in Figma and built the responsive implementation.',
    color: '#8A63D2',
    status: 'completed',
    github: '#',
    liveDemo: '#',
  },
  {
    id: 'wanderly-travel',
    title: 'Wanderly Travel Website',
    overview: 'A full-stack travel website that allows users to explore destinations around the world, plan trips with custom itineraries, and book travel experiences seamlessly. Currently under active development.',
    features: [
      'Destination search and filtering',
      'Custom trip planner',
      'User reviews and ratings',
      'Booking integration',
      'Interactive maps',
      'Responsive mobile-first design',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Express.js', 'Mapbox API'],
    role: 'Full-Stack Developer — Building the entire platform from UI design to backend services.',
    color: '#3CB043',
    status: 'in-progress',
    github: '#',
  },
  {
    id: 'house-price-prediction',
    title: 'House Price Prediction',
    overview: 'A machine learning project that will predict house prices based on various features like location, size, number of rooms, and local amenities using regression models. The goal is to help buyers and sellers make data-driven decisions in the real estate market.',
    features: [
      'Data preprocessing and cleaning pipeline',
      'Feature engineering and selection',
      'Multiple regression model comparison',
      'Interactive prediction interface',
      'Visualization of price trends',
      'Model accuracy metrics dashboard',
    ],
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Jupyter Notebook'],
    role: 'ML Engineer — Will design the data pipeline, train models, and build the prediction interface.',
    color: '#F5D76E',
    status: 'upcoming',
  },
]

interface ProjectDetailPageProps {
  projectId: string
  onBack: () => void
}

export default function ProjectDetailPage({ projectId, onBack }: ProjectDetailPageProps) {
  const project = projectsData.find(p => p.id === projectId)

  if (!project) return null

  return (
    <motion.div
      className="min-h-screen bg-[#1A1A40] relative z-10 pt-20 pb-16"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
    >
      <div className="section-container">
        {/* Back button */}
        <motion.button
          onClick={onBack}
          className="flex items-center gap-3 mb-10 pixel-text text-[9px] text-[#F5D76E] hover:text-[#FF7EB6] transition-colors"
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="w-4 h-4" />
          BACK TO PORTFOLIO
        </motion.button>

        {/* Project header */}
        <motion.div
          className="mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <h1 className="pixel-text text-lg md:text-2xl text-[#FF7EB6]">{project.title}</h1>
            <span className={`pixel-text text-[8px] px-3 py-1.5 ${
              project.status === 'completed' ? 'bg-[#3CB043]/20 text-[#3CB043] border border-[#3CB043]/30' :
              project.status === 'in-progress' ? 'bg-[#F5D76E]/20 text-[#F5D76E] border border-[#F5D76E]/30' :
              'bg-[#8A63D2]/20 text-[#8A63D2] border border-[#8A63D2]/30'
            }`}>
              {project.status === 'completed' ? '✓ COMPLETED' :
               project.status === 'in-progress' ? '◉ IN PROGRESS' : '◌ COMING SOON'}
            </span>
          </div>
          <div className="w-16 h-1 mt-2" style={{ backgroundColor: project.color }} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content - 2 columns */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview */}
            <motion.div
              className="border-4 border-[#8A63D2] bg-[#1A1A40]/80 p-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="pixel-text text-[10px] text-[#F5D76E] mb-5">PROJECT OVERVIEW</h2>
              <p className="retro-text text-2xl leading-relaxed text-[#F5F5F5]/90">{project.overview}</p>
            </motion.div>

            {/* Features */}
            <motion.div
              className="border-2 border-[#8A63D2]/30 bg-[#1A1A40]/80 p-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="pixel-text text-[10px] text-[#3CB043] mb-5">FEATURES</h2>
              <ul className="space-y-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 flex-shrink-0" style={{ backgroundColor: project.color }} />
                    <span className="retro-text text-xl text-[#F5F5F5]/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Screenshots placeholder */}
            <motion.div
              className="border-2 border-[#8A63D2]/30 bg-[#1A1A40]/80 p-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="pixel-text text-[10px] text-[#8A63D2] mb-5">SCREENSHOTS</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="border-2 border-[#8A63D2]/20 bg-[#16213E]/50 h-40 flex items-center justify-center">
                    <div className="text-center">
                      <Image className="w-8 h-8 text-[#8A63D2]/40 mx-auto mb-2" />
                      <p className="pixel-text text-[7px] text-[#8A63D2]/40">Screenshot {i}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Technologies */}
            <motion.div
              className="border-2 border-[#8A63D2]/30 bg-[#1A1A40]/80 p-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="pixel-text text-[10px] text-[#F5D76E] mb-5">TECHNOLOGIES</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="pixel-text text-[7px] px-3 py-1.5 bg-[#8A63D2]/15 text-[#8A63D2] border border-[#8A63D2]/30">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* My Role */}
            <motion.div
              className="border-2 border-[#8A63D2]/30 bg-[#1A1A40]/80 p-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="pixel-text text-[10px] text-[#FF7EB6] mb-5">MY ROLE</h2>
              <p className="retro-text text-xl text-[#F5F5F5]/80 leading-relaxed">{project.role}</p>
            </motion.div>

            {/* Action buttons */}
            <motion.div
              className="space-y-3"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {project.status !== 'upcoming' && project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-3 px-4 border-2 border-[#F5F5F5]/30 bg-[#16213E]/50 pixel-text text-[9px] text-[#F5F5F5] hover:border-[#F5F5F5] hover:bg-[#F5F5F5]/10 transition-all"
                >
                  <Code2 className="w-4 h-4" />
                  GITHUB REPOSITORY
                </a>
              )}

              {project.status === 'completed' && project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-3 px-4 border-2 border-[#3CB043]/50 bg-[#3CB043]/10 pixel-text text-[9px] text-[#3CB043] hover:border-[#3CB043] hover:bg-[#3CB043]/20 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  LIVE DEMO
                </a>
              )}

              {project.status === 'in-progress' && (
                <div className="border-2 border-[#F5D76E]/30 bg-[#F5D76E]/5 p-4 text-center">
                  <p className="pixel-text text-[8px] text-[#F5D76E] mb-2">◉ IN PROGRESS</p>
                  <p className="retro-text text-lg text-[#F5F5F5]/60">This project is currently under development.</p>
                </div>
              )}

              {project.status === 'upcoming' && (
                <div className="border-2 border-[#8A63D2]/30 bg-[#8A63D2]/5 p-4 text-center">
                  <p className="pixel-text text-[8px] text-[#8A63D2] mb-2">◌ COMING SOON</p>
                  <p className="retro-text text-lg text-[#F5F5F5]/60">This project is planned for the future.</p>
                </div>
              )}

              <button
                onClick={onBack}
                className="flex items-center justify-center gap-3 w-full py-3 px-4 border-2 border-[#FF7EB6]/50 bg-[#FF7EB6]/10 pixel-text text-[9px] text-[#FF7EB6] hover:border-[#FF7EB6] hover:bg-[#FF7EB6]/20 transition-all mt-4"
              >
                <ArrowLeft className="w-4 h-4" />
                BACK TO PORTFOLIO
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export { projectsData }
