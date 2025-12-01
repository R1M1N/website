'use client'

import { motion } from 'framer-motion'
import { type AIAgent } from '@/lib/agents'

interface ConnectionLinesProps {
  agents: AIAgent[]
  connections: Record<string, string[]>
  hoveredAgent: string | null
}

export function ConnectionLines({ agents, connections, hoveredAgent }: ConnectionLinesProps) {
  const getAgentPosition = (id: string) => {
    const agent = agents.find(a => a.id === id)
    return agent ? { x: agent.position.x + 32, y: agent.position.y + 32 } : { x: 0, y: 0 }
  }

  const getConnectionColor = (fromAgent: AIAgent) => {
    const colorMap = {
      cyan: '#00FFFF',
      purple: '#9400FF', 
      green: '#00FF7F',
      blue: '#007BFF'
    }
    return colorMap[fromAgent.color] || '#00FFFF'
  }

  const paths = Object.entries(connections).map(([fromId, toIds]) => {
    const fromAgent = agents.find(a => a.id === fromId)
    if (!fromAgent) return null

    return toIds.map(toId => {
      const toAgent = agents.find(a => a.id === toId)
      if (!toAgent) return null

      const fromPos = getAgentPosition(fromId)
      const toPos = getAgentPosition(toId)

      // Calculate control points for smooth curves
      const midX = (fromPos.x + toPos.x) / 2
      const midY = (fromPos.y + toPos.y) / 2
      
      // Create curved path
      const pathData = `M ${fromPos.x} ${fromPos.y} Q ${midX} ${midY} ${toPos.x} ${toPos.y}`

      return {
        id: `${fromId}-${toId}`,
        pathData,
        fromAgent,
        toAgent,
        color: getConnectionColor(fromAgent)
      }
    }).filter(Boolean)
  }).flat().filter(Boolean) as Array<{
    id: string
    pathData: string
    fromAgent: AIAgent
    toAgent: AIAgent
    color: string
  }>

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
      {paths.map((connection) => (
        <motion.path
          key={connection.id}
          d={connection.pathData}
          stroke={connection.color}
          strokeWidth="1"
          fill="none"
          strokeOpacity={hoveredAgent === connection.fromAgent.id ? 0.6 : 0.2}
          strokeDasharray="5,5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: hoveredAgent === connection.fromAgent.id ? 0.6 : 0.2 
          }}
          transition={{ 
            duration: 1.5, 
            delay: Math.random() * 0.5,
            ease: "easeInOut"
          }}
          className="transition-opacity duration-300"
        />
      ))}
    </svg>
  )
}