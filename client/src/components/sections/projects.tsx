import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "AI Image Prediction Models",
      description: "Developed machine learning models for predictive analysis using PyTorch and integrated with Streamlit for interactive web applications.",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Python", "PyTorch", "Streamlit"],
      category: "ai",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "University Website Development",
      description: "Created a responsive student portal with comprehensive functionalities including user authentication, course management, and interactive features.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["HTML", "CSS", "PHP", "MySQL"],
      category: "web",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Solar System Visualization",
      description: "Developed an engaging 3D animation of the solar system leveraging OpenCV for realistic planetary movements and visual effects.",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Python", "OpenCV", "3D Graphics"],
      category: "cv",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Image Quality Enhancement",
      description: "Implemented advanced image processing techniques using computer vision algorithms to enhance image quality and visual aesthetics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Python", "OpenCV", "Image Processing"],
      category: "cv",
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  const filters = [
    { id: "all", label: "All" },
    { id: "ai", label: "AI/ML" },
    { id: "web", label: "Web Dev" },
    { id: "cv", label: "Computer Vision" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-[var(--portfolio-accent)]">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--portfolio-accent)] mx-auto"></div>
        </motion.div>

        {/* Project Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "secondary"}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.id 
                  ? "bg-[var(--portfolio-accent)] text-[var(--portfolio-primary)]" 
                  : "bg-[var(--portfolio-secondary)] hover:bg-[var(--portfolio-accent)] hover:text-[var(--portfolio-primary)]"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card bg-[var(--portfolio-secondary)]/30 rounded-xl overflow-hidden backdrop-blur-sm hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[var(--portfolio-accent)]">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="secondary"
                      className="bg-[var(--portfolio-accent)]/20 text-[var(--portfolio-accent)] text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-[var(--portfolio-accent)] hover:text-[var(--portfolio-accent)]/80 p-0"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-[var(--portfolio-accent)] hover:text-[var(--portfolio-accent)]/80 p-0"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
