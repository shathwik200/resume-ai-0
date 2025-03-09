
import React from "react";
import { useResume } from "@/context/ResumeContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PlusCircle, Trash2, MoveUp, MoveDown } from "lucide-react";

const ProjectsSection = () => {
  const { resumeData, addProject, updateProject, removeProject } = useResume();
  const { projects } = resumeData;

  const handleChange = (id: string, field: string, value: string) => {
    updateProject(id, { [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Projects</h3>
        <Button
          onClick={addProject}
          variant="outline"
          size="sm"
          className="flex items-center gap-1"
        >
          <PlusCircle size={14} />
          Add Project
        </Button>
      </div>

      {projects.length === 0 ? (
        <div className="text-center p-4 border rounded-md bg-muted/50">
          <p className="text-muted-foreground">
            No projects added yet. Click "Add Project" to begin.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {projects.map((project, index) => (
            <Card key={project.id} className="relative group">
              <CardHeader className="p-4 pb-0 flex flex-row items-center justify-between">
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-muted rounded-full flex items-center justify-center text-xs font-medium">
                    {index + 1}
                  </span>
                  <h4 className="ml-2 font-medium">{project.name || "Project"}</h4>
                </div>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeProject(project.id)}
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
                  <div>
                    <Label htmlFor={`project-name-${project.id}`}>Project Name</Label>
                    <Input
                      id={`project-name-${project.id}`}
                      value={project.name}
                      onChange={(e) => handleChange(project.id, "name", e.target.value)}
                      placeholder="e.g. E-commerce Website Redesign"
                    />
                  </div>

                  <div>
                    <Label htmlFor={`project-url-${project.id}`}>URL (Optional)</Label>
                    <Input
                      id={`project-url-${project.id}`}
                      value={project.url || ""}
                      onChange={(e) => handleChange(project.id, "url", e.target.value)}
                      placeholder="e.g. https://github.com/yourusername/project"
                    />
                  </div>

                  <div>
                    <Label htmlFor={`project-technologies-${project.id}`}>
                      Technologies Used
                    </Label>
                    <Input
                      id={`project-technologies-${project.id}`}
                      value={project.technologies || ""}
                      onChange={(e) => handleChange(project.id, "technologies", e.target.value)}
                      placeholder="e.g. React, Node.js, MongoDB"
                    />
                  </div>

                  <div>
                    <Label htmlFor={`project-description-${project.id}`}>
                      Description
                    </Label>
                    <Textarea
                      id={`project-description-${project.id}`}
                      value={project.description}
                      onChange={(e) => handleChange(project.id, "description", e.target.value)}
                      placeholder="Describe the project, your role, and key accomplishments."
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

export default ProjectsSection;
