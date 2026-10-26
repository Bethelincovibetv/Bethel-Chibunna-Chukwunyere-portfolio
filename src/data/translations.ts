export type Language = 'en' | 'fr';

export interface TranslationDictionary {
  nav: {
    about: string;
    services: string;
    projects: string;
    process: string;
    skills: string;
    contact: string;
    letsTalk: string;
    appearance: string;
    language: string;
  };
  hero: {
    badge: string;
    role: string;
    founder: string;
    headline: string;
    description: string;
    exploreBtn: string;
    workTogetherBtn: string;
    webArch: string;
    aiSolutions: string;
    prodEng: string;
    buildingVentures: string;
    location: string;
    changePortrait: string;
  };
  about: {
    kicker: string;
    title: string;
    subtitle: string;
    para1: string;
    para2: string;
    philosophyTitle: string;
    philosophyQuote: string;
    initiateBtn: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    verifNote: string;
  };
  services: {
    kicker: string;
    title: string;
    subtitle: string;
    prodReadyTag: string;
    conceptTag: string;
    scopeLabel: string;
    enquireBtn: string;
    items: {
      [key: string]: {
        title: string;
        tagline: string;
        deliverables: string[];
      };
    };
  };
  projects: {
    kicker: string;
    title: string;
    subtitle: string;
    addVentureBtn: string;
    filterLabel: string;
    showingText: string;
    ofText: string;
    venturesText: string;
    ventureText: string;
    resetFilter: string;
    exploreBtn: string;
    categories: {
      All: string;
      'Website Projects': string;
      'Apps & Digital Projects': string;
      'AI Video Projects': string;
      'Digital Agency': string;
      'Digital Business Platform': string;
      'Advertising Technology': string;
      'AI Business Tools': string;
      'Business Analytics': string;
    };
    statuses: {
      Live: string;
      'In Development': string;
      Concept: string;
    };
    noProjectsFound: string;
    noProjectsDesc: string;
    showAllBtn: string;
  };
  projectModal: {
    editBtn: string;
    cancelEditBtn: string;
    saveChangesBtn: string;
    cancelBtn: string;
    projectTitle: string;
    statusLabel: string;
    classificationLabel: string;
    roleLabel: string;
    shortDesc: string;
    detailedNotes: string;
    techLabel: string;
    demoUrlLabel: string;
    repoUrlLabel: string;
    videoUrlLabel: string;
    highlightsTitle: string;
    techTitle: string;
    viewDemoBtn: string;
    sourceRepoBtn: string;
    watchVideoBtn: string;
    demoReservedText: string;
  };
  process: {
    kicker: string;
    title: string;
    subtitle: string;
    outputsLabel: string;
    steps: {
      [key: string]: {
        title: string;
        subtitle: string;
        description: string;
        keyOutputs: string[];
      };
    };
  };
  whyWork: {
    kicker: string;
    title: string;
    subtitle: string;
    items: {
      [key: string]: {
        title: string;
        description: string;
        highlight: string;
      };
    };
  };
  skills: {
    kicker: string;
    title: string;
    subtitle: string;
    customizeBtn: string;
    closeEditorBtn: string;
    liveCustomizerTitle: string;
    addSkillPlaceholder: string;
    techCount: string;
    categories: {
      'AI & Platforms': string;
      'Deployment & Cloud': string;
      'Web & Frontend': string;
      'Backend & Data': string;
    };
  };
  contact: {
    kicker: string;
    headline: string;
    subtitle: string;
    directChannels: string;
    fastestResponse: string;
    chatWhatsapp: string;
    phoneLabel: string;
    emailLabel: string;
    intlText: string;
    responseNote: string;
    sendBriefTitle: string;
    sendBriefDesc: string;
    nameLabel: string;
    emailFormLabel: string;
    serviceNeededLabel: string;
    descLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    descPlaceholder: string;
    sendWhatsappBtn: string;
    sendEmailBtn: string;
    copyBriefBtn: string;
    copiedBtn: string;
    nameError: string;
    emailError: string;
    emailFormatError: string;
    descError: string;
    descLengthError: string;
  };
  footer: {
    closingText: string;
    guideLink: string;
    rights: string;
    builtWith: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      process: 'Process',
      skills: 'Skills',
      contact: 'Contact',
      letsTalk: "Let's Work Together",
      appearance: 'Appearance',
      language: 'Language',
    },
    hero: {
      badge: 'Digital Entrepreneur & AI Innovator',
      role: 'Founder, Goodgift Digital',
      founder: 'Founder & Strategist',
      headline: '"Turning Ideas Into Digital Experiences."',
      description:
        'I am a digital entrepreneur and AI innovator building websites, applications, AI-powered solutions, and digital products that help businesses grow and operate smarter.',
      exploreBtn: 'Explore My Projects',
      workTogetherBtn: "Let's Work Together",
      webArch: 'Web Architecture',
      aiSolutions: 'AI-Powered Solutions',
      prodEng: 'Product Engineering',
      buildingVentures: 'Building Digital Ventures',
      location: 'Lagos · Global',
      changePortrait: 'Update Portrait Image',
    },
    about: {
      kicker: 'About Me',
      title: 'Digital Entrepreneur, Innovator & Builder',
      subtitle: 'Founder of Goodgift Digital, committed to engineering impactful technology solutions for modern enterprises.',
      para1:
        'I am Bethel Chukwunyere, a digital entrepreneur and AI innovator. As the founder of Goodgift Digital, my work focuses on helping businesses, startups, entrepreneurs, and creators use digital technology to improve their online presence, create useful products, promote their services, and explore AI-powered solutions.',
      para2:
        'In an era where technology evolves daily, having a flashy prototype is not enough. I believe in delivering tangible digital systems that support business operations, capture leads, automate redundant effort, and open genuine opportunities for commercial expansion.',
      philosophyTitle: 'Core Philosophy',
      philosophyQuote:
        '"Technology should not just look impressive. It should solve real problems, create opportunities, and help people grow."',
      initiateBtn: 'Initiate a Conversation',
      pillar1Title: 'Digital Presence & Architecture',
      pillar1Desc:
        'Helping businesses construct authoritative websites and portals that convert visitors into active clients.',
      pillar2Title: 'Practical AI & Automation',
      pillar2Desc:
        'Integrating generative AI tools and automated workflows to streamline operations and content pipelines.',
      pillar3Title: 'Venture & Product Scoping',
      pillar3Desc:
        'Turning raw concepts into validated digital products, functional MVPs, and clear execution roadmaps.',
      verifNote: 'Real projects and transparent scope — zero exaggerated vanity metrics.',
    },
    services: {
      kicker: 'Services & Capabilities',
      title: 'Tailored Digital & AI Capabilities',
      subtitle:
        'Bridging engineering rigor with practical business application. Each capability is clearly structured to distinguish production implementations from rapid conceptual prototypes.',
      prodReadyTag: 'Production Ready',
      conceptTag: 'Concept & Prototype',
      scopeLabel: 'Scope & Deliverables:',
      enquireBtn: 'Enquire About',
      items: {
        'website-development': {
          title: 'Website Development',
          tagline: 'High-performance, modern web experiences engineered for business results.',
          deliverables: [
            'Business websites and high-converting landing pages',
            'E-commerce experiences and product showcase portals',
            'Full-featured web applications with responsive architecture',
            'Mobile-first responsive design and cross-device testing',
            'Speed optimization, accessible HTML semantics, and clean SEO',
          ],
        },
        'ai-solutions': {
          title: 'AI-Powered Solutions',
          tagline: 'Practical AI workflows and prototypes that automate real business tasks.',
          deliverables: [
            'AI application concepts, prototypes, and user flows',
            'AI-powered business workflows and repetitive task automation',
            'AI-assisted content creation pipelines for brands',
            'AI video creation and editing solutions for digital marketing',
            'Structured business process automation concepts',
          ],
        },
        'mobile-app-dev': {
          title: 'Mobile Application Development',
          tagline: 'Mobile-first product experiences and tactile mobile applications.',
          deliverables: [
            'iOS and Android application prototype projects',
            'Mobile-first responsive product experiences and PWAs',
            'Interactive application interfaces and UX design flows',
            'Touch-optimized layouts and fluid interaction models',
          ],
        },
        'digital-business-growth': {
          title: 'Digital Business Growth',
          tagline: 'Strategic visibility and digital systems that expand your audience reach.',
          deliverables: [
            'Digital marketing and targeted promotional solutions',
            'Online business presence audits and positioning',
            'Digital product strategy and launch packaging',
            'Business visibility and workflow automation strategies',
          ],
        },
        'product-development': {
          title: 'Product Development',
          tagline: 'Transforming ideas from initial sketches into validated digital products.',
          deliverables: [
            'MVP planning, feature scoping, and wireframe mapping',
            'SaaS and Progressive Web App (PWA) architecture',
            'AI-assisted rapid product prototyping and testing',
            'Digital platform design from user journey to code',
          ],
        },
      },
    },
    projects: {
      kicker: 'Portfolio & Ventures',
      title: 'Featured Digital Ventures & Prototypes',
      subtitle:
        'A curated index of brands, SaaS prototypes, and business platforms built or conceptualized by Bethel Chukwunyere.',
      addVentureBtn: 'Add Venture / Project',
      filterLabel: 'Filter Category:',
      showingText: 'Showing',
      ofText: 'of',
      venturesText: 'ventures',
      ventureText: 'venture',
      resetFilter: 'Reset Filter',
      exploreBtn: 'Explore Project',
      categories: {
        All: 'All',
        'Website Projects': 'Website Projects',
        'Apps & Digital Projects': 'Apps & Digital Projects',
        'AI Video Projects': 'AI Video Projects',
        'Digital Agency': 'Digital Agency',
        'Digital Business Platform': 'Digital Business Platform',
        'Advertising Technology': 'Advertising Technology',
        'AI Business Tools': 'AI Business Tools',
        'Business Analytics': 'Business Analytics',
      },
      statuses: {
        Live: 'Live',
        'In Development': 'In Development',
        Concept: 'Concept',
      },
      noProjectsFound: 'Projects coming soon',
      noProjectsDesc: 'Real entries for this category will be added in the next phase.',
      showAllBtn: 'Show All Projects',
    },
    projectModal: {
      editBtn: 'Edit Project',
      cancelEditBtn: 'Cancel Edit',
      saveChangesBtn: 'Save Changes',
      cancelBtn: 'Cancel',
      projectTitle: 'Project Title',
      statusLabel: 'Status',
      classificationLabel: 'Project Classification',
      roleLabel: 'My Role & Contributions',
      shortDesc: 'Short Description',
      detailedNotes: 'Detailed Architecture & Notes',
      techLabel: 'Technologies (comma separated)',
      demoUrlLabel: 'Live Demo URL (Optional)',
      repoUrlLabel: 'GitHub Repo URL (Optional)',
      videoUrlLabel: 'Video Preview / Embed Link (Optional)',
      highlightsTitle: 'Key Architectural Highlights:',
      techTitle: 'Technologies & Architecture:',
      viewDemoBtn: 'View Live Demonstration',
      sourceRepoBtn: 'Source Repository',
      watchVideoBtn: 'Watch Video Preview',
      demoReservedText:
        'Public demonstration links and repository access are currently reserved during concept and architecture stages.',
    },
    process: {
      kicker: 'Methodology',
      title: 'How I Bring Ideas to Life',
      subtitle:
        'A disciplined, four-stage workflow ensuring clear communication, efficient execution, and dependable outcomes for every digital project.',
      outputsLabel: 'Outputs:',
      steps: {
        '01': {
          title: 'Discover',
          subtitle: 'Understanding Core Intent',
          description:
            'We unpack the specific problem, identify target audience expectations, and clarify measurable business objectives before writing a line of code.',
          keyOutputs: ['Problem Definition', 'Target User Goals', 'Scope Alignment'],
        },
        '02': {
          title: 'Design',
          subtitle: 'Architecting Experience',
          description:
            'Translating functional needs into wireframes, visual systems, and clean user journeys. Every screen is designed for simplicity and purpose.',
          keyOutputs: ['User Flow Mapping', 'Interface Wireframes', 'Design System Spec'],
        },
        '03': {
          title: 'Build',
          subtitle: 'Engineering Solution',
          description:
            'Developing the responsive website, web app, or AI-assisted product with clean, production-grade code, proper semantics, and fluid performance.',
          keyOutputs: ['Modern Frontend Code', 'Responsive Layouts', 'Service Integrations'],
        },
        '04': {
          title: 'Improve',
          subtitle: 'Refining & Launching',
          description:
            'Rigorous cross-device testing, performance audits, and continuous refinements to ensure the digital product is ready for real customers and business use.',
          keyOutputs: ['Performance Audit', 'Device Verification', 'Deployment Readiness'],
        },
      },
    },
    whyWork: {
      kicker: 'Guiding Principles',
      title: 'Why Work With Me',
      subtitle:
        'My engineering and product philosophy is grounded in transparent communication, modern tooling, and authentic commercial utility.',
      items: {
        '0': {
          title: 'Practical, Solution-Oriented Thinking',
          description:
            'I focus on what actually works for your business. Every feature, page, and button exists to solve an authentic operational or customer challenge.',
          highlight: 'Real-world utility over flashy vanity',
        },
        '1': {
          title: 'Interest in AI & Modern Digital Technology',
          description:
            'Active exploration of cutting-edge tools like Google AI Studio and Lovable allows me to build faster, smarter, and more efficiently without bloated costs.',
          highlight: 'Modern toolchains that speed up delivery',
        },
        '2': {
          title: 'Focus on Business Needs & User Experience',
          description:
            'A website must look impressive, but more importantly, it must guide visitors toward taking meaningful action—whether purchasing, booking, or contacting.',
          highlight: 'Human-centric UI paired with business goals',
        },
        '3': {
          title: 'Flexible Digital Solutions for Startups & Small Businesses',
          description:
            'Agile, modular approaches that fit lean budgets and adapt as your enterprise matures, from simple landing pages to scalable product prototypes.',
          highlight: 'Adaptable architectures built to grow',
        },
        '4': {
          title: 'A Growth-Focused Approach to Digital Products',
          description:
            'I treat digital projects as ongoing vehicles for growth, measuring clarity, performance, and audience response rather than stopping at mere mockups.',
          highlight: 'Iterative momentum for long-term traction',
        },
      },
    },
    skills: {
      kicker: 'Tooling & Stack',
      title: 'Technologies & Platforms',
      subtitle:
        'Carefully chosen toolchains combining generative AI studios, modern cloud deployment, and robust web standards.',
      customizeBtn: 'Customize Skills',
      closeEditorBtn: 'Close Editor',
      liveCustomizerTitle: 'Live Skills Customizer',
      addSkillPlaceholder: 'Tool / Tech Name (e.g. Flutter)',
      techCount: 'Technologies',
      categories: {
        'AI & Platforms': 'AI & Platforms',
        'Deployment & Cloud': 'Deployment & Cloud',
        'Web & Frontend': 'Web & Frontend',
        'Backend & Data': 'Backend & Data',
      },
    },
    contact: {
      kicker: 'Client Enquiries & Collaborations',
      headline: "Have an Idea? Let's Build Something Valuable.",
      subtitle:
        "Whether you need a website, mobile application, AI-powered solution, or a digital product, let's discuss how we can bring your idea to life.",
      directChannels: 'Direct Channels',
      fastestResponse: 'Fastest Response',
      chatWhatsapp: 'Chat on WhatsApp',
      phoneLabel: 'Phone & WhatsApp',
      emailLabel: 'Email Enquiries',
      intlText: 'Intl',
      responseNote: 'Typical initial response time is within 24 business hours.',
      sendBriefTitle: 'Send a Direct Project Brief',
      sendBriefDesc:
        'Fill out the specifications below. You can send directly via WhatsApp, email, or copy the formatted brief.',
      nameLabel: 'Your Name *',
      emailFormLabel: 'Your Email Address *',
      serviceNeededLabel: 'Service Needed *',
      descLabel: 'Project Description & Objectives *',
      namePlaceholder: 'e.g. Samuel Adekunle',
      emailPlaceholder: 'e.g. samuel@example.com',
      descPlaceholder: 'Briefly describe your goals, timeline, and what you would like to achieve...',
      sendWhatsappBtn: 'Send via WhatsApp',
      sendEmailBtn: 'Send via Email',
      copyBriefBtn: 'Copy Brief',
      copiedBtn: 'Copied!',
      nameError: 'Please provide your full name.',
      emailError: 'Please provide your email address.',
      emailFormatError: 'Please provide a valid email format.',
      descError: 'Please describe your project, idea, or challenge.',
      descLengthError: 'Please provide at least 15 characters describing your project.',
    },
    footer: {
      closingText:
        'Founder of Goodgift Digital. Turning ideas into resilient digital experiences through modern web architecture, AI-powered solutions, and practical product engineering.',
      guideLink: 'Deployment & Domain Guide',
      rights: 'All rights reserved.',
      builtWith: 'Goodgift Digital · Built with React, Vite & Tailwind',
    },
  },
  fr: {
    nav: {
      about: 'À propos',
      services: 'Services',
      projects: 'Projets',
      process: 'Procédé',
      skills: 'Compétences',
      contact: 'Contact',
      letsTalk: 'Travaillons Ensemble',
      appearance: 'Apparence',
      language: 'Langue',
    },
    hero: {
      badge: 'Entrepreneur Numérique & Innovateur en IA',
      role: 'Fondateur, Goodgift Digital',
      founder: 'Fondateur & Stratège',
      headline: '« Transformer les Idées en Expériences Numériques. »',
      description:
        'Je suis un entrepreneur numérique et innovateur en IA qui conçoit des sites web, des applications, des solutions axées sur l’IA et des produits numériques aidant les entreprises à croître et à fonctionner intelligemment.',
      exploreBtn: 'Explorer Mes Projets',
      workTogetherBtn: 'Travaillons Ensemble',
      webArch: 'Architecture Web',
      aiSolutions: 'Solutions Axées sur l’IA',
      prodEng: 'Ingénierie Produit',
      buildingVentures: 'Création d’Entreprises Numériques',
      location: 'Lagos · International',
      changePortrait: 'Changer la Photo de Portrait',
    },
    about: {
      kicker: 'À propos de moi',
      title: 'Entrepreneur Numérique, Innovateur & Bâtisseur',
      subtitle:
        'Fondateur de Goodgift Digital, engagé dans l’ingénierie de solutions technologiques performantes pour les entreprises modernes.',
      para1:
        'Je suis Bethel Chukwunyere, entrepreneur numérique et innovateur en IA. En tant que fondateur de Goodgift Digital, mon travail consiste à aider les entreprises, les startups, les entrepreneurs et les créateurs à exploiter les technologies numériques pour renforcer leur présence en ligne, créer des produits utiles, promouvoir leurs services et explorer des solutions basées sur l’IA.',
      para2:
        'À une époque où la technologie évolue rapidement, avoir un simple prototype ne suffit plus. Je crois en la livraison de systèmes numériques concrets qui soutiennent les opérations commerciales, captent des prospects, automatisent les tâches répétitives et ouvrent de réelles opportunités d’expansion commerciale.',
      philosophyTitle: 'Philosophie Fondamentale',
      philosophyQuote:
        '« La technologie ne doit pas seulement impressionner. Elle doit résoudre de vrais problèmes, créer des opportunités et aider les gens à progresser. »',
      initiateBtn: 'Engager la Conversation',
      pillar1Title: 'Présence & Architecture Numérique',
      pillar1Desc:
        'Aider les entreprises à créer des sites web et portails d’autorité qui convertissent les visiteurs en clients actifs.',
      pillar2Title: 'IA Pratique & Automatisation',
      pillar2Desc:
        'Intégrer des outils d’IA générative et des flux automatisés pour optimiser les opérations et la création de contenu.',
      pillar3Title: 'Cadrage de Projets & Produits',
      pillar3Desc:
        'Penser des concepts bruts sous forme de produits numériques validés, de MVP fonctionnels et de feuilles de route claires.',
      verifNote: 'Projets réels et périmètre transparent — zéro métrique exagérée.',
    },
    services: {
      kicker: 'Services & Compétences',
      title: 'Capacités Numériques & IA Sur Mesure',
      subtitle:
        'Allier rigueur d’ingénierie et applications commerciales pratiques. Chaque compétence est structurée pour distinguer clairement les réalisations en production des prototypes conceptuels.',
      prodReadyTag: 'Prêt pour la Production',
      conceptTag: 'Concept & Prototypage',
      scopeLabel: 'Périmètre & Livrables :',
      enquireBtn: 'Se Renseigner sur',
      items: {
        'website-development': {
          title: 'Développement de Sites Web',
          tagline: 'Expériences web modernes et très performantes conçues pour générer des résultats commerciaux.',
          deliverables: [
            'Sites d’entreprise et pages d’atterrissage à forte conversion',
            'Plateformes e-commerce et portails de présentation de produits',
            'Applications web complètes à architecture réactive',
            'Conception réactive axée sur le mobile et tests multi-appareils',
            'Optimisation de vitesse, sémantique HTML accessible et SEO soigné',
          ],
        },
        'ai-solutions': {
          title: 'Solutions Basées sur l’IA',
          tagline: 'Flux de travail IA pratiques et prototypes automatisant de vraies tâches d’entreprise.',
          deliverables: [
            'Concepts d’applications IA, prototypes et parcours utilisateurs',
            'Flux de travail automatisés par IA et suppression des tâches répétitives',
            'Pipelines de création de contenu assistés par IA pour les marques',
            'Solutions de création et de montage vidéo IA pour le marketing numérique',
            'Concepts d’automatisation des processus d’affaires structurés',
          ],
        },
        'mobile-app-dev': {
          title: 'Développement d’Applications Mobiles',
          tagline: 'Expériences produits fluides et applications tactiles axées sur le mobile.',
          deliverables: [
            'Projets de prototypes d’applications iOS et Android',
            'Expériences produits mobiles réactives et PWA',
            'Interfaces d’applications interactives et parcours UX',
            'Dispositions optimisées pour le tactile et modèles d’interaction fluides',
          ],
        },
        'digital-business-growth': {
          title: 'Croissance de l’Entreprise Numérique',
          tagline: 'Visibilité stratégique et systèmes numériques élargissant votre portée auprès de votre audience.',
          deliverables: [
            'Solutions marketing numériques et campagnes promotionnelles ciblées',
            'Audits de présence en ligne et positionnement de marque',
            'Stratégie de produits numériques et accompagnement au lancement',
            'Stratégies de visibilité et d’automatisation des processus',
          ],
        },
        'product-development': {
          title: 'Développement de Produits',
          tagline: 'Transformer les idées initiales en produits numériques validés et performants.',
          deliverables: [
            'Planification de MVP, cadrage des fonctionnalités et maquettage',
            'Architecture SaaS et Progressive Web Apps (PWA)',
            'Prototypage rapide et tests de produits assistés par IA',
            'Conception de plateformes numériques de l’expérience utilisateur au code',
          ],
        },
      },
    },
    projects: {
      kicker: 'Portfolio & Projets',
      title: 'Projets Numériques & Prototypes à la Une',
      subtitle:
        'Index sélectionné de marques, prototypes SaaS et plateformes professionnelles conçus par Bethel Chukwunyere.',
      addVentureBtn: 'Ajouter un Projet',
      filterLabel: 'Filtrer par Catégorie :',
      showingText: 'Affichage de',
      ofText: 'sur',
      venturesText: 'projets',
      ventureText: 'projet',
      resetFilter: 'Réinitialiser le Filtre',
      exploreBtn: 'Explorer le Projet',
      categories: {
        All: 'Tous',
        'Website Projects': 'Projets de Sites Web',
        'Apps & Digital Projects': 'Apps & Projets Numériques',
        'AI Video Projects': 'Projets Vidéo IA',
        'Digital Agency': 'Agence Numérique',
        'Digital Business Platform': 'Plateforme d’Affaires Numérique',
        'Advertising Technology': 'Technologie Publicitaire',
        'AI Business Tools': 'Outils d’Affaires IA',
        'Business Analytics': 'Analyse d’Affaires',
      },
      statuses: {
        Live: 'En Ligne',
        'In Development': 'En Développement',
        Concept: 'Concept',
      },
      noProjectsFound: 'Projets à venir',
      noProjectsDesc: 'Les vrais projets pour cette catégorie seront ajoutés lors de la prochaine étape.',
      showAllBtn: 'Afficher Tous les Projets',
    },
    projectModal: {
      editBtn: 'Modifier le Projet',
      cancelEditBtn: 'Annuler la Modification',
      saveChangesBtn: 'Enregistrer les Modifications',
      cancelBtn: 'Annuler',
      projectTitle: 'Titre du Projet',
      statusLabel: 'Statut',
      classificationLabel: 'Classification du Projet',
      roleLabel: 'Mon Rôle & Contributions',
      shortDesc: 'Brève Description',
      detailedNotes: 'Architecture & Notes Détaillées',
      techLabel: 'Technologies (séparées par des virgules)',
      demoUrlLabel: 'URL de Démonstration (Optionnel)',
      repoUrlLabel: 'URL du Dépôt GitHub (Optionnel)',
      videoUrlLabel: 'Aperçu Vidéo / Lien Vidéo (Optionnel)',
      highlightsTitle: 'Points Forts de l’Architecture :',
      techTitle: 'Technologies & Architecture :',
      viewDemoBtn: 'Voir la Démonstration en Ligne',
      sourceRepoBtn: 'Dépôt Code Source',
      watchVideoBtn: 'Regarder la Vidéo',
      demoReservedText:
        'Les liens de démonstration publique et l’accès au dépôt sont actuellement réservés pendant les phases de concept et d’architecture.',
    },
    process: {
      kicker: 'Méthodologie',
      title: 'Comment Je Donne Vie aux Idées',
      subtitle:
        'Un flux de travail rigoureux en quatre étapes garantissant une communication claire, une exécution efficace et des résultats fiables pour chaque projet.',
      outputsLabel: 'Livrables :',
      steps: {
        '01': {
          title: 'Découvrir',
          subtitle: 'Comprendre l’Intention Fondamentale',
          description:
            'Nous analysons le problème spécifique, identifions les attentes de l’audience cible et clarifions les objectifs commerciaux mesurables avant d’écrire la moindre ligne de code.',
          keyOutputs: ['Définition du Problème', 'Objectifs Utilisateurs', 'Alignement du Périmètre'],
        },
        '02': {
          title: 'Concevoir',
          subtitle: 'Architecturer l’Expérience',
          description:
            'Traduire les besoins fonctionnels en maquettes, systèmes visuels et parcours utilisateurs fluides. Chaque écran est pensé pour sa simplicité et son utilité.',
          keyOutputs: ['Cartographie du Parcours', 'Maquettes d’Interface', 'Spécifications Design'],
        },
        '03': {
          title: 'Développer',
          subtitle: 'Construire la Solution',
          description:
            'Développer le site réactif, l’application web ou le produit assisté par IA avec du code propre de qualité production, une bonne sémantique et des performances fluides.',
          keyOutputs: ['Code Frontend Moderne', 'Mises en Page Réactives', 'Intégrations de Services'],
        },
        '04': {
          title: 'Améliorer',
          subtitle: 'Affiner & Lancer',
          description:
            'Tests rigoureux sur plusieurs appareils, audits de performance et ajustements continus pour s’assurer que le produit numérique est prêt pour de vrais clients.',
          keyOutputs: ['Audit de Performance', 'Vérification Multi-Appareils', 'Validation du Déploiement'],
        },
      },
    },
    whyWork: {
      kicker: 'Principes Directeurs',
      title: 'Pourquoi Travailler Avec Moi',
      subtitle:
        'Ma philosophie d’ingénierie et de développement repose sur une communication transparente, des outils modernes et une réelle utilité commerciale.',
      items: {
        '0': {
          title: 'Pensée Pratique & Orientée Solutions',
          description:
            'Je me concentre sur ce qui fonctionne réellement pour votre entreprise. Chaque fonctionnalité, page et bouton existe pour résoudre un défi concret.',
          highlight: 'Utilité réelle avant le superflu',
        },
        '1': {
          title: 'Intérêt pour l’IA & les Technologies Modernes',
          description:
            'L’exploration active d’outils de pointe comme Google AI Studio et Lovable me permet de développer plus vite, plus intelligemment et sans coûts excessifs.',
          highlight: 'Chaînes d’outils modernes accélérant la livraison',
        },
        '2': {
          title: 'Focus sur les Besoins d’Affaires & l’Expérience Utilisateur',
          description:
            'Un site web doit être impressionnant, mais plus encore, il doit guider les visiteurs vers des actions concrètes (demandes, achats, contacts).',
          highlight: 'Interface axée sur l’humain et alignée sur les objectifs',
        },
        '3': {
          title: 'Solutions Numériques Flexibles pour Startups & PME',
          description:
            'Approches agiles et modulaires adaptées aux budgets réduits qui évoluent avec le développement de votre entreprise.',
          highlight: 'Architectures adaptatives conçues pour évoluer',
        },
        '4': {
          title: 'Approche Produits Numériques Axée sur la Croissance',
          description:
            'Je traite les projets numériques comme des moteurs de croissance continue, en mesurant la clarté, la performance et l’engagement du public.',
          highlight: 'Dynamique itérative pour un impact à long terme',
        },
      },
    },
    skills: {
      kicker: 'Outils & Technologies',
      title: 'Technologies & Plateformes',
      subtitle:
        'Chaînes d’outils soigneusement sélectionnées combinant studios d’IA générative, déploiement cloud moderne et standards web solides.',
      customizeBtn: 'Personnaliser les Compétences',
      closeEditorBtn: 'Fermer l’Éditeur',
      liveCustomizerTitle: 'Personnalisateur de Compétences',
      addSkillPlaceholder: 'Nom de l’Outil / Tech (ex. Flutter)',
      techCount: 'Technologies',
      categories: {
        'AI & Platforms': 'IA & Plateformes',
        'Deployment & Cloud': 'Déploiement & Cloud',
        'Web & Frontend': 'Web & Frontend',
        'Backend & Data': 'Backend & Données',
      },
    },
    contact: {
      kicker: 'Demandes de Clients & Collaborations',
      headline: 'Vous avez une idée ? Construisons quelque chose de valeur.',
      subtitle:
        'Que vous ayez besoin d’un site web, d’une application mobile, d’une solution d’IA ou d’un produit numérique, discutons ensemble de sa réalisation.',
      directChannels: 'Canaux Directs',
      fastestResponse: 'Réponse la Plus Rapide',
      chatWhatsapp: 'Discuter sur WhatsApp',
      phoneLabel: 'Téléphone & WhatsApp',
      emailLabel: 'Demandes par E-mail',
      intlText: 'Intl',
      responseNote: 'Le délai de réponse initial habituel est de 24 heures ouvrées.',
      sendBriefTitle: 'Envoyer un Brief de Projet Direct',
      sendBriefDesc:
        'Remplissez les détails ci-dessous. Vous pouvez envoyer directement via WhatsApp, par e-mail ou copier le brief mis en forme.',
      nameLabel: 'Votre Nom *',
      emailFormLabel: 'Votre Adresse E-mail *',
      serviceNeededLabel: 'Service Requis *',
      descLabel: 'Description du Projet & Objectifs *',
      namePlaceholder: 'ex. Samuel Adekunle',
      emailPlaceholder: 'ex. samuel@exemple.com',
      descPlaceholder: 'Décrivez brièvement vos objectifs, votre calendrier et ce que vous souhaitez accomplir...',
      sendWhatsappBtn: 'Envoyer via WhatsApp',
      sendEmailBtn: 'Envoyer par E-mail',
      copyBriefBtn: 'Copier le Brief',
      copiedBtn: 'Copié !',
      nameError: 'Veuillez indiquer votre nom complet.',
      emailError: 'Veuillez indiquer votre adresse e-mail.',
      emailFormatError: 'Veuillez indiquer un format d’e-mail valide.',
      descError: 'Veuillez décrire votre projet, idée ou défi.',
      descLengthError: 'Veuillez fournir au moins 15 caractères pour décrire votre projet.',
    },
    footer: {
      closingText:
        'Fondateur de Goodgift Digital. Transformer des idées en expériences numériques résilientes grâce à une architecture web moderne, des solutions d’IA et l’ingénierie produit.',
      guideLink: 'Guide de Déploiement & Domaine',
      rights: 'Tous droits réservés.',
      builtWith: 'Goodgift Digital · Conçu avec React, Vite & Tailwind',
    },
  },
};
