import { Users, Presentation, Trophy, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Experience</h2>
          <p className="text-lg text-slate-600">
            My leadership and mentoring experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Manan Technical Club */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-tech-blue text-white rounded-full w-12 h-12 flex items-center justify-center">
                  <Users className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Student Coordinator</h3>
                  <p className="text-tech-blue font-medium mb-2">Manan Technical Club</p>
                  <p className="text-slate-600 mb-4">
                    Led technical workshops and organized student collaboration activities, fostering a learning environment for technical excellence.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4 mb-4">
                    <h4 className="font-medium text-slate-800 mb-2">Major Achievement:</h4>
                    <p className="text-slate-700 flex items-start">
                      <Trophy className="text-tech-blue mr-2 h-5 w-5 mt-0.5" />
                      Organized a 24-hour university-level hackathon with 700+ participants from across the country
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 text-blue-700">Leadership</Badge>
                    <Badge className="bg-blue-100 text-blue-700">Event Management</Badge>
                    <Badge className="bg-blue-100 text-blue-700">Technical Workshops</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Placement Training Cell */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                  <Presentation className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Student Coordinator</h3>
                  <p className="text-emerald-600 font-medium mb-2">Placement Training Cell – UDAAN</p>
                  <p className="text-slate-600 mb-4">
                    Mentored students during placement training programs, helping them develop professional skills and prepare for career opportunities.
                  </p>
                  <div className="bg-emerald-50 rounded-lg p-4 mb-4">
                    <h4 className="font-medium text-slate-800 mb-2">Impact:</h4>
                    <p className="text-slate-700 flex items-start">
                      <Users className="text-emerald-500 mr-2 h-5 w-5 mt-0.5" />
                      Mentored 100+ students during placement training programs
                    </p>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-slate-600">
                      <Check className="text-emerald-500 mr-2 h-4 w-4" />
                      Conducted resume reviews
                    </div>
                    <div className="flex items-center text-slate-600">
                      <Check className="text-emerald-500 mr-2 h-4 w-4" />
                      Organized mock interviews
                    </div>
                    <div className="flex items-center text-slate-600">
                      <Check className="text-emerald-500 mr-2 h-4 w-4" />
                      Facilitated company interaction sessions
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-emerald-100 text-emerald-700">Mentoring</Badge>
                    <Badge className="bg-emerald-100 text-emerald-700">Career Guidance</Badge>
                    <Badge className="bg-emerald-100 text-emerald-700">Training</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
