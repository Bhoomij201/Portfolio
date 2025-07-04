import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Bhoomi Jain</h3>
          <p className="text-slate-300 mb-6">Aspiring Data Scientist | Machine Learning Enthusiast</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://github.com/Bhoomij201" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a 
              href="https://www.linkedin.com/in/bhoomi-jain-b2857428a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a 
              href="mailto:bhoomijainbj201@gmail.com"
              className="text-slate-300 hover:text-white transition-colors"
            >
              <FaEnvelope className="text-2xl" />
            </a>
          </div>
          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-400">© 2024 Bhoomi Jain. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
