
import { ResumeData } from "@/context/ResumeContext";

// This is a client-side simulation of ATS analysis
// In a real app, this would call an API for NLP and AI-based analysis
export const analyzeResume = async (
  resumeData: ResumeData,
  jobDescription: string
): Promise<{
  score: number;
  analysis: {
    keywords: { word: string; found: boolean }[];
    suggestions: string[];
    strengths: string[];
    weaknesses: string[];
  };
}> => {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Extract resume text
  const resumeText = getResumeFullText(resumeData);

  // Extract keywords from job description (simplified)
  const keywordExtractor = (text: string) => {
    // In a real implementation, this would use NLP
    // This is a simplified version that extracts common skills and job terms
    const commonWords = new Set([
      "the", "and", "a", "to", "of", "is", "in", "for", "with", "on", "at", "by", "an", "as", "be", "we", "are", "you",
      "will", "have", "from", "this", "that", "not", "or", "can", "about", "our", "us", "your", "their", "them", "these",
      "those", "but", "it", "its", "all", "some", "any", "across", "what", "when", "where", "why", "how", "than", "then"
    ]);

    return text
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .split(/\s+/)
      .filter(word => word.length > 3 && !commonWords.has(word))
      .filter((v, i, a) => a.indexOf(v) === i) // dedupe
      .slice(0, 15); // limit to top 15 keywords
  };

  const keywords = keywordExtractor(jobDescription);
  
  // Check if each keyword is found in resume
  const keywordMatches = keywords.map(keyword => {
    return {
      word: keyword,
      found: resumeText.toLowerCase().includes(keyword)
    };
  });

  // Calculate match percentage
  const matchedKeywords = keywordMatches.filter(k => k.found).length;
  const keywordScore = Math.round((matchedKeywords / keywords.length) * 100);

  // Content analysis (would be done by AI in real implementation)
  const hasProperSummary = resumeData.profile.summary.length > 30;
  const hasQuantifiedAchievements = resumeData.experience.some(exp => 
    exp.description.includes("%") || 
    /increased|improved|reduced|saved|generated|delivered|achieved/i.test(exp.description)
  );
  const hasRelevantSkills = resumeData.skills.length >= 5;
  const hasRecentExperience = resumeData.experience.length > 0;

  // Generate strengths
  const strengths = [];
  if (matchedKeywords >= keywords.length * 0.6) strengths.push("Good keyword match with job requirements");
  if (hasProperSummary) strengths.push("Professional summary provides a good overview of qualifications");
  if (hasQuantifiedAchievements) strengths.push("Work experience includes quantified achievements");
  if (hasRelevantSkills) strengths.push("Good range of relevant skills listed");
  if (hasRecentExperience) strengths.push("Recent work experience demonstrates current expertise");

  // Generate weaknesses and suggestions
  const suggestions = [];
  if (matchedKeywords < keywords.length * 0.6) {
    suggestions.push(`Add more relevant keywords from job description (${keywordMatches.filter(k => !k.found).map(k => k.word).slice(0, 3).join(", ")}, etc.)`);
  }
  if (!hasProperSummary) {
    suggestions.push("Expand your professional summary to highlight relevant qualifications");
  }
  if (!hasQuantifiedAchievements) {
    suggestions.push("Add measurable achievements with numbers and percentages to your work experience");
  }
  if (!hasRelevantSkills) {
    suggestions.push("Add more skills that match job requirements");
  }
  if (resumeData.experience.some(exp => exp.description.split("\n").length < 3)) {
    suggestions.push("Add more details to your work experience descriptions");
  }

  // Calculate overall score
  // In a real implementation, this would be more sophisticated
  const contentScore = (
    (hasProperSummary ? 20 : 0) +
    (hasQuantifiedAchievements ? 25 : 0) +
    (hasRelevantSkills ? 15 : 0) +
    (hasRecentExperience ? 15 : 0)
  );

  // Overall score is weighted: 60% keywords match, 40% content quality
  const overallScore = Math.round((keywordScore * 0.6) + (contentScore * 0.4));

  return {
    score: overallScore,
    analysis: {
      keywords: keywordMatches,
      suggestions,
      strengths,
      weaknesses: [],
    }
  };
};

// Helper function to extract all text from the resume
const getResumeFullText = (resumeData: ResumeData): string => {
  const { profile, experience, education, skills, projects, certifications } = resumeData;
  
  const profileText = `
    ${profile.name} ${profile.title} ${profile.summary}
  `;
  
  const experienceText = experience.map(job => `
    ${job.title} ${job.company} ${job.location} ${job.description}
  `).join(" ");
  
  const educationText = education.map(edu => `
    ${edu.degree} ${edu.institution} ${edu.location} ${edu.description || ''}
  `).join(" ");
  
  const skillsText = skills.join(" ");
  
  const projectsText = projects.map(project => `
    ${project.name} ${project.description} ${project.technologies || ''}
  `).join(" ");
  
  const certificationsText = certifications.map(cert => `
    ${cert.name} ${cert.issuer}
  `).join(" ");
  
  return `${profileText} ${experienceText} ${educationText} ${skillsText} ${projectsText} ${certificationsText}`;
};
