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
    <section id="mindmap" className="relative min-h-screen py-20 z-10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-section text-text-primary mb-6">
            AI Agent Portfolio
          </h2>
          <p className="text-body text-text-secondary max-w-2xl mx-auto">
            Explore my collection of autonomous AI agents. Hover over each node to discover 
            detailed information, technical specifications, and live demonstrations.
          </p>
        </motion.div>

        {/* Mind Map Container */}
        <div className="relative h-[800px] w-full overflow-hidden">
          {/* Connection Lines */}
          <ConnectionLines 
            agents={aiAgents}
            connections={connectionMap}
            hoveredAgent={hoveredAgent}
          />

          {/* Agent Nodes */}
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

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-meta text-text-secondary">
            Hover over agents to explore • Click to select • Scroll to navigate
          </p>
        </motion.div>
      </div>
    </section>
  )
}