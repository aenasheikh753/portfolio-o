'use client'

import { useEffect, useState } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import StarryBackground from '@/components/StarryBackground'
import FloatingParticles from '@/components/FloatingParticles'

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    
    // Wait for sections to be rendered
    const timer = setTimeout(() => {
      const sections = document.querySelectorAll('section[id]')
      sections.forEach((section) => observer.observe(section))
    }, 100)

    return () => {
      clearTimeout(timer)
      const sections = document.querySelectorAll('section[id]')
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <main className="min-h-screen bg-white dark:bg-black relative transition-colors duration-300">
      <StarryBackground />
      <FloatingParticles />
      <Navigation activeSection={activeSection} />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}

