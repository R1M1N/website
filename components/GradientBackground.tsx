'use client'

import { motion } from 'framer-motion'

export function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Primary gradient flow */}
      <motion.div
        className="absolute -inset-[10px] opacity-20"
        style={{
          background: `
            radial-gradient(at 40% 20%, hsla(280,100%,50%,0.3) 0px, transparent 50%),
            radial-gradient(at 80% 0%, hsla(180,100%,50%,0.3) 0px, transparent 50%),
            radial-gradient(at 0% 50%, hsla(120,100%,50%,0.3) 0px, transparent 50%),
            radial-gradient(at 80% 50%, hsla(300,100%,50%,0.3) 0px, transparent 50%),
            radial-gradient(at 0% 100%, hsla(240,100%,50%,0.3) 0px, transparent 50%),
            radial-gradient(at 80% 100%, hsla(60,100%,50%,0.3) 0px, transparent 50%),
            radial-gradient(at 0% 0%, hsla(200,100%,50%,0.3) 0px, transparent 50%)
          `
        }}
        animate={{
          backgroundPosition: [
            "0% 0%, 100% 0%, 0% 50%, 100% 50%, 0% 100%, 100% 100%, 0% 0%",
            "100% 100%, 0% 100%, 100% 0%, 0% 0%, 100% 50%, 0% 50%, 100% 100%"
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
      />
      
      {/* Secondary moving gradients */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: `
            conic-gradient(from 180deg at 50% 50%, 
              transparent 0deg, 
              hsla(180, 100%, 50%, 0.4) 90deg, 
              transparent 180deg, 
              hsla(300, 100%, 50%, 0.4) 270deg, 
              transparent 360deg
            )
          `
        }}
        animate={{
          rotate: [0, 360]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  )
}

export default GradientBackground