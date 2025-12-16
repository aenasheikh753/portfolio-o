'use client'

import { useEffect, useRef, useState } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

export default function StarryBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  
  // Safely get theme, with fallback
  let theme: 'light' | 'dark' = 'dark'
  try {
    const themeContext = useTheme()
    theme = themeContext.theme
  } catch (error) {
    // If theme context is not available, default to dark
    theme = 'dark'
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    const container = containerRef.current
    if (!container) return

    // Clear existing stars
    container.innerHTML = ''

    const stars: HTMLDivElement[] = []
    const starCount = 150

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div')
      star.className = 'star'
      
      const size = Math.random() * 3 + 0.5
      const startX = Math.random() * 100
      const startY = Math.random() * 100
      const duration = Math.random() * 20 + 10
      const delay = Math.random() * 5
      
      star.style.width = `${size}px`
      star.style.height = `${size}px`
      star.style.left = `${startX}%`
      star.style.top = `${startY}%`
      star.style.animationDelay = `${delay}s`
      star.style.animationDuration = `${duration}s`
      star.style.opacity = `${Math.random() * 0.5 + 0.3}`
      
      // Create floating animation
      const moveX = (Math.random() - 0.5) * 20
      const moveY = (Math.random() - 0.5) * 20
      
      star.style.animation = `float ${duration}s ease-in-out infinite ${delay}s, twinkle ${Math.random() * 3 + 2}s infinite ${delay}s`
      star.style.setProperty('--move-x', `${moveX}px`)
      star.style.setProperty('--move-y', `${moveY}px`)
      
      container.appendChild(star)
      stars.push(star)
    }

    return () => {
      stars.forEach(star => star.remove())
    }
  }, [mounted, theme])

  if (!mounted || theme === 'light') {
    return null // Hide stars in light mode or before mount
  }

  return <div ref={containerRef} className="starry-background" />
}
