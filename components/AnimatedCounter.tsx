'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  duration?: number
}

export default function AnimatedCounter({ value, suffix = '', duration = 2 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        if (suffix === '%') {
          ref.current.textContent = Math.round(latest) + suffix
        } else if (suffix === '+') {
          // For experience, show decimal if value is not whole number
          if (value % 1 !== 0) {
            ref.current.textContent = latest.toFixed(1) + suffix
          } else {
            ref.current.textContent = Math.round(latest) + suffix
          }
        } else {
          ref.current.textContent = Math.round(latest) + suffix
        }
      }
    })
  }, [springValue, suffix, value])

  return <span ref={ref}>0{suffix}</span>
}

