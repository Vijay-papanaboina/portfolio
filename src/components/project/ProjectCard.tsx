import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Layers, Rocket } from "lucide-react";
import type { Project } from "@/types";
import { use3DTilt } from "@/hooks/use3DTilt";

interface ProjectCardProps {
  project: Project;
  onViewDetails: () => void;
}

export function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const tiltProps = use3DTilt();

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

  const getComplexityGradient = (complexity: string) => {
    switch (complexity) {
      case "Advanced":
        return "from-purple-500/10 to-pink-500/10";
      case "Intermediate":
        return "from-blue-500/10 to-cyan-500/10";
      case "Foundational":
        return "from-green-500/10 to-emerald-500/10";
      default:
        return "from-gray-500/10 to-gray-500/10";
    }
  };

  const getComplexityIcon = (complexity: string) => {
    switch (complexity) {
      case "Advanced":
        return Rocket;
      case "Intermediate":
        return Layers;
      case "Foundational":
        return Code2;
      default:
        return Code2;
    }
  };

  const Icon = getComplexityIcon(project.complexity);
  const maxVisibleTech = 6;
  const visibleTech = project.techStack.slice(0, maxVisibleTech);
  const remainingCount = project.techStack.length - maxVisibleTech;

  return (
    <Card
      className="group relative flex flex-col overflow-hidden border-2 transition-all duration-200 hover:shadow-2xl hover:scale-[1.02] hover:border-primary/30 bg-background hover:-translate-y-1"
      {...tiltProps}
    >
      {/* Gradient background - matches complexity theme */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${getComplexityGradient(
          project.complexity
        )} opacity-50 group-hover:opacity-100 transition-opacity duration-200`}
      />

      {/* Background icon decoration - matches skills cards */}
      <div className="absolute top-2 right-2 opacity-10 group-hover:opacity-20 transition-opacity duration-200">
        <Icon className="h-16 w-16" />
      </div>

      <CardHeader className="pb-4 relative z-10">
        <div className="mb-3">
          <Badge className={getComplexityColor(project.complexity)}>
            {project.complexity}
          </Badge>
        </div>
        <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
          {project.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="pt-0 space-y-5 flex-1 flex flex-col relative z-10">
        <div className="flex flex-wrap gap-1.5">
          {visibleTech.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs py-0.5 px-2 h-6 bg-gradient-to-r from-secondary to-secondary/80 hover:from-primary/10 hover:to-primary/5 transition-all"
            >
              {tech}
            </Badge>
          ))}
          {remainingCount > 0 && (
            <Badge
              variant="secondary"
              className="text-xs py-0.5 px-2 h-6 bg-muted/50 text-muted-foreground"
            >
              +{remainingCount} more
            </Badge>
          )}
        </div>

        <Button
          onClick={onViewDetails}
          variant="ghost"
          className="w-full gap-2 mt-auto group/btn group-hover:bg-primary/10 hover:bg-primary/20 transition-all"
          size="sm"
        >
          View Details
          <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
}
