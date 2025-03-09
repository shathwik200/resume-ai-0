
import React from "react";
import { ResumeData } from "@/context/ResumeContext";
import { MapPin, Mail, Phone, Globe, Linkedin } from "lucide-react";

interface ModernTemplateProps {
  data: ResumeData;
}

const ModernTemplate: React.FC<ModernTemplateProps> = ({ data }) => {
  const { profile, experience, education, skills, projects, certifications, color } = data;

  return (
    <div className="modern-template text-resume-secondary text-sm h-full">
      <header className="mb-6">
        <h1 className="text-3xl font-bold" style={{ color }}>
          {profile.name}
        </h1>
        <h2 className="text-xl mt-1">{profile.title}</h2>
        
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {profile.email && (
            <div className="flex items-center gap-1">
              <Mail size={14} style={{ color }} />
              <span>{profile.email}</span>
            </div>
          )}
          {profile.phone && (
            <div className="flex items-center gap-1">
              <Phone size={14} style={{ color }} />
              <span>{profile.phone}</span>
            </div>
          )}
          {profile.location && (
            <div className="flex items-center gap-1">
              <MapPin size={14} style={{ color }} />
              <span>{profile.location}</span>
            </div>
          )}
          {profile.linkedin && (
            <div className="flex items-center gap-1">
              <Linkedin size={14} style={{ color }} />
              <span>{profile.linkedin}</span>
            </div>
          )}
          {profile.website && (
            <div className="flex items-center gap-1">
              <Globe size={14} style={{ color }} />
              <span>{profile.website}</span>
            </div>
          )}
        </div>
      </header>

      {profile.summary && (
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2 pb-1 border-b" style={{ color, borderColor: color }}>
            Summary
          </h2>
          <p>{profile.summary}</p>
        </section>
      )}

      {experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2 pb-1 border-b" style={{ color, borderColor: color }}>
            Experience
          </h2>
          <div className="space-y-4">
            {experience.map((job) => (
              <div key={job.id}>
                <div className="flex justify-between">
                  <h3 className="font-bold">{job.title}</h3>
                  <span className="text-xs">
                    {job.startDate} - {job.current ? "Present" : job.endDate}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{job.company}</span>
                  <span>{job.location}</span>
                </div>
                <p className="mt-1 whitespace-pre-line">{job.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2 pb-1 border-b" style={{ color, borderColor: color }}>
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between">
                  <h3 className="font-bold">{edu.degree}</h3>
                  <span className="text-xs">{edu.graduationDate}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{edu.institution}</span>
                  <span>{edu.location}</span>
                </div>
                {edu.gpa && <p className="mt-1">GPA: {edu.gpa}</p>}
                {edu.description && <p className="mt-1">{edu.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="grid grid-cols-2 gap-6">
        {skills.length > 0 && (
          <section className="mb-6 col-span-1">
            <h2 className="text-lg font-bold mb-2 pb-1 border-b" style={{ color, borderColor: color }}>
              Skills
            </h2>
            <ul className="list-disc list-inside space-y-1">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>
        )}

        {certifications.length > 0 && (
          <section className="mb-6 col-span-1">
            <h2 className="text-lg font-bold mb-2 pb-1 border-b" style={{ color, borderColor: color }}>
              Certifications
            </h2>
            <div className="space-y-2">
              {certifications.map((cert) => (
                <div key={cert.id}>
                  <div className="font-bold">{cert.name}</div>
                  <div className="text-sm flex justify-between">
                    <span>{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {projects.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2 pb-1 border-b" style={{ color, borderColor: color }}>
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
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ModernTemplate;
