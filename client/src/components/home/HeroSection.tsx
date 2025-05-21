import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-slate-900"
    >
      {/* Background Elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl dark:bg-primary/5"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl dark:bg-orange-500/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Building <span className="text-primary">Digital</span> Experiences
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Showcasing the skills and projects of three passionate tech professionals. 
            From mobile app development to data science and beyond.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button 
              size="xl" 
              onClick={() => scrollToElement("team")}
              className="shadow-lg shadow-primary/20"
            >
              Meet The Team
            </Button>
            
            <Button 
              variant="outline" 
              size="xl" 
              onClick={() => scrollToElement("projects")}
              className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white border-gray-200 dark:border-gray-700"
            >
              View Projects
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
