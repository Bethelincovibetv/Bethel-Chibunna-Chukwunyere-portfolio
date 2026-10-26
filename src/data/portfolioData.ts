import {
  ContactConfig,
  PrincipleItem,
  ProcessStep,
  Project,
  ServiceItem,
  SkillItem,
} from '../types/portfolio';

export const INITIAL_CONTACT_CONFIG: ContactConfig = {
  name: 'Bethel Chukwunyere',
  businessName: 'Goodgift Digital',
  phoneDisplay: '07043537401',
  phoneRaw: '07043537401',
  whatsAppNumber: '2347043537401', // Nigeria country code +234
  email: 'bethelchukwunyere@gmail.com', // Editable in UI or config
  linkedInUrl: 'https://www.linkedin.com/in/bethel-chukwunyere',
  gitHubUrl: 'https://github.com/bethelchukwunyere',
  twitterUrl: '',
  location: 'Nigeria / Remote Worldwide',
};

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'goodgift-digital',
    title: 'Goodgift Digital',
    category: 'Digital Agency',
    projectType: 'Personal Venture',
    status: 'In Development',
    description:
      'A digital services brand focused on website development, AI video creation, digital products, and solutions that help businesses establish an online presence and grow.',
    detailedDescription:
      'Goodgift Digital is Bethel Chukwunyere’s flagship digital brand. It delivers modern web architecture, AI-powered multimedia and video production workflows, and practical digital product engineering to empower growing businesses.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Vercel', 'AI Studio'],
    image: '/assets/aistudio/file_000000006acc8210b65c093f7f3761d9_a2059f14.png',
    featured: true,
    highlights: [
      'Tailored business web development and landing page design',
      'AI video workflow automation and content production pipelines',
      'Digital presence systems designed for lead capture and conversion',
    ],
  },
  {
    id: 'bethelin-covibe-tv',
    title: 'Bethelin Covibe TV',
    category: 'Digital Business Platform',
    projectType: 'Personal Venture',
    status: 'Live',
    description:
      'A business and media ecosystem supporting entrepreneurs, startups, creators, learning, community, promotion, and growth opportunities.',
    detailedDescription:
      'Conceived as a business-focused digital media platform rather than entertainment streaming, Bethelin Covibe TV brings together founders, digital operators, and innovators to share operational knowledge, discover business partners, and promote digital products.',
    technologies: ['Web Architecture', 'Video Distribution', 'Community Engine', 'UI/UX Design'],
    image: '',
    featured: true,
    highlights: [
      'Business media, learning, community, and promotion opportunities',
      'Startup and creator showcase modules with partner discovery',
      'Entrepreneur-focused growth and networking features',
    ],
    demoUrl: 'https://bethelincovibetv.com.ng/',
  },
  {
    id: 'ggd-ad-network',
    title: 'GGD Ad Network',
    category: 'Advertising Technology',
    projectType: 'Personal Venture',
    status: 'Live',
    description:
      'A business advertising and promotion platform designed to connect advertisers, business visibility, and promotional opportunities.',
    detailedDescription:
      'An advertising technology concept focusing on transparent, high-visibility promotional opportunities for small and mid-market businesses seeking affordable, targeted reach across digital touchpoints.',
    technologies: ['AdTech Architecture', 'Campaign Manager', 'Analytics Engine', 'TypeScript'],
    image: '',
    featured: false,
    highlights: [
      'Campaign management for digital promotional campaigns',
      'Business visibility and promotional opportunities',
      'Accessible promotion mechanisms for emerging enterprises',
    ],
    demoUrl: 'https://ggdadnetwork.com.ng/',
  },
  {
    id: 'hustlepro-ai',
    title: 'HustlePro AI',
    category: 'AI Business Tools',
    projectType: 'Concept Prototype',
    status: 'Concept',
    description:
      'An AI-powered business execution coach concept designed to help freelancers, agencies, and entrepreneurs plan and carry out business activities.',
    detailedDescription:
      'HustlePro AI explores how generative models and structured business workflows can assist solopreneurs and agency builders with tactical execution—from client proposals and scope breakdowns to weekly sales sprints.',
    technologies: ['Generative AI', 'Prompt Workflows', 'SaaS Concept', 'React SPA'],
    image: '',
    featured: true,
    highlights: [
      'Structured execution blueprints for daily business milestones',
      'AI-assisted proposal generation and client onboarding workflows',
      'Milestone tracking with practical accountability prompts',
    ],
  },
  {
    id: 'diamond-kpi',
    title: 'Diamond KPI',
    category: 'Business Analytics',
    projectType: 'Personal Venture',
    status: 'Live',
    description:
      'A KPI and business metrics dashboard project providing an executive overview and metric tracking for operational health.',
    detailedDescription:
      'A clean dashboard prototype engineered to present core business indicators without data clutter, featuring responsive charts, target thresholds, and intuitive performance cards.',
    technologies: ['Dashboard UI', 'Data Visualization', 'TypeScript', 'Tailwind CSS'],
    image: '',
    featured: false,
    highlights: [
      'Minimalist metric cards with target progress indicators',
      'Performance overview and KPI tracking',
      'Modular layout for business metrics',
    ],
    demoUrl: 'https://diamond-kpi.vercel.app/',
  },
  {
    id: 'farm-market-express',
    title: 'Farm Market Express',
    category: 'Apps & Digital Projects',
    projectType: 'Client Project',
    status: 'Live',
    description:
      'An on-demand grocery shopping and delivery web app that helps customers order fresh foodstuff without going to the market themselves.',
    detailedDescription:
      'Designed and developed for Farm Market Express, this installable Progressive Web App supports the journey from customer order through transfer confirmation, shopping, packaging, dispatch assignment, and delivery. Customers can receive push notifications and monitor delivery progress with live location tracking. Administrators can send platform-wide notifications, and dispatch riders can receive assigned deliveries.',
    technologies: ['Progressive Web App (PWA)', 'Order Management', 'Push Notifications', 'Live Location Tracking', 'Dispatch Management'],
    image: '',
    featured: true,
    highlights: [
      'Customer ordering for fresh foodstuff and order status notifications',
      'Transfer confirmation before shopping and delivery preparation',
      'Dispatch portal for assigning delivery jobs to riders',
      'Live delivery location and progress tracking',
      'Installable mobile PWA with push notifications',
      'Admin broadcast notifications',
    ],
    demoUrl: 'https://www.farmmarketexpressltd.com.ng/',
    videoUrl: 'https://youtu.be/Cab1lW0gpgs',
  },

];

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: 'website-development',
    title: 'Website Development',
    tagline: 'High-performance, modern web experiences engineered for business results.',
    category: 'Engineering',
    readiness: 'Production Ready',
    icon: 'Globe',
    deliverables: [
      'Business websites and high-converting landing pages',
      'E-commerce experiences and product showcase portals',
      'Full-featured web applications with responsive architecture',
      'Mobile-first responsive design and cross-device testing',
      'Speed optimization, accessible HTML semantics, and clean SEO',
    ],
  },
  {
    id: 'ai-solutions',
    title: 'AI-Powered Solutions',
    tagline: 'Practical AI workflows and prototypes that automate real business tasks.',
    category: 'AI & Automation',
    readiness: 'Concept & Prototyping',
    icon: 'Sparkles',
    deliverables: [
      'AI application concepts, prototypes, and user flows',
      'AI-powered business workflows and repetitive task automation',
      'AI-assisted content creation pipelines for brands',
      'AI video creation and editing solutions for digital marketing',
      'Structured business process automation concepts',
    ],
  },
  {
    id: 'mobile-app-dev',
    title: 'Mobile Application Development',
    tagline: 'Mobile-first product experiences and tactile mobile applications.',
    category: 'Mobile',
    readiness: 'Concept & Prototyping',
    icon: 'Smartphone',
    deliverables: [
      'iOS and Android application prototype projects',
      'Mobile-first responsive product experiences and PWAs',
      'Interactive application interfaces and UX design flows',
      'Touch-optimized layouts and fluid interaction models',
    ],
  },
  {
    id: 'digital-business-growth',
    title: 'Digital Business Growth',
    tagline: 'Strategic visibility and digital systems that expand your audience reach.',
    category: 'Strategy & Growth',
    readiness: 'Production Ready',
    icon: 'TrendingUp',
    deliverables: [
      'Digital marketing and targeted promotional solutions',
      'Online business presence audits and positioning',
      'Digital product strategy and launch packaging',
      'Business visibility and workflow automation strategies',
    ],
  },
  {
    id: 'product-development',
    title: 'Product Development',
    tagline: 'Transforming ideas from initial sketches into validated digital products.',
    category: 'Product',
    readiness: 'Production Ready',
    icon: 'Layers',
    deliverables: [
      'MVP planning, feature scoping, and wireframe mapping',
      'SaaS and Progressive Web App (PWA) architecture',
      'AI-assisted rapid product prototyping and testing',
      'Digital platform design from user journey to code',
    ],
  },
];

export const INITIAL_SKILLS: SkillItem[] = [
  {
    name: 'Google AI Studio',
    category: 'AI & Platforms',
    description: 'Rapid prototyping, prompt engineering, and multimodal AI integration.',
    badge: 'Core Tool',
  },
  {
    name: 'Lovable',
    category: 'AI & Platforms',
    description: 'AI-augmented software architecture and interactive UI iteration.',
    badge: 'Core Tool',
  },
  {
    name: 'GitHub',
    category: 'Deployment & Cloud',
    description: 'Version control, collaborative workflows, and CI/CD pipelines.',
    badge: 'Version Control',
  },
  {
    name: 'Vercel',
    category: 'Deployment & Cloud',
    description: 'Edge network deployment, zero-config hosting, and serverless infrastructure.',
    badge: 'Hosting',
  },
  {
    name: 'Supabase',
    category: 'Backend & Data',
    description: 'Backend-as-a-service, PostgreSQL database, and modern auth structures.',
    badge: 'Database',
  },
  {
    name: 'React & Next.js',
    category: 'Web & Frontend',
    description: 'Component architecture, state management, and modern SSR/SSG rendering.',
    badge: 'Frontend',
  },
  {
    name: 'TypeScript',
    category: 'Web & Frontend',
    description: 'Type-safe frontend logic, clean interfaces, and resilient application code.',
    badge: 'Language',
  },
  {
    name: 'Tailwind CSS',
    category: 'Web & Frontend',
    description: 'Utility-first styling, responsive layouts, and polished design systems.',
    badge: 'Styling',
  },
  {
    name: 'Node.js & REST APIs',
    category: 'Backend & Data',
    description: 'Server logic, webhook handling, and API integration.',
    badge: 'Backend',
  },
];

export const WORK_PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    subtitle: 'Understanding Core Intent',
    description:
      'We unpack the specific problem, identify target audience expectations, and clarify measurable business objectives before writing a line of code.',
    keyOutputs: ['Problem Definition', 'Target User Goals', 'Scope Alignment'],
  },
  {
    number: '02',
    title: 'Design',
    subtitle: 'Architecting Experience',
    description:
      'Translating functional needs into wireframes, visual systems, and clean user journeys. Every screen is designed for simplicity and purpose.',
    keyOutputs: ['User Flow Mapping', 'Interface Wireframes', 'Design System Spec'],
  },
  {
    number: '03',
    title: 'Build',
    subtitle: 'Engineering Solution',
    description:
      'Developing the responsive website, web app, or AI-assisted product with clean, production-grade code, proper semantics, and fluid performance.',
    keyOutputs: ['Modern Frontend Code', 'Responsive Layouts', 'Service Integrations'],
  },
  {
    number: '04',
    title: 'Improve',
    subtitle: 'Refining & Launching',
    description:
      'Rigorous cross-device testing, performance audits, and continuous refinements to ensure the digital product is ready for real customers and business use.',
    keyOutputs: ['Performance Audit', 'Device Verification', 'Deployment Readiness'],
  },
];

export const WHY_WORK_WITH_ME: PrincipleItem[] = [
  {
    title: 'Practical, Solution-Oriented Thinking',
    description:
      'I focus on what actually works for your business. Every feature, page, and button exists to solve an authentic operational or customer challenge.',
    highlight: 'Real-world utility over flashy vanity',
  },
  {
    title: 'Interest in AI & Modern Digital Technology',
    description:
      'Active exploration of cutting-edge tools like Google AI Studio and Lovable allows me to build faster, smarter, and more efficiently without bloated costs.',
    highlight: 'Modern toolchains that speed up delivery',
  },
  {
    title: 'Focus on Business Needs & User Experience',
    description:
      'A website must look impressive, but more importantly, it must guide visitors toward taking meaningful action—whether purchasing, booking, or contacting.',
    highlight: 'Human-centric UI paired with business goals',
  },
  {
    title: 'Flexible Digital Solutions for Startups & Small Businesses',
    description:
      'Agile, modular approaches that fit lean budgets and adapt as your enterprise matures, from simple landing pages to scalable product prototypes.',
    highlight: 'Adaptable architectures built to grow',
  },
  {
    title: 'A Growth-Focused Approach to Digital Products',
    description:
      'I treat digital projects as ongoing vehicles for growth, measuring clarity, performance, and audience response rather than stopping at mere mockups.',
    highlight: 'Iterative momentum for long-term traction',
  },
];
