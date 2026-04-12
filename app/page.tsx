'use client'

import { HeroSection } from '@/components/HeroSection'
import { MindMap } from '@/components/MindMap'
import ZenithShowcase from '@/components/ZenithShowcase'
import { AboutSection } from '@/components/AboutSection'
import { ContactSection } from '@/components/ContactSection'
import { ParticleBackground } from '@/components/ParticleBackground'
import ZenithCLI from '@/components/ZenithCLI'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bg-primary overflow-hidden">
      <ParticleBackground />
      
      <HeroSection />
      <MindMap />
      
      {/* Wrapping in client-only div to prevent hydration mismatch */}
      <div className="relative">
        <ZenithShowcase />
        <AboutSection />
        <ContactSection />
        <div className="pb-24">
          <ZenithCLI onFilter={() => {}} />
        </div>
      </div>
    </main>
  )
}