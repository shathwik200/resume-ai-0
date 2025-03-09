import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type ResumeSection = 'profile' | 'experience' | 'education' | 'skills' | 'projects' | 'certifications';

export interface ResumeExperience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

export interface ResumeEducation {
  id: string;
  degree: string;
  institution: string;
  location: string;
  graduationDate: string;
  gpa?: string;
  description?: string;
}

export interface ResumeProfile {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  website?: string;
  summary: string;
}

export interface ResumeData {
  profile: ResumeProfile;
  experience: ResumeExperience[];
  education: ResumeEducation[];
  skills: string[];
  projects: {
    id: string;
    name: string;
    description: string;
    url?: string;
    technologies?: string;
  }[];
  certifications: {
    id: string;
    name: string;
    issuer: string;
    date: string;
    url?: string;
  }[];
  template: 'modern' | 'professional' | 'minimal' | 'creative';
  color: string;
}

const defaultResumeData: ResumeData = {
  profile: {
    name: 'Your Name',
    title: 'Professional Title',
    email: 'your.email@example.com',
    phone: '(123) 456-7890',
    location: 'City, State',
    linkedin: 'linkedin.com/in/yourprofile',
    website: '',
    summary: 'Experienced professional with a track record of success in...'
  },
  experience: [
    {
      id: '1',
      title: 'Senior Position',
      company: 'Current Company',
      location: 'City, State',
      startDate: '2021-01',
      endDate: '',
      current: true,
      description: '• Led cross-functional teams to deliver successful projects\n• Improved process efficiency by 30%\n• Managed relationships with key stakeholders'
    },
    {
      id: '2',
      title: 'Previous Position',
      company: 'Previous Company',
      location: 'City, State',
      startDate: '2018-06',
      endDate: '2020-12',
      current: false,
      description: '• Developed and implemented strategic initiatives\n• Collaborated with multiple departments\n• Increased revenue by 25% through new initiatives'
    }
  ],
  education: [
    {
      id: '1',
      degree: 'Bachelor of Science',
      institution: 'University Name',
      location: 'City, State',
      graduationDate: '2018',
      gpa: '3.8',
      description: 'Relevant coursework: Business Management, Data Analysis'
    }
  ],
  skills: [
    'Project Management',
    'Leadership',
    'Strategic Planning',
    'Team Building',
    'Problem Solving',
    'Communication',
    'Microsoft Office Suite',
    'Data Analysis'
  ],
  projects: [
    {
      id: '1',
      name: 'Major Project',
      description: 'Led development of a key initiative that improved customer satisfaction by 40%',
      technologies: 'Project Management, Agile'
    }
  ],
  certifications: [
    {
      id: '1',
      name: 'Professional Certification',
      issuer: 'Industry Association',
      date: '2020',
      url: ''
    }
  ],
  template: 'modern',
  color: '#0EA5E9'
};

interface ResumeContextType {
  resumeData: ResumeData;
  updateProfile: (profile: Partial<ResumeProfile>) => void;
  addExperience: () => void;
  updateExperience: (id: string, data: Partial<ResumeExperience>) => void;
  removeExperience: (id: string) => void;
  addEducation: () => void;
  updateEducation: (id: string, data: Partial<ResumeEducation>) => void;
  removeEducation: (id: string) => void;
  updateSkills: (skills: string[]) => void;
  addProject: () => void;
  updateProject: (id: string, data: Partial<ResumeData['projects'][0]>) => void;
  removeProject: (id: string) => void;
  addCertification: () => void;
  updateCertification: (id: string, data: Partial<ResumeData['certifications'][0]>) => void;
  removeCertification: (id: string) => void;
  changeTemplate: (template: ResumeData['template']) => void;
  changeColor: (color: string) => void;
  atsScore: number;
  updateATSScore: (score: number) => void;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const ResumeProvider = ({ 
  children, 
  initialTemplate = null 
}: { 
  children: ReactNode;
  initialTemplate?: string | null;
}) => {
  const [resumeData, setResumeData] = useState<ResumeData>(() => {
    const saved = localStorage.getItem('resumeData');
    const savedData = saved ? JSON.parse(saved) : defaultResumeData;
    
    if (initialTemplate && ['modern', 'professional', 'minimal', 'creative'].includes(initialTemplate)) {
      savedData.template = initialTemplate;
    }
    
    return savedData;
  });

  const [atsScore, setATSScore] = useState(0);

  useEffect(() => {
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
  }, [resumeData]);

  const updateProfile = (profile: Partial<ResumeProfile>) => {
    setResumeData((prev) => ({
      ...prev,
      profile: { ...prev.profile, ...profile }
    }));
  };

  const generateId = () => Math.random().toString(36).substring(2, 9);

  const addExperience = () => {
    const newExperience: ResumeExperience = {
      id: generateId(),
      title: 'Position Title',
      company: 'Company Name',
      location: 'City, State',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    };
    setResumeData((prev) => ({
      ...prev,
      experience: [newExperience, ...prev.experience]
    }));
  };

  const updateExperience = (id: string, data: Partial<ResumeExperience>) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) =>
        exp.id === id ? { ...exp, ...data } : exp
      )
    }));
  };

  const removeExperience = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.filter((exp) => exp.id !== id)
    }));
  };

  const addEducation = () => {
    const newEducation: ResumeEducation = {
      id: generateId(),
      degree: 'Degree Name',
      institution: 'Institution Name',
      location: 'City, State',
      graduationDate: '',
      description: ''
    };
    setResumeData((prev) => ({
      ...prev,
      education: [newEducation, ...prev.education]
    }));
  };

  const updateEducation = (id: string, data: Partial<ResumeEducation>) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.map((edu) =>
        edu.id === id ? { ...edu, ...data } : edu
      )
    }));
  };

  const removeEducation = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.filter((edu) => edu.id !== id)
    }));
  };

  const updateSkills = (skills: string[]) => {
    setResumeData((prev) => ({
      ...prev,
      skills
    }));
  };

  const addProject = () => {
    const newProject = {
      id: generateId(),
      name: 'Project Name',
      description: 'Project Description',
      technologies: ''
    };
    setResumeData((prev) => ({
      ...prev,
      projects: [...prev.projects, newProject]
    }));
  };

  const updateProject = (id: string, data: Partial<ResumeData['projects'][0]>) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.map((project) =>
        project.id === id ? { ...project, ...data } : project
      )
    }));
  };

  const removeProject = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.filter((project) => project.id !== id)
    }));
  };

  const addCertification = () => {
    const newCertification = {
      id: generateId(),
      name: 'Certification Name',
      issuer: 'Issuer',
      date: '',
      url: ''
    };
    setResumeData((prev) => ({
      ...prev,
      certifications: [...prev.certifications, newCertification]
    }));
  };

  const updateCertification = (id: string, data: Partial<ResumeData['certifications'][0]>) => {
    setResumeData((prev) => ({
      ...prev,
      certifications: prev.certifications.map((cert) =>
        cert.id === id ? { ...cert, ...data } : cert
      )
    }));
  };

  const removeCertification = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      certifications: prev.certifications.filter((cert) => cert.id !== id)
    }));
  };

  const changeTemplate = (template: ResumeData['template']) => {
    setResumeData((prev) => ({
      ...prev,
      template
    }));
  };

  const changeColor = (color: string) => {
    setResumeData((prev) => ({
      ...prev,
      color
    }));
  };

  const updateATSScore = (score: number) => {
    setATSScore(score);
  };

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        updateProfile,
        addExperience,
        updateExperience,
        removeExperience,
        addEducation,
        updateEducation,
        removeEducation,
        updateSkills,
        addProject,
        updateProject,
        removeProject,
        addCertification,
        updateCertification,
        removeCertification,
        changeTemplate,
        changeColor,
        atsScore,
        updateATSScore
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
};
