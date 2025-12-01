import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' })

export const metadata: Metadata = {
  title: 'Raman Thakur - Senior AI Engineer',
  description: 'Senior AI Engineer specializing in autonomous AI systems, computer vision, NLP, and multi-agent architectures. Building production-ready AI solutions.',
  keywords: 'AI Engineer, Machine Learning, Computer Vision, NLP, Multi-Agent Systems, Python, FastAPI, React',
  authors: [{ name: 'Raman Thakur' }],
  openGraph: {
    title: 'Raman Thakur - Senior AI Engineer',
    description: 'Building autonomous AI agents for real-world applications',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raman Thakur - Senior AI Engineer',
    description: 'Building autonomous AI agents for real-world applications',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}