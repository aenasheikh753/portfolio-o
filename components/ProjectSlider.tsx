'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink, Code, Github } from 'lucide-react'
import { Project } from '@/data/portfolio'

interface ProjectSliderProps {
  projects: Project[]
}

export default function ProjectSlider({ projects }: ProjectSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const goToProject = (index: number) => {
    setCurrentIndex(index)
  }

  const currentProject = projects[currentIndex]

  // Get image path based on project name
  const getProjectImage = (projectName: string) => {
    const imageMap: { [key: string]: string } = {
      'Potolo': '/potolo-img.jpg',
      'Sign N Track': '/signntrack-img.jpg',
      'Street 10': '/street10-img.jpg',
    }
    return imageMap[projectName] || '/potolo-img.jpg'
  }

  return (
    <div className="relative w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-dark-800 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left - Project Details */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{currentProject.name}</h3>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-primary-600/20 text-primary-400 rounded-full text-xs sm:text-sm">
                    {currentIndex + 1} / {projects.length}
                  </span>
                </div>
              </div>
              
              {currentProject.description && (
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                  {currentProject.description}
                </p>
              )}

              {currentProject.features && (
                <ul className="space-y-2 mb-4 sm:mb-6">
                  {currentProject.features.map((feature, idx) => (
                    <li key={idx} className="text-sm sm:text-base text-gray-700 dark:text-gray-300 flex items-start">
                      <span className="text-primary-400 mr-2 mt-1 flex-shrink-0">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Technologies */}
              <div className="mb-4 sm:mb-6">
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-3">Technologies Used:</p>
                <div className="flex flex-wrap gap-2">
                  {currentProject.technology.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-lg text-xs sm:text-sm hover:bg-primary-600/20 hover:text-primary-400 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 sm:gap-4">
                <a
                  href={currentProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm sm:text-base w-full sm:w-auto"
                >
                  <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>

            {/* Right - Project Preview */}
            <div className="flex items-center justify-center">
              <motion.div
                className="w-full bg-gray-100 dark:bg-dark-700 rounded-lg p-4 shadow-inner"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                  <div className="bg-gray-200 dark:bg-gray-700 h-8 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
                    <img
                      src={getProjectImage(currentProject.name)}
                      alt={currentProject.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = '/potolo-img.jpg'
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevProject}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors shadow-lg z-10"
        aria-label="Previous project"
      >
        <ChevronLeft className="text-white" size={20} />
      </button>
      <button
        onClick={nextProject}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors shadow-lg z-10"
        aria-label="Next project"
      >
        <ChevronRight className="text-white" size={20} />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToProject(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-primary-400 w-8'
                        : 'bg-gray-400 dark:bg-dark-600 hover:bg-gray-500 dark:hover:bg-dark-500'
                    }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

