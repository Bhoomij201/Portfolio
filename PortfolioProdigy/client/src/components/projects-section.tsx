import { ExternalLink, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Fashion MNIST Image Classification",
      description: "Built a CNN model using PyTorch to classify Fashion MNIST images into 10 clothing categories with 88% test accuracy.",
      techStack: ["Python", "PyTorch", "Google Colab", "scikit-learn", "NumPy"],
      features: [
        "Custom Dataset and DataLoader for GPU training",
        "Conv2D, ReLU, BatchNorm, MaxPooling layers",
        "CrossEntropyLoss and SGD with L2 regularization"
      ],
      highlight: "Accuracy: 88%",
      gradient: "from-blue-50 to-indigo-50",
      badgeColor: "bg-blue-100 text-blue-700"
    },
    {
      title: "To-Do List Web Application",
      description: "Full-stack task manager using Flask for backend logic and Jinja2 for dynamic templating with real-time updates.",
      techStack: ["HTML", "CSS", "JavaScript", "Flask", "SQLite"],
      features: [
        "Real-time task updates without page reloads",
        "Responsive UI for cross-device usability",
        "SQLite database with efficient CRUD operations"
      ],
      highlight: "Full-Stack",
      gradient: "from-green-50 to-emerald-50",
      badgeColor: "bg-green-100 text-green-700"
    },
    {
      title: "Deloitte Australia Data Analytics Simulation",
      description: "Completed a comprehensive job simulation involving data analysis and forensic technology with Tableau dashboard creation.",
      techStack: ["Tableau", "Excel", "Data Analysis", "Forensic Tech"],
      features: [
        "Created comprehensive data dashboard using Tableau",
        "Used Excel to classify data and draw business conclusions",
        "Completed forensic technology analysis"
      ],
      highlight: "July 2025",
      gradient: "from-purple-50 to-violet-50",
      badgeColor: "bg-purple-100 text-purple-700"
    },
    {
      title: "Data Structures & Algorithms",
      description: "Actively solving DSA problems across multiple competitive programming platforms to strengthen problem-solving skills.",
      techStack: ["LeetCode", "Codeforces", "GeeksforGeeks", "CodeChef"],
      features: [
        "Array and String manipulation",
        "Dynamic Programming",
        "Graph algorithms and Tree structures"
      ],
      highlight: "Active Practice",
      gradient: "from-orange-50 to-red-50",
      badgeColor: "bg-orange-100 text-orange-700"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600">
            A showcase of my technical projects and achievements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`bg-gradient-to-br ${project.gradient} shadow-sm hover:shadow-md transition-shadow`}>
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{project.title}</h3>
                  <p className="text-slate-600">
                    {project.description}
                  </p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium text-slate-800 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge key={techIndex} className={project.badgeColor}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium text-slate-800 mb-2">Key Features:</h4>
                  <ul className="text-slate-600 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="font-semibold text-slate-700">{project.highlight}</div>
                  <button className="text-slate-600 hover:text-slate-800 transition-colors flex items-center">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View Project
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
