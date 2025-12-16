'use client'

import { useState, useEffect } from 'react'

interface TypingAnimationProps {
  texts: string[]
  speed?: number
  deleteSpeed?: number
  delay?: number
}

export default function TypingAnimation({ texts, speed = 100, deleteSpeed = 50, delay = 2000 }: TypingAnimationProps) {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = texts[currentIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting && currentText.length < current.length) {
      timeout = setTimeout(() => {
        setCurrentText(current.substring(0, currentText.length + 1))
      }, speed)
    } else if (!isDeleting && currentText.length === current.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, delay)
    } else if (isDeleting && currentText.length > 0) {
      timeout = setTimeout(() => {
        setCurrentText(current.substring(0, currentText.length - 1))
      }, deleteSpeed)
    } else if (isDeleting && currentText.length === 0) {
      setIsDeleting(false)
      setCurrentIndex((prev) => (prev + 1) % texts.length)
    }

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, texts, speed, deleteSpeed, delay])

  return (
    <span className="text-primary-400 dark:text-primary-400">
      {currentText}
      <span className="inline-block w-0.5 h-8 bg-primary-400 ml-1 animate-pulse">|</span>
    </span>
  )
}

