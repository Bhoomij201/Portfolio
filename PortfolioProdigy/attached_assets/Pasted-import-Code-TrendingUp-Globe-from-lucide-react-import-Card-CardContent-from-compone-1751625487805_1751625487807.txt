import { Code, TrendingUp, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function SkillsSection() {
  const programmingSkills = [
    { name: "Python", level: 90 },
    { name: "Java", level: 75 },
    { name: "SQL", level: 80 },
  ];

  const dataScienceSkills = [
    { name: "Pandas & NumPy", level: 85 },
    { name: "PyTorch & ML", level: 80 },
    { name: "Matplotlib & Plotly", level: 75 },
  ];

  const webDevSkills = [
    { name: "HTML & CSS", level: 85 },
    { name: "JavaScript", level: 70 },
    { name: "Flask & Streamlit", level: 75 },
  ];

  const SkillCard = ({ title, icon: Icon, skills }: { title: string; icon: any; skills: { name: string; level: number }[] }) => (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
          <Icon className="text-tech-blue mr-2 h-5 w-5" />
          {title}
        </h3>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-slate-700">{skill.name}</span>
                <span className="text-tech-blue">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Technical Skills</h2>
          <p className="text-lg text-slate-600">
            My expertise across different domains and technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard 
            title="Programming Languages" 
            icon={Code} 
            skills={programmingSkills} 
          />
          <SkillCard 
            title="Data Science" 
            icon={TrendingUp} 
            skills={dataScienceSkills} 
          />
          <SkillCard 
            title="Web Development" 
            icon={Globe} 
            skills={webDevSkills} 
          />
        </div>
      </div>
    </section>
  );
}
