
import React from "react";
import { useResume } from "@/context/ResumeContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PlusCircle, Trash2, MoveUp, MoveDown } from "lucide-react";

const CertificationsSection = () => {
  const { resumeData, addCertification, updateCertification, removeCertification } = useResume();
  const { certifications } = resumeData;

  const handleChange = (id: string, field: string, value: string) => {
    updateCertification(id, { [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Certifications</h3>
        <Button
          onClick={addCertification}
          variant="outline"
          size="sm"
          className="flex items-center gap-1"
        >
          <PlusCircle size={14} />
          Add Certification
        </Button>
      </div>

      {certifications.length === 0 ? (
        <div className="text-center p-4 border rounded-md bg-muted/50">
          <p className="text-muted-foreground">
            No certifications added yet. Click "Add Certification" to begin.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <Card key={cert.id} className="relative group">
              <CardHeader className="p-4 pb-0 flex flex-row items-center justify-between">
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-muted rounded-full flex items-center justify-center text-xs font-medium">
                    {index + 1}
                  </span>
                  <h4 className="ml-2 font-medium">{cert.name || "Certification"}</h4>
                </div>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeCertification(cert.id)}
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
                    <Label htmlFor={`cert-name-${cert.id}`}>Certification Name</Label>
                    <Input
                      id={`cert-name-${cert.id}`}
                      value={cert.name}
                      onChange={(e) => handleChange(cert.id, "name", e.target.value)}
                      placeholder="e.g. AWS Certified Solutions Architect"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor={`cert-issuer-${cert.id}`}>Issuing Organization</Label>
                      <Input
                        id={`cert-issuer-${cert.id}`}
                        value={cert.issuer}
                        onChange={(e) => handleChange(cert.id, "issuer", e.target.value)}
                        placeholder="e.g. Amazon Web Services"
                      />
                    </div>
                    <div>
                      <Label htmlFor={`cert-date-${cert.id}`}>Date Issued</Label>
                      <Input
                        id={`cert-date-${cert.id}`}
                        value={cert.date}
                        onChange={(e) => handleChange(cert.id, "date", e.target.value)}
                        placeholder="e.g. June 2022"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor={`cert-url-${cert.id}`}>URL (Optional)</Label>
                    <Input
                      id={`cert-url-${cert.id}`}
                      value={cert.url || ""}
                      onChange={(e) => handleChange(cert.id, "url", e.target.value)}
                      placeholder="e.g. https://www.credential.net/12345"
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

export default CertificationsSection;
