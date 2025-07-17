import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      type: "work",
      title: "AI Intern",
      company: "Exarta",
      location: "Lahore, Pakistan",
      period: "04/2024 - 06/2024",
      description: [
        "Developed AI image prediction models using PyTorch",
        "Integrated interactive functionality with Streamlit API", 
        "Expanded expertise in neural intelligence through real-world projects"
      ]
    },
    {
      id: 2,
      type: "work",
      title: "Software and Web Developer",
      company: "Freelance/University Internship",
      location: "Remote",
      period: "1 Month",
      description: [
        "Spearheaded practical experience in software engineering",
        "Successfully transitioned to remote work model",
        "Executed development of multiple AI image prediction models"
      ]
    },
    {
      id: 3,
      type: "education",
      title: "B.Sc. in Software Engineering",
      company: "European University of Lefke",
      location: "Northern Cyprus",
      period: "02/2020 - 06/2024",
      description: [
        "Awarded scholarship for academic excellence"
      ]
    },
    {
      id: 4,
      type: "education",
      title: "Diploma in Mechanical Engineering (DAE)",
      company: "Government College of Technical Education",
      location: "Jhelum, Pakistan",
      period: "08/2015 - 08/2018",
      description: [
        "Foundation in engineering principles and technical skills"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-[var(--portfolio-secondary)]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="text-[var(--portfolio-accent)]">Education</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--portfolio-accent)] mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[var(--portfolio-accent)] opacity-30 hidden md:block"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id}
                className={`flex items-center relative ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                  <div className="bg-[var(--portfolio-secondary)]/30 p-6 rounded-xl backdrop-blur-sm">
                    <div className={`flex items-center mb-2 ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                      {exp.type === 'work' ? (
                        <Briefcase className="text-[var(--portfolio-accent)] mr-2 h-5 w-5" />
                      ) : (
                        <GraduationCap className="text-[var(--portfolio-accent)] mr-2 h-5 w-5" />
                      )}
                      <span className="text-sm text-[var(--portfolio-muted)] flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-[var(--portfolio-accent)]">
                      {exp.title}
                    </h3>
                    <p className="text-slate-400 mb-2">{exp.company} - {exp.location}</p>
                    <ul className="text-slate-300 text-sm space-y-1">
                      {exp.description.map((desc, i) => (
                        <li key={i}>• {desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[var(--portfolio-accent)] rounded-full border-4 border-[var(--portfolio-primary)] hidden md:block"></div>

                <div className="w-full md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
