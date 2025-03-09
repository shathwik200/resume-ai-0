
import React, { useState } from "react";
import { useResume } from "@/context/ResumeContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Sparkles } from "lucide-react";
import { toast } from "sonner";

const SkillsSection = () => {
  const { resumeData, updateSkills } = useResume();
  const { skills } = resumeData;
  const [newSkill, setNewSkill] = useState("");

  const handleAdd = () => {
    const trimmedSkill = newSkill.trim();
    if (!trimmedSkill) return;
    
    if (skills.includes(trimmedSkill)) {
      toast.error("This skill is already on your list");
      return;
    }
    
    updateSkills([...skills, trimmedSkill]);
    setNewSkill("");
  };

  const handleRemove = (skillToRemove: string) => {
    updateSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    }
  };

  const handleAISuggest = () => {
    // In a real app, this would call an AI service to suggest relevant skills
    toast.success("AI skill suggestions will be available soon!");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1">
        <Label htmlFor="skill-input">Add Skills</Label>
        <div className="flex items-center gap-2">
          <Input
            id="skill-input"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter a skill and press Enter"
          />
          <Button onClick={handleAdd} className="whitespace-nowrap">
            Add
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          Press Enter after each skill to add it to your list
        </p>
      </div>

      <div className="flex justify-between items-center">
        <Label>Skills List</Label>
        <Button
          variant="outline"
          size="sm"
          className="h-7 text-xs flex gap-1"
          onClick={handleAISuggest}
        >
          <Sparkles size={12} />
          Suggest Relevant Skills
        </Button>
      </div>

      {skills.length === 0 ? (
        <div className="text-center p-4 border rounded-md bg-muted/50">
          <p className="text-muted-foreground">
            No skills added yet. Start typing above to add skills.
          </p>
        </div>
      ) : (
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="py-2 pl-3 pr-2 flex items-center gap-1">
              {skill}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 ml-1 rounded-full"
                onClick={() => handleRemove(skill)}
              >
                <X size={10} />
              </Button>
            </Badge>
          ))}
        </div>
      )}

      <div className="border-t pt-4">
        <h4 className="text-sm font-medium mb-2">Skills Tips</h4>
        <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
          <li>Include both technical and soft skills</li>
          <li>Prioritize skills mentioned in the job description</li>
          <li>Be specific (e.g., "JavaScript" instead of "Programming")</li>
          <li>Aim for 8-12 relevant skills for most resumes</li>
        </ul>
      </div>
    </div>
  );
};

export default SkillsSection;
