import { Link } from "wouter";
import { scrollToElement } from "@/lib/utils";
import { 
  Linkedin, 
  Github, 
  Twitter, 
  Instagram, 
  MapPin, 
  Mail, 
  Phone 
} from "lucide-react";

export default function Footer() {
  const handleNavigation = (sectionId: string) => {
    scrollToElement(sectionId);
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold mb-4">
              Tech<span className="text-orange-500">Portfolio</span>
            </h2>
            <p className="text-gray-400 mb-4">
              Showcasing the skills and projects of three passionate tech professionals.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavigation("home")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("about")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("team")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Team
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("projects")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("contact")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Team Members</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/boby-sharma" className="text-gray-400 hover:text-white transition-colors">
                  Boby Sharma
                </Link>
              </li>
              <li>
                <Link href="/tanushka-faguna">
                  <a className="text-gray-400 hover:text-white transition-colors">
                    Tanushka Faguna
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/ravi-sahu">
                  <a className="text-gray-400 hover:text-white transition-colors">
                    Ravi Sahu
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" /> Gwalior, Madhya Pradesh
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" /> contact@techportfolio.com
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" /> +91 8305734159
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; 2025 TechPortfolio. All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
