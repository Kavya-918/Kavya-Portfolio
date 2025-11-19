import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface AnimatedSectionProps {
  children: React.ReactNode
  direction?: 'left' | 'right' | 'up'
  delay?: number
  duration?: number
  className?: string
  style?: React.CSSProperties
}

export default function AnimatedSection({ 
  children, 
  direction = 'left', 
  delay = 0, 
  duration = 0.6,
  className,
  style
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  const getInitialPosition = () => {
    switch (direction) {
      case 'left':
        return { x: -100, opacity: 0 }
      case 'right':
        return { x: 100, opacity: 0 }
      case 'up':
        return { y: 50, opacity: 0 }
      default:
        return { x: -100, opacity: 0 }
    }
  }

  const getAnimatePosition = () => {
    return { x: 0, y: 0, opacity: 1 }
  }

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={getInitialPosition()}
      animate={isVisible ? getAnimatePosition() : getInitialPosition()}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth animation
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}
