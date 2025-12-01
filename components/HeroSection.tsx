'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export function HeroSection() {
  const scrollToMindMap = () => {
    document.getElementById('mindmap')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center z-10 py-20 overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          {/* 1. Animated Name */}
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-text-primary mb-6 tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            {['R', 'a', 'm', 'a', 'n', ' ', 'T', 'h', 'a', 'k', 'u', 'r'].map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="inline-block hover:text-neon-cyan transition-colors duration-300 cursor-default"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.h1>

          {/* 2. Animated Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="relative mb-8"
          >
            <h2 className="text-2xl md:text-3xl text-neon-cyan font-medium tracking-wide">
              Senior AI Engineer
            </h2>
            <motion.div
              className="absolute inset-0 bg-neon-cyan/20 blur-xl"
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* 3. Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="text-lg md:text-xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Building autonomous AI systems for real-world applications. Specializing in computer vision, NLP, 
            cybersecurity, and multi-agent architectures. Opensource and decentralized architecture.
          </motion.p>

          {/* 4. Stats Container - Positioned BELOW description in flow */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="flex flex-col xl:flex-row items-center justify-center gap-8 xl:gap-0 mb-16 w-full"
          >
            {/* LEFT GROUP */}
            <div className="flex gap-6 justify-end xl:w-1/3 xl:pr-4">
              <StatCard value="10+" label="AI Agents Built" delay={2.6} />
              <StatCard value="2+" label="Years Experience" delay={2.7} />
            </div>

            {/* SPACER: Width matches the name 'Raman Thakur' to create the frame effect */}
            <div className="hidden xl:block w-[500px] shrink-0" />

            {/* RIGHT GROUP */}
            <div className="flex gap-6 justify-start xl:w-1/3 xl:pl-4">
              <StatCard value="30+" label="Opensource Projects" delay={2.8} />
              <StatCard value="100+" label="Trained & Finetuned" delay={2.9} />
            </div>
          </motion.div>

          {/* 5. CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3.0, duration: 0.6 }}
            className="flex justify-center"
          >
            <button
              onClick={scrollToMindMap}
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-blue text-bg-primary font-bold rounded-full hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all duration-300"
            >
              Explore My Work
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

// Reusable Glassmorphism Card Component
function StatCard({ value, label, delay }: { value: string, label: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      transition={{ delay, duration: 0.5 }}
      // GLASSMORPHISM CLASSES APPLIED HERE:
      // bg-white/5 = 5% opacity white background
      // backdrop-blur-md = Blurs the content behind the card
      // border-white/10 = Subtle white border
      // shadow-lg = Drop shadow for depth
      className="flex flex-col items-center justify-center px-8 py-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl min-w-[160px] shadow-lg hover:border-neon-cyan/30 hover:shadow-neon-cyan/10 transition-all duration-300"
    >
      <div className="text-4xl font-bold text-neon-cyan mb-2 drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]">
        {value}
      </div>
      <div className="text-sm text-text-secondary font-medium text-center uppercase tracking-wider max-w-[120px]">
        {label}
      </div>
    </motion.div>
  )
}
