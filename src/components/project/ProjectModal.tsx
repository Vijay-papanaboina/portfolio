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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="!max-w-[1400px] w-[95vw] md:w-[75vw] lg:w-[65vw] sm:!max-w-[1400px] max-h-[90vh] overflow-y-auto scrollbar-hide border border-white/10 shadow-2xl bg-background">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <DialogTitle className="text-2xl">{project.title}</DialogTitle>
              <Badge variant="outline" className="text-primary border-primary/50">
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
              {project.repos.map((repo, index) => (
                <Card key={index} className="border-l-4 border-l-primary bg-muted/50 border-y border-r border-border">
                  <CardContent className="pt-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <code className="font-semibold text-sm bg-background px-2 py-1 rounded border border-border">
                            {repo.name}
                          </code>
                          {project.githubLinks &&
                            project.githubLinks[index] && (
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-7 px-2 hover:bg-primary/10 hover:text-primary"
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
                        <p className="text-xs text-muted-foreground/80 font-mono">
                          {repo.tech}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Separator className="bg-border" />

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Key Features</h3>
            <ul className="space-y-2 text-sm">
              {project.features.map((feature, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-primary mt-0.5 font-bold">•</span>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <Separator className="bg-border" />

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-muted hover:bg-muted/80 text-foreground border border-border transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Key Implementation Details */}
          {project.keyDetails && project.keyDetails.length > 0 && (
            <>
              <Separator className="bg-border" />
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Key Implementation Details
                </h3>
                <ul className="space-y-2 text-sm">
                  {project.keyDetails.map((detail, index) => (
                    <li key={index} className="flex gap-2">
                      <span className="text-primary mt-0.5 font-bold">
                        •
                      </span>
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
