import { Helmet } from "react-helmet";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import TeamSection from "@/components/home/TeamSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Tech Portfolio | Boby, Tanushka & Ravi</title>
        <meta name="description" content="Professional portfolio showcasing the skills, projects, and expertise of Boby Sharma, Tanushka Faguna, and Ravi Sahu in mobile development, frontend, and data science." />
        <meta property="og:title" content="Tech Portfolio | Boby, Tanushka & Ravi" />
        <meta property="og:description" content="Professional portfolio showcasing the skills, projects, and expertise of Boby Sharma, Tanushka Faguna, and Ravi Sahu in mobile development, frontend, and data science." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://techportfolio.com" />
      </Helmet>
      
      <main>
        <HeroSection />
        <AboutSection />
        <TeamSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
