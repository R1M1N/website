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
      {/* Build Signal - Remove after verification */}
      <div className="absolute top-0 left-0 z-[9999] px-2 py-1 bg-neon-cyan/80 text-black font-mono text-[10px] uppercase">
        System Ver: 2.0.4 - Linked to Cortex
      </div>

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