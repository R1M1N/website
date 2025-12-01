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
  cyan: {
    glow: 'shadow-glow-cyan',
    glowHover: 'shadow-glow-cyan-hover',
    text: 'text-neon-cyan',
    border: 'border-neon-cyan/20',
    accent: 'bg-neon-cyan/10'
  },
  purple: {
    glow: 'shadow-glow-purple',
    glowHover: 'shadow-glow-purple-hover', 
    text: 'text-neon-purple',
    border: 'border-neon-purple/20',
    accent: 'bg-neon-purple/10'
  },
  green: {
    glow: 'shadow-glow-green',
    glowHover: 'shadow-glow-green-hover',
    text: 'text-neon-green',
    border: 'border-neon-green/20',
    accent: 'bg-neon-green/10'
  },
  blue: {
    glow: 'shadow-glow-blue',
    glowHover: 'shadow-glow-blue-hover',
    text: 'text-neon-blue',
    border: 'border-neon-blue/20',
    accent: 'bg-neon-blue/10'
  }
}

export function AgentNode({ 
  agent, 
  isHovered, 
  isSelected, 
  onHover, 
  onSelect 
}: AgentNodeProps) {
  const [clickTimeout, setClickTimeout] = useState<NodeJS.Timeout | null>(null)
  
  const IconComponent = (Icons as any)[agent.icon] || Icons.Bot
  const colors = colorClasses[agent.color]

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
    live: 'bg-success/20 text-success border-success/30',
    beta: 'bg-warning/20 text-warning border-warning/30',
    development: 'bg-text-secondary/20 text-text-secondary border-text-secondary/30'
  }

  return (
    <motion.div
      className="absolute"
      style={{
        left: agent.position.x,
        top: agent.position.y,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: Math.random() * 0.5,
        type: "spring",
        stiffness: 100
      }}
      onHoverStart={() => onHover(agent.id)}
      onHoverEnd={() => onHover(null)}
      onClick={handleClick}
    >
      {/* Collapsed Node */}
      <motion.div
        className={cn(
          "w-16 h-16 rounded-full glass-card flex items-center justify-center cursor-pointer transition-all duration-300 border",
          colors.border,
          isHovered && colors.glowHover
        )}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <IconComponent 
          size={24} 
          className={cn("transition-colors duration-300", colors.text)} 
        />
      </motion.div>

      {/* Node Label */}
      <motion.div
        className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <p className="text-meta text-text-primary whitespace-nowrap">
          {agent.name}
        </p>
      </motion.div>

      {/* Expanded Card */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={cn(
              "absolute top-20 left-1/2 transform -translate-x-1/2 w-80 glass-card rounded-glass p-lg border z-20",
              colors.border,
              colors.glow
            )}
            style={{ minHeight: '400px' }}
          >
            {/* Header */}
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-2">
                <IconComponent size={32} className={colors.text} />
                <div>
                  <h3 className="text-node text-text-primary">{agent.name}</h3>
                  <p className="text-sm text-text-secondary">{agent.tagline}</p>
                </div>
              </div>
              
              {/* Status Badge */}
              <div className="flex items-center gap-2">
                <span className={cn(
                  "px-2 py-1 text-xs rounded-full border",
                  statusColors[agent.status]
                )}>
                  {agent.status.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-body text-text-secondary mb-4 leading-relaxed">
              {agent.description}
            </p>

            {/* Metrics */}
            {agent.metrics && (
              <div className="mb-4">
                <h4 className="text-sm font-medium text-text-primary mb-2">Key Metrics</h4>
                <div className="grid grid-cols-2 gap-2">
                  {agent.metrics.map((metric, index) => (
                    <div key={index} className={cn("p-2 rounded border", colors.accent)}>
                      <div className={cn("text-lg font-bold", colors.text)}>
                        {metric.value}
                      </div>
                      <div className="text-xs text-text-secondary">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Features */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-text-primary mb-2">Features</h4>
              <ul className="space-y-1">
                {agent.features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="text-xs text-text-secondary flex items-center gap-2">
                    <div className={cn("w-1 h-1 rounded-full", colors.accent.replace('bg-', 'bg-').replace('/10', ''))} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-text-primary mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-1">
                {agent.techStack.slice(0, 4).map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-2 py-1 bg-bg-secondary text-text-secondary text-xs rounded border border-glass-border font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-4 pt-4 border-t border-glass-border">
              {agent.demoUrl && (
                <button className={cn(
                  "px-3 py-1 text-xs rounded border transition-colors",
                  colors.border,
                  colors.text,
                  "hover:bg-opacity-10"
                )}>
                  Demo →
                </button>
              )}
              {agent.githubUrl && (
                <button className="px-3 py-1 text-xs rounded border border-glass-border text-text-secondary hover:text-text-primary transition-colors">
                  GitHub →
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}