
import React from "react";
import { useResume } from "@/context/ResumeContext";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const templates = [
  {
    id: "modern",
    name: "Modern",
    description: "Clean and contemporary design with a sidebar",
  },
  {
    id: "professional",
    name: "Professional",
    description: "Traditional layout ideal for corporate roles",
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "Simple and elegant with focused content",
  },
  {
    id: "creative",
    name: "Creative",
    description: "Distinctive design for creative fields",
  },
];

const colorOptions = [
  "#0EA5E9", // Primary blue
  "#6366F1", // Indigo
  "#8B5CF6", // Violet
  "#EC4899", // Pink
  "#F43F5E", // Rose
  "#F97316", // Orange
  "#10B981", // Emerald
  "#1E293B", // Slate
];

const TemplateSelector = () => {
  const { resumeData, changeTemplate, changeColor } = useResume();

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Choose Template</h3>
        <RadioGroup
          value={resumeData.template}
          onValueChange={(value) => changeTemplate(value as any)}
          className="grid grid-cols-2 gap-3"
        >
          {templates.map((template) => (
            <div key={template.id}>
              <RadioGroupItem
                value={template.id}
                id={template.id}
                className="sr-only"
              />
              <Label
                htmlFor={template.id}
                className={cn(
                  "flex flex-col items-center justify-between rounded-md border-2 border-muted p-4 hover:border-accent cursor-pointer",
                  resumeData.template === template.id && "border-primary"
                )}
              >
                <div className="w-full h-12 mb-3 bg-muted rounded flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">
                    {template.name}
                  </span>
                </div>
                <div className="w-full text-center">
                  <span className="text-sm font-medium">{template.name}</span>
                </div>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Color Scheme</h3>
        <div className="flex flex-wrap gap-3">
          {colorOptions.map((color) => (
            <button
              key={color}
              onClick={() => changeColor(color)}
              className={cn(
                "w-8 h-8 rounded-full transition-all",
                resumeData.color === color
                  ? "ring-2 ring-offset-2 ring-primary scale-110"
                  : "hover:scale-110"
              )}
              style={{ backgroundColor: color }}
              aria-label={`Select ${color} color`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateSelector;
