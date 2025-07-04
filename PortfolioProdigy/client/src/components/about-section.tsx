import { Trophy, Medal, Award, Presentation } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A dedicated computer engineering student with a passion for data science and machine learning
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Education</h3>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-slate-800">B.Tech Computer Engineering and Data Science</h4>
                  <p className="text-tech-blue font-medium">J.C. Bose University, YMCA, Faridabad</p>
                  <p className="text-slate-600">CGPA: 8.3</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-slate-800">Class 12</h4>
                  <p className="text-tech-blue font-medium">Vishwa Bharti Public School, Jagadhri, Haryana</p>
                  <p className="text-slate-600">2023 • Percentage: 83%</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-slate-800">Class 10</h4>
                  <p className="text-tech-blue font-medium">St. Thomas School, Jagadhri, Haryana</p>
                  <p className="text-slate-600">Percentage: 93%</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Achievements</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Trophy className="text-tech-blue mt-1 h-5 w-5" />
                <div>
                  <p className="font-medium text-slate-800">JEE Mains Rank: 66,678</p>
                  <p className="text-slate-600">JEE Advanced Rank: 18,452</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Medal className="text-tech-blue mt-1 h-5 w-5" />
                <p className="text-slate-700">3rd position in coding competition organized by IEEE YMCA</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <Award className="text-tech-blue mt-1 h-5 w-5" />
                <p className="text-slate-700">Deloitte Australia Data Analytics Job Simulation on Forage (July 2025)</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <Presentation className="text-tech-blue mt-1 h-5 w-5" />
                <p className="text-slate-700">Conducted and hosted a beginner-friendly session on Machine Learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
