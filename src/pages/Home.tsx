
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container py-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-resume-secondary">
            Create Your Perfect Resume with AI
          </h1>
          
          <p className="text-xl text-muted-foreground">
            Build professional, ATS-optimized resumes in minutes using our powerful AI tools
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/builder">
              <Button size="lg" className="gap-2 bg-resume-primary hover:bg-resume-primary/90">
                Start Building Now
                <ArrowRight size={16} />
              </Button>
            </Link>
            
            <Link to="/tips">
              <Button size="lg" variant="outline" className="gap-2">
                Resume Tips
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
              <p className="text-muted-foreground">Our AI technology helps optimize your resume for Applicant Tracking Systems (ATS).</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Professional Templates</h3>
              <p className="text-muted-foreground">Choose from multiple professionally designed templates that stand out.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Industry Insights</h3>
              <p className="text-muted-foreground">Get real-time feedback to make your resume more effective for your target role.</p>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="py-6 border-t">
        <div className="container flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2023 AI Resume Builder
          </p>
          <p className="text-sm text-muted-foreground">
            Built with AI to make your resume stand out
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
