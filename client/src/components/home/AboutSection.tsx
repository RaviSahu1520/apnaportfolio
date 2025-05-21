import { motion } from "framer-motion";
import { Code, LineChart, Paintbrush } from "lucide-react";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Our Team</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300">
              We are a team of passionate tech enthusiasts with diverse skills in mobile development, 
              data science, and frontend technologies. Together, we build innovative solutions.
            </p>
          </div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="text-center" variants={itemVariants}>
              <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Expert app development using Flutter, Firebase, and modern web technologies to create seamless experiences.
              </p>
            </motion.div>
            
            <motion.div className="text-center" variants={itemVariants}>
              <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <LineChart className="text-indigo-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Science</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Advanced data analysis and visualization to extract valuable insights using Python, Machine Learning, and Power BI.
              </p>
            </motion.div>
            
            <motion.div className="text-center" variants={itemVariants}>
              <div className="w-16 h-16 bg-orange-50 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Paintbrush className="text-orange-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Creative design solutions focused on user experience, responsive layouts, and intuitive interfaces.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
