'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface ScrollAnimationProps {
  children: React.ReactNode
  variants?: {
    hidden: object
    visible: object
  }
  transition?: object
  className?: string
  delay?: number
  duration?: number
}

const ScrollAnimation = ({
  children,
  variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  },
  transition = { duration: 0.6, ease: 'easeOut' },
  className = '',
  delay = 0,
  duration = 0.6
}: ScrollAnimationProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const updatedVariants = {
    ...variants,
    visible: {
      ...variants.visible,
      transition: { ...transition, delay, duration }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={updatedVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default ScrollAnimation