import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function About() {
  const competencies = [
    "AI Development",
    "Python Programming", 
    "Web Development",
    "Image Processing",
    "Problem Solving",
    "Team Leadership"
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-[var(--portfolio-accent)]">Me</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--portfolio-accent)] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-[var(--portfolio-secondary)]/30 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4 text-[var(--portfolio-accent)]">Professional Summary</h3>
              <p className="text-slate-300 leading-relaxed">
                Recent B.Sc. Software Engineering graduate from the European University of Lefke, 
                with excellent expertise in software development, specializing in C++, Python, and AI 
                technologies. Awarded a scholarship for academic excellence, demonstrating strong 
                proficiency in software design, architecture, and development of AI models.
              </p>
            </div>

            <div className="bg-[var(--portfolio-secondary)]/30 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4 text-[var(--portfolio-accent)]">Core Competencies</h3>
              <div className="grid grid-cols-2 gap-3">
                {competencies.map((competency, index) => (
                  <motion.div 
                    key={competency}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-4 w-4 text-[var(--portfolio-accent)]" />
                    <span className="text-slate-300">{competency}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern software development workspace" 
              className="rounded-xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
            />
            
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--portfolio-accent)]/20 to-[var(--portfolio-highlight)]/20 rounded-xl"></div>
            
            {/* Floating stats */}
            <motion.div 
              className="absolute -top-6 -right-6 bg-[var(--portfolio-secondary)] border border-[var(--portfolio-accent)]/30 p-4 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--portfolio-accent)]">6+</div>
                <div className="text-sm text-slate-400">Months Experience</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-[var(--portfolio-secondary)] border border-[var(--portfolio-accent)]/30 p-4 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--portfolio-accent)]">10+</div>
                <div className="text-sm text-slate-400">Projects</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
