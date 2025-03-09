
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Sparkles, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-resume-secondary to-resume-dark py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Create Your <span className="text-resume-primary">Perfect Resume</span> with AI
            </h1>
            
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Build professional, ATS-optimized resumes in minutes using our powerful AI tools and stand out from the competition
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/builder">
                <Button size="lg" className="gap-2 bg-resume-primary hover:bg-resume-primary/90 text-white shadow-lg">
                  Start Building Now
                  <ArrowRight size={16} />
                </Button>
              </Link>
              
              <Link to="/templates">
                <Button size="lg" variant="outline" className="gap-2 text-white border-white hover:bg-white/10">
                  View Templates
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Wave Pattern */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,128L80,138.7C160,149,320,171,480,176C640,181,800,171,960,154.7C1120,139,1280,117,1360,106.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-resume-secondary mb-4">Why Choose Our Resume Builder</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered platform helps you create professional resumes that get noticed by employers and applicant tracking systems
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border shadow-sm transition-all hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Sparkles size={24} className="text-resume-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-resume-secondary">AI-Powered Optimization</h3>
              <p className="text-muted-foreground">Our AI technology helps optimize your resume for Applicant Tracking Systems, increasing your chances of getting an interview.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border shadow-sm transition-all hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FileText size={24} className="text-resume-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-resume-secondary">Professional Templates</h3>
              <p className="text-muted-foreground">Choose from multiple professionally designed templates that stand out and showcase your skills and experience.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border shadow-sm transition-all hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Award size={24} className="text-resume-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-resume-secondary">Industry Insights</h3>
              <p className="text-muted-foreground">Get real-time feedback and suggestions to make your resume more effective for your target role and industry.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-resume-secondary mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how our resume builder has helped job seekers land their dream jobs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl border shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-resume-primary/10 flex items-center justify-center">
                  <span className="font-bold text-resume-primary">JD</span>
                </div>
                <div>
                  <p className="italic text-gray-600 mb-4">"I landed three interviews within a week of updating my resume with this tool. The AI suggestions were spot-on for my industry!"</p>
                  <p className="font-semibold">John Doe</p>
                  <p className="text-sm text-muted-foreground">Software Engineer</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl border shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-resume-primary/10 flex items-center justify-center">
                  <span className="font-bold text-resume-primary">SM</span>
                </div>
                <div>
                  <p className="italic text-gray-600 mb-4">"The ATS checker helped me understand why I wasn't getting callbacks. After optimizing my resume, I finally got the job I wanted!"</p>
                  <p className="font-semibold">Sarah Miller</p>
                  <p className="text-sm text-muted-foreground">Marketing Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-resume-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Create Your Professional Resume?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join thousands of job seekers who have successfully landed interviews with our AI-powered resume builder.
          </p>
          <Link to="/builder">
            <Button size="lg" className="gap-2 bg-resume-primary hover:bg-resume-primary/90 text-white shadow-lg">
              Build Your Resume Now
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-10 bg-resume-dark text-gray-300">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FileText size={24} className="text-resume-primary" />
                <span className="font-bold text-xl text-white">ResumeAI</span>
              </div>
              <p className="text-sm">
                Building better careers with AI-powered resume tools.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-resume-primary transition-colors">Home</Link></li>
                <li><Link to="/templates" className="hover:text-resume-primary transition-colors">Templates</Link></li>
                <li><Link to="/builder" className="hover:text-resume-primary transition-colors">Resume Builder</Link></li>
                <li><Link to="/tips" className="hover:text-resume-primary transition-colors">Resume Tips</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link to="/blog" className="hover:text-resume-primary transition-colors">Blog</Link></li>
                <li><Link to="/faq" className="hover:text-resume-primary transition-colors">FAQ</Link></li>
                <li><Link to="/contact" className="hover:text-resume-primary transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="hover:text-resume-primary transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-resume-primary transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
            <p>© 2024 ResumeAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
