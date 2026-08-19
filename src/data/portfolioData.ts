import { SkillItem, ProjectItem, ExperienceLog, SystemStatus } from '../types';

export const PERSONAL_INFO = {
  name: 'Cornel Mwangi',
  handle: 'cornel_mwangi',
  role: 'Junior Software Developer',
  tagline: 'Moringa School Full-Stack Bootcamp Graduate building responsive web apps, REST APIs, and modern digital experiences.',
  phone: '0741919042',
  email: 'cornelmwangi@gmail.com',
  location: 'Nairobi, Kenya // Remote Ready',
  status: 'AVAILABLE FOR JUNIOR DEV ROLES & INTERNSHIPS',
  mission: 'BUILD IMPACTFUL DIGITAL PRODUCTS',
  mode: 'DEVELOPMENT',
  bio: `I am a driven Junior Software Developer who recently graduated from the intensive Full-Stack Software Development Bootcamp at Moringa School. Trained in modern JavaScript, TypeScript, React, Python, Flask/Django, SQL databases, and agile software development workflows. Eager to contribute clean code, learn quickly, and solve real-world problems within high-performing engineering teams.`,
  terminalPrompt: 'cornel@dev:~$',
  systemStatus: {
    status: 'ONLINE',
    developer: 'CORNEL MWANGI',
    role: 'JUNIOR SOFTWARE DEVELOPER',
    connection: 'SECURE (TLS/256-BIT)',
    osKernel: 'MORINGA-ALUMNI v1.0-CYBER',
    ipNode: 'NODE-NAIROBI-01.DIRECT',
    uptimeHours: 99.98,
    cpuLoad: '12.4%',
    memoryUsage: '3.1GB / 32GB',
    latencyMs: 14,
  } as SystemStatus,
  socialLinks: {
    github: 'https://github.com/KANO-BYTE-bot',
    linkedin: 'https://linkedin.com/in/cornelmwangi',
    twitter: 'https://twitter.com/cornelmwangi',
    email: 'mailto:cornelmwangi@gmail.com',
    phone: 'tel:0741919042',
  }
};

export const SKILLS_DATA: SkillItem[] = [
  // Frontend
  {
    id: 'js',
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    level: 92,
    levelLabel: 'PROFICIENT',
    tag: 'CORE',
    description: 'DOM manipulation, asynchronous JavaScript (Promises, async/await), ES6+ modular architecture, and event-driven patterns.',
    yearsOfExp: 'BOOTCAMP + PROJECTS',
  },
  {
    id: 'react',
    name: 'React.js',
    category: 'frontend',
    level: 90,
    levelLabel: 'PROFICIENT',
    tag: 'UI-LIB',
    description: 'Single Page Applications (SPAs), functional components, custom hooks (useState, useEffect, useContext), state management & React Router.',
    yearsOfExp: 'BOOTCAMP + PROJECTS',
  },
  {
    id: 'ts',
    name: 'TypeScript',
    category: 'frontend',
    level: 86,
    levelLabel: 'ADVANCED',
    tag: 'LANG',
    description: 'Strict type safety, custom interfaces, generic components, and type-checked frontend modules.',
    yearsOfExp: 'PROJECTS',
  },
  {
    id: 'html-css',
    name: 'HTML5, CSS3 & Tailwind',
    category: 'frontend',
    level: 94,
    levelLabel: 'PROFICIENT',
    tag: 'WEB',
    description: 'Semantic HTML, responsive Flexbox/Grid layouts, Tailwind CSS utility styling, mobile-first design and accessibility.',
    yearsOfExp: 'BOOTCAMP + PROJECTS',
  },
  // Backend
  {
    id: 'python',
    name: 'Python',
    category: 'backend',
    level: 90,
    levelLabel: 'PROFICIENT',
    tag: 'LANG',
    description: 'Object-Oriented Programming (OOP), data structures, scripting, algorithm design, and backend business logic.',
    yearsOfExp: 'MORINGA BOOTCAMP',
  },
  {
    id: 'flask-django',
    name: 'Flask / Backend Frameworks',
    category: 'backend',
    level: 88,
    levelLabel: 'PROFICIENT',
    tag: 'FRAMEWORK',
    description: 'RESTful API routing, request validation, SQLAlchemy ORM modeling, error handling, and session authentication.',
    yearsOfExp: 'MORINGA BOOTCAMP',
  },
  {
    id: 'nodejs',
    name: 'Node.js & Express',
    category: 'backend',
    level: 85,
    levelLabel: 'WORKING KNOWLEDGE',
    tag: 'RUNTIME',
    description: 'Building server-side REST APIs, middleware implementation, JSON payloads, and third-party API integration.',
    yearsOfExp: 'PROJECTS',
  },
  {
    id: 'rest-api',
    name: 'RESTful API Engineering',
    category: 'backend',
    level: 90,
    levelLabel: 'PROFICIENT',
    tag: 'PROTOCOL',
    description: 'HTTP verbs, CRUD workflows, JWT authentication, CORS configuration, and Postman API testing.',
    yearsOfExp: 'BOOTCAMP + PROJECTS',
  },
  // Databases
  {
    id: 'sql',
    name: 'SQL (PostgreSQL / SQLite)',
    category: 'database',
    level: 88,
    levelLabel: 'PROFICIENT',
    tag: 'RDBMS',
    description: 'Relational database design, table relationships (1-to-many, many-to-many), foreign keys, migrations (Alembic), and raw SQL queries.',
    yearsOfExp: 'MORINGA BOOTCAMP',
  },
  {
    id: 'sqlalchemy',
    name: 'SQLAlchemy & ORM',
    category: 'database',
    level: 87,
    levelLabel: 'PROFICIENT',
    tag: 'ORM',
    description: 'Declarative data modeling, relationship cascading, queries, filters, and transaction management in Python.',
    yearsOfExp: 'MORINGA BOOTCAMP',
  },
  // Cloud & DevOps / Core Tools
  {
    id: 'git',
    name: 'Git & GitHub Collaboration',
    category: 'core_tools',
    level: 92,
    levelLabel: 'PROFICIENT',
    tag: 'VCS',
    description: 'Version control branching, feature pull requests, merge conflict resolution, and collaborative team repos under @KANO-BYTE-bot.',
    yearsOfExp: 'DAILY USE',
  },
  {
    id: 'docker',
    name: 'Docker & Deployment',
    category: 'cloud_devops',
    level: 80,
    levelLabel: 'FAMILIAR',
    tag: 'INFRA',
    description: 'Containerizing web apps, Dockerfiles, environment variables, deploying to Render, Vercel, and Cloud platforms.',
    yearsOfExp: 'PROJECTS',
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: '001',
    code: 'PROJECT_ID: 001',
    name: 'FULLSTACK E-COMMERCE HUB',
    shortDesc: 'A responsive full-stack e-commerce web application with product filtering, shopping cart state, and order checkout.',
    fullDesc: 'Capstone full-stack application built using React for dynamic UI, a Python/Flask RESTful API backend, and PostgreSQL with SQLAlchemy for robust database management. Includes user auth, inventory management, and cart persistence.',
    category: 'Full-Stack',
    status: 'DEPLOYED',
    access: 'PUBLIC',
    techStack: ['React', 'Python', 'Flask', 'PostgreSQL', 'Tailwind CSS', 'SQLAlchemy'],
    features: [
      'Interactive product catalog with category, price, and tag filters',
      'Client-side cart state management and checkout confirmation flow',
      'Secure user registration and session/JWT authentication',
      'PostgreSQL database schemas with Alembic migrations'
    ],
    metrics: [
      { label: 'RESPONSIVE', value: '100%' },
      { label: 'API ENDPOINTS', value: '14+' },
      { label: 'LIGHTHOUSE', value: '98/100' }
    ],
    githubUrl: 'https://github.com/KANO-BYTE-bot',
    liveDemoUrl: 'https://github.com/KANO-BYTE-bot',
    systemLogs: [
      '> REST API: /api/v1/products - 200 OK',
      '> AUTH TOKEN: JWT VERIFIED',
      '> DATABASE: POSTGRESQL CONNECTED'
    ]
  },
  {
    id: '002',
    code: 'PROJECT_ID: 002',
    name: 'TASK & PROJECT COLLABORATOR',
    shortDesc: 'Kanban-style project management and productivity web application with real-time status tracking.',
    fullDesc: 'A collaborative task management system where teams create project boards, assign task priorities, and track progress across custom workflow columns.',
    category: 'Full-Stack',
    status: 'DEPLOYED',
    access: 'PUBLIC',
    techStack: ['TypeScript', 'React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    features: [
      'Interactive drag-and-drop / click-to-move card status management',
      'Task assignment, due dates, priority tags, and activity logging',
      'RESTful endpoints with input validation and error responses',
      'Mobile-optimized interface with dark/light themes'
    ],
    metrics: [
      { label: 'CRUD APIS', value: 'COMPLETE' },
      { label: 'STATE ENGINE', value: 'REACT HOOKS' },
      { label: 'CODE QUALITY', value: 'STRICT TS' }
    ],
    githubUrl: 'https://github.com/KANO-BYTE-bot',
    liveDemoUrl: 'https://github.com/KANO-BYTE-bot',
    systemLogs: [
      '> BOARD ENGINE: INITIALIZED',
      '> CRUD CONTROLLER: PASSING 100% TESTS',
      '> DATABASE QUERIES: OPTIMIZED'
    ]
  },
  {
    id: '003',
    code: 'PROJECT_ID: 003',
    name: 'HEALTHCARE APPOINTMENT SYSTEM',
    shortDesc: 'Patient and doctor appointment booking platform with schedule validation and record management.',
    fullDesc: 'A patient management portal enabling clinic visitors to browse available specialist slots, book consultation appointments, and review medical history records.',
    category: 'Web Apps',
    status: 'DEPLOYED',
    access: 'PUBLIC',
    techStack: ['React', 'Python', 'Flask-RESTful', 'SQLite', 'Tailwind CSS'],
    features: [
      'Slot availability conflict checking and instant booking confirmation',
      'Doctor schedule management dashboard and patient appointment logs',
      'Form validation with clear error feedback and toast notifications',
      'Clean modular React component architecture'
    ],
    metrics: [
      { label: 'BOOKING FLOW', value: 'INSTANT' },
      { label: 'FORMS', value: 'VALIDATED' },
      { label: 'STACK', value: 'FLASK + REACT' }
    ],
    githubUrl: 'https://github.com/KANO-BYTE-bot',
    liveDemoUrl: 'https://github.com/KANO-BYTE-bot',
    systemLogs: [
      '> APPOINTMENT ROUTE: VALIDATED',
      '> TIME CONFLICT CHECK: PASSED',
      '> DB TRANSACTION: COMMITTED'
    ]
  },
  {
    id: '004',
    code: 'PROJECT_ID: 004',
    name: 'WEATHER & GEO DISCOVERY APP',
    shortDesc: 'Location-aware weather forecast and city exploration application consuming external REST APIs.',
    fullDesc: 'An interactive weather discovery dashboard that queries geolocation and meteorological APIs to provide real-time conditions, 5-day forecasts, and climate graphs.',
    category: 'Web Apps',
    status: 'DEPLOYED',
    access: 'PUBLIC',
    techStack: ['JavaScript', 'React', 'OpenWeather API', 'Tailwind CSS', 'Vite'],
    features: [
      'Live search by city with autocomplete suggestions',
      'Dynamic weather condition visualizers and interactive temperature graphs',
      'Cached API responses using localStorage to optimize API rate limits',
      'Fully responsive mobile and desktop presentation'
    ],
    metrics: [
      { label: 'API LATENCY', value: '< 200ms' },
      { label: 'ACCURACY', value: 'REAL-TIME' },
      { label: 'DESIGN', value: 'GLASSMORPHISM' }
    ],
    githubUrl: 'https://github.com/KANO-BYTE-bot',
    liveDemoUrl: 'https://github.com/KANO-BYTE-bot',
    systemLogs: [
      '> WEATHER API HOOK: TRIGGERED',
      '> LOCAL STORAGE CACHE: VALID',
      '> UI RENDER: 60FPS'
    ]
  }
];

export const EXPERIENCE_LOGS: ExperienceLog[] = [
  {
    id: 'edu-moringa',
    period: '2024 - 2025 // RECENT GRADUATE',
    role: 'Full-Stack Software Development Graduate',
    organization: 'Moringa School',
    location: 'Nairobi, Kenya',
    type: 'EDUCATION',
    status: 'COMPLETED',
    highlights: [
      'Completed an intensive, full-time software engineering bootcamp focused on modern full-stack web development, computer science fundamentals, and agile workflows.',
      'Gained deep hands-on expertise building Single Page Applications in React, state management, and responsive styling with CSS/Tailwind.',
      'Engineered backend systems and REST APIs with Python, Flask, and Node.js; designed normalized relational schemas with PostgreSQL and SQLAlchemy ORM.',
      'Built individual and collaborative group capstone projects using Git/GitHub version control, test-driven methodologies, and live cloud deployment.'
    ],
    techTags: ['Python', 'Flask', 'React.js', 'JavaScript (ES6+)', 'SQLAlchemy', 'PostgreSQL', 'Git', 'Agile / Scrum']
  },
  {
    id: 'exp-projects',
    period: '2024 - PRESENT',
    role: 'Junior Full-Stack Developer (Independent & Collaborative Projects)',
    organization: 'Open Source & Capstone Engineering',
    location: 'Nairobi, Kenya // Remote',
    type: 'EXPERIENCE',
    status: 'ACTIVE',
    highlights: [
      'Designed and developed end-to-end full-stack web applications featuring secure authentication, CRUD API architectures, and responsive user interfaces.',
      'Authored clean, maintainable, and documented codebase on GitHub (@KANO-BYTE-bot), following clean code principles and modular separation of concerns.',
      'Conducted peer code reviews, resolved merge conflicts, and participated in pair programming sessions mimicking real-world development sprints.'
    ],
    techTags: ['TypeScript', 'React', 'Python', 'Flask', 'PostgreSQL', 'Tailwind CSS', 'REST APIs', 'GitHub']
  }
];

export const TERMINAL_HELP_COMMANDS = [
  { cmd: 'help', desc: 'Display all available terminal commands' },
  { cmd: 'bio', desc: 'Read Cornel Mwangi\'s background and Moringa School training' },
  { cmd: 'moringa', desc: 'View Moringa School bootcamp curriculum & skills learned' },
  { cmd: 'skills', desc: 'List technical skill matrix & proficiency levels' },
  { cmd: 'projects', desc: 'Query active software projects database' },
  { cmd: 'experience', desc: 'Review education, bootcamp training & milestones' },
  { cmd: 'github', desc: 'Open GitHub profile (@KANO-BYTE-bot)' },
  { cmd: 'contact', desc: 'View direct contact info (phone, email)' }
];
