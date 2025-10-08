
export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  achievements: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  years: string;
  details?: string;
}

export interface CertificationItem {
    name: string;
    issuer: string;
    year: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  name: string;
  description: string;
  techStack: string[];
  image: string;
  githubLink?: string;
  liveLink?: string;
  category: 'Web App' | 'Cybersecurity' | 'Script' | 'Tool';
}
