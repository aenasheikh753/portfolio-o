'use client'

import { motion } from 'framer-motion'
import { User, BarChart3, Download, Linkedin, GraduationCap } from 'lucide-react'
import { personalInfo, stats, topSkills, education } from '@/data/portfolio'
import AnimatedCounter from './AnimatedCounter'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gray-50 dark:bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-primary-400 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="bg-white dark:bg-dark-800 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Left Column - Personal Info */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <User className="text-primary-400" size={20} />
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">Personal Info</h3>
              </div>

              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  <span className="text-gray-500 dark:text-gray-400">Name:</span> {personalInfo.name}
                </div>
                <div className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  <span className="text-gray-500 dark:text-gray-400">Age:</span> {personalInfo.age}
                </div>
                <div className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  <span className="text-gray-500 dark:text-gray-400">Nationality:</span> {personalInfo.nationality}
                </div>
                <div className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  <span className="text-gray-500 dark:text-gray-400">Address:</span> {personalInfo.address}
                </div>
                <div className="text-sm sm:text-base text-gray-700 dark:text-gray-300 break-words">
                  <span className="text-gray-500 dark:text-gray-400">Phone:</span> {personalInfo.phone}
                </div>
                <div className="text-sm sm:text-base text-gray-700 dark:text-gray-300 break-words">
                  <span className="text-gray-500 dark:text-gray-400">Email:</span> {personalInfo.email}
                </div>
              </div>

              <div className="mb-4 sm:mb-6">
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2 sm:mb-3">Languages:</p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {personalInfo.languages.map((lang, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium ${
                        index === 0
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Linkedin className="text-primary-400" size={20} />
                <a
                  href={`https://${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 transition-colors"
                >
                  in {personalInfo.name}
                </a>
              </div>
            </motion.div>

            {/* Right Column - Stats and Skills */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
                <div className="flex items-center gap-3">
                  <BarChart3 className="text-primary-400" size={20} />
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">My Stats</h3>
                </div>
                <button className="flex items-center justify-center gap-2 px-3 py-2 sm:px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-xs sm:text-sm w-full sm:w-auto">
                  <Download size={14} />
                  DOWNLOAD CV
                </button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <motion.div
                  className="bg-gray-100 dark:bg-dark-700 p-3 sm:p-4 rounded-lg"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(139, 92, 246, 0.1)' }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-xl sm:text-2xl font-bold text-primary-400">
                    <AnimatedCounter value={stats.experience} suffix="+" />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </motion.div>
                <motion.div
                  className="bg-gray-100 dark:bg-dark-700 p-3 sm:p-4 rounded-lg"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(139, 92, 246, 0.1)' }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-xl sm:text-2xl font-bold text-primary-400">
                    <AnimatedCounter value={stats.projects} suffix="+" />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </motion.div>
                <motion.div
                  className="bg-gray-100 dark:bg-dark-700 p-3 sm:p-4 rounded-lg col-span-2"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(139, 92, 246, 0.1)' }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-xl sm:text-2xl font-bold text-primary-400">
                    BSSE
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Qualification</div>
                </motion.div>
              </div>

              

              {/* Top Skills */}
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Skills</h4>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {topSkills.map((skill, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-lg text-xs sm:text-sm font-medium hover:bg-primary-600 hover:text-white transition-colors cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
