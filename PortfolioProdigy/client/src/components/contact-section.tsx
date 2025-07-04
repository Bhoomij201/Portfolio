import { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: (data: typeof formData) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send a message.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
          <p className="text-lg text-slate-600">
            Let's discuss opportunities and collaborate on exciting projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-tech-blue text-white rounded-full w-12 h-12 flex items-center justify-center">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-slate-600">Email</p>
                    <p className="font-medium text-slate-800">bhoomijainbj201@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-tech-blue text-white rounded-full w-12 h-12 flex items-center justify-center">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-slate-600">Phone</p>
                    <p className="font-medium text-slate-800">+91 9518270384</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-tech-blue text-white rounded-full w-12 h-12 flex items-center justify-center">
                    <FaLinkedin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-slate-600">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/bhoomi-jain-b2857428a" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-medium text-tech-blue hover:text-blue-600 transition-colors"
                    >
                      linkedin.com/in/bhoomi-jain-b2857428a
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-tech-blue text-white rounded-full w-12 h-12 flex items-center justify-center">
                    <FaGithub className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-slate-600">GitHub</p>
                    <a 
                      href="https://github.com/Bhoomij201" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-medium text-tech-blue hover:text-blue-600 transition-colors"
                    >
                      github.com/Bhoomij201
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-2">Available for Opportunities</h4>
              <p className="mb-4">
                I'm currently seeking internship and entry-level opportunities in data science, machine learning, and software development.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-white/20 text-white">Data Science</Badge>
                <Badge className="bg-white/20 text-white">Machine Learning</Badge>
                <Badge className="bg-white/20 text-white">Software Development</Badge>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-slate-700 font-medium">Name</Label>
                  <Input 
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-slate-700 font-medium">Email</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-slate-700 font-medium">Subject</Label>
                  <Input 
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry, Job opportunity, etc."
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-slate-700 font-medium">Message</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={6}
                    className="mt-2 resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-tech-blue hover:bg-blue-600"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
