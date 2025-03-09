
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileSection from "@/components/sections/ProfileSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ResumePreview from "@/components/ResumePreview";
import TemplateSelector from "@/components/TemplateSelector";
import { User, Briefcase, GraduationCap, LucideIcon, Award, Code, Scroll } from "lucide-react";
import { useResume } from "@/context/ResumeContext";

type SectionTab = {
  value: string;
  label: string;
  icon: LucideIcon;
  component: React.ReactNode;
};

const ResumeBuilder = () => {
  const { resumeData } = useResume();

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
    </div>
  );
};

export default ResumeBuilder;
