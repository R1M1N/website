/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Neon Accents
        'neon-cyan': '#00FFFF',
        'neon-purple': '#9400FF',
        'neon-green': '#00FF7F',
        'neon-blue': '#007BFF',
        
        // Dark Scale
        'bg-primary': '#000000',
        'bg-secondary': '#0A0A0A',
        'text-primary': '#E4E4E7',
        'text-secondary': '#A1A1AA',
        'border-subtle': '#27272A',
        
        // Glassmorphism
        'glass-bg': 'rgba(16, 16, 16, 0.5)',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
        
        // Semantic
        'success': '#00FF7F',
        'warning': '#FFD700',
        'error': '#FF3B30',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero': ['64px', { lineHeight: '1.1', fontWeight: '700' }],
        'section': ['40px', { lineHeight: '1.2', fontWeight: '600' }],
        'node': ['24px', { lineHeight: '1.3', fontWeight: '500' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'meta': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        'xs': '8px',
        'sm': '16px',
        'md': '24px',
        'lg': '32px',
        'xl': '48px',
        'xxl': '96px',
      },
      borderRadius: {
        'glass': '16px',
        'pill': '28px',
      },
      boxShadow: {
        'glow-cyan': '0 0 16px rgba(0, 255, 255, 0.2)',
        'glow-cyan-hover': '0 0 24px rgba(0, 255, 255, 0.4), 0 0 48px rgba(0, 255, 255, 0.2)',
        'glow-purple': '0 0 16px rgba(148, 0, 255, 0.2)',
        'glow-purple-hover': '0 0 24px rgba(148, 0, 255, 0.4), 0 0 48px rgba(148, 0, 255, 0.2)',
        'glow-green': '0 0 16px rgba(0, 255, 127, 0.2)',
        'glow-green-hover': '0 0 24px rgba(0, 255, 127, 0.4), 0 0 48px rgba(0, 255, 127, 0.2)',
        'glow-blue': '0 0 16px rgba(0, 123, 255, 0.2)',
        'glow-blue-hover': '0 0 24px rgba(0, 123, 255, 0.4), 0 0 48px rgba(0, 123, 255, 0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'particle': 'particle 20s linear infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.8s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 20px rgba(0, 255, 255, 0.4)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 255, 255, 0.8)' },
        },
        particle: {
          '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100vh) rotate(360deg)', opacity: '0' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backdropBlur: {
        'glass': '10px',
      },
    },
  },
  plugins: [],
}