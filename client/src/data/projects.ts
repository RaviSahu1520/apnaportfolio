export type Project = {
  id: string;
  title: string;
  description: string;
  author: string;
  category: string;
  badgeVariant: "mobile" | "ai" | "web";
  technologies: string[];
  image: string;
  detailsUrl: string;
  linkColor: string;
};

export const projects: Project[] = [
  {
    id: "grofast",
    title: "Grofast",
    description: "A mobile application where users can purchase fresh groceries online with ease. Built with Flutter and Firebase for a seamless shopping experience.",
    author: "Boby Sharma",
    category: "Mobile App",
    badgeVariant: "mobile",
    technologies: ["Flutter", "Firebase", "Dart"],
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    detailsUrl: "#",
    linkColor: "text-primary hover:text-primary/80",
  },
  {
    id: "hrms",
    title: "HRMS Intern Management",
    description: "A Human Resource Management System app for intern management to simplify attendance tracking, employee records, and leave management.",
    author: "Boby Sharma",
    category: "Mobile App",
    badgeVariant: "mobile",
    technologies: ["Flutter", "Firebase", "GetX"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    detailsUrl: "#",
    linkColor: "text-primary hover:text-primary/80",
  },
  {
    id: "seeforme",
    title: "SeeForMe",
    description: "An AI-powered assistant to aid visually impaired individuals by describing scenes, detecting objects, and reading text from images.",
    author: "Ravi Sahu",
    category: "AI Assistant",
    badgeVariant: "ai",
    technologies: ["Python", "LangChain", "Google GenAI"],
    image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    detailsUrl: "#",
    linkColor: "text-green-600 hover:text-green-700",
  },
  {
    id: "movie-recommender",
    title: "Movie Recommender",
    description: "A personalized movie recommendation system using content-based filtering to suggest films based on user preferences and viewing history.",
    author: "Ravi Sahu",
    category: "Data Science",
    badgeVariant: "ai",
    technologies: ["Python", "Streamlit", "scikit-learn"],
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    detailsUrl: "#",
    linkColor: "text-green-600 hover:text-green-700",
  },
  {
    id: "portfolio",
    title: "Personal Web Portfolio",
    description: "A responsive, modern web portfolio showcasing personal projects and skills with dark/light mode support and interactive elements.",
    author: "Tanushka Faguna",
    category: "Web Design",
    badgeVariant: "web",
    technologies: ["React", "TailwindCSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    detailsUrl: "#",
    linkColor: "text-purple-600 hover:text-purple-700",
  },
  {
    id: "ecommerce-dashboard",
    title: "E-commerce Dashboard",
    description: "A comprehensive e-commerce admin dashboard with sales analytics, inventory management, and customer insights visualization.",
    author: "Tanushka Faguna",
    category: "Web App",
    badgeVariant: "web",
    technologies: ["React", "Chart.js", "Node.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    detailsUrl: "#",
    linkColor: "text-purple-600 hover:text-purple-700",
  }
];
