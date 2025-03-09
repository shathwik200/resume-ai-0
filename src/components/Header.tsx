
import React from "react";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <FileText size={24} className="text-resume-primary" />
            <span className="font-bold text-xl">ResumeAI</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-1">
          <Link to="/home">
            <Button variant={isActive("/home") ? "default" : "ghost"} size="sm">
              Home
            </Button>
          </Link>
          <Link to="/templates">
            <Button variant={isActive("/templates") ? "default" : "ghost"} size="sm">
              Templates
            </Button>
          </Link>
          <Link to="/tips">
            <Button variant={isActive("/tips") ? "default" : "ghost"} size="sm">
              Resume Tips
            </Button>
          </Link>
          <Link to="/faq">
            <Button variant={isActive("/faq") ? "default" : "ghost"} size="sm">
              FAQ
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant={isActive("/contact") ? "default" : "ghost"} size="sm">
              Contact
            </Button>
          </Link>
        </nav>
        
        <div className="flex gap-3">
          <Link to="/builder">
            <Button size="sm" className="bg-resume-primary hover:bg-resume-primary/90">
              Create Resume
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
