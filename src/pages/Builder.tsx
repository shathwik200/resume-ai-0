
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Sparkles, Download, FileText, Zap } from "lucide-react";
import ResumeBuilder from "@/components/ResumeBuilder";
import ATSChecker from "@/components/ATSChecker";
import { ResumeProvider } from "@/context/ResumeContext";
import { exportToPdf } from "@/utils/pdfExport";
import { useLocation } from "react-router-dom";

const Builder = () => {
  const [activeTab, setActiveTab] = useState("builder");
  const location = useLocation();

  const handleExport = () => {
    exportToPdf("my-resume");
  };

  const handleAiOptimize = () => {
    toast.success("Resume optimized with AI!");
    // In a real implementation, this would trigger AI optimization
  };

  // Get the selected template from URL query params
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const templateParam = queryParams.get("template");
    if (templateParam) {
      // We'll pass this to ResumeProvider below
      console.log("Template selected from URL:", templateParam);
    }
  }, [location]);

  return (
    <ResumeProvider initialTemplate={new URLSearchParams(location.search).get("template")}>
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 container py-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-3xl font-bold text-resume-secondary">Resume Builder</h1>
                <p className="text-muted-foreground mt-1">
                  Create a professional, ATS-optimized resume in minutes
                </p>
              </div>
              
              <div className="flex gap-2">
                <Button onClick={handleExport} variant="outline" className="gap-2">
                  <Download size={16} />
                  Export PDF
                </Button>
                <Button onClick={handleAiOptimize} className="gap-2 bg-resume-primary hover:bg-resume-primary/90">
                  <Sparkles size={16} />
                  AI Optimize
                </Button>
              </div>
            </div>

            <Tabs defaultValue="builder" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="builder" className="gap-2">
                  <FileText size={16} />
                  Resume Builder
                </TabsTrigger>
                <TabsTrigger value="ats" className="gap-2">
                  <Zap size={16} />
                  ATS Checker
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="builder" className="mt-0">
                <ResumeBuilder />
              </TabsContent>
              
              <TabsContent value="ats" className="mt-0">
                <ATSChecker />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </ResumeProvider>
  );
};

export default Builder;
