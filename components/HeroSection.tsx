'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export function HeroSection() {
  const scrollToMindMap = () => {
    document.getElementById('mindmap')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center z-10">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Animated name */}
          <motion.h1 
            className="text-hero text-text-primary mb-6"
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
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>

          {/* Animated subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="relative"
          >
            <h2 className="text-section text-text-primary mb-4">
              Senior AI Engineer
            </h2>
            <motion.div
              className="absolute inset-0 bg-neon-cyan opacity-20 blur-xl"
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Building autonomous AI systems for real-world applications. 
            Specializing in computer vision, NLP, cybersecurity, and multi-agent architectures.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.8, duration: 0.6 }}
            className="flex justify-center"
          >
            <button
              onClick={scrollToMindMap}
              className="pill-button group flex items-center gap-2 text-lg"
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

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.8 }}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 hidden lg:flex gap-8"
        >
          {[
            { value: '10+', label: 'AI Agents Built' },
            { value: '2+', label: 'Years Experience' },
            { value: '99.9%', label: 'Uptime' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5 + index * 0.2, duration: 0.6 }}
              className="glass-card px-6 py-4 rounded-glass text-center"
            >
              <div className="text-2xl font-bold text-neon-cyan mb-1">{stat.value}</div>
              <div className="text-sm text-text-secondary">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}