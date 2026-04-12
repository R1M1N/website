'use client'

import { motion } from 'framer-motion'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  animated?: boolean
}

export function Logo({ size = 'md', animated = true }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }

  const LogoIcon = () => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer hexagon ring */}
      <motion.path
        d="M32 4 L48 16 L48 48 L32 60 L16 48 L16 16 Z"
        fill="none"
        stroke="url(#gradient-cyan)"
        strokeWidth="2"
        initial={animated ? { pathLength: 0 } : undefined}
        animate={animated ? { pathLength: 1 } : undefined}
        transition={animated ? { duration: 2, ease: "easeInOut" } : undefined}
      />
      
      {/* Inner hexagon */}
      <motion.path
        d="M32 12 L40 20 L40 44 L32 52 L24 44 L24 20 Z"
        fill="url(#gradient-purple)"
        initial={animated ? { scale: 0 } : undefined}
        animate={animated ? { scale: 1 } : undefined}
        transition={animated ? { delay: 0.5, duration: 0.8, ease: "easeOut" } : undefined}
      />
      
      {/* AI core - central circle */}
      <motion.circle
        cx="32"
        cy="32"
        r="6"
        fill="url(#gradient-green)"
        initial={animated ? { scale: 0 } : undefined}
        animate={animated ? { scale: 1 } : undefined}
        transition={animated ? { delay: 1, duration: 0.6, ease: "easeOut" } : undefined}
      />
      
      {/* Connection points */}
      {[
        { x: 32, y: 12 }, // top
        { x: 46.8, y: 24 }, // top-right
        { x: 46.8, y: 40 }, // bottom-right
        { x: 32, y: 52 }, // bottom
        { x: 17.2, y: 40 }, // bottom-left
        { x: 17.2, y: 24 } // top-left
      ].map((point, index) => (
        <motion.circle
          key={index}
          cx={point.x}
          cy={point.y}
          r="2"
          fill="currentColor"
          className="text-neon-cyan"
          initial={animated ? { scale: 0 } : undefined}
          animate={animated ? { scale: 1 } : undefined}
          transition={animated ? { delay: 1.2 + index * 0.1, duration: 0.4 } : undefined}
        />
      ))}
      
      {/* Gradients */}
      <defs>
        <linearGradient id="gradient-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00FFFF" />
          <stop offset="100%" stopColor="#007BFF" />
        </linearGradient>
        <linearGradient id="gradient-purple" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9400FF" />
          <stop offset="100%" stopColor="#6A0DAD" />
        </linearGradient>
        <linearGradient id="gradient-green" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00FF7F" />
          <stop offset="100%" stopColor="#00CC66" />
        </linearGradient>
      </defs>
    </svg>
  )

  return (
    <div className={`${sizeClasses[size]} relative`}>
      <LogoIcon />
    </div>
  )
}

export default Logo