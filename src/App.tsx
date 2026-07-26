import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ExperienceSection from './sections/ExperienceSection'
import ProjectsSection from './sections/ProjectsSection'
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

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
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
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

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
        <ProjectsSection />
        <ToolsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
