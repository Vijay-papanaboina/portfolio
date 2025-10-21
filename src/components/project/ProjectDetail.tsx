import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "@/types";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
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
    <div className="space-y-8">
      {/* Back Button */}
      <Button variant="outline" asChild>
        <Link to="/#projects" className="gap-2">
          <ArrowLeft className="h-4 w-4" /> Back to Projects
        </Link>
      </Button>

      {/* Project Header */}
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-2">
              {project.title}
            </h1>
            <Badge className={getComplexityColor(project.complexity)}>
              {project.complexity}
            </Badge>
          </div>
        </div>
        <p className="text-lg text-muted-foreground">{project.description}</p>
      </div>

      <Separator />

      {/* Repositories */}
      <Card>
        <CardHeader>
          <CardTitle>Repositories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {project.repos.map((repo, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <code className="font-semibold text-sm bg-muted px-2 py-1 rounded">
                        {repo.name}
                      </code>
                      {project.githubLinks && project.githubLinks[index] && (
                        <Button variant="ghost" size="sm" asChild>
                          <a
                            href={project.githubLinks[index]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gap-1"
                          >
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </Button>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {repo.purpose}
                    </p>
                    <p className="text-xs text-muted-foreground">{repo.tech}</p>
                  </div>
                </div>
                {index < project.repos.length - 1 && <Separator />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Features */}
      <Card>
        <CardHeader>
          <CardTitle>Key Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="flex gap-2">
                <span className="text-muted-foreground mt-1">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Tech Stack */}
      <Card>
        <CardHeader>
          <CardTitle>Technology Stack</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Key Implementation Details */}
      {project.keyDetails && project.keyDetails.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Key Implementation Details</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {project.keyDetails.map((detail, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-muted-foreground mt-1">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
