'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin, Clock, Send, Loader2 } from 'lucide-react'

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'raman1801thakur@gmail.com',
      href: 'mailto:raman1801thakur@gmail.com',
      color: 'text-neon-cyan'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: 'https://www.linkedin.com/in/raman-thakur-24095022a/',
      color: 'text-neon-blue'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View Projects',
      href: 'https://github.com/R1M1N',
      color: 'text-neon-green'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: '(GMT + 5:30)',
      href: null,
      color: 'text-neon-purple'
    },
    {
      icon: Clock,
      label: 'Availability',
      value: 'Remote / Global',
      href: null,
      color: 'text-neon-cyan'
    }
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    
    const form = e.currentTarget
    const formData = new FormData(form)
    
    try {
      const response = await fetch('https://formspree.io/f/xeoykkky', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-20 z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-section text-text-primary mb-6">
            Let's Work Together
          </h2>
          <p className="text-body text-text-secondary max-w-2xl mx-auto leading-relaxed">
            I'm open to full-time opportunities, contract work, and freelance consulting. 
            Whether you need AI system architecture, custom agent development, or technical consultation, 
            let's discuss how I can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-text-primary mb-8">
              Get In Touch
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon
                const content = (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 glass-card rounded-glass hover:scale-105 transition-transform duration-300"
                  >
                    <div className="w-12 h-12 bg-bg-secondary rounded-full flex items-center justify-center">
                      <IconComponent size={20} className={item.color} />
                    </div>
                    <div>
                      <div className="text-sm text-text-secondary">{item.label}</div>
                      <div className="text-text-primary font-medium">{item.value}</div>
                    </div>
                  </motion.div>
                )

                return item.href ? (
                  <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                    {content}
                  </a>
                ) : (
                  <div key={index}>
                    {content}
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8 rounded-glass">
              <h3 className="text-2xl font-semibold text-text-primary mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-bg-secondary border border-glass-border rounded-lg text-text-primary placeholder-text-secondary focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-bg-secondary border border-glass-border rounded-lg text-text-primary placeholder-text-secondary focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Project Type
                  </label>
                  <select name="projectType" className="w-full px-4 py-3 bg-bg-secondary border border-glass-border rounded-lg text-text-primary focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan focus:outline-none transition-colors">
                    <option value="">Select project type</option>
                    <option value="full-time">Full-time Position</option>
                    <option value="contract">Contract Work</option>
                    <option value="consulting">Technical Consultation</option>
                    <option value="ai-system">AI System Development</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-bg-secondary border border-glass-border rounded-lg text-text-primary placeholder-text-secondary focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={status === 'submitting' || status === 'success'}
                  className="w-full pill-button text-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <Send size={20} />
                      Message Sent!
                    </>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>

                {status === 'error' && (
                  <p className="text-red-400 text-sm text-center">
                    Something went wrong. Please try again later.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-glass-border text-center"
        >
          <p className="text-meta text-text-secondary">
            © 2025 Raman Thakur. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
