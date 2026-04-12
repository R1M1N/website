'use client'

import { motion } from 'framer-motion'
import { type AIAgent } from '@/lib/agents'

interface ConnectionLinesProps {
  agents: AIAgent[]
  connections: Record<string, string[]>
  hoveredAgent: string | null
}

export function ConnectionLines({ agents, connections, hoveredAgent }: ConnectionLinesProps) {
  const getAgentPosition = (id: string, side: 'left' | 'right' = 'right') => {
    const agent = agents.find(a => a.id === id)
    if (!agent) return { x: 0, y: 0 }
    
    // Assuming node center is at x+32, y+32 (w-16 h-16)
    if (side === 'right') {
      return { x: agent.position.x + 64, y: agent.position.y + 32 } 
    } else {
      return { x: agent.position.x, y: agent.position.y + 32 }
    }
  }

  const getColor = (id: string) => {
    // Mapped colors to match the node colors
    const agent = agents.find(a => a.id === id)
    const colorMap: Record<string, string> = {
      cyan: '#00FFFF', purple: '#9400FF', green: '#00FF7F', blue: '#007BFF',
      orange: '#FFA500', pink: '#FF1493', indigo: '#4B0082', teal: '#008080',
      yellow: '#FFFF00', red: '#FF0000'
    }
    return agent ? colorMap[agent.color] || '#00FFFF' : '#00FFFF'
  }

  const paths = Object.entries(connections).map(([fromId, toIds]) => {
    const fromAgent = agents.find(a => a.id === fromId)
    if (!fromAgent) return null

    return toIds.map(toId => {
      const toAgent = agents.find(a => a.id === toId)
      if (!toAgent) return null

      const start = getAgentPosition(fromId, 'right')
      const end = getAgentPosition(toId, 'left')

      const controlPoint1 = { x: start.x + 60, y: start.y }
      const controlPoint2 = { x: end.x - 60, y: end.y }
      
      const pathData = `M ${start.x} ${start.y} C ${controlPoint1.x} ${controlPoint1.y}, ${controlPoint2.x} ${controlPoint2.y}, ${end.x} ${end.y}`
      
      const connectionColor = getColor(fromId)
      const isActive = hoveredAgent === fromId || hoveredAgent === toId

      return {
        id: `${fromId}-${toId}`,
        pathData,
        color: connectionColor,
        isActive
      }
    }).filter(Boolean)
  }).flat().filter(Boolean) as Array<{
    id: string
    pathData: string
    color: string
    isActive: boolean
  }>

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
      {paths.map((connection) => (
        <g key={connection.id}>
          {/* 1. Background Glow Path (Only visible on hover, faint) */}
          <motion.path
            d={connection.pathData}
            stroke={connection.color}
            strokeWidth={connection.isActive ? 3 : 0} // Hidden unless active
            fill="none"
            strokeOpacity={connection.isActive ? 0.15 : 0} // Very faint glow
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ filter: 'blur(4px)' }} // Soften the glow
          />

          {/* 2. Main Connection Line (Very faint default, slightly visible active) */}
          <motion.path
            d={connection.pathData}
            stroke={connection.color}
            strokeWidth={connection.isActive ? 1.5 : 1}
            fill="none"
            // Default opacity: 0.05 (barely visible). Active: 0.4 (visible but not bright)
            strokeOpacity={connection.isActive ? 0.5 : 0.05}
            strokeDasharray={connection.isActive ? "none" : "4,4"}
            initial={{ pathLength: 0 }}
            animate={{ 
              pathLength: 1,
              strokeOpacity: connection.isActive ? 0.5 : 0.05
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />

          {/* 3. Animated Particle (Only on active, slow and small) */}
          {connection.isActive && (
            <circle r="2" fill="#fff" fillOpacity="0.8">
              <animateMotion 
                dur="2s" 
                repeatCount="indefinite" 
                path={connection.pathData}
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="linear"
              />
            </circle>
          )}
        </g>
      ))}
    </svg>
  )
}
