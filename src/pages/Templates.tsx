
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Templates = () => {
  const templates = [
    {
      id: "modern",
      name: "Modern",
      description: "Clean and contemporary design with a focus on skills and experience.",
      image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=2070",
      color: "bg-blue-500"
    },
    {
      id: "professional",
      name: "Professional",
      description: "Traditional layout perfect for corporate and executive positions.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070",
      color: "bg-gray-700"
    },
    {
      id: "minimal",
      name: "Minimal",
      description: "Elegant and simple design that lets your content shine.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070",
      color: "bg-teal-500"
    },
    {
      id: "creative",
      name: "Creative",
      description: "Bold layout for design, marketing, and creative professionals.",
      image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=2070",
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-resume-secondary mb-3 md:mb-4">
              Professional Resume Templates
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              Choose from our collection of ATS-friendly templates designed to help you stand out
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {templates.map((template) => (
              <div key={template.id} className="bg-white rounded-xl overflow-hidden border shadow-sm transition-all hover:shadow-md">
                <div className="h-36 sm:h-48 overflow-hidden">
                  <img 
                    src={template.image} 
                    alt={`${template.name} template preview`} 
                    className="h-full w-full object-cover transition-all hover:scale-105"
                  />
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{template.name}</h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-4">{template.description}</p>
                  <Link to={`/builder?template=${template.id}`}>
                    <Button className="w-full gap-1 md:gap-2 text-sm md:text-base bg-resume-primary hover:bg-resume-primary/90">
                      Use This Template
                      <ArrowRight size={16} />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-resume-secondary rounded-xl p-6 md:p-8 text-white">
              <div className="text-center">
                <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Need a Custom Template?</h2>
                <p className="mb-4 md:mb-6 text-sm md:text-base">
                  We can create custom resume templates tailored to your specific industry or role.
                </p>
                <a href="mailto:support@resumeai.com">
                  <Button variant="outline" className="border-white text-black hover:bg-white/10 text-sm md:text-base">
                    Contact Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Templates;
