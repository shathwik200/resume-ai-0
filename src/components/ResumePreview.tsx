
import React from "react";
import { useResume } from "@/context/ResumeContext";
import ModernTemplate from "@/components/templates/ModernTemplate";
import ProfessionalTemplate from "@/components/templates/ProfessionalTemplate";
import MinimalTemplate from "@/components/templates/MinimalTemplate";
import CreativeTemplate from "@/components/templates/CreativeTemplate";

const ResumePreview = () => {
  const { resumeData } = useResume();

  const renderTemplate = () => {
    switch (resumeData.template) {
      case "modern":
        return <ModernTemplate data={resumeData} />;
      case "professional":
        return <ProfessionalTemplate data={resumeData} />;
      case "minimal":
        return <MinimalTemplate data={resumeData} />;
      case "creative":
        return <CreativeTemplate data={resumeData} />;
      default:
        return <ModernTemplate data={resumeData} />;
    }
  };

  return (
    <div className="resume-preview flex justify-center">
      <div className="resume-page scale-[0.85] lg:scale-100 origin-top transition-all overflow-auto">
        {renderTemplate()}
      </div>
    </div>
  );
};

export default ResumePreview;
