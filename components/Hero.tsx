'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, ArrowRight, Download } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'
import TypingAnimation from './TypingAnimation'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10 pt-24 bg-white dark:bg-black"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6"
              variants={itemVariants}
            >
              {personalInfo.name}
            </motion.h1>
            
            <motion.div
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 min-h-[2.5rem] sm:min-h-[3rem]"
              variants={itemVariants}
            >
              <TypingAnimation
                texts={[
                  'Web Developer',
                  'React.js ',
                  'Next.js ',
                  'Version Control Github',
                  'UI/UX Enthusiast',
                  'Creative Thinker'
                  
                ]}
                speed={80}
                delay={2500}
              />
            </motion.div>
            
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 italic mb-6 sm:mb-8 font-medium"
              variants={itemVariants}
            >
              "{personalInfo.tagline}"
            </motion.p>

            <motion.p
              className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 sm:mb-10 leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              <span className="text-primary-400 font-semibold">Frontend Developer</span> with <span className="text-primary-400 font-semibold">1.5+ years</span> of hands-on experience, specializing in crafting modern, high-performance applications using <span className="text-primary-400 font-semibold">React.js</span> and <span className="text-primary-400 font-semibold">Next.js</span>. Continuously enhancing expertise in writing clean, maintainable code, optimizing performance, and developing reusable components. Proficient in <span className="text-primary-400 font-semibold">Bootstrap</span> and <span className="text-primary-400 font-semibold">Tailwind CSS</span>, along with strong foundations in <span className="text-primary-400 font-semibold">HTML</span>, <span className="text-primary-400 font-semibold">CSS</span>, and <span className="text-primary-400 font-semibold">JavaScript</span>.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
              variants={itemVariants}
            >
              <motion.button
                onClick={scrollToAbout}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl font-semibold text-sm sm:text-base w-full sm:w-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View More
                <ArrowRight size={18} className="sm:w-5 sm:h-5" />
              </motion.button>
              <motion.a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-gray-100 dark:bg-dark-800 border-2 border-primary-600 text-gray-900 dark:text-white rounded-xl hover:bg-primary-600/10 hover:border-primary-500 transition-all shadow-lg hover:shadow-xl font-semibold text-sm sm:text-base w-full sm:w-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={18} className="sm:w-5 sm:h-5" />
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Avatar and Social Icons */}
          <motion.div
            className="flex flex-col items-center lg:items-end gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Avatar Image */}
            <motion.div
              className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl"
              style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d'
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: -5
              }}
              initial={{ 
                rotateY: -10,
                rotateX: 5,
                scale: 0.95
              }}
              animate={{ 
                rotateY: [0, 5, 0],
                rotateX: [0, -3, 0],
                scale: 1
              }}
              transition={{ 
                duration: 0.6,
                ease: "easeOut"
              }}
            >
              <motion.img
                src="/profile-img.jpg"
                alt={personalInfo.name}
                className="w-full h-full object-cover rounded-full"
                style={{
                  transform: 'rotateY(-5deg) rotateX(3deg)',
                  transformStyle: 'preserve-3d'
                }}
                whileHover={{
                  rotateY: 0,
                  rotateX: 0,
                  scale: 1.1
                }}
                transition={{ duration: 0.3 }}
                onError={(e) => {
                  // Fallback to initials if image not found
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  if (target.parentElement) {
                    target.parentElement.innerHTML = '<div class="w-full h-full rounded-full bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center"><span class="text-6xl md:text-8xl text-white font-bold">AS</span></div>'
                  }
                }}
              />
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className="flex flex-row sm:flex-col gap-4 justify-center lg:justify-end"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.a
                href={`https://${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-primary-600 rounded-xl flex items-center justify-center hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="text-white" size={22} />
              </motion.a>
              <motion.a
                href={`https://${personalInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-primary-600 rounded-xl flex items-center justify-center hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="text-white" size={22} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
