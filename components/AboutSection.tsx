'use client'

import { motion } from 'framer-motion'
import { Code, Brain, Zap, Globe } from 'lucide-react'

const skills = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    items: ['LLMs & Frameworks', 'Computer Vision', 'NLP Processing', 'Multi-Agent Systems']
  },
  {
    icon: Code,
    title: 'Development',
    items: ['Python (Advanced)', 'TypeScript', 'Rust', 'Full-Stack Development']
  },
  {
    icon: Zap,
    title: 'Infrastructure',
    items: ['Cloud Deployment', 'Docker & Kubernetes', 'FastAPI', 'Real-time Systems']
  },
  {
    icon: Globe,
    title: 'Specialized Domains',
    items: ['Cybersecurity', 'Financial Systems', 'Blockchain', 'Federated Learning']
  }
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-section text-text-primary mb-6">
            About Me
          </h2>
          <p className="text-body text-text-secondary max-w-3xl mx-auto leading-relaxed">
            With over 2 years of experience building production-ready AI systems, I specialize in 
            developing end-to-end solutions that span computer vision, natural language processing, 
            cybersecurity, and multi-agent architectures. My passion lies in creating autonomous 
            AI agents that solve real-world problems.
          </p>
        </motion.div>

        {/* Experience Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <div className="glass-card p-lg rounded-glass">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              Current Role
            </h3>
            <h4 className="text-neon-cyan font-medium mb-2">
              AI Growth Engineer at Labellerr
            </h4>
            <p className="text-text-secondary text-sm leading-relaxed">
              Leading SDK development, RAG system architecture, and technical documentation. 
              Enhanced Python SDK serving 500+ developers and achieved 92% retrieval accuracy 
              on technical queries.
            </p>
          </div>

          <div className="glass-card p-lg rounded-glass">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              Education
            </h3>
            <h4 className="text-neon-green font-medium mb-2">
              B.Tech in Computer Science
            </h4>
            <p className="text-text-secondary text-sm leading-relaxed">
              Kalinga Institute of Industrial Technology (KIIT), CGPA: 7.52, Graduated 2024. 
              Strong foundation in algorithms, data structures, and software engineering.
            </p>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-glass text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-neon-cyan/10 rounded-full flex items-center justify-center group-hover:bg-neon-cyan/20 transition-colors">
                  <IconComponent size={24} className="text-neon-cyan" />
                </div>
                <h3 className="text-lg font-medium text-text-primary mb-3">
                  {skill.title}
                </h3>
                <ul className="space-y-1">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-text-secondary">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-text-primary mb-8">
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { value: '500+', label: 'Developers Served' },
              { value: '92%', label: 'Retrieval Accuracy' },
              { value: '750+', label: 'Technical Articles' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-glass"
              >
                <div className="text-3xl font-bold text-neon-cyan mb-2">
                  {stat.value}
                </div>
                <div className="text-text-secondary">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}