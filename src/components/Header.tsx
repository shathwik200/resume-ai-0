
import React from "react";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b bg-white">
      <div className="container py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FileText size={24} className="text-resume-primary" />
          <span className="font-bold text-xl">ResumeAI</span>
        </div>
        
        <div className="flex gap-3">
          <Button variant="outline" size="sm">
            Templates
          </Button>
          <Button size="sm" className="bg-resume-primary hover:bg-resume-primary/90">
            Save Draft
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
