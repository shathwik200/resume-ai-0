
import React from "react";
import { useResume } from "@/context/ResumeContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PlusCircle, Trash2, MoveUp, MoveDown, Sparkles } from "lucide-react";
import { toast } from "sonner";

const ExperienceSection = () => {
  const { resumeData, addExperience, updateExperience, removeExperience } = useResume();
  const { experience } = resumeData;

  const handleChange = (id: string, field: string, value: string | boolean) => {
    updateExperience(id, { [field]: value });
  };

  const handleAIOptimize = (id: string) => {
    // In a real app, this would call an AI service to improve the description
    toast.success("AI optimization will be available soon!");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Work Experience</h3>
        <Button
          onClick={addExperience}
          variant="outline"
          size="sm"
          className="flex items-center gap-1"
        >
          <PlusCircle size={14} />
          Add Experience
        </Button>
      </div>

      {experience.length === 0 ? (
        <div className="text-center p-4 border rounded-md bg-muted/50">
          <p className="text-muted-foreground">
            No work experience added yet. Click "Add Experience" to begin.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <Card key={exp.id} className="relative group">
              <CardHeader className="p-4 pb-0 flex flex-row items-center justify-between">
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-muted rounded-full flex items-center justify-center text-xs font-medium">
                    {index + 1}
                  </span>
                  <h4 className="ml-2 font-medium">{exp.title || "Position"}</h4>
                </div>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeExperience(exp.id)}
                    className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 size={14} />
                  </Button>
                  {/* Reordering buttons - would implement drag functionality in real app */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <MoveUp size={14} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <MoveDown size={14} />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor={`title-${exp.id}`}>Job Title</Label>
                      <Input
                        id={`title-${exp.id}`}
                        value={exp.title}
                        onChange={(e) => handleChange(exp.id, "title", e.target.value)}
                        placeholder="e.g. Senior Product Manager"
                      />
                    </div>
                    <div>
                      <Label htmlFor={`company-${exp.id}`}>Company</Label>
                      <Input
                        id={`company-${exp.id}`}
                        value={exp.company}
                        onChange={(e) => handleChange(exp.id, "company", e.target.value)}
                        placeholder="e.g. Acme Corporation"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor={`location-${exp.id}`}>Location</Label>
                      <Input
                        id={`location-${exp.id}`}
                        value={exp.location}
                        onChange={(e) => handleChange(exp.id, "location", e.target.value)}
                        placeholder="e.g. New York, NY"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label htmlFor={`start-date-${exp.id}`}>Start Date</Label>
                        <Input
                          id={`start-date-${exp.id}`}
                          value={exp.startDate}
                          onChange={(e) => handleChange(exp.id, "startDate", e.target.value)}
                          placeholder="MM/YYYY"
                        />
                      </div>
                      <div>
                        <Label htmlFor={`end-date-${exp.id}`}>End Date</Label>
                        <Input
                          id={`end-date-${exp.id}`}
                          value={exp.endDate}
                          onChange={(e) => handleChange(exp.id, "endDate", e.target.value)}
                          placeholder="MM/YYYY"
                          disabled={exp.current}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={`current-${exp.id}`}
                      checked={exp.current}
                      onCheckedChange={(checked) => 
                        handleChange(exp.id, "current", checked === true)
                      }
                    />
                    <Label htmlFor={`current-${exp.id}`}>
                      I currently work here
                    </Label>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <Label htmlFor={`description-${exp.id}`}>Description</Label>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 text-xs flex gap-1"
                        onClick={() => handleAIOptimize(exp.id)}
                      >
                        <Sparkles size={12} />
                        AI Enhance
                      </Button>
                    </div>
                    <Textarea
                      id={`description-${exp.id}`}
                      value={exp.description}
                      onChange={(e) => handleChange(exp.id, "description", e.target.value)}
                      placeholder="• Describe your responsibilities and achievements&#10;• Use bullet points starting with action verbs&#10;• Include specific metrics and outcomes"
                      className="min-h-[120px]"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Use bullet points and action verbs. Include metrics when possible.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceSection;
