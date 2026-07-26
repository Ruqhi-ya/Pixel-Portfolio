import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ExperienceSection from './sections/ExperienceSection'
import ProjectsSection from './sections/ProjectsSection'
import ProjectDetailPage from './sections/ProjectDetailPage'
import ToolsSection from './sections/ToolsSection'
import ContactSection from './sections/ContactSection'
import Footer from './components/Footer'
import ParallaxBackground from './components/ParallaxBackground'
import LoadingScreen from './components/LoadingScreen'
import DayNightToggle from './components/DayNightToggle'
import ShootingStars from './game/ShootingStars'
import Fireflies from './game/Fireflies'
import CursorTrail from './game/CursorTrail'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isNight, setIsNight] = useState(true)
  const [activeSection, setActiveSection] = useState('home')
  const [activeProject, setActiveProject] = useState<string | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (activeProject) return // Don't track scroll when on project page

    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'tools', 'contact']
      const scrollPos = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeProject])

  const handleProjectClick = (projectId: string) => {
    setActiveProject(projectId)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToPortfolio = () => {
    setActiveProject(null)
    // Scroll to projects section after a short delay
    setTimeout(() => {
      const el = document.getElementById('projects')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  // Show project detail page
  if (activeProject) {
    return (
      <div className="relative min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#1A1A40]">
        <CursorTrail />
        <ParallaxBackground isNight={isNight} />
        <Fireflies />
        <Navbar activeSection="projects" />
        <ProjectDetailPage projectId={activeProject} onBack={handleBackToPortfolio} />
        <Footer />
      </div>
    )
  }

  // Main portfolio
  return (
    <div className={`relative min-h-screen w-full max-w-[100vw] overflow-x-hidden ${isNight ? 'bg-[#1A1A40]' : 'bg-[#16213E]'} transition-colors duration-1000`}>
      <CursorTrail />
      <ParallaxBackground isNight={isNight} />
      <ShootingStars />
      <Fireflies />
      
      <DayNightToggle isNight={isNight} onToggle={() => setIsNight(!isNight)} />
      <Navbar activeSection={activeSection} />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection onProjectClick={handleProjectClick} />
        <ToolsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
