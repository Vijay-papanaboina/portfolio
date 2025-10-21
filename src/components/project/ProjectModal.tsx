import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectModal({
  project,
  open,
  onOpenChange,
}: ProjectModalProps) {
  if (!project) return null;

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "Advanced":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "Intermediate":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "Foundational":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      default:
        return "";
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="!max-w-[1400px] w-[95vw] md:w-[75vw] lg:w-[65vw] sm:!max-w-[1400px] max-h-[90vh] overflow-y-auto scrollbar-hide border-2 border-primary/20 shadow-2xl bg-background/95 backdrop-blur-sm">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <DialogTitle className="text-2xl">{project.title}</DialogTitle>
              <Badge className={getComplexityColor(project.complexity)}>
                {project.complexity}
              </Badge>
            </div>
          </div>
          <p className="text-muted-foreground pt-2">{project.description}</p>
        </DialogHeader>

        <div className="space-y-6 py-4 pr-2">
          {/* Repositories */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Repositories</h3>
            <div className="space-y-3">
              {project.repos.map((repo, index) => {
                const repoColors = [
                  "border-l-4 border-l-purple-400 bg-purple-50/30 dark:bg-purple-950/10",
                  "border-l-4 border-l-blue-400 bg-blue-50/30 dark:bg-blue-950/10",
                  "border-l-4 border-l-green-400 bg-green-50/30 dark:bg-green-950/10",
                  "border-l-4 border-l-cyan-400 bg-cyan-50/30 dark:bg-cyan-950/10",
                ];
                const repoColorClass = repoColors[index % repoColors.length];

                return (
                  <Card key={index} className={repoColorClass}>
                    <CardContent className="pt-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <code className="font-semibold text-sm bg-muted px-2 py-1 rounded">
                              {repo.name}
                            </code>
                            {project.githubLinks &&
                              project.githubLinks[index] && (
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-7 px-2"
                                  asChild
                                >
                                  <a
                                    href={project.githubLinks[index]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="gap-1.5 text-xs"
                                  >
                                    <ExternalLink className="h-3 w-3" />
                                    View on GitHub
                                  </a>
                                </Button>
                              )}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {repo.purpose}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {repo.tech}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <Separator />

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Key Features</h3>
            <ul className="space-y-2 text-sm">
              {project.features.map((feature, index) => {
                const bulletColors = [
                  "text-purple-500",
                  "text-blue-500",
                  "text-green-500",
                  "text-cyan-500",
                  "text-pink-500",
                  "text-indigo-500",
                ];
                const bulletColor = bulletColors[index % bulletColors.length];

                return (
                  <li key={index} className="flex gap-2">
                    <span className={`${bulletColor} mt-0.5 font-bold`}>•</span>
                    <span>{feature}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <Separator />

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => {
                const colors = [
                  "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/30 dark:text-purple-300 dark:border-purple-800",
                  "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/30 dark:text-blue-300 dark:border-blue-800",
                  "bg-green-50 text-green-700 border-green-200 dark:bg-green-950/30 dark:text-green-300 dark:border-green-800",
                  "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/30 dark:text-cyan-300 dark:border-cyan-800",
                  "bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-950/30 dark:text-pink-300 dark:border-pink-800",
                  "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/30 dark:text-indigo-300 dark:border-indigo-800",
                  "bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/30 dark:text-teal-300 dark:border-teal-800",
                  "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/30 dark:text-orange-300 dark:border-orange-800",
                ];
                const colorClass = colors[index % colors.length];

                return (
                  <Badge
                    key={tech}
                    variant="outline"
                    className={`${colorClass} border transition-colors`}
                  >
                    {tech}
                  </Badge>
                );
              })}
            </div>
          </div>

          {/* Key Implementation Details */}
          {project.keyDetails && project.keyDetails.length > 0 && (
            <>
              <Separator />
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Key Implementation Details
                </h3>
                <ul className="space-y-2 text-sm">
                  {project.keyDetails.map((detail, index) => {
                    const bulletColors = [
                      "text-purple-500",
                      "text-blue-500",
                      "text-green-500",
                      "text-cyan-500",
                      "text-pink-500",
                      "text-indigo-500",
                    ];
                    const bulletColor =
                      bulletColors[index % bulletColors.length];

                    return (
                      <li key={index} className="flex gap-2">
                        <span className={`${bulletColor} mt-0.5 font-bold`}>
                          •
                        </span>
                        <span>{detail}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
