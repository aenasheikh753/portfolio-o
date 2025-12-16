'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { experiences } from '@/data/portfolio'

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          PROFESSIONAL EXPERIENCE
        </motion.h2>

        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((experience, expIndex) => (
            <motion.div
              key={expIndex}
              className="bg-gray-50 p-8 rounded-lg shadow-md"
              variants={itemVariants}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {experience.company}
                </h3>
                <p className="text-xl text-primary-600 mb-1">
                  {experience.role}
                </p>
                <p className="text-gray-600">{experience.duration}</p>
              </div>

              <div className="space-y-8">
                {experience.projects.map((project, projIndex) => (
                  <motion.div
                    key={projIndex}
                    className="bg-white p-6 rounded-lg border-l-4 border-primary-600"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: projIndex * 0.1 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2 sm:mb-0">
                        {project.name}
                      </h4>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors text-sm"
                      >
                        Visit Project
                        <ExternalLink size={16} />
                      </a>
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-sm font-medium text-gray-600">Technology: </span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.technology.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {project.contributions.map((contribution, contIndex) => (
                        <li
                          key={contIndex}
                          className="text-gray-700 flex items-start"
                        >
                          <span className="text-primary-500 mr-2 mt-1">•</span>
                          <span>{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

