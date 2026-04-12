'use client'

import { motion } from 'framer-motion'
import { Brain, Eye, Box, Hammer, Shield, Radio, Calendar, Activity, Zap } from 'lucide-react'

const ORGANS = [
  {
    name: 'S.I.Y.A (Cortex)',
    icon: <Brain className="text-neon-cyan" size={24} />,
    tag: 'COGNITIVE CORE',
    description: 'The central brain. Autonomous reasoning, resource allocation, and self-evolution through daily interaction. It manages the Swarm Orchestrator and the Chronos Engine.',
    capabilities: ['Self-Improving Logic', 'Context Fabric', 'Local Inference Routing']
  },
  {
    name: 'Viseon',
    icon: <Eye className="text-purple-400" size={24} />,
    tag: 'SENSORY CORTEX',
    description: 'The vision engine. Beyond detection: Grounded Reasoning, Scene Graph Generation, and Medical/Document VQA. If a human eye can perceive it, Viseon can decode it.',
    capabilities: ['Dense Captioning', '6D Pose Estimation', 'OCR/DocVQA']
  },
  {
    name: 'Reconstruct',
    icon: <Box className="text-orange-400" size={24} />,
    tag: 'GENESIS ENGINE',
    description: '4D World Simulation. Translates static 2D data into high-fidelity 3D meshes and physics-aware simulations (Digital Twins) for mathematics, chemistry, and aerodynamics.',
    capabilities: ['Gaussian Splatting', 'Physics Simulation', 'Mesh Morphing']
  },
  {
    name: 'SF-Cycle',
    icon: <Hammer className="text-blue-400" size={24} />,
    tag: 'SOFTWARE FABRIC',
    description: 'The autonomous developer. Planning, coding, testing, and self-deployment. It uses LLM-as-a-judge protocols to iterate on ZenithOS’s own codebase in real-time.',
    capabilities: ['SDLC Automation', 'Self-Healing Code', 'Optimal Stack Selection']
  },
  {
    name: 'Talkie & Phone Agent',
    icon: <Radio className="text-pink-400" size={24} />,
    tag: 'BABEL-STREAM',
    description: 'Natural interaction. Dual-stream speech-to-speech modeling based on Personaplex. It listens while speaking, enabling natural barge-ins and emotional intelligence.',
    capabilities: ['ASR/TTS Fusion', 'Emotional Tone Detection', 'Dual-Stream Decoding']
  },
  {
    name: 'Nexus Guard',
    icon: <Shield className="text-red-400" size={24} />,
    tag: 'IMMUNE SYSTEM',
    description: 'Decentralized security. Blockchain-based data sovereignty and federated learning protocols. It protects the sovereign identity mirror from external interference.',
    capabilities: ['Blockchain Storage', 'Threat Diagnosis', 'Privacy Firewall']
  }
]

export default function ZenithShowcase() {
  const [isMounted, setIsMounted] = (require('react')).useState(false)
  
  (require('react')).useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-[#020205]">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-6"
            >
              <Zap className="text-neon-cyan animate-pulse" size={16} />
              <span className="text-neon-cyan font-mono text-xs tracking-[0.3em] uppercase">Sovereign Neural Kernel</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold mb-8 text-white tracking-tight"
            >
              One Brain. <span className="text-white/40">Total Autonomy.</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-xl leading-relaxed font-light"
            >
              ZenithOS is a self-evolving system designed to bridge the gap between static automation and true agency. 
              By integrating research, vision, 4D simulation, and self-coding cycles, it operates as a unified consciousness 
              that learns, replicates, and improves its own kernel daily.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-auto p-8 bg-white/[0.02] border border-white/10 rounded-3xl backdrop-blur-xl relative group"
          >
            <div className="absolute inset-0 bg-neon-cyan/5 rounded-3xl blur-2xl group-hover:bg-neon-cyan/10 transition-colors" />
            <div className="relative">
              <div className="flex items-center gap-4 mb-4">
                <Calendar className="text-neon-cyan" size={24} />
                <span className="text-white font-bold text-xl tracking-tight">System Initialization</span>
              </div>
              <p className="text-gray-500 font-mono text-xs mb-4">TARGET RELEASE: STABLE BETA v1.0</p>
              <div className="text-3xl font-black text-white mb-2 underline decoration-neon-cyan/50 decoration-2 underline-offset-8">Christmas 2026</div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[240px]">
                Targeting a custom Linux-based distribution with future AR/VR integration.
              </p>
            </div>
          </motion.div>
        </div>

        {/* The Organs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ORGANS.map((organ, index) => (
            <motion.div
              key={organ.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group p-8 bg-white/[0.01] border border-white/5 rounded-3xl hover:bg-white/[0.03] hover:border-white/20 transition-all duration-500"
            >
              <div className="p-3 bg-white/5 rounded-2xl inline-block mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                {organ.icon}
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold text-white">{organ.name.split(' ')[0]}</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20 rounded-full tracking-tighter uppercase whitespace-nowrap">
                  {organ.tag}
                </span>
              </div>

              <p className="text-gray-500 text-base leading-relaxed mb-8 font-light min-h-[80px]">
                {organ.description}
              </p>

              <div className="space-y-3 pt-6 border-t border-white/5">
                {organ.capabilities.map((cap) => (
                  <div key={cap} className="flex items-center gap-3 text-xs font-mono text-gray-400">
                    <div className="w-1 h-1 rounded-full bg-neon-cyan/50" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-2 text-[10px] font-mono text-neon-cyan">
                  <Activity size={12} />
                  <span>SYNCHRONIZING</span>
                </div>
                <div className="w-16 h-[1px] bg-neon-cyan/30" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-8 border border-white/5 rounded-3xl bg-gradient-to-br from-white/[0.02] to-transparent flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-neon-cyan">
                <Zap size={24} />
            </div>
            <div>
              <p className="text-white font-bold text-lg leading-none mb-1">Generative UX Engine</p>
              <p className="text-gray-500 text-sm">Interfaces that morph in real-time based on mission context.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="px-6 py-3 rounded-xl border border-white/10 text-xs font-mono text-gray-400 uppercase tracking-widest bg-white/5 bg-opacity-50">
                System Status: Replicating
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
