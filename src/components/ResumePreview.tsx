
import React, { useRef } from "react";
import { useResume } from "@/context/ResumeContext";
import ModernTemplate from "@/components/templates/ModernTemplate";
import ProfessionalTemplate from "@/components/templates/ProfessionalTemplate";
import MinimalTemplate from "@/components/templates/MinimalTemplate";
import CreativeTemplate from "@/components/templates/CreativeTemplate";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { exportToPdf } from "@/utils/pdfExport";

const ResumePreview = ({ forExport = false }: { forExport?: boolean }) => {
  const { resumeData } = useResume();
  const resumeRef = useRef<HTMLDivElement>(null);

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

  const handleExportPdf = () => {
    exportToPdf(resumeData.profile.name ? `${resumeData.profile.name.replace(/\s+/g, '-').toLowerCase()}-resume` : 'resume');
  };

  return (
    <div className="resume-preview flex flex-col">
      {!forExport && (
        <div className="flex justify-end mb-4">
          <Button 
            onClick={handleExportPdf} 
            size="sm" 
            className="flex items-center gap-2"
          >
            <Download size={16} />
            Download PDF
          </Button>
        </div>
      )}
      <div className="flex justify-center">
        <div 
          ref={resumeRef}
          className={`resume-page ${!forExport ? "scale-[0.7] sm:scale-[0.75] md:scale-[0.8] lg:scale-[0.85] xl:scale-100" : ""} origin-top transition-all overflow-auto bg-white rounded-md shadow-sm`}
          id="resume-to-print"
          style={{
            width: "794px", // A4 width at 96 DPI
            minHeight: "1123px", // A4 height at 96 DPI
          }}
        >
          {renderTemplate()}
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
