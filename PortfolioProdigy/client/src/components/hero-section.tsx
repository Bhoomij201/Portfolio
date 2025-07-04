import { Button } from "@/components/ui/button";
import { User, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
              Hi, I'm <span className="text-tech-blue">Bhoomi Jain</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8">
              Aspiring Data Scientist
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Computer Engineering and Data Science student passionate about machine learning, 
              data analytics, and building intelligent solutions. Currently pursuing B.Tech with 
              hands-on experience in Python, PyTorch, and data visualization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button onClick={scrollToContact} className="bg-tech-blue hover:bg-blue-600 text-white">
                Get In Touch
              </Button>
              <Button variant="outline" className="border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
            <div className="flex space-x-6">
              <a 
                href="https://github.com/Bhoomij201" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-tech-blue transition-colors"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a 
                href="https://www.linkedin.com/in/bhoomi-jain-b2857428a" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-tech-blue transition-colors"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a 
                href="mailto:bhoomijainbj201@gmail.com"
                className="text-slate-600 hover:text-tech-blue transition-colors"
              >
                <FaEnvelope className="text-2xl" />
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
              <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                <User className="h-32 w-32 text-slate-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
