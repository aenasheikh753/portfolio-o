'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-800 border border-primary-600/30 flex items-center justify-center hover:bg-primary-600/10 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="text-primary-400" size={20} />
      ) : (
        <Moon className="text-primary-600" size={20} />
      )}
    </motion.button>
  )
}

