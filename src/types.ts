export type SkillCategory = 'frontend' | 'backend' | 'database' | 'cloud_devops' | 'core_tools';

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  level: number; // 0-100
  levelLabel: string; // e.g. "ADVANCED", "EXPERT", "PROFICIENT"
  tag: string;
  description: string;
  yearsOfExp: string;
}

export interface ProjectItem {
  id: string;
  code: string; // e.g. "PRJ-001"
  name: string;
  shortDesc: string;
  fullDesc: string;
  category: 'Full-Stack' | 'Backend / Cloud' | 'Web Apps' | 'System Tools';
  status: 'DEPLOYED' | 'PRODUCTION' | 'ACTIVE' | 'ARCHIVED';
  access: 'OPEN' | 'RESTRICTED' | 'PUBLIC';
  techStack: string[];
  features: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  githubUrl: string;
  liveDemoUrl: string;
  systemLogs: string[];
}

export interface ExperienceLog {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  type: 'EXPERIENCE' | 'PROJECT_DELIVERY' | 'EDUCATION' | 'CERTIFICATION';
  status: 'COMPLETED' | 'ACTIVE' | 'VERIFIED';
  highlights: string[];
  techTags: string[];
}

export interface SystemStatus {
  status: 'ONLINE' | 'STANDBY' | 'BUSY';
  developer: string;
  role: string;
  connection: string;
  osKernel: string;
  ipNode: string;
  uptimeHours: number;
  cpuLoad: string;
  memoryUsage: string;
  latencyMs: number;
}

export interface TerminalOutputLine {
  id: string;
  type: 'input' | 'output' | 'error' | 'success' | 'system';
  content: string;
  timestamp?: string;
}

export interface TransmissionData {
  senderName: string;
  senderEmail: string;
  subject: string;
  message: string;
  securityLevel: string;
}
