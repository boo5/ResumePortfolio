import { motion } from "framer-motion";
import { Code, Bolt, Database, Server, Palette, Cpu } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

export default function Skills() {
  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({});

  const programmingSkills = [
    { name: "Python", value: 90 },
    { name: "C++", value: 85 },
    { name: "HTML/CSS", value: 80 },
    { name: "PHP", value: 75 },
    { name: "SQL", value: 70 },
  ];

  const technicalSkills = [
    { name: "PyTorch", value: 90 },
    { name: "OpenCV", value: 85 },
    { name: "Git", value: 80 },
    { name: "Linux", value: 75 },
    { name: "MySQL", value: 70 },
  ];

  const techStack = [
    { icon: Code, name: "Python", color: "text-blue-400" },
    { icon: Database, name: "MySQL", color: "text-orange-400" },
    { icon: Server, name: "Linux", color: "text-green-400" },
    { icon: Bolt, name: "Git", color: "text-red-400" },
    { icon: Cpu, name: "PyTorch", color: "text-purple-400" },
    { icon: Palette, name: "OpenCV", color: "text-cyan-400" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const newValues: Record<string, number> = {};
      [...programmingSkills, ...technicalSkills].forEach(skill => {
        newValues[skill.name] = skill.value;
      });
      setAnimatedValues(newValues);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="py-20 bg-[var(--portfolio-secondary)]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-[var(--portfolio-accent)]">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--portfolio-accent)] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Programming Languages */}
          <motion.div 
            className="bg-[var(--portfolio-secondary)]/30 p-8 rounded-xl backdrop-blur-sm"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-[var(--portfolio-accent)] flex items-center">
              <Code className="mr-3 h-6 w-6" />
              Programming Languages
            </h3>
            <div className="space-y-6">
              {programmingSkills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300 font-medium">{skill.name}</span>
                    <span className="text-[var(--portfolio-accent)]">{skill.value}%</span>
                  </div>
                  <Progress 
                    value={animatedValues[skill.name] || 0} 
                    className="h-2 bg-slate-700"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technologies & Bolt */}
          <motion.div 
            className="bg-[var(--portfolio-secondary)]/30 p-8 rounded-xl backdrop-blur-sm"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-[var(--portfolio-accent)] flex items-center">
              <Bolt className="mr-3 h-6 w-6" />
              Technologies & Bolt
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300 font-medium">{skill.name}</span>
                    <span className="text-[var(--portfolio-accent)]">{skill.value}%</span>
                  </div>
                  <Progress 
                    value={animatedValues[skill.name] || 0} 
                    className="h-2 bg-slate-700"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Icons */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div 
                  key={tech.name}
                  className="tech-icon bg-[var(--portfolio-secondary)]/30 p-4 rounded-lg backdrop-blur-sm hover:bg-[var(--portfolio-accent)]/20 transition-colors duration-200 cursor-pointer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.1 }}
                  viewport={{ once: true }}
                >
                  <IconComponent className={`h-12 w-12 ${tech.color}`} />
                  <div className="text-sm mt-2 text-center">{tech.name}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
