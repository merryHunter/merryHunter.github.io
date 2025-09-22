export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'AI/ML' | 'Cloud' | 'Robotics' | 'Open Source' | 'Other';
  featured: boolean;
  status: 'Completed' | 'In Progress' | 'Planned';
}

export const projects: Project[] = [
  {
    id: 'ai-stock-analyzer',
    title: 'AI Stock Analyzer',
    description: 'AI-powered stock market analysis and prediction tool.',
    longDescription: 'A comprehensive tool that leverages AI to analyze stock market trends and provide predictions.',
    image: '/projects/ai-toolkit.png',
    technologies: ['Python', 'OpenAI API', 'FastAPI', 'Docker'],
    githubUrl: 'https://github.com/merryHunter/agentic-stock-analyzer',
    category: 'AI/ML',
    featured: true,
    status: 'Completed',
    liveUrl: 'https://agentic-stock-analyzer-47w1.vercel.app'
  },
];

export function getAllProjects(): Project[] {
  return projects.sort((a, b) => {
    // Featured projects first
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;

    // Then by status (completed first)
    const statusOrder = { 'Completed': 0, 'In Progress': 1, 'Planned': 2 };
    return statusOrder[a.status] - statusOrder[b.status];
  });
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured);
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter(project => project.category === category);
}