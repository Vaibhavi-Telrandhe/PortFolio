import { Code, Globe, Server, Brain, Database, Smartphone } from "lucide-react";

export const projectsData = [
  {
    title: "CareerLink",
    description:
      "A full-stack job portal platform that allows users to search and apply for jobs, while employers can post job listings and manage applications.",
    tech: [
      <Code key="react" className="w-5 h-5 text-cyan-400" />,
      <Server key="node" className="w-5 h-5 text-green-400" />,
      <Database key="mongo" className="w-5 h-5 text-emerald-500" />,
    ],
    // github: "https://github.com/your-username/job-portal",
    // live: "https://your-job-portal-live-link.com",
    image:
      "https://plus.unsplash.com/premium_photo-1661328090120-a6ef40841abe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
    tech: [
      <Code key="react" className="w-5 h-5 text-cyan-400" />,
      <Brain key="firebase" className="w-5 h-5 text-orange-400" />,
      <Globe key="mui" className="w-5 h-5 text-indigo-400" />,
      <Server key="socket" className="w-5 h-5 text-pink-400" />,
    ],
    // github: "https://github.com",
    // live: "https://example.com",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather application with location-based forecasts, interactive charts, and severe weather alerts.",
    tech: [
      <Globe key="vue" className="w-5 h-5 text-green-500" />,
      <Code key="chartjs" className="w-5 h-5 text-yellow-400" />,
      <Server key="api" className="w-5 h-5 text-blue-400" />,
      <Database key="tailwind" className="w-5 h-5 text-teal-400" />,
    ],
    // github: "https://github.com",
    // live: "https://example.com",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
  },
];
