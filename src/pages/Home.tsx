
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Sparkles, Award, CheckCircle, Zap, User, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight text-center">
              Create Your <span className="text-resume-primary">Dream Resume</span> in Minutes
            </h1>
            
            <p className="text-xl text-gray-200 max-w-2xl mx-auto text-center">
              Our AI-powered platform helps you build professional, ATS-optimized resumes that stand out and get you noticed
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link to="/builder">
                <Button size="lg" className="gap-2 bg-resume-primary hover:bg-resume-primary/90 text-white font-medium px-8 py-6 text-lg shadow-lg">
                  Start Building Now
                  <ArrowRight size={18} />
                </Button>
              </Link>
              
              <Link to="/templates">
                <Button size="lg" variant="outline" className="gap-2 text-white border-white hover:bg-white/10 px-8 py-6 text-lg">
                  Browse Templates
                </Button>
              </Link>
            </div>
            
            <div className="pt-10 flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-resume-primary" size={20} />
                <span>ATS-Optimized</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-resume-primary" size={20} />
                <span>Professional Templates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-resume-primary" size={20} />
                <span>AI-Powered Suggestions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-resume-primary" size={20} />
                <span>Free PDF Download</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave Pattern */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,117.3C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-resume-secondary mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Create your perfect resume in three simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 text-center shadow-sm transition-all hover:shadow-md">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
                <User size={28} className="text-resume-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-resume-secondary">Step 1: Fill Your Details</h3>
              <p className="text-muted-foreground">Enter your information or import from LinkedIn to quickly populate your resume.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 text-center shadow-sm transition-all hover:shadow-md">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
                <Sparkles size={28} className="text-resume-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-resume-secondary">Step 2: Customize Design</h3>
              <p className="text-muted-foreground">Choose from multiple professional templates and customize colors to match your style.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 text-center shadow-sm transition-all hover:shadow-md">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
                <FileText size={28} className="text-resume-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-resume-secondary">Step 3: Download & Apply</h3>
              <p className="text-muted-foreground">Download your ATS-optimized resume as PDF and start applying to jobs with confidence.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-resume-secondary mb-4">Why Choose ResumeAI</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform is designed to help you create professional resumes that get noticed
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border shadow-sm transition-all hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <Zap size={24} className="text-resume-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-resume-secondary">ATS-Optimization</h3>
              <p className="text-muted-foreground">Our AI technology helps optimize your resume for Applicant Tracking Systems, increasing your chances of getting an interview.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border shadow-sm transition-all hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <FileText size={24} className="text-resume-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-resume-secondary">Professional Templates</h3>
              <p className="text-muted-foreground">Choose from multiple professionally designed templates that stand out and showcase your skills and experience.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border shadow-sm transition-all hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <Award size={24} className="text-resume-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-resume-secondary">Industry Insights</h3>
              <p className="text-muted-foreground">Get real-time feedback and suggestions to make your resume more effective for your target role and industry.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border shadow-sm transition-all hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <Clock size={24} className="text-resume-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-resume-secondary">Time-Saving</h3>
              <p className="text-muted-foreground">Create a professional resume in minutes, not hours, with our intuitive interface and AI-powered suggestions.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border shadow-sm transition-all hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <Sparkles size={24} className="text-resume-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-resume-secondary">AI Content Generation</h3>
              <p className="text-muted-foreground">Let our AI help you write compelling job descriptions and achievements based on your experience.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border shadow-sm transition-all hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <Shield size={24} className="text-resume-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-resume-secondary">Data Privacy</h3>
              <p className="text-muted-foreground">Your data is secure with us. We prioritize your privacy and never share your information with third parties.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-resume-secondary mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how our resume builder has helped job seekers land their dream jobs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-resume-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-resume-primary">JD</span>
                </div>
                <div>
                  <p className="font-semibold">John Doe</p>
                  <p className="text-sm text-muted-foreground">Software Engineer</p>
                </div>
              </div>
              <p className="italic text-gray-600">
                "I landed three interviews within a week of updating my resume with this tool. The AI suggestions were spot-on for my industry!"
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-resume-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-resume-primary">SM</span>
                </div>
                <div>
                  <p className="font-semibold">Sarah Miller</p>
                  <p className="text-sm text-muted-foreground">Marketing Specialist</p>
                </div>
              </div>
              <p className="italic text-gray-600">
                "The ATS checker helped me understand why I wasn't getting callbacks. After optimizing my resume, I finally got the job I wanted!"
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-resume-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-resume-primary">RJ</span>
                </div>
                <div>
                  <p className="font-semibold">Robert Johnson</p>
                  <p className="text-sm text-muted-foreground">Financial Analyst</p>
                </div>
              </div>
              <p className="italic text-gray-600">
                "The templates are so professional and the customization options are fantastic. I received compliments on my resume design during interviews!"
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-resume-secondary to-resume-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Create Your Professional Resume?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join thousands of job seekers who have successfully landed interviews with our AI-powered resume builder.
          </p>
          <Link to="/builder">
            <Button size="lg" className="gap-2 bg-resume-primary hover:bg-resume-primary/90 text-white shadow-lg px-8 py-6 text-lg">
              Build Your Resume Now
              <ArrowRight size={18} />
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
                <li><Link to="/faq" className="hover:text-resume-primary transition-colors">FAQ</Link></li>
                <li><Link to="/privacy" className="hover:text-resume-primary transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-resume-primary transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="https://twitter.com" className="hover:text-resume-primary transition-colors">Twitter</a></li>
                <li><a href="https://linkedin.com" className="hover:text-resume-primary transition-colors">LinkedIn</a></li>
                <li><a href="mailto:support@resumeai.com" className="hover:text-resume-primary transition-colors">Email Us</a></li>
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
