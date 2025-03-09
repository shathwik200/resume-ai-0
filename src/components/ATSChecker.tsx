
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle, AlertTriangle, RefreshCw, Zap, ThumbsUp } from "lucide-react";
import { useResume } from "@/context/ResumeContext";
import { analyzeResume } from "@/utils/atsAnalyzer";

const ATSChecker = () => {
  const { resumeData, atsScore, updateATSScore } = useResume();
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<{
    keywords: { word: string; found: boolean }[];
    suggestions: string[];
    strengths: string[];
    weaknesses: string[];
  } | null>(null);

  const handleAnalyze = async () => {
    if (!jobDescription.trim()) {
      return;
    }

    setLoading(true);
    try {
      // In a real implementation, this would call an API
      const result = await analyzeResume(resumeData, jobDescription);
      setAnalysis(result.analysis);
      updateATSScore(result.score);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getScoreColor = () => {
    if (atsScore >= 80) return "text-green-500";
    if (atsScore >= 60) return "text-amber-500";
    return "text-red-500";
  };

  const getScoreIcon = () => {
    if (atsScore >= 80) return <CheckCircle className="text-green-500" />;
    if (atsScore >= 60) return <AlertTriangle className="text-amber-500" />;
    return <AlertCircle className="text-red-500" />;
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Job Description</CardTitle>
            <CardDescription>
              Paste the job description to analyze your resume against it
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Paste job description here..."
              className="min-h-[200px]"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            />
          </CardContent>
          <CardFooter>
            <Button
              onClick={handleAnalyze}
              disabled={loading || !jobDescription.trim()}
              className="w-full bg-resume-primary hover:bg-resume-primary/90"
            >
              {loading ? (
                <>
                  <RefreshCw size={16} className="mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Zap size={16} className="mr-2" />
                  Analyze Resume
                </>
              )}
            </Button>
          </CardFooter>
        </Card>

        {analysis && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Keyword Analysis</span>
                <Badge variant="outline" className="ml-2">
                  {analysis.keywords.filter(k => k.found).length}/{analysis.keywords.length} Found
                </Badge>
              </CardTitle>
              <CardDescription>
                Important keywords from the job description
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {analysis.keywords.map((keyword, index) => (
                  <Badge
                    key={index}
                    variant={keyword.found ? "default" : "outline"}
                    className={keyword.found ? "bg-green-500" : "text-muted-foreground"}
                  >
                    {keyword.word}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <div className="space-y-6">
        {atsScore > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>ATS Compatibility Score</CardTitle>
              <CardDescription>
                How well your resume matches the job description
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="inline-flex items-center justify-center p-4 bg-muted rounded-full mb-3">
                  {getScoreIcon()}
                </div>
                <div className={`text-5xl font-bold ${getScoreColor()}`}>
                  {atsScore}/100
                </div>
              </div>
              
              <Progress value={atsScore} className="h-2 w-full" />
              
              <div className="grid grid-cols-3 text-center pt-2">
                <div>
                  <div className="text-red-500 font-medium">0-59</div>
                  <div className="text-xs text-muted-foreground">Poor</div>
                </div>
                <div>
                  <div className="text-amber-500 font-medium">60-79</div>
                  <div className="text-xs text-muted-foreground">Good</div>
                </div>
                <div>
                  <div className="text-green-500 font-medium">80-100</div>
                  <div className="text-xs text-muted-foreground">Excellent</div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {analysis && (
          <>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ThumbsUp className="mr-2 text-green-500" size={18} />
                  Strengths
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {analysis.strengths.map((strength, index) => (
                    <li key={index}>{strength}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertCircle className="mr-2 text-amber-500" size={18} />
                  Improvement Suggestions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {analysis.suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
};

export default ATSChecker;
