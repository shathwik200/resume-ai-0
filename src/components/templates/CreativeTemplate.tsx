
import React from "react";
import { ResumeData } from "@/context/ResumeContext";
import { MapPin, Mail, Phone, Globe, Linkedin } from "lucide-react";

interface CreativeTemplateProps {
  data: ResumeData;
}

const CreativeTemplate: React.FC<CreativeTemplateProps> = ({ data }) => {
  const { profile, experience, education, skills, projects, certifications, color } = data;

  return (
    <div className="creative-template h-full text-resume-secondary text-sm">
      <div className="grid grid-cols-3 h-full">
        {/* Left sidebar */}
        <div className="col-span-1 p-4" style={{ backgroundColor: color, color: 'white' }}>
          <div className="flex flex-col items-center mb-6">
            <h1 className="text-xl font-bold text-center mb-1">
              {profile.name}
            </h1>
            <p className="text-sm text-center">{profile.title}</p>
          </div>
          
          <div className="space-y-2 mb-6">
            {profile.email && (
              <div className="flex items-center gap-2">
                <Mail size={14} className="min-w-[14px]" />
                <span className="text-xs break-all">{profile.email}</span>
              </div>
            )}
            {profile.phone && (
              <div className="flex items-center gap-2">
                <Phone size={14} className="min-w-[14px]" />
                <span className="text-xs">{profile.phone}</span>
              </div>
            )}
            {profile.location && (
              <div className="flex items-center gap-2">
                <MapPin size={14} className="min-w-[14px]" />
                <span className="text-xs">{profile.location}</span>
              </div>
            )}
            {profile.linkedin && (
              <div className="flex items-center gap-2">
                <Linkedin size={14} className="min-w-[14px]" />
                <span className="text-xs break-all">{profile.linkedin}</span>
              </div>
            )}
            {profile.website && (
              <div className="flex items-center gap-2">
                <Globe size={14} className="min-w-[14px]" />
                <span className="text-xs break-all">{profile.website}</span>
              </div>
            )}
          </div>
          
          {skills.length > 0 && (
            <section className="mb-6">
              <h2 className="text-md font-bold mb-2 pb-1 border-b border-white/40">
                Skills
              </h2>
              <div className="flex flex-wrap gap-1">
                {skills.map((skill, index) => (
                  <span key={index} className="text-xs px-2 py-1 rounded-full bg-white/20 my-1">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}
          
          {certifications.length > 0 && (
            <section className="mb-6">
              <h2 className="text-md font-bold mb-2 pb-1 border-b border-white/40">
                Certifications
              </h2>
              <div className="space-y-2">
                {certifications.map((cert) => (
                  <div key={cert.id} className="text-xs">
                    <div className="font-bold">{cert.name}</div>
                    <div className="flex justify-between">
                      <span>{cert.issuer}</span>
                      <span>{cert.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
        
        {/* Main content */}
        <div className="col-span-2 p-4">
          {profile.summary && (
            <section className="mb-6">
              <h2 className="text-lg font-bold mb-2" style={{ color }}>
                Profile
              </h2>
              <p className="text-sm">{profile.summary}</p>
            </section>
          )}
          
          {experience.length > 0 && (
            <section className="mb-6">
              <h2 className="text-lg font-bold mb-2" style={{ color }}>
                Experience
              </h2>
              <div className="space-y-4">
                {experience.map((job) => (
                  <div key={job.id}>
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-bold">{job.title}</h3>
                      <span className="text-xs">
                        {job.startDate} - {job.current ? "Present" : job.endDate}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{job.company}</span>
                      <span>{job.location}</span>
                    </div>
                    <p className="mt-1 text-sm whitespace-pre-line">{job.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {education.length > 0 && (
            <section className="mb-6">
              <h2 className="text-lg font-bold mb-2" style={{ color }}>
                Education
              </h2>
              <div className="space-y-3">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-bold">{edu.degree}</h3>
                      <span className="text-xs">{edu.graduationDate}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{edu.institution}</span>
                      <span>{edu.location}</span>
                    </div>
                    {edu.gpa && <p className="mt-1 text-sm">GPA: {edu.gpa}</p>}
                    {edu.description && <p className="mt-1 text-sm">{edu.description}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {projects.length > 0 && (
            <section className="mb-6">
              <h2 className="text-lg font-bold mb-2" style={{ color }}>
                Projects
              </h2>
              <div className="space-y-3">
                {projects.map((project) => (
                  <div key={project.id}>
                    <h3 className="font-bold">{project.name}</h3>
                    {project.technologies && (
                      <div className="text-xs italic mb-1">
                        Technologies: {project.technologies}
                      </div>
                    )}
                    <p className="text-sm">{project.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreativeTemplate;
