import { Button } from "@/components/ui/button";
import TypingAnimation from "@/components/ui/typing-animation";
import { Download, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const phrases = [
    "Software Engineer",
    "AI Specialist", 
    "Python Developer",
    "Problem Solver",
    "Innovation Driver"
  ];

  const handleDownloadResume = async () => {
    try {
      const response = await fetch('/api/resume/download');
      const data = await response.json();
      
      if (data.success) {
        // In a real application, trigger actual file download
        console.log('Resume download initiated');
        // window.open(data.downloadUrl, '_blank');
      }
    } catch (error) {
      console.error('Failed to download resume:', error);
    }
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-slate-50">Boo Hussain</span>
            <br />
            <span className="text-[var(--portfolio-accent)]">Jamshaid Amjad</span>
          </motion.h1>

          <motion.div 
            className="text-xl md:text-2xl text-[var(--portfolio-muted)] mb-8 h-12 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TypingAnimation phrases={phrases} />
          </motion.div>

          <motion.p 
            className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Recent B.Sc. Software Engineering graduate specializing in AI technologies, Python, and C++. 
            Passionate about creating innovative solutions that drive technological advancement.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              onClick={scrollToAbout}
              className="bg-[var(--portfolio-accent)] hover:bg-[var(--portfolio-accent)]/90 text-[var(--portfolio-primary)] px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              View My Work
            </Button>
            <Button
              onClick={handleDownloadResume}
              variant="outline"
              className="border-2 border-[var(--portfolio-accent)] text-[var(--portfolio-accent)] hover:bg-[var(--portfolio-accent)] hover:text-[var(--portfolio-primary)] px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Code Snippets */}
      <motion.div 
        className="absolute top-20 left-10 opacity-20 hidden lg:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="bg-[var(--portfolio-secondary)]/50 p-4 rounded-lg font-mono text-sm">
          <span className="text-pink-400">import</span> <span className="text-blue-400">torch</span><br />
          <span className="text-green-400">model</span> = <span className="text-yellow-400">AI_Model()</span>
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-20 right-10 opacity-20 hidden lg:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      >
        <div className="bg-[var(--portfolio-secondary)]/50 p-4 rounded-lg font-mono text-sm">
          <span className="text-purple-400">class</span> <span className="text-blue-400">Developer</span>:<br />
          &nbsp;&nbsp;<span className="text-green-400">skills</span> = <span className="text-yellow-400">["AI", "Python"]</span>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="text-[var(--portfolio-accent)] h-6 w-6" />
      </motion.div>
    </section>
  );
}
