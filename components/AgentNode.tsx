'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import * as Icons from 'lucide-react'
import { type AIAgent } from '@/lib/agents'
import { cn } from '@/lib/utils'

interface AgentNodeProps {
  agent: AIAgent
  isHovered: boolean
  isSelected: boolean
  onHover: (id: string | null) => void
  onSelect: (agent: AIAgent | null) => void
}

const colorClasses = {
  cyan: { glow: 'shadow-glow-cyan', glowHover: 'shadow-glow-cyan-hover', text: 'text-neon-cyan', border: 'border-neon-cyan/20', accent: 'bg-neon-cyan/10', connector: 'stroke-neon-cyan', bg: 'bg-neon-cyan/5' },
  purple: { glow: 'shadow-glow-purple', glowHover: 'shadow-glow-purple-hover', text: 'text-neon-purple', border: 'border-neon-purple/20', accent: 'bg-neon-purple/10', connector: 'stroke-neon-purple', bg: 'bg-neon-purple/5' },
  green: { glow: 'shadow-glow-green', glowHover: 'shadow-glow-green-hover', text: 'text-neon-green', border: 'border-neon-green/20', accent: 'bg-neon-green/10', connector: 'stroke-neon-green', bg: 'bg-neon-green/5' },
  blue: { glow: 'shadow-glow-blue', glowHover: 'shadow-glow-blue-hover', text: 'text-neon-blue', border: 'border-neon-blue/20', accent: 'bg-neon-blue/10', connector: 'stroke-neon-blue', bg: 'bg-neon-blue/5' },
  orange: { glow: 'shadow-glow-orange', glowHover: 'shadow-glow-orange-hover', text: 'text-orange-400', border: 'border-orange-400/20', accent: 'bg-orange-400/10', connector: 'stroke-orange-400', bg: 'bg-orange-400/5' },
  pink: { glow: 'shadow-glow-pink', glowHover: 'shadow-glow-pink-hover', text: 'text-pink-400', border: 'border-pink-400/20', accent: 'bg-pink-400/10', connector: 'stroke-pink-400', bg: 'bg-pink-400/5' },
  indigo: { glow: 'shadow-glow-indigo', glowHover: 'shadow-glow-indigo-hover', text: 'text-indigo-400', border: 'border-indigo-400/20', accent: 'bg-indigo-400/10', connector: 'stroke-indigo-400', bg: 'bg-indigo-400/5' },
  teal: { glow: 'shadow-glow-teal', glowHover: 'shadow-glow-teal-hover', text: 'text-teal-400', border: 'border-teal-400/20', accent: 'bg-teal-400/10', connector: 'stroke-teal-400', bg: 'bg-teal-400/5' },
  yellow: { glow: 'shadow-glow-yellow', glowHover: 'shadow-glow-yellow-hover', text: 'text-yellow-400', border: 'border-yellow-400/20', accent: 'bg-yellow-400/10', connector: 'stroke-yellow-400', bg: 'bg-yellow-400/5' },
  red: { glow: 'shadow-glow-red', glowHover: 'shadow-glow-red-hover', text: 'text-red-400', border: 'border-red-400/20', accent: 'bg-red-400/10', connector: 'stroke-red-400', bg: 'bg-red-400/5' }
}

export function AgentNode({ agent, isHovered, isSelected, onHover, onSelect }: AgentNodeProps) {
  const [clickTimeout, setClickTimeout] = useState<NodeJS.Timeout | null>(null)
  
  const IconComponent = (Icons as any)[agent.icon] || Icons.Bot
  const colors = colorClasses[agent.color]

  const isBottomHalf = agent.position.y > 200 
  const cardPositionClass = isBottomHalf 
    ? "bottom-full mb-6 origin-bottom" 
    : "top-full mt-6 origin-top"

  const handleClick = () => {
    if (clickTimeout) {
      clearTimeout(clickTimeout)
      setClickTimeout(null)
      onSelect(isSelected ? null : agent)
    } else {
      const timeout = setTimeout(() => {
        onSelect(isSelected ? null : agent)
        setClickTimeout(null)
      }, 200)
      setClickTimeout(timeout)
    }
  }

  const statusColors = {
    live: 'bg-green-500/20 text-green-400 border-green-500/30',
    beta: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    development: 'bg-blue-500/20 text-blue-400 border-blue-500/30'
  }

  return (
    <motion.div
      className={cn("absolute", isHovered ? "z-50" : "z-10")}
      style={{ left: agent.position.x, top: agent.position.y }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: Math.random() * 0.5 }}
      onHoverStart={() => onHover(agent.id)}
      onHoverEnd={() => onHover(null)}
      onClick={handleClick}
    >
      {/* Node Circle */}
      <motion.div
        className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 border relative z-20",
          colors.border,
          isHovered ? colors.glowHover : "bg-black/20 backdrop-blur-sm"
        )}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <IconComponent size={24} className={cn("transition-colors duration-300", colors.text)} />
      </motion.div>

      {/* Node Label */}
      {!isHovered && (
        <motion.div
          className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <p className="text-sm font-medium text-gray-300 whitespace-nowrap bg-black/40 px-3 py-1 rounded-full backdrop-blur-md border border-white/5">
            {agent.name}
          </p>
        </motion.div>
      )}

      {/* Active Pulse Ring */}
      <AnimatePresence>
        {isHovered && (
          <motion.div className="absolute inset-0 z-10 pointer-events-none">
             <motion.div 
               className={cn("absolute inset-0 rounded-full border opacity-0", colors.border)}
               animate={{ scale: [1, 1.4], opacity: [0.3, 0] }}
               transition={{ duration: 1.5, repeat: Infinity }}
             />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Detail Card */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: isBottomHalf ? 10 : -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: isBottomHalf ? 10 : -10 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "absolute left-1/2 transform -translate-x-1/2 w-96 bg-black rounded-2xl p-6 border z-[60] shadow-2xl",
              cardPositionClass,
              colors.border, 
              "border-opacity-50"
            )}
          >
            {/* Header with GitHub icon in top right */}
            <div className="mb-4 border-b border-white/10 pb-3 relative">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <IconComponent size={32} className={colors.text} />
                  <div>
                    <h3 className="text-xl font-bold text-white leading-tight">{agent.name}</h3>
                    <p className="text-xs text-gray-400 font-medium tracking-wide">{agent.tagline}</p>
                  </div>
                </div>
                
                {/* GitHub Icon Button - Top Right */}
                {agent.githubUrl && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <a 
                      href={agent.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={cn(
                        "flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 hover:scale-110 active:scale-95",
                        colors.border,
                        colors.text,
                        "bg-black/50 backdrop-blur-sm hover:bg-black/80"
                      )}
                      title="View on GitHub"
                    >
                      <Icons.Github size={20} />
                    </a>
                  </motion.div>
                )}
              </div>
              
              <div className="mt-3">
                <span className={cn("px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide rounded-full border inline-block", statusColors[agent.status])}>
                  {agent.status}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-300 mb-5 leading-relaxed font-light">
              {agent.description}
            </p>

            {/* Metrics */}
            {agent.metrics && (
              <div className="grid grid-cols-2 gap-2 mb-5">
                {agent.metrics.map((metric, index) => (
                  <div key={index} className={cn("p-2.5 rounded-lg bg-white/5 border border-white/5", colors.accent.replace('bg-', 'hover:bg-'))}>
                    <div className={cn("text-lg font-bold leading-none mb-1", colors.text)}>{metric.value}</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">{metric.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Features List */}
            <div className="mb-5">
              <h4 className="text-[10px] font-bold text-gray-500 mb-2 uppercase tracking-widest">Key Features</h4>
              <ul className="space-y-1.5">
                {agent.features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="text-xs text-gray-300 flex items-center gap-2">
                    <div className={cn("w-1.5 h-1.5 rounded-full", colors.bg.replace('bg-', 'bg-'))} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5">
                {agent.techStack.slice(0, 4).map((tech, index) => (
                  <span key={index} className="px-2 py-1 bg-white/5 text-gray-400 text-[10px] rounded-md border border-white/5 font-mono hover:text-white transition-colors">
                    {tech}
                  </span>
                ))}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}