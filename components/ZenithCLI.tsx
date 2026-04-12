'use client'

import { motion } from 'framer-motion'
import { useState, useRef, useEffect, useCallback } from 'react'
import { Terminal } from 'lucide-react'
import { aiAgents } from '@/lib/agents'

interface ZenithCLIProps {
  onFilter: (agentIds: string[] | null) => void
  onResponse: (lines: string[]) => void
}

// Command definitions - maps keywords to agent groups
const COMMAND_MAP: Record<string, { agentIds: string[], description: string }> = {
  'security': {
    agentIds: ['pentest-agent', 'nexus-guard', 'secure-messaging'],
    description: 'Security & Defense protocols'
  },
  'voice': {
    agentIds: ['ai-call-receiver', 'siya-assistant'],
    description: 'Voice Intelligence systems'
  },
  'data': {
    agentIds: ['web-scraper', 'research-explainer', 'vision-ai'],
    description: 'Data Extraction & Analysis engines'
  },
  'trading': {
    agentIds: ['trading-system'],
    description: 'Financial Automation systems'
  },
  'automation': {
    agentIds: ['sf-cycle', 'web-scraper', 'trading-system'],
    description: 'Autonomous Workflow engines'
  },
  'ml': {
    agentIds: ['vision-ai', 'research-explainer', 'siya-assistant'],
    description: 'Machine Learning pipelines'
  },
  'communication': {
    agentIds: ['ai-call-receiver', 'secure-messaging', 'siya-assistant'],
    description: 'Communication systems'
  }
}

interface HistoryEntry {
  type: 'input' | 'output' | 'error' | 'info' | 'header' | 'blank'
  text: string
}

export function ZenithCLI({ onFilter }: ZenithCLIProps) {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<HistoryEntry[]>([
    { type: 'header', text: '╭──────────────────────────────────────────────────╮' },
    { type: 'header', text: '│  ZenithOS v2.0 — Cortex Terminal             │' },
    { type: 'header', text: '│  Type "help" for available commands          │' },
    { type: 'header', text: '╰──────────────────────────────────────────────────╯' },
    { type: 'blank', text: '' },
  ])
  const inputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const [isProcessing, setIsProcessing] = useState(false)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [history])

  const addHistory = useCallback((entries: HistoryEntry[]) => {
    setHistory(prev => [...prev, ...entries])
  }, [])

  const processCommand = useCallback(async (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()
    addHistory([{ type: 'input', text: cmd }])

    if (!trimmed) return

    // help
    if (trimmed === 'help') {
      addHistory([
        { type: 'blank', text: '' },
        { type: 'header', text: '──── Available Commands ─────────────────────────' },
        { type: 'blank', text: '' },
        { type: 'output', text: '  show <category>  — Highlight agents by category' },
        { type: 'output', text: '  categories       — List all available categories' },
        { type: 'output', text: '  list             — List all active protocols' },
        { type: 'output', text: '  find <name>      — Search agent by name or tag' },
        { type: 'output', text: '  status           — Show system diagnostics' },
        { type: 'output', text: '  clear            — Clear terminal output' },
        { type: 'output', text: '  reset            — Remove filters, show all agents' },
        { type: 'blank', text: '' },
      ])
      return
    }

    // clear
    if (trimmed === 'clear') {
      setHistory([])
      return
    }

    // reset / show all
    if (trimmed === 'reset' || trimmed === 'show all') {
      onFilter(null)
      addHistory([
        { type: 'blank', text: '' },
        { type: 'output', text: '  ✓ Filter cleared. Showing all 10 protocols.' },
        { type: 'blank', text: '' },
      ])
      return
    }

    // categories
    if (trimmed === 'categories') {
      addHistory([
        { type: 'blank', text: '' },
        { type: 'header', text: '──── Available Categories ──────────────────────' },
        { type: 'blank', text: '' },
        ...Object.entries(COMMAND_MAP).map(([key, val]) => ({
          type: 'output' as const,
          text: `  ${key.padEnd(18)}— ${val.description}`
        })),
        { type: 'blank', text: '' },
        { type: 'info', text: '  Usage: show <category>' },
        { type: 'blank', text: '' },
      ])
      return
    }

    // list
    if (trimmed === 'list') {
      const statusIcon = (s: string) => {
        if (s === 'live') return '●'
        if (s === 'beta') return '◐'
        return '○'
      }
      const statusColor = (s: string) => s.toUpperCase()

      addHistory([
        { type: 'blank', text: '' },
        { type: 'header', text: '──── Active Protocols ──────────────────────────' },
        { type: 'blank', text: '' },
        ...aiAgents.map(a => ({
          type: 'output' as const,
          text: `  ${statusIcon(a.status)} [${statusColor(a.status).padEnd(11)}]  ${a.name.padEnd(14)} — ${a.tagline}`
        })),
        { type: 'blank', text: '' },
        { type: 'info', text: `  ${aiAgents.length} protocols loaded  ·  ● LIVE  ◐ BETA  ○ DEV` },
        { type: 'blank', text: '' },
      ])
      return
    }

    // status
    if (trimmed === 'status') {
      const live = aiAgents.filter(a => a.status === 'live').length
      const beta = aiAgents.filter(a => a.status === 'beta').length
      const dev = aiAgents.filter(a => a.status === 'development').length
      addHistory([
        { type: 'blank', text: '' },
        { type: 'header', text: '──── System Diagnostics ────────────────────────' },
        { type: 'blank', text: '' },
        { type: 'output', text: `  Kernel        ZenithOS v2.0` },
        { type: 'output', text: `  Protocols     ${aiAgents.length} loaded` },
        { type: 'output', text: `  ● Live        ${live} agents` },
        { type: 'output', text: `  ◐ Beta        ${beta} agents` },
        { type: 'output', text: `  ○ Dev         ${dev} agents` },
        { type: 'output', text: `  Uptime        ∞` },
        { type: 'blank', text: '' },
      ])
      return
    }

    // show <category>
    if (trimmed.startsWith('show ')) {
      const category = trimmed.replace('show ', '').trim()
      const mapping = COMMAND_MAP[category]
      if (mapping) {
        onFilter(mapping.agentIds)
        const matched = aiAgents.filter(a => mapping.agentIds.includes(a.id))
        addHistory([
          { type: 'blank', text: '' },
          { type: 'output', text: `  ✓ Filtering: ${mapping.description}` },
          { type: 'blank', text: '' },
          ...matched.map(a => ({
            type: 'output' as const,
            text: `    ▸ ${a.name.padEnd(14)} — ${a.tagline}`
          })),
          { type: 'blank', text: '' },
          { type: 'info', text: '  Type "reset" to show all.' },
          { type: 'blank', text: '' },
        ])
        return
      }

      // Try fuzzy match on agent tags
      const matchedAgents = aiAgents.filter(a =>
        a.tags.some(t => t.includes(category)) ||
        a.name.toLowerCase().includes(category) ||
        a.tagline.toLowerCase().includes(category)
      )
      if (matchedAgents.length > 0) {
        onFilter(matchedAgents.map(a => a.id))
        addHistory([
          { type: 'blank', text: '' },
          { type: 'output', text: `  ✓ Found ${matchedAgents.length} matching protocol(s):` },
          { type: 'blank', text: '' },
          ...matchedAgents.map(a => ({
            type: 'output' as const,
            text: `    ▸ ${a.name.padEnd(14)} — ${a.tagline}`
          })),
          { type: 'blank', text: '' },
          { type: 'info', text: '  Type "reset" to show all.' },
          { type: 'blank', text: '' },
        ])
        return
      }

      addHistory([
        { type: 'blank', text: '' },
        { type: 'error', text: `  ✗ Unknown category: "${category}"` },
        { type: 'info', text: '  Type "categories" to see available options.' },
        { type: 'blank', text: '' },
      ])
      return
    }

    // find <name>
    if (trimmed.startsWith('find ')) {
      const query = trimmed.replace('find ', '').trim()
      const matchedAgents = aiAgents.filter(a =>
        a.name.toLowerCase().includes(query) ||
        a.id.includes(query) ||
        a.tagline.toLowerCase().includes(query) ||
        a.tags.some(t => t.includes(query))
      )
      if (matchedAgents.length > 0) {
        onFilter(matchedAgents.map(a => a.id))
        addHistory([
          { type: 'blank', text: '' },
          { type: 'output', text: `  ✓ Located ${matchedAgents.length} protocol(s):` },
          { type: 'blank', text: '' },
          ...matchedAgents.map(a => ({
            type: 'output' as const,
            text: `    ▸ ${a.name.padEnd(14)} [${a.status.toUpperCase()}] — ${a.tagline}`
          })),
          { type: 'blank', text: '' },
          { type: 'info', text: '  Type "reset" to show all.' },
          { type: 'blank', text: '' },
        ])
      } else {
        addHistory([
          { type: 'blank', text: '' },
          { type: 'error', text: `  ✗ No protocols matching "${query}"` },
          { type: 'blank', text: '' },
        ])
      }
      return
    }

    // Unknown - No AI Fallback
    addHistory([
      { type: 'blank', text: '' },
      { type: 'error', text: `  ✗ Command not recognized: "${trimmed}"` },
      { type: 'info', text: '  Type "help" for a list of valid protocols.' },
      { type: 'blank', text: '' },
    ])
  }, [addHistory, onFilter])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isProcessing) return
    const currentInput = input
    setInput('')
    await processCommand(currentInput)
  }

  const getLineColor = (type: string) => {
    switch (type) {
      case 'input': return 'text-white'
      case 'output': return 'text-gray-300'
      case 'error': return 'text-red-400'
      case 'info': return 'text-gray-500'
      case 'header': return 'text-neon-cyan/70'
      case 'blank': return ''
      default: return 'text-gray-400'
    }
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="w-full max-w-[1000px] mx-auto mt-6"
    >
      {/* Terminal Header Bar */}
      <div className="flex items-center gap-3 px-4 py-2.5 bg-[#0c0c14] border border-white/10 border-b-0 rounded-t-xl select-none">
        {/* Traffic Lights */}
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
        </div>

        <div className="flex-1 flex items-center gap-2">
          <Terminal size={14} className="text-neon-cyan" />
          <span className="text-xs font-mono text-gray-400">ZenithOS — Cortex Terminal</span>
        </div>
      </div>

      {/* Terminal Body — Always visible */}
      <div className="bg-[#060609] border border-white/10 rounded-b-xl overflow-hidden">
        {/* Scrollable History */}
        <div
          ref={scrollRef}
          onClick={() => inputRef.current?.focus()}
          className="h-[200px] overflow-y-auto px-4 py-3 font-mono text-xs leading-[1.7] cursor-text"
          style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.1) transparent' }}
        >
          {history.map((entry, i) => (
            <div key={i} className={getLineColor(entry.type)}>
              {entry.type === 'input' ? (
                <span>
                  <span className="text-green-400">zenithOS@cortex</span>
                  <span className="text-gray-600">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-gray-600">$ </span>
                  <span className="text-white">{entry.text}</span>
                </span>
              ) : entry.type === 'blank' ? (
                <br />
              ) : (
                <span style={{ whiteSpace: 'pre' }}>{entry.text}</span>
              )}
            </div>
          ))}
        </div>

        {/* Input Line */}
        <form onSubmit={handleSubmit} className="flex items-center px-4 py-2.5 border-t border-white/5 bg-[#08080d]">
          <span className="font-mono text-xs text-green-400 shrink-0">zenithOS@cortex</span>
          <span className="font-mono text-xs text-gray-600 shrink-0">:</span>
          <span className="font-mono text-xs text-blue-400 shrink-0">~</span>
          <span className="font-mono text-xs text-gray-600 shrink-0 mr-2">$ </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            disabled={isProcessing}
            className="flex-1 bg-transparent font-mono text-xs text-white outline-none caret-neon-cyan placeholder-gray-700 disabled:opacity-50"
            placeholder={isProcessing ? "processing..." : "type a command..."}
            autoComplete="off"
            spellCheck={false}
          />
        </form>
      </div>
    </motion.div>
  )
}
