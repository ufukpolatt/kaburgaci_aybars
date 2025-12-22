'use client'

import { motion, Variants, Variant } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface ScrollAnimationProps {
  children: React.ReactNode
  variants?: Variants
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

  const updatedVariants: Variants = {
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