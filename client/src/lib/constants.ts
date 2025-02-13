import { SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiNodedotjs, SiCss3, SiOdoo, SiFigma, SiOpenai } from "react-icons/si";
import type { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon: IconType;
}

export const skills: Skill[] = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "HTML", icon: SiHtml5 },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "CSS", icon: SiCss3 },
  { name: "Odoo", icon: SiOdoo },
  { name: "Figma", icon: SiFigma },
  { name: "AI Development", icon: SiOpenai },
];

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  developmentLink?: string;
}

// Initial projects array will be replaced with database data
export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with Odoo",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
    technologies: ["Odoo", "Python", "XML", "PostgreSQL"],
    developmentLink: "https://github.com/yourusername/ecommerce",
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard for business insights",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    technologies: ["Next.js", "TypeScript", "D3.js", "Tailwind"],
    developmentLink: "https://github.com/yourusername/analytics",
  },
  {
    id: 3,
    title: "Mobile App UI",
    description: "UI/UX design for a fitness tracking mobile app",
    image: "https://images.unsplash.com/photo-1510759395231-72b17d622279",
    technologies: ["Figma", "AI Development", "Prototyping"],
  },
  {
    id: 4,
    title: "CRM System",
    description: "Custom CRM system with advanced features",
    image: "https://images.unsplash.com/photo-1660592868727-858d28c3ba52",
    technologies: ["Odoo", "Python", "JavaScript"],
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "3D animated portfolio website",
    image: "https://images.unsplash.com/photo-1685478237595-f452cb125f27",
    technologies: ["Next.js", "Three.js", "Tailwind CSS"],
  },
  {
    id: 6,
    title: "AI Integration",
    description: "AI-powered content generation platform",
    image: "https://images.unsplash.com/photo-1679409759768-bea306439ab8",
    technologies: ["Python", "TensorFlow", "Next.js"],
  },
];