
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };
  
  const navLinks = [
    { path: "/home", label: "Home" },
    { path: "/templates", label: "Templates" },
    { path: "/tips", label: "Resume Tips" },
    { path: "/faq", label: "FAQ" },
  ];
  
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <FileText size={24} className="text-resume-primary" />
            <span className="font-bold text-xl">ResumeAI</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map(link => (
            <Link key={link.path} to={link.path}>
              <Button variant={isActive(link.path) ? "default" : "ghost"} size="sm">
                {link.label}
              </Button>
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-3">
          <Link to="/builder" className="hidden sm:block">
            <Button size="sm" className="bg-resume-primary hover:bg-resume-primary/90">
              Create Resume
            </Button>
          </Link>
          
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={toggleMobileMenu}
          >
            <Menu size={24} />
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-container">
          <div className="flex justify-between items-center mb-6">
            <Link to="/" className="flex items-center gap-2">
              <FileText size={24} className="text-resume-primary" />
              <span className="font-bold text-xl">ResumeAI</span>
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu}
            >
              <X size={24} />
            </Button>
          </div>
          
          <nav className="flex flex-col gap-4">
            {navLinks.map(link => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button 
                  variant={isActive(link.path) ? "default" : "ghost"} 
                  className="w-full justify-start"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </nav>
          
          <div className="mt-auto pt-6">
            <Link to="/builder" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-resume-primary hover:bg-resume-primary/90">
                Create Resume
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
