import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { scrollToElement } from "@/lib/utils";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [location] = useLocation();

  // Check if we're on the home page
  const isHomePage = location === "/";

  // Handle scroll events to add shadow to navbar when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle navigation for homepage sections
  const handleNavigation = (sectionId: string) => {
    if (isHomePage) {
      scrollToElement(sectionId);
    } else {
      window.location.href = `/#${sectionId}`;
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow-sm"
          : "bg-white dark:bg-gray-900"
      }`}
    >
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-primary dark:text-white">
            Tech<span className="text-orange-500">Portfolio</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <button onClick={() => handleNavigation("home")} className="font-medium hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => handleNavigation("about")} className="font-medium hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => handleNavigation("team")} className="font-medium hover:text-primary transition-colors">
              Team
            </button>
            <button onClick={() => handleNavigation("projects")} className="font-medium hover:text-primary transition-colors">
              Projects
            </button>
            <button onClick={() => handleNavigation("contact")} className="font-medium hover:text-primary transition-colors">
              Contact
            </button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5 text-yellow-300" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5 text-yellow-300" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 py-2 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-3">
              <button onClick={() => handleNavigation("home")} className="py-2 font-medium hover:text-primary transition-colors">
                Home
              </button>
              <button onClick={() => handleNavigation("about")} className="py-2 font-medium hover:text-primary transition-colors">
                About
              </button>
              <button onClick={() => handleNavigation("team")} className="py-2 font-medium hover:text-primary transition-colors">
                Team
              </button>
              <button onClick={() => handleNavigation("projects")} className="py-2 font-medium hover:text-primary transition-colors">
                Projects
              </button>
              <button onClick={() => handleNavigation("contact")} className="py-2 font-medium hover:text-primary transition-colors">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
