import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { ArrowDownToLine, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import SkillBar from "@/components/ui/skill-bar";
import { teamMembers } from "@/data/team-members";
import { scrollToElement } from "@/lib/utils";

// Get Ravi's data
const ravi = teamMembers.find(member => member.id === "ravi-sahu")!;

export default function RaviProfile() {
  return (
    <>
      <Helmet>
        <title>Ravi Sahu | Data Scientist</title>
        <meta name="description" content="Professional portfolio of Ravi Sahu, a data scientist with expertise in analyzing complex datasets, developing machine learning models, and building AI-powered solutions." />
        <meta property="og:title" content="Ravi Sahu | Data Scientist" />
        <meta property="og:description" content="Professional portfolio of Ravi Sahu, a data scientist with expertise in analyzing complex datasets and building AI-powered solutions." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://techportfolio.com/ravi-sahu" />
      </Helmet>
      
      <section id="ravi-details" className="py-20 bg-gray-50 dark:bg-gray-800">
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
                    src={ravi.image} 
                    alt={`${ravi.name} - ${ravi.role}`} 
                  />
                  <div className="p-6">
                    <h1 className="text-2xl font-bold mb-2">{ravi.name}</h1>
                    <p className="text-green-600 dark:text-green-400 font-medium mb-4">{ravi.role}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {ravi.shortBio}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="green" className="shadow-lg shadow-green-600/20">
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
                      href={ravi.socialLinks.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-green-600 transition-colors"
                    >
                      <Linkedin className="h-5 w-5 mr-3" /> LinkedIn
                    </a>
                    <a 
                      href={ravi.socialLinks.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-green-600 transition-colors"
                    >
                      <Github className="h-5 w-5 mr-3" /> GitHub
                    </a>
                    <a 
                      href={`mailto:${ravi.socialLinks.email}`} 
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-green-600 transition-colors"
                    >
                      <Mail className="h-5 w-5 mr-3" /> {ravi.socialLinks.email}
                    </a>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Phone className="h-5 w-5 mr-3" /> +91-8305734159
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <MapPin className="h-5 w-5 mr-3" /> Gwalior, Madhya Pradesh
                    </div>
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
                <h2 className="text-xl font-semibold mb-4">Profile Summary</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Proven ability in analyzing and visualizing complex datasets, identifying key patterns, and deriving actionable business insights.</li>
                  <li>Proficient in developing machine learning models and recommendation systems to optimize decision-making and enhance user experiences.</li>
                  <li>Strong command over Python, SQL, Power BI, and Excel, enabling efficient data manipulation, reporting, and visualization.</li>
                  <li>Experienced in AI-powered solutions, leveraging expertise in LangChain, Google GenAI, Tesseract OCR, and advanced machine learning techniques to develop innovative applications.</li>
                </ul>
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
                      {ravi.technicalSkills.map((skill, index) => (
                        <SkillBar 
                          key={index}
                          name={skill.name} 
                          percentage={skill.percentage} 
                          color={ravi.skillBarColor}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Tools & Frameworks</h3>
                    <div className="space-y-4">
                      {ravi.otherSkills.map((skill, index) => (
                        <SkillBar 
                          key={index}
                          name={skill.name} 
                          percentage={skill.percentage} 
                          color={ravi.skillBarColor}
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
                  {ravi.experience.map((exp, index) => (
                    <div key={index} className={index < ravi.experience.length - 1 ? "timeline-item pb-8" : "timeline-item"}>
                      <div className="timeline-dot bg-green-600"></div>
                      <h3 className="text-lg font-medium">{exp.position}</h3>
                      <p className="text-green-600 dark:text-green-400 mb-2">{exp.company}{exp.location && `, ${exp.location}`}</p>
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
                  {ravi.projects.map((project, index) => (
                    <div 
                      key={index} 
                      className={index < ravi.projects.length - 1 ? "border-b border-gray-200 dark:border-gray-700 pb-8" : ""}
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
                <h2 className="text-xl font-semibold mb-6">Education & Courses</h2>
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-2">Education</h3>
                  <div className="timeline-item">
                    <div className="timeline-dot bg-green-600"></div>
                    <div className="flex justify-between mb-2">
                      <h4 className="font-medium">{ravi.education.degree}</h4>
                      <span className="text-sm">{ravi.education.year}</span>
                    </div>
                    <p className="text-green-600 dark:text-green-400 mb-2">{ravi.education.institution}</p>
                    <p className="text-gray-600 dark:text-gray-300">CGPA: {ravi.education.cgpa}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Relevant Coursework</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center mr-3 text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Machine Learning and Predictive Analytics</span>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center mr-3 text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Data Visualization (Power BI, Matplotlib)</span>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center mr-3 text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Database Management and SQL</span>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center mr-3 text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Python Programming and Scripting</span>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center mr-3 text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Statistical Analysis</span>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center mr-3 text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Data Preprocessing Techniques</span>
                    </div>
                  </div>
                  
                  {ravi.certifications.length > 0 && (
                    <div className="mt-8">
                      <h3 className="text-lg font-medium mb-4">Certifications</h3>
                      <div className="space-y-4">
                        {ravi.certifications.map((cert, index) => (
                          <div key={index} className="flex">
                            <div className="mr-4 flex-shrink-0">
                              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                                <ArrowDownToLine className="text-green-600 h-5 w-5" />
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
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
