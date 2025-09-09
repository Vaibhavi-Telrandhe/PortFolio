import { Code, Globe, Server, Database, GitBranch, Smartphone, Box, Figma, Brain } from 'lucide-react';

export const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML', icon: <Globe className="w-6 h-6" /> },
      { name: 'CSS', icon: <Globe className="w-6 h-6" /> },
      { name: 'JavaScript', icon: <Code className="w-6 h-6" /> },
      { name: 'React JS', icon: <Globe className="w-6 h-6" /> },
      { name: 'Tailwind CSS', icon: <Box className="w-6 h-6" /> },
      { name: 'Shadcn UI', icon: <Box className="w-6 h-6" /> },
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node JS', icon: <Server className="w-6 h-6" /> },
      { name: 'Express JS', icon: <Server className="w-6 h-6" /> },
      { name: 'MySQL', icon: <Database className="w-6 h-6" /> },
      { name: 'MongoDB', icon: <Database className="w-6 h-6" /> },
    ]
  },
  {
    category: 'Languages',
    skills: [
      { name: 'C++', icon: <Code className="w-6 h-6" /> },
      { name: 'C', icon: <Code className="w-6 h-6" /> },
      { name: 'Python', icon: <Brain className="w-6 h-6" /> },
    ]
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', icon: <GitBranch className="w-6 h-6" /> },
      { name: 'GitHub', icon: <GitBranch className="w-6 h-6" /> },
      { name: 'VS Code', icon: <Code className="w-6 h-6" /> },
    ]
  }
];
