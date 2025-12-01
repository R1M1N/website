export interface AIAgent {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  color: 'cyan' | 'purple' | 'green' | 'blue';
  position: { x: number; y: number };
  techStack: string[];
  features: string[];
  status: 'live' | 'beta' | 'development';
  githubUrl?: string;
  demoUrl?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export const aiAgents: AIAgent[] = [
  {
    id: 'ai-call-receiver',
    name: 'AI Call Receiver',
    tagline: '24/7 Autonomous Voice Agent',
    description: 'Intelligent voice agent that handles customer calls, schedules appointments, and manages inquiries with natural language processing.',
    icon: 'Phone',
    color: 'cyan',
    position: { x: 200, y: 150 },
    techStack: ['OpenAI Whisper', 'ElevenLabs', 'FastAPI', 'WebRTC'],
    features: [
      'Natural language understanding',
      'Context-aware responses',
      'CRM integration',
      'Multi-language support'
    ],
    status: 'live',
    demoUrl: '#',
    metrics: [
      { label: 'Uptime', value: '99.9%' },
      { label: 'Response Time', value: '<100ms' }
    ]
  },
  {
    id: 'web-scraper',
    name: 'Universal Web Scraper',
    tagline: 'Firecrawl Alternative',
    description: 'Production-ready web scraping framework with JavaScript rendering, OCR, and AI-powered data extraction.',
    icon: 'Spider',
    color: 'purple',
    position: { x: 450, y: 100 },
    techStack: ['Playwright', 'BeautifulSoup', 'GPT-4', 'FastAPI'],
    features: [
      'JavaScript rendering',
      'AI-powered extraction',
      'Rate limiting',
      'Proxy rotation'
    ],
    status: 'beta',
    githubUrl: '#',
    metrics: [
      { label: 'Requests/sec', value: '10,000+' },
      { label: 'Success Rate', value: '95%' }
    ]
  },
  {
    id: 'vision-ai',
    name: 'Vision AI Agent',
    tagline: 'Computer Vision Platform',
    description: 'Comprehensive computer vision system for document analysis, object detection, and automated image processing.',
    icon: 'Eye',
    color: 'green',
    position: { x: 700, y: 180 },
    techStack: ['YOLOv8', 'SAM', 'OpenCV', 'FastAPI'],
    features: [
      'Real-time object detection',
      'Document analysis',
      'Image segmentation',
      'Batch processing'
    ],
    status: 'live',
    githubUrl: '#',
    metrics: [
      { label: 'Detection Accuracy', value: '92%' },
      { label: 'Processing Speed', value: '<50ms' }
    ]
  },
  {
    id: 'nexus-guard',
    name: 'NEXUS GUARD',
    tagline: 'Enterprise Cybersecurity Platform',
    description: 'AI-powered cybersecurity platform with multi-modal threat detection, federated learning, and blockchain audit system.',
    icon: 'Shield',
    color: 'blue',
    position: { x: 150, y: 350 },
    techStack: ['Python', 'FastAPI', 'PyTorch', 'Blockchain'],
    features: [
      'Multi-modal threat detection',
      'Federated learning network',
      'Blockchain audit system',
      'Automated response'
    ],
    status: 'development',
    githubUrl: '#',
    metrics: [
      { label: 'Threat Detection', value: '<1s' },
      { label: 'Accuracy', value: '98%' }
    ]
  },
  {
    id: 'pentest-agent',
    name: 'Pentesting AI Agent',
    tagline: 'Automated Security Testing',
    description: 'AI-powered penetration testing tool with natural language interface for automated security assessments.',
    icon: 'Lock',
    color: 'purple',
    position: { x: 400, y: 400 },
    techStack: ['Python', 'Aircrack-ng', 'Hashcat', 'NLP'],
    features: [
      'Wireless network analysis',
      'Password cracking',
      'Security assessments',
      'Multi-tool integration'
    ],
    status: 'beta',
    githubUrl: '#',
    metrics: [
      { label: 'Scan Speed', value: '50+ tools' },
      { label: 'Accuracy', value: '94%' }
    ]
  },
  {
    id: 'trading-system',
    name: 'Live Trading System',
    tagline: 'Cryptocurrency Automation',
    description: 'Production-ready automated Bitcoin trading system with real-time monitoring and multi-strategy portfolio management.',
    icon: 'TrendingUp',
    color: 'green',
    position: { x: 650, y: 380 },
    techStack: ['Python', 'Binance API', 'SQLite', 'TA-Lib'],
    features: [
      'Four trading strategies',
      'Real-time monitoring',
      'Risk management',
      'Performance analytics'
    ],
    status: 'live',
    githubUrl: '#',
    metrics: [
      { label: 'Profit Rate', value: '+15%' },
      { label: 'Uptime', value: '99.8%' }
    ]
  },
  {
    id: 'research-explainer',
    name: 'Research Paper Explainer',
    tagline: 'Multi-Agent Research System',
    description: 'AI system for comprehensive research paper analysis with dual explanation levels and semantic search.',
    icon: 'BookOpen',
    color: 'cyan',
    position: { x: 100, y: 550 },
    techStack: ['Python', 'FastAPI', 'LangGraph', 'FAISS'],
    features: [
      'Dual explanation levels',
      'Diagram analysis',
      'Paper comparison',
      'Semantic search'
    ],
    status: 'beta',
    githubUrl: '#',
    metrics: [
      { label: 'Accuracy', value: '92%' },
      { label: 'Speed', value: '<2s' }
    ]
  },
  {
    id: 'secure-messaging',
    name: 'Secure Messaging App',
    tagline: 'P2P Encrypted Communication',
    description: 'Cross-platform encrypted messaging app with mesh networking and end-to-end encryption.',
    icon: 'MessageSquare',
    color: 'purple',
    position: { x: 350, y: 600 },
    techStack: ['Rust', 'Flutter', 'libp2p', 'Signal Protocol'],
    features: [
      'End-to-end encryption',
      'Mesh networking',
      'Bluetooth support',
      'Cross-platform'
    ],
    status: 'development',
    githubUrl: '#',
    metrics: [
      { label: 'Encryption', value: 'AES-256' },
      { label: 'Platforms', value: '4+' }
    ]
  },
  {
    id: 'siya-assistant',
    name: 'S.I.Y.A Enhanced',
    tagline: 'AI Assistant Platform',
    description: 'Jarvis-style AI assistant with sub-100ms response times, activity monitoring, and persistent memory.',
    icon: 'Bot',
    color: 'green',
    position: { x: 600, y: 580 },
    techStack: ['Python', 'Qwen', 'Transformers', 'SQLite'],
    features: [
      'Sub-100ms responses',
      'Activity monitoring',
      'Smart suggestions',
      'Persistent memory'
    ],
    status: 'beta',
    githubUrl: '#',
    metrics: [
      { label: 'Response Time', value: '<100ms' },
      { label: 'Memory', value: 'Unlimited' }
    ]
  },
  {
    id: 'agentic-vision',
    name: 'Agentic Vision',
    tagline: 'Multi-Model CV System',
    description: 'Intelligent vision system combining OWL-ViT and SAM for complex multi-step visual instructions.',
    icon: 'Camera',
    color: 'blue',
    position: { x: 850, y: 450 },
    techStack: ['Python', 'OWL-ViT', 'SAM', 'PyTorch'],
    features: [
      'Open-vocabulary detection',
      'Multi-step instructions',
      'Real-time processing',
      'Complex transformations'
    ],
    status: 'live',
    githubUrl: '#',
    metrics: [
      { label: 'Speed Improvement', value: '85%' },
      { label: 'Accuracy', value: '96%' }
    ]
  }
];

export const connectionMap = {
  'ai-call-receiver': ['web-scraper', 'research-explainer'],
  'web-scraper': ['vision-ai', 'nexus-guard'],
  'vision-ai': ['agentic-vision', 'trading-system'],
  'nexus-guard': ['pentest-agent', 'secure-messaging'],
  'pentest-agent': ['trading-system'],
  'research-explainer': ['siya-assistant'],
  'secure-messaging': ['siya-assistant'],
  'agentic-vision': []
};