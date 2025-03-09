
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileText, Users, BriefcaseBusiness, XCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Tips = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-resume-secondary mb-3">Resume Writing Tips</h1>
            <p className="text-muted-foreground">Expert advice to make your resume stand out</p>
          </div>
          
          <div className="space-y-8">
            <Card>
              <CardHeader className="bg-muted/30">
                <div className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-resume-primary"/>
                  <CardTitle>Resume Structure & Formatting</CardTitle>
                </div>
                <CardDescription>How to organize your resume for maximum impact</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Keep your resume to one page unless you have 10+ years of experience</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Use a clean, professional font (e.g., Arial, Calibri, Helvetica) at 10-12pt size</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Include consistent section headers and maintain even spacing</span>
                  </li>
                  <li className="flex gap-2">
                    <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <span>Avoid using tables, headers/footers, and graphics that ATS systems can't parse</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="bg-muted/30">
                <div className="flex items-center gap-3">
                  <BriefcaseBusiness className="h-6 w-6 text-resume-primary"/>
                  <CardTitle>Work Experience</CardTitle>
                </div>
                <CardDescription>How to showcase your professional achievements</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Use action verbs at the beginning of bullet points (e.g., "Led," "Developed," "Implemented")</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Include specific, measurable achievements with numbers when possible</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Focus on accomplishments rather than routine responsibilities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="bg-muted/30">
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-resume-primary"/>
                  <CardTitle>ATS Optimization</CardTitle>
                </div>
                <CardDescription>How to get past the Applicant Tracking System</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Include relevant keywords from the job description</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Use standard section headers (e.g., "Experience," "Education," "Skills")</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Save your resume as a .docx or .pdf file</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/builder">
              <Button size="lg" className="gap-2 bg-resume-primary hover:bg-resume-primary/90">
                Build Your Resume Now
              </Button>
            </Link>
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

export default Tips;
