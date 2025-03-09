
import React from "react";
import { ResumeData } from "@/context/ResumeContext";
import { MapPin, Mail, Phone, Globe, Linkedin } from "lucide-react";

interface ProfessionalTemplateProps {
  data: ResumeData;
}

const ProfessionalTemplate: React.FC<ProfessionalTemplateProps> = ({ data }) => {
  const { profile, experience, education, skills, projects, certifications, color } = data;

  return (
    <div className="professional-template h-full text-resume-secondary text-sm">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold uppercase tracking-wide" style={{ color }}>
          {profile.name}
        </h1>
        <h2 className="text-xl mt-1">{profile.title}</h2>
        
        <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
          {profile.email && (
            <div className="flex items-center gap-1">
              <Mail size={14} />
              <span>{profile.email}</span>
            </div>
          )}
          {profile.phone && (
            <div className="flex items-center gap-1">
              <Phone size={14} />
              <span>{profile.phone}</span>
            </div>
          )}
          {profile.location && (
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              <span>{profile.location}</span>
            </div>
          )}
          {profile.linkedin && (
            <div className="flex items-center gap-1">
              <Linkedin size={14} />
              <span>{profile.linkedin}</span>
            </div>
          )}
          {profile.website && (
            <div className="flex items-center gap-1">
              <Globe size={14} />
              <span>{profile.website}</span>
            </div>
          )}
        </div>
      </header>

      {profile.summary && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wide mb-2 py-1 border-y border-gray-300">
            Professional Summary
          </h2>
          <p>{profile.summary}</p>
        </section>
      )}

      {experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wide mb-2 py-1 border-y border-gray-300">
            Professional Experience
          </h2>
          <div className="space-y-4">
            {experience.map((job) => (
              <div key={job.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold" style={{ color }}>
                    {job.company}
                  </h3>
                  <span className="text-xs font-medium">
                    {job.startDate} - {job.current ? "Present" : job.endDate}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium italic">{job.title}</span>
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
          <h2 className="text-lg font-bold uppercase tracking-wide mb-2 py-1 border-y border-gray-300">
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold" style={{ color }}>
                    {edu.institution}
                  </h3>
                  <span className="text-xs font-medium">{edu.graduationDate}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium italic">{edu.degree}</span>
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
            <h2 className="text-lg font-bold uppercase tracking-wide mb-2 py-1 border-y border-gray-300">
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
            <h2 className="text-lg font-bold uppercase tracking-wide mb-2 py-1 border-y border-gray-300">
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
          <h2 className="text-lg font-bold uppercase tracking-wide mb-2 py-1 border-y border-gray-300">
            Projects
          </h2>
          <div className="space-y-3">
            {projects.map((project) => (
              <div key={project.id}>
                <h3 className="font-bold" style={{ color }}>
                  {project.name}
                </h3>
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

export default ProfessionalTemplate;
