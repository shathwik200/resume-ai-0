
import React from "react";
import { useResume } from "@/context/ResumeContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PlusCircle, Trash2, MoveUp, MoveDown } from "lucide-react";

const EducationSection = () => {
  const { resumeData, addEducation, updateEducation, removeEducation } = useResume();
  const { education } = resumeData;

  const handleChange = (id: string, field: string, value: string) => {
    updateEducation(id, { [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Education</h3>
        <Button
          onClick={addEducation}
          variant="outline"
          size="sm"
          className="flex items-center gap-1"
        >
          <PlusCircle size={14} />
          Add Education
        </Button>
      </div>

      {education.length === 0 ? (
        <div className="text-center p-4 border rounded-md bg-muted/50">
          <p className="text-muted-foreground">
            No education added yet. Click "Add Education" to begin.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={edu.id} className="relative group">
              <CardHeader className="p-4 pb-0 flex flex-row items-center justify-between">
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-muted rounded-full flex items-center justify-center text-xs font-medium">
                    {index + 1}
                  </span>
                  <h4 className="ml-2 font-medium">{edu.degree || "Degree"}</h4>
                </div>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeEducation(edu.id)}
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
                      <Label htmlFor={`degree-${edu.id}`}>Degree</Label>
                      <Input
                        id={`degree-${edu.id}`}
                        value={edu.degree}
                        onChange={(e) => handleChange(edu.id, "degree", e.target.value)}
                        placeholder="e.g. Bachelor of Science in Computer Science"
                      />
                    </div>
                    <div>
                      <Label htmlFor={`institution-${edu.id}`}>Institution</Label>
                      <Input
                        id={`institution-${edu.id}`}
                        value={edu.institution}
                        onChange={(e) => handleChange(edu.id, "institution", e.target.value)}
                        placeholder="e.g. University of California"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor={`location-${edu.id}`}>Location</Label>
                      <Input
                        id={`location-${edu.id}`}
                        value={edu.location}
                        onChange={(e) => handleChange(edu.id, "location", e.target.value)}
                        placeholder="e.g. Berkeley, CA"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label htmlFor={`graduation-date-${edu.id}`}>Graduation Year</Label>
                        <Input
                          id={`graduation-date-${edu.id}`}
                          value={edu.graduationDate}
                          onChange={(e) => handleChange(edu.id, "graduationDate", e.target.value)}
                          placeholder="e.g. 2020"
                        />
                      </div>
                      <div>
                        <Label htmlFor={`gpa-${edu.id}`}>GPA (Optional)</Label>
                        <Input
                          id={`gpa-${edu.id}`}
                          value={edu.gpa || ""}
                          onChange={(e) => handleChange(edu.id, "gpa", e.target.value)}
                          placeholder="e.g. 3.8/4.0"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor={`description-${edu.id}`}>
                      Description (Optional)
                    </Label>
                    <Textarea
                      id={`description-${edu.id}`}
                      value={edu.description || ""}
                      onChange={(e) => handleChange(edu.id, "description", e.target.value)}
                      placeholder="Relevant coursework, honors, activities, etc."
                      className="min-h-[80px]"
                    />
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

export default EducationSection;
