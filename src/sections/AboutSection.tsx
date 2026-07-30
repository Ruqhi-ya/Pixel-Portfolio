import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, GraduationCap, Globe, Calendar, Heart } from 'lucide-react'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-44 bg-[#16213E]/40" ref={ref}>
      <div className="section-container">
        {/* Two columns: LEFT = About + Education + Info, RIGHT = Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* LEFT COLUMN */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            {/* About Me */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-5 h-5 text-[#FF7EB6]" />
                <h2 className="pixel-text text-sm md:text-base text-[#FF7EB6]">ABOUT ME</h2>
              </div>
              <div className="border-4 border-[#8A63D2] bg-[#1A1A40]/80 p-8">
                <p className="retro-text text-2xl leading-relaxed text-[#F5F5F5]/90">
                  I'm a creative developer and designer who loves turning ideas into beautiful and functional products. I enjoy solving problems, learning new things and building projects that make a real-world impact.
                </p>
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-5 h-5 text-[#F5D76E]" />
                <h3 className="pixel-text text-[11px] text-[#F5D76E]">EDUCATION</h3>
              </div>
              <div className="border-4 border-[#8A63D2] bg-[#1A1A40]/80 p-8">
                <p className="retro-text text-2xl text-[#F5F5F5]/90 mb-3">
                  Bachelor's Degree (Computer Applications)
                </p>
                <p className="retro-text text-xl text-[#8A63D2] mb-4">
                  JSS Autonomous College, Ooty Road
                </p>
                <div className="flex items-center gap-3 text-[#F5F5F5]/60 mb-3">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="retro-text text-xl">Bengaluru, India</span>
                </div>
                <div className="flex items-center gap-3 text-[#F5F5F5]/60">
                  <Calendar className="w-4 h-4 flex-shrink-0" />
                  <span className="retro-text text-xl">2027 – 2028 (Expected)</span>
                </div>
              </div>
            </div>

            {/* Info - compact */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-5 h-5 text-[#3CB043]" />
                <h3 className="pixel-text text-[11px] text-[#3CB043]">INFO</h3>
              </div>
              <div className="border-2 border-[#3CB043]/40 bg-[#1A1A40]/80 p-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <p className="pixel-text text-[8px] text-[#3CB043] mb-2">LOCATION</p>
                    <p className="retro-text text-xl text-[#F5F5F5]/90">Bengaluru, India</p>
                  </div>
                  <div>
                    <p className="pixel-text text-[8px] text-[#FF7EB6] mb-2">LANGUAGES</p>
                    <p className="retro-text text-xl text-[#F5F5F5]/90">English, Hindi, Kannada</p>
                  </div>
                  <div>
                    <p className="pixel-text text-[8px] text-[#8A63D2] mb-2">AVAILABILITY</p>
                    <motion.p
                      className="retro-text text-xl text-[#3CB043]"
                      animate={{ opacity: [1, 0.6, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Open to Opportunities
                    </motion.p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-lg">⭐</span>
              <h2 className="pixel-text text-sm md:text-base text-[#8A63D2]">SKILLS</h2>
            </div>

            <div className="border-4 border-[#8A63D2] bg-[#1A1A40]/80 p-8 space-y-8">
              {/* Frontend */}
              <div>
                <p className="pixel-text text-[9px] text-[#61DAFB] mb-4">FRONTEND</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {['HTML', 'CSS / SCSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'Responsive Design'].map(skill => (
                    <div key={skill} className="flex items-center gap-2 py-2 px-3 border border-[#8A63D2]/20 bg-[#16213E]/40">
                      <div className="w-2 h-2 bg-[#61DAFB] flex-shrink-0" />
                      <p className="retro-text text-lg text-[#F5F5F5]/80">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Design */}
              <div>
                <p className="pixel-text text-[9px] text-[#A259FF] mb-4">DESIGN</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {['Figma', 'Wireframing', 'UI Design', 'Prototyping', 'Design Systems', 'User Research'].map(skill => (
                    <div key={skill} className="flex items-center gap-2 py-2 px-3 border border-[#8A63D2]/20 bg-[#16213E]/40">
                      <div className="w-2 h-2 bg-[#A259FF] flex-shrink-0" />
                      <p className="retro-text text-lg text-[#F5F5F5]/80">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product */}
              <div>
                <p className="pixel-text text-[9px] text-[#FF7EB6] mb-4">PRODUCT</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {['Product Thinking', 'User Flows', 'User Personas', 'Info Architecture'].map(skill => (
                    <div key={skill} className="flex items-center gap-2 py-2 px-3 border border-[#8A63D2]/20 bg-[#16213E]/40">
                      <div className="w-2 h-2 bg-[#FF7EB6] flex-shrink-0" />
                      <p className="retro-text text-lg text-[#F5F5F5]/80">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
