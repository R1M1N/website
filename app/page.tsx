import { HeroSection } from '@/components/HeroSection'
import { MindMap } from '@/components/MindMap'
import { AboutSection } from '@/components/AboutSection'
import { ContactSection } from '@/components/ContactSection'
import { ParticleBackground } from '@/components/ParticleBackground'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bg-primary overflow-hidden">
      <ParticleBackground />
      
      <HeroSection />
      <MindMap />
      <AboutSection />
      <ContactSection />
    </main>
  )
}