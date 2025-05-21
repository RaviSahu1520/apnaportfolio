import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { ArrowDownToLine, Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import SkillBar from "@/components/ui/skill-bar";
import { teamMembers } from "@/data/team-members";
import { scrollToElement } from "@/lib/utils";

// Get Tanushka's data
const tanushka = teamMembers.find(member => member.id === "tanushka-faguna")!;

export default function TanushkaProfile() {
  return (
    <>
      <Helmet>
        <title>Tanushka Faguna | Frontend Developer</title>
        <meta name="description" content="Professional portfolio of Tanushka Faguna, a creative frontend developer with expertise in building responsive, user-friendly web applications using modern frameworks and libraries." />
        <meta property="og:title" content="Tanushka Faguna | Frontend Developer" />
        <meta property="og:description" content="Professional portfolio of Tanushka Faguna, a creative frontend developer with expertise in building responsive web applications." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://techportfolio.com/tanushka-faguna" />
      </Helmet>
      
      <section id="tanushka-details" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row max-w-6xl mx-auto">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="sticky top-24">
                <motion.div 
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    className="w-full h-64 object-cover object-center" 
                    src={tanushka.image} 
                    alt={`${tanushka.name} - ${tanushka.role}`} 
                  />
                  <div className="p-6">
                    <h1 className="text-2xl font-bold mb-2">{tanushka.name}</h1>
                    <p className="text-purple-500 dark:text-purple-400 font-medium mb-4">{tanushka.role}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {tanushka.shortBio}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="purple" className="shadow-lg shadow-purple-500/20">
                        <ArrowDownToLine className="mr-2 h-4 w-4" /> Resume
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => scrollToElement("contact")}
                        className="border border-gray-200 dark:border-gray-700"
                      >
                        <Mail className="mr-2 h-4 w-4" /> Contact
                      </Button>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-lg font-semibold mb-4">Connect</h3>
                  <div className="space-y-3">
                    <a 
                      href={tanushka.socialLinks.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-500 transition-colors"
                    >
                      <Linkedin className="h-5 w-5 mr-3" /> LinkedIn
                    </a>
                    <a 
                      href={tanushka.socialLinks.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-500 transition-colors"
                    >
                      <Github className="h-5 w-5 mr-3" /> GitHub
                    </a>
                    <a 
                      href={`mailto:${tanushka.socialLinks.email}`} 
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-500 transition-colors"
                    >
                      <Mail className="h-5 w-5 mr-3" /> Email
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <div className="md:w-2/3 md:pl-8">
              <motion.div 
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="text-xl font-semibold mb-4">About Me</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {tanushka.longBio}
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-xl font-semibold mb-6">Skills</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Technical Skills</h3>
                    <div className="space-y-4">
                      {tanushka.technicalSkills.map((skill, index) => (
                        <SkillBar 
                          key={index}
                          name={skill.name} 
                          percentage={skill.percentage} 
                          color={tanushka.skillBarColor}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Other Skills</h3>
                    <div className="space-y-4">
                      {tanushka.otherSkills.map((skill, index) => (
                        <SkillBar 
                          key={index}
                          name={skill.name} 
                          percentage={skill.percentage} 
                          color={tanushka.skillBarColor}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-xl font-semibold mb-6">Experience</h2>
                <div className="space-y-8">
                  {tanushka.experience.map((exp, index) => (
                    <div key={index} className="timeline-item pb-8">
                      <div className="timeline-dot bg-purple-500"></div>
                      <h3 className="text-lg font-medium">{exp.position}</h3>
                      <p className="text-purple-500 dark:text-purple-400 mb-2">{exp.company}, {exp.location}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{exp.duration}</p>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-xl font-semibold mb-6">Projects</h2>
                <div className="space-y-8">
                  {tanushka.projects.map((project, index) => (
                    <div 
                      key={index} 
                      className={index < tanushka.projects.length - 1 ? "border-b border-gray-200 dark:border-gray-700 pb-8" : ""}
                    >
                      <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                        {project.details.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h2 className="text-xl font-semibold mb-6">Education & Certifications</h2>
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-2">Education</h3>
                  <div className="timeline-item">
                    <div className="timeline-dot bg-purple-500"></div>
                    <div className="flex justify-between mb-2">
                      <h4 className="font-medium">{tanushka.education.degree}</h4>
                      <span className="text-sm">{tanushka.education.year}</span>
                    </div>
                    <p className="text-purple-500 dark:text-purple-400 mb-2">{tanushka.education.institution}</p>
                    <p className="text-gray-600 dark:text-gray-300">CGPA: {tanushka.education.cgpa}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Certifications</h3>
                  <div className="space-y-4">
                    {tanushka.certifications.map((cert, index) => (
                      <div key={index} className="flex">
                        <div className="mr-4 flex-shrink-0">
                          <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                            <ArrowDownToLine className="text-purple-500 h-5 w-5" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium">{cert.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                            {cert.issuer && `${cert.issuer} | `}{cert.date}
                          </p>
                          <p className="text-gray-600 dark:text-gray-300">
                            {cert.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
