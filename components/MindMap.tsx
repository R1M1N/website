'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { aiAgents, connectionMap, type AIAgent } from '@/lib/agents'
import { AgentNode } from './AgentNode'
import { ConnectionLines } from './ConnectionLines'

export function MindMap() {
  const [hoveredAgent, setHoveredAgent] = useState<string | null>(null)
  const [selectedAgent, setSelectedAgent] = useState<AIAgent | null>(null)

  return (
    <section id="mindmap" className="relative min-h-screen py-20 z-10 flex items-center justify-center bg-bg-primary overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            AI Agent <span className="text-neon-cyan">Portfolio</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Explore my collection of autonomous AI agents. Hover over each node to see technical details.
          </p>
        </motion.div>

        {/* Mind Map Container - Centered Width */}
        <div className="relative h-[700px] w-full max-w-[1000px] mx-auto border border-white/5 rounded-3xl bg-white/2 backdrop-blur-sm">
          
          {/* Connection Lines Layer */}
          <ConnectionLines 
            agents={aiAgents}
            connections={connectionMap}
            hoveredAgent={hoveredAgent}
          />

          {/* Agent Nodes Layer */}
          {aiAgents.map((agent) => (
            <AgentNode
              key={agent.id}
              agent={agent}
              isHovered={hoveredAgent === agent.id}
              isSelected={selectedAgent?.id === agent.id}
              onHover={setHoveredAgent}
              onSelect={setSelectedAgent}
            />
          ))}
        </div>

      </div>
    </section>
  )
}