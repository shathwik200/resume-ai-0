
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileSection from "@/components/sections/ProfileSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ResumePreview from "@/components/ResumePreview";
import TemplateSelector from "@/components/TemplateSelector";
import { Button } from "@/components/ui/button";
import { User, Briefcase, GraduationCap, LucideIcon, Award, Code, Scroll, Eye, EyeOff, Laptop, Tablet } from "lucide-react";
import { useResume } from "@/context/ResumeContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChatBot } from "@/components/ChatBot";

type SectionTab = {
  value: string;
  label: string;
  icon: LucideIcon;
  component: React.ReactNode;
};

const ResumeBuilder = () => {
  const { resumeData } = useResume();
  const [showPreviewOnMobile, setShowPreviewOnMobile] = useState(false);
  const isMobile = useIsMobile();

  const sections: SectionTab[] = [
    {
      value: "profile",
      label: "Profile",
      icon: User,
      component: <ProfileSection />
    },
    {
      value: "experience",
      label: "Experience",
      icon: Briefcase,
      component: <ExperienceSection />
    },
    {
      value: "education",
      label: "Education",
      icon: GraduationCap,
      component: <EducationSection />
    },
    {
      value: "skills",
      label: "Skills",
      icon: Code,
      component: <SkillsSection />
    },
    {
      value: "projects",
      label: "Projects",
      icon: Award,
      component: <ProjectsSection />
    },
    {
      value: "certifications",
      label: "Certifications",
      icon: Scroll,
      component: <CertificationsSection />
    }
  ];

  const toggleMobilePreview = () => {
    setShowPreviewOnMobile(!showPreviewOnMobile);
  };

  if (isMobile) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] px-4 text-center">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-md">
          <div className="flex justify-center mb-4">
            <div className="bg-yellow-100 p-3 rounded-full">
              <Laptop className="h-8 w-8 text-yellow-600" />
            </div>
          </div>
          <h2 className="text-xl font-semibold text-yellow-800 mb-2">Resume Builder Not Available on Mobile</h2>
          <p className="text-yellow-700 mb-4">
            For the best experience creating your resume, please switch to a tablet or desktop device. 
            The resume builder requires a larger screen for optimal editing capabilities.
          </p>
          <div className="flex items-center justify-center gap-2 text-yellow-600">
            <Tablet className="h-5 w-5" />
            <span className="text-sm">Recommended: Tablet or larger</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-5 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Template & Style</h2>
          <TemplateSelector />
        </div>

        <div className="bg-white rounded-lg border shadow-sm">
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="flex w-full bg-muted overflow-x-auto">
              {sections.map((section) => (
                <TabsTrigger
                  key={section.value}
                  value={section.value}
                  className="flex-1 flex items-center gap-2 whitespace-nowrap py-3"
                >
                  <section.icon size={16} />
                  {section.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {sections.map((section) => (
              <TabsContent key={section.value} value={section.value} className="p-4">
                {section.component}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      <div className="lg:col-span-3">
        <div className="bg-muted rounded-lg p-6 border shadow-sm overflow-auto">
          <ResumePreview />
        </div>
      </div>

      <ChatBot />
    </div>
  );
};

export default ResumeBuilder;
