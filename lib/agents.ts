export interface AIAgent {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  color: 'cyan' | 'purple' | 'green' | 'blue' | 'orange' | 'pink' | 'indigo' | 'teal' | 'yellow' | 'red';
  position: { x: number; y: number };
  techStack: string[];
  features: string[];
  status: 'live' | 'beta' | 'development';
  githubUrl: string;
  demoUrl?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export const aiAgents: AIAgent[] = [
  {
    id: 'pentest-agent',
    name: 'Viper',
    tagline: 'Automated Security Auditor',
    description: 'AI-powered penetration testing tool with a natural language interface. Automates wireless analysis, password cracking, and vulnerability scanning using industry-standard tools.',
    icon: 'Lock',
    color: 'orange',
    position: { x: 350, y: 400 },
    techStack: ['Python', 'Aircrack-ng', 'Hashcat', 'NLP', 'Nmap', 'Hydra', 'SQLMap'],
    features: [
      'Natural language command interface',
      'Automated wireless network analysis',
      'Intelligent password cracking',
      'Multi-tool orchestration (Nmap, Hydra)',
      'Vulnerability assessment reports',
      'Workflow automation'
    ],
    status: 'beta',
    githubUrl: 'https://github.com/R1M1N/pentesting-agent',
    metrics: [
      { label: 'Tools Supported', value: '10+' },
      { label: 'Automation', value: 'Full' }
    ]
  },
  {
    id: 'ai-call-receiver',
    name: 'Aegis',
    tagline: 'Automated Voice Intelligence',
    description: 'Intelligent phone assistant for automated call handling, scheduling, and document processing. Integrates Google Calendar/Outlook for appointment management and uses Whisper for precise voice transcription.',
    icon: 'Phone',
    color: 'cyan',
    position: { x: 150, y: 100 },
    techStack: ['Python', 'FastAPI', 'Twilio', 'Transformers', 'Whisper', 'Google Calendar API'],
    features: [
      'Automated call handling & routing',
      'Real-time voice transcription (Whisper)',
      'Smart appointment scheduling',
      'Multi-model support (OpenAI, Gemini, Claude)',
      'Smart reply generation',
      'Document processing integration'
    ],
    status: 'live',
    githubUrl: 'https://github.com/R1M1N/phone_assistant_agent',
    metrics: [
      { label: 'Response Latency', value: '<200ms' },
      { label: 'Transcription Acc', value: '98.5%' }
    ]
  },
  {
    id: 'nexus-guard',
    name: 'Paladin',
    tagline: 'Enterprise AI Cybersecurity',
    description: 'Advanced cybersecurity platform featuring multi-modal threat detection, federated learning for privacy, and a blockchain-based immutable audit system.',
    icon: 'Shield',
    color: 'blue',
    position: { x: 100, y: 350 },
    techStack: ['Python', 'FastAPI', 'PyTorch', 'Blockchain', 'Federated Learning', 'LSTM'],
    features: [
      'Multi-modal threat detection',
      'Privacy-preserving federated learning',
      'Blockchain immutable audit logs',
      'Smart contract automation',
      'LSTM behavioral analysis',
      'Automated response orchestration'
    ],
    status: 'development',
    githubUrl: 'https://github.com/R1M1N/nexus-guard',
    metrics: [
      { label: 'Detection Time', value: '<1s' },
      { label: 'Accuracy', value: '99%' }
    ]
  },
  {
    id: 'trading-system',
    name: 'Tesseract',
    tagline: 'Production Crypto Trading',
    description: 'Production-ready automated Bitcoin trading system featuring four proven strategies (Grid, Momentum, Arbitrage, DCA) and a dynamic selection engine optimizing for market conditions.',
    icon: 'TrendingUp',
    color: 'teal',
    position: { x: 650, y: 380 },
    techStack: ['Python', 'Binance API', 'SQLite', 'Pandas', 'TA-Lib', 'WebSockets'],
    features: [
      '4 Strategy Engine (Grid, Momentum, Arb, DCA)',
      'Dynamic strategy selection',
      'Real-time profit tracking dashboard',
      'Risk management protocols',
      'Backtesting engine',
      'Live market monitoring'
    ],
    status: 'live',
    githubUrl: 'https://github.com/R1M1N/tradesant',
    metrics: [
      { label: 'Backtest Return', value: '+ve' },
      { label: 'Strategies', value: '4' }
    ]
  },
  {
    id: 'research-explainer',
    name: 'Lexis',
    tagline: 'Multi-Agent Analysis System',
    description: 'Comprehensive research analysis system offering dual explanation levels (simple & technical). Features diagram analysis, semantic search, and paper comparison capabilities.',
    icon: 'BookOpen',
    color: 'pink',
    position: { x: 150, y: 580 },
    techStack: ['Python', 'FastAPI', 'React', 'LangGraph', 'FAISS', 'OpenAI'],
    features: [
      'Dual explanation levels (Simple/Technical)',
      'Diagram & figure analysis',
      'Paper comparison engine',
      'Vector-based semantic search',
      'Real-time WebSocket updates',
      'Citation tracking'
    ],
    status: 'beta',
    githubUrl: 'https://github.com/R1M1N/research_paper_explainer',
    metrics: [
      { label: 'Processing', value: 'Real-time' },
      { label: 'Search', value: 'Semantic' }
    ]
  },
  {
    id: 'siya-assistant',
    name: 'S.I.YA',
    tagline: 'Simply Intended Yet Astute Assistant',
    description: 'High-performance AI assistant with sub-100ms latency. Features activity monitoring, smart work suggestions, persistent memory, and LoRA fine-tuning for personalized responses.',
    icon: 'Bot',
    color: 'yellow',
    position: { x: 800, y: 580 },
    techStack: ['Python', 'Qwen', 'Transformers', 'SQLite', 'FastAPI', 'LoRA'],
    features: [
      'Sub-100ms response time',
      'Intelligent activity monitoring',
      'Persistent memory (SQLite)',
      'Smart work suggestions',
      'Real-time data fetching',
      'Fine-tuned personality'
    ],
    status: 'beta',
    githubUrl: 'https://github.com/R1M1N/s.i.y.a',
    metrics: [
      { label: 'Latency', value: '<100ms' },
      { label: 'Memory', value: 'Persistent' }
    ]
  },
  {
    id: 'secure-messaging',
    name: 'Cipher',
    tagline: 'P2P Encrypted Mesh Network',
    description: 'Cross-platform decentralized messaging app using Rust and Flutter. Features end-to-end encryption (Signal Protocol) and Bluetooth mesh networking for offline communication.',
    icon: 'MessageSquare',
    color: 'indigo',
    position: { x: 500, y: 520 },
    techStack: ['Rust', 'Flutter', 'libp2p', 'Signal Protocol', 'AES-256-GCM', 'Bluetooth'],
    features: [
      'End-to-end encryption (AES-256)',
      'P2P Mesh networking',
      'Offline Bluetooth communication',
      'Cross-platform (iOS, Android, Web)',
      'AI smart replies (Local LLM)',
      'No central server'
    ],
    status: 'development',
    githubUrl: 'https://github.com/R1M1N/secure-messaging-app',
    metrics: [
      { label: 'Encryption', value: 'Signal' },
      { label: 'Offline', value: 'Mesh' }
    ]
  },
  {
    id: 'web-scraper',
    name: 'Maestro',
    tagline: 'Production-Grade Data Extraction',
    description: 'High-performance web scraping framework designed as an open-source alternative to Firecrawl. Features intelligent rate limiting, anti-detection mechanisms, and RAG-ready vector storage support.',
    icon: 'Globe',
    color: 'purple',
    position: { x: 500, y: 50 },
    techStack: ['Python', 'Playwright', 'FastAPI', 'Transformers', 'FAISS', 'ChromaDB'],
    features: [
      'JavaScript rendering & execution',
      'OCR (Tesseract) & Audio (Whisper)',
      'RAG-ready vector storage output',
      'Intelligent rate limiting',
      'Anti-detection mechanisms',
      'Concurrent processing (10k+ req/s)'
    ],
    status: 'beta',
    githubUrl: 'https://github.com/R1M1N/crawler',
    metrics: [
      { label: 'Throughput', value: '10k req/s' },
      { label: 'Bypass Rate', value: '95%' }
    ]
  },
  {
    id: 'sf-cycle',
    name: 'Axiom',
    tagline: 'Automated SDLC Platform',
    description: 'A comprehensive AI agent that handles the complete software development lifecycle. Transforms natural language queries into fully functional software projects with automated planning, development, testing, deployment, and maintenance.',
    icon: 'Code',
    color: 'red',
    position: { x: 900, y: 350 },
    techStack: ['Python', 'FastAPI', 'React', 'Docker', 'Kubernetes', 'PyTest'],
    features: [
      'Natural Language to Code',
      'Automated Feasibility Check',
      'Library Discovery Engine',
      'Comprehensive Testing Suite',
      'Auto-Deployment Setup',
      'Maintenance Monitoring'
    ],
    status: 'live',
    githubUrl: 'https://github.com/R1M1N/sf-cycle',
    metrics: [
      { label: 'Dev Time', value: '2-5 min' },
      { label: 'Coverage', value: 'Full SDLC' }
    ]
  },
  {
    id: 'vision-ai',
    name: 'Iris',
    tagline: 'End-to-End Computer Vision',
    description: 'Comprehensive computer vision platform for data management, model training, and inference. Integrates CVAT for annotation and MLflow for experiment tracking.',
    icon: 'Eye',
    color: 'green',
    position: { x: 850, y: 100 },
    techStack: ['Python', 'FastAPI', 'YOLO', 'CVAT', 'MLflow', 'Docker', 'ByteTrack'],
    features: [
      'CVAT annotation integration',
      'YOLO training pipeline',
      'MLflow experiment tracking',
      'High-performance inference server',
      'Object tracking (ByteTrack, DeepSORT)',
      'Real-time monitoring dashboard'
    ],
    status: 'live',
    githubUrl: 'https://github.com/R1M1N/agentic-vision',
    metrics: [
      { label: 'Inference', value: 'Real-time' },
      { label: 'Tracking', value: 'Multi-Object' }
    ]
  }
];

export const connectionMap = {
  'pentest-agent': ['trading-system'],
  'ai-call-receiver': ['web-scraper', 'research-explainer'],
  'web-scraper': ['vision-ai', 'nexus-guard'],
  'vision-ai': ['sf-cycle', 'trading-system'],
  'nexus-guard': ['pentest-agent', 'secure-messaging'],
  'research-explainer': ['siya-assistant'],
  'secure-messaging': ['siya-assistant'],
  'trading-system': [],
  'siya-assistant': [],
  'sf-cycle': []
};
