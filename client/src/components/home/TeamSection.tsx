import { motion } from "framer-motion";
import { Link } from "wouter";
import { LinkedinIcon, GithubIcon, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SkillBar from "@/components/ui/skill-bar";
import { teamMembers } from "@/data/team-members";

export default function TeamSection() {
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
    <section id="team" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get to know the talented professionals behind our work. Each member brings unique 
            skills and expertise to create exceptional digital solutions.
          </p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={member.id}
              className="card-hover bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              variants={itemVariants}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`h-56 ${member.gradientBg} relative overflow-hidden`}>
                <img 
                  className="w-full h-full object-cover object-center opacity-75" 
                  src={member.image} 
                  alt={`${member.name} - ${member.role}`} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-200">{member.role}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {member.shortBio}
                  </p>
                  <div className="space-y-3">
                    {member.topSkills.map((skill, i) => (
                      <SkillBar 
                        key={i}
                        name={skill.name} 
                        percentage={skill.percentage} 
                        color={member.skillBarColor}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a 
                      href={member.socialLinks.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon className="h-5 w-5" />
                    </a>
                    <a 
                      href={member.socialLinks.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <GithubIcon className="h-5 w-5" />
                    </a>
                  </div>

                  <Link href={member.profileUrl}>
                    <a className={`${member.linkColor} font-medium flex items-center`}>
                      View Profile <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
