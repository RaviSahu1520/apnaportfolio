export type TeamMember = {
  id: string;
  name: string;
  role: string;
  shortBio: string;
  longBio: string;
  education: {
    degree: string;
    institution: string;
    year: string;
    cgpa: string;
  };
  experience: Array<{
    position: string;
    company: string;
    location: string;
    duration: string;
    description: string[];
  }>;
  projects: Array<{
    title: string;
    description: string;
    technologies: string[];
    details: string[];
  }>;
  certifications: Array<{
    title: string;
    issuer: string;
    date: string;
    description: string;
  }>;
  topSkills: Array<{
    name: string;
    percentage: number;
  }>;
  technicalSkills: Array<{
    name: string;
    percentage: number;
  }>;
  otherSkills: Array<{
    name: string;
    percentage: number;
  }>;
  image: string;
  gradientBg: string;
  socialLinks: {
    linkedin: string;
    github: string;
    email: string;
  };
  skillBarColor: string;
  linkColor: string;
  profileUrl: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "boby-sharma",
    name: "Boby Sharma",
    role: "Mobile App Developer",
    shortBio: "Passionate Flutter developer skilled in building modern, scalable mobile applications. Specializing in UI/UX design and Firebase integration.",
    longBio: "I am a passionate Flutter developer specializing in building modern, scalable mobile applications. My expertise lies in creating seamless UI/UX designs, Firebase integration, and efficient state management using GetX. I am committed to delivering professional and impactful digital solutions. Currently pursuing B.Tech in Computer Science Engineering from Rajiv Gandhi Proudyogiki Vishwavidyalaya, I am focused on enhancing my skills in mobile app development while exploring new technologies and frameworks.",
    education: {
      degree: "B.Tech, Computer Science Engineering (CSE)",
      institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya, Gandhi Nagar",
      year: "2022 - 2026",
      cgpa: "7.0"
    },
    experience: [
      {
        position: "App Developer Intern",
        company: "Ubitech Solutions Pvt Ltd",
        location: "Gwalior",
        duration: "March 2025 - April 2025 (1 month)",
        description: [
          "Developed a mobile application with features like login/signup, real-time data updates, and notification integration.",
          "Designed and implemented the frontend UI, integrated APIs for backend services, resolved bugs, and optimized app performance.",
          "Implemented user authentication, push notifications, responsive UI, and database connectivity for real-time updates."
        ]
      }
    ],
    projects: [
      {
        title: "Grofast",
        description: "A mobile application where users can purchase fresh groceries online with ease.",
        technologies: ["Flutter", "Firebase", "Dart", "Github"],
        details: [
          "Developed using Flutter for frontend and Firebase for backend services including authentication and database management.",
          "Ensures certified fresh grocery delivery directly to the user's doorstep with real-time tracking."
        ]
      },
      {
        title: "HRMS Intern Management App",
        description: "A Human Resource Management System (HRMS) application for intern management to simplify attendance tracking, employee records, and leave management.",
        technologies: ["Flutter", "Firebase", "Dart", "GetX", "UI/UX"],
        details: [
          "Built the app using Flutter for frontend and GetX for state management. Used Firebase backend for real-time database, authentication, and storage.",
          "Integrated time-in/time-out system, bottom navigation, and dynamic dashboard features.",
          "Implemented an Employee Registration and Login system with features for attendance tracking, dashboard showing employee details, and leave management."
        ]
      }
    ],
    certifications: [
      {
        title: "Agentforce Specialist",
        issuer: "Salesforce",
        date: "March 2025",
        description: "Earned the Agentforce Specialist certification from Salesforce, showcasing skills in customer service and CRM management."
      },
      {
        title: "AI Associate",
        issuer: "",
        date: "March 2025",
        description: "Built a strong foundation in AI concepts, applications, ethics, and real-world use cases, with basic knowledge of machine learning, NLP, and data-driven decision-making."
      }
    ],
    topSkills: [
      { name: "Flutter", percentage: 90 },
      { name: "Firebase", percentage: 85 },
      { name: "UI/UX", percentage: 80 }
    ],
    technicalSkills: [
      { name: "Flutter", percentage: 90 },
      { name: "Firebase", percentage: 85 },
      { name: "Dart", percentage: 90 },
      { name: "UI/UX", percentage: 80 }
    ],
    otherSkills: [
      { name: "C/C++", percentage: 75 },
      { name: "SQL", percentage: 70 },
      { name: "OOP Concepts", percentage: 85 },
      { name: "GitHub", percentage: 80 }
    ],
    image: "/images/team/boby-sharma.jpg",
    gradientBg: "bg-gradient-to-r from-blue-500 to-indigo-600",
    socialLinks: {
      linkedin: "#",
      github: "#",
      email: "boby.sharma@example.com"
    },
    skillBarColor: "bg-primary",
    linkColor: "text-primary hover:text-primary/80",
    profileUrl: "/boby-sharma"
  },
  {
    id: "tanushka-faguna",
    name: "Tanushka Faguna",
    role: "Frontend Developer",
    shortBio: "Creative frontend developer with expertise in building responsive, user-friendly web applications using modern frameworks and libraries.",
    longBio: "Creative and detail-oriented frontend developer with expertise in building responsive, user-friendly web applications. Skilled in modern JavaScript frameworks, CSS preprocessors, and UI/UX design principles. Passionate about creating intuitive interfaces that provide exceptional user experiences. Continuously learning and adapting to new technologies to deliver cutting-edge web solutions.",
    education: {
      degree: "B.Tech, Computer Science Engineering",
      institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
      year: "2022 - 2026",
      cgpa: "7.5"
    },
    experience: [
      {
        position: "Frontend Developer Intern",
        company: "TechSolutions Inc.",
        location: "Remote",
        duration: "June 2024 - August 2024",
        description: [
          "Developed responsive web interfaces using React, ensuring cross-browser compatibility and mobile responsiveness.",
          "Collaborated with UI/UX designers to implement design mockups with attention to detail and usability.",
          "Optimized website performance by implementing best practices for load times and rendering efficiency."
        ]
      }
    ],
    projects: [
      {
        title: "Personal Web Portfolio",
        description: "A responsive, modern web portfolio showcasing personal projects and skills with dark/light mode support and interactive elements.",
        technologies: ["React", "TailwindCSS", "JavaScript"],
        details: [
          "Designed and developed a responsive portfolio website with a clean, modern aesthetic.",
          "Implemented dark/light mode toggle using React context API and local storage for user preference persistence.",
          "Created interactive elements and animations to enhance user engagement and showcase technical skills."
        ]
      },
      {
        title: "E-commerce Dashboard",
        description: "A comprehensive e-commerce admin dashboard with sales analytics, inventory management, and customer insights visualization.",
        technologies: ["React", "Chart.js", "Node.js"],
        details: [
          "Built an intuitive admin interface for e-commerce store management with real-time data visualization.",
          "Implemented interactive charts and graphs to display sales trends, customer demographics, and inventory status.",
          "Created a responsive design that works seamlessly across desktop and tablet devices for on-the-go management."
        ]
      }
    ],
    certifications: [
      {
        title: "Frontend Web Development",
        issuer: "Udemy",
        date: "January 2024",
        description: "Comprehensive course covering modern frontend development techniques, responsive design, and JavaScript frameworks."
      },
      {
        title: "UI/UX Design Fundamentals",
        issuer: "Coursera",
        date: "March 2024",
        description: "Course focused on user interface design principles, accessibility, and creating intuitive user experiences."
      }
    ],
    topSkills: [
      { name: "React", percentage: 85 },
      { name: "JavaScript", percentage: 90 },
      { name: "CSS/SASS", percentage: 80 }
    ],
    technicalSkills: [
      { name: "React", percentage: 85 },
      { name: "JavaScript", percentage: 90 },
      { name: "CSS/SASS", percentage: 80 },
      { name: "HTML5", percentage: 95 }
    ],
    otherSkills: [
      { name: "UI/UX Design", percentage: 75 },
      { name: "Responsive Design", percentage: 85 },
      { name: "Version Control", percentage: 80 },
      { name: "Web Performance", percentage: 70 }
    ],
    image: "/images/team/tanushka-faguna.jpg",
    gradientBg: "bg-gradient-to-r from-purple-500 to-pink-600",
    socialLinks: {
      linkedin: "#",
      github: "#",
      email: "tanushka.faguna@example.com"
    },
    skillBarColor: "bg-purple-500",
    linkColor: "text-purple-500 hover:text-purple-600",
    profileUrl: "/tanushka-faguna"
  },
  {
    id: "ravi-sahu",
    name: "Ravi Sahu",
    role: "Data Scientist",
    shortBio: "Experienced in analyzing and visualizing complex datasets, identifying key patterns, and deriving actionable business insights with AI-powered solutions.",
    longBio: "Data scientist with proven ability in analyzing and visualizing complex datasets, identifying key patterns, and deriving actionable business insights. Proficient in developing machine learning models and recommendation systems to optimize decision-making and enhance user experiences. Strong command over Python, SQL, Power BI, and Excel, enabling efficient data manipulation, reporting, and visualization. Experienced in AI-powered solutions, leveraging expertise in LangChain, Google GenAI, Tesseract OCR, and advanced machine learning techniques to develop innovative applications.",
    education: {
      degree: "Bachelor of Science (Computer Science)",
      institution: "Jiwaji University",
      year: "July 2022 - July 2025",
      cgpa: "7.0"
    },
    experience: [
      {
        position: "Data Science and GenAI Intern",
        company: "Innomatics Research Labs",
        location: "",
        duration: "October 2024 - December 2024",
        description: [
          "Developed \"SeeForMe,\" an AI assistant for visually impaired individuals, utilizing LangChain, Google GenAI, Tesseract OCR, and Streamlit for scene description, object detection, and text reading.",
          "Implemented modularized features and audio outputs to improve user interaction and accessibility.",
          "Built an AI-powered tool for code quality assessment, leveraging advanced language models to analyze and suggest improvements."
        ]
      },
      {
        position: "Data Science Intern",
        company: "Prodigy InfoTech",
        location: "",
        duration: "July 2024 - August 2024",
        description: [
          "Designed a Movie Recommendation System using Python, Streamlit, and scikit-learn, providing personalized movie suggestions through an engaging and user-friendly interface.",
          "Focused on data preprocessing, analysis, and model optimization to ensure accurate recommendations and a seamless user experience.",
          "Leveraged advanced data analysis and visualization techniques to uncover meaningful insights from large datasets, driving informed decision-making and efficiency improvements."
        ]
      }
    ],
    projects: [
      {
        title: "SeeForMe: AI Assistant For Visually Impaired Users",
        description: "An AI-powered assistant to aid visually impaired individuals by describing scenes, detecting objects, and reading text.",
        technologies: ["LangChain", "Google GenAI", "Tesseract OCR", "Streamlit"],
        details: [
          "Leveraged LangChain, Google GenAI, and Tesseract OCR to integrate advanced natural language understanding, optical character recognition, and object detection capabilities.",
          "Designed modular features with audio outputs for seamless user interaction and accessibility.",
          "Ensured functionality and user-friendliness by deploying the application on a Streamlit-based interface."
        ]
      },
      {
        title: "Movie Recommendation System",
        description: "A Movie Recommendation System using Python, Streamlit, and content-based filtering for personalized suggestions.",
        technologies: ["Python", "Streamlit", "scikit-learn"],
        details: [
          "Leveraged pandas and scikit-learn to preprocess movie datasets and build a robust model with real-time recommendations.",
          "Deployed the system with an intuitive UI on Streamlit, enhancing user interaction and improving the model's usability."
        ]
      }
    ],
    certifications: [
      {
        title: "Data Analytics and Visualization Job Simulation",
        issuer: "",
        date: "March 2025",
        description: "Completed projects involving data cleaning, modeling, visualization, and storytelling. Gained practical experience in presenting insights to clients and strengthened analytical and communication skills through real-world business cases."
      }
    ],
    topSkills: [
      { name: "Python", percentage: 95 },
      { name: "Machine Learning", percentage: 85 },
      { name: "Data Visualization", percentage: 90 }
    ],
    technicalSkills: [
      { name: "Python", percentage: 95 },
      { name: "Machine Learning", percentage: 85 },
      { name: "SQL", percentage: 80 },
      { name: "Data Visualization", percentage: 90 }
    ],
    otherSkills: [
      { name: "Pandas & NumPy", percentage: 90 },
      { name: "Power BI", percentage: 85 },
      { name: "scikit-learn", percentage: 80 },
      { name: "Matplotlib & Seaborn", percentage: 85 }
    ],
    image: "/images/team/ravi-sahu.jpg",
    gradientBg: "bg-gradient-to-r from-green-500 to-teal-600",
    socialLinks: {
      linkedin: "#",
      github: "#",
      email: "ravi786modi@gmail.com"
    },
    skillBarColor: "bg-green-600",
    linkColor: "text-green-600 hover:text-green-700",
    profileUrl: "/ravi-sahu"
  }
];
