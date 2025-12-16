'use client'

import { motion } from 'framer-motion'
import { experiences } from '@/data/portfolio'
import ProjectSlider from './ProjectSlider'

export default function Projects() {
  // Flatten all projects from experiences
  const allProjects = experiences.flatMap(exp => exp.projects)

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-white dark:bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-400 mb-3 sm:mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Project Showcase
        </motion.h2>
        <motion.p
          className="text-gray-400 text-center mb-8 sm:mb-12 text-sm sm:text-base md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore my latest projects and creative solutions
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ProjectSlider projects={allProjects} />
        </motion.div>
      </div>
    </section>
  )
}
