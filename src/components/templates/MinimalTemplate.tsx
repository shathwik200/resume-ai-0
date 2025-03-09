
import React from "react";
import { ResumeData } from "@/context/ResumeContext";
import { MapPin, Mail, Phone, Globe, Linkedin } from "lucide-react";

interface MinimalTemplateProps {
  data: ResumeData;
}

const MinimalTemplate: React.FC<MinimalTemplateProps> = ({ data }) => {
  const { profile, experience, education, skills, projects, certifications, color } = data;

  return (
    <div className="minimal-template h-full text-resume-secondary text-sm">
      <header className="mb-6">
        <h1 className="text-2xl font-bold" style={{ color }}>
          {profile.name}
        </h1>
        <p className="text-sm mt-1 italic">{profile.title}</p>
        
        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs">
          {profile.email && (
            <div className="flex items-center gap-1">
              <Mail size={12} />
              <span>{profile.email}</span>
            </div>
          )}
          {profile.phone && (
            <div className="flex items-center gap-1">
              <Phone size={12} />
              <span>{profile.phone}</span>
            </div>
          )}
          {profile.location && (
            <div className="flex items-center gap-1">
              <MapPin size={12} />
              <span>{profile.location}</span>
            </div>
          )}
          {profile.linkedin && (
            <div className="flex items-center gap-1">
              <Linkedin size={12} />
              <span>{profile.linkedin}</span>
            </div>
          )}
          {profile.website && (
            <div className="flex items-center gap-1">
              <Globe size={12} />
              <span>{profile.website}</span>
            </div>
          )}
        </div>
      </header>

      {profile.summary && (
        <section className="mb-4">
          <h2 className="text-md font-medium mb-1" style={{ color }}>
            Summary
          </h2>
          <p className="text-xs">{profile.summary}</p>
        </section>
      )}

      {experience.length > 0 && (
        <section className="mb-4">
          <h2 className="text-md font-medium mb-1" style={{ color }}>
            Experience
          </h2>
          <div className="space-y-3">
            {experience.map((job) => (
              <div key={job.id} className="text-xs">
                <div className="flex justify-between">
                  <h3 className="font-medium">{job.title}</h3>
                  <span>
                    {job.startDate} - {job.current ? "Present" : job.endDate}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>{job.company}</span>
                  <span>{job.location}</span>
                </div>
                <p className="mt-1 whitespace-pre-line">{job.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="grid grid-cols-2 gap-4">
        {education.length > 0 && (
          <section className="mb-4 col-span-1">
            <h2 className="text-md font-medium mb-1" style={{ color }}>
              Education
            </h2>
            <div className="space-y-2">
              {education.map((edu) => (
                <div key={edu.id} className="text-xs">
                  <div className="font-medium">{edu.degree}</div>
                  <div>{edu.institution}</div>
                  <div className="flex justify-between">
                    <span>{edu.location}</span>
                    <span>{edu.graduationDate}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {skills.length > 0 && (
          <section className="mb-4 col-span-1">
            <h2 className="text-md font-medium mb-1" style={{ color }}>
              Skills
            </h2>
            <div className="flex flex-wrap gap-1 text-xs">
              {skills.map((skill, index) => (
                <span key={index} className="px-2 py-1 rounded-full bg-gray-100">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {projects.length > 0 && (
          <section className="mb-4 col-span-1">
            <h2 className="text-md font-medium mb-1" style={{ color }}>
              Projects
            </h2>
            <div className="space-y-2 text-xs">
              {projects.map((project) => (
                <div key={project.id}>
                  <div className="font-medium">{project.name}</div>
                  <p>{project.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {certifications.length > 0 && (
          <section className="mb-4 col-span-1">
            <h2 className="text-md font-medium mb-1" style={{ color }}>
              Certifications
            </h2>
            <div className="space-y-2 text-xs">
              {certifications.map((cert) => (
                <div key={cert.id}>
                  <div className="font-medium">{cert.name}</div>
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
    </div>
  );
};

export default MinimalTemplate;
