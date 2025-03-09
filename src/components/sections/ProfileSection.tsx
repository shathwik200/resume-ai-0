
import React from "react";
import { useResume } from "@/context/ResumeContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { toast } from "sonner";

const ProfileSection = () => {
  const { resumeData, updateProfile } = useResume();
  const { profile } = resumeData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    updateProfile({ [e.target.name]: e.target.value });
  };

  const handleAIOptimize = () => {
    // In a real app, this would call an AI service to generate a better summary
    toast.success("AI optimization will be available soon!");
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            value={profile.name}
            onChange={handleChange}
            placeholder="John Doe"
          />
        </div>
        <div>
          <Label htmlFor="title">Professional Title</Label>
          <Input
            id="title"
            name="title"
            value={profile.title}
            onChange={handleChange}
            placeholder="Software Engineer"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={profile.email}
            onChange={handleChange}
            placeholder="john.doe@example.com"
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            placeholder="(123) 456-7890"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            name="location"
            value={profile.location}
            onChange={handleChange}
            placeholder="City, State"
          />
        </div>
        <div>
          <Label htmlFor="linkedin">LinkedIn (Optional)</Label>
          <Input
            id="linkedin"
            name="linkedin"
            value={profile.linkedin || ""}
            onChange={handleChange}
            placeholder="linkedin.com/in/johndoe"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="website">Portfolio Website (Optional)</Label>
        <Input
          id="website"
          name="website"
          value={profile.website || ""}
          onChange={handleChange}
          placeholder="yourwebsite.com"
        />
      </div>

      <div>
        <div className="flex justify-between mb-1">
          <Label htmlFor="summary">Professional Summary</Label>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 text-xs flex gap-1"
            onClick={handleAIOptimize}
          >
            <Sparkles size={12} />
            AI Optimize
          </Button>
        </div>
        <Textarea
          id="summary"
          name="summary"
          value={profile.summary}
          onChange={handleChange}
          placeholder="Experienced professional with a proven track record..."
          className="min-h-[100px]"
        />
        <p className="text-xs text-muted-foreground mt-1">
          A concise overview of your professional background and key qualifications (3-5 sentences recommended).
        </p>
      </div>
    </div>
  );
};

export default ProfileSection;
