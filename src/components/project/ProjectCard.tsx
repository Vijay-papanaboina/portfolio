import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/types";
import { use3DTilt } from "@/hooks/use3DTilt";
import { techIconMap } from "@/data/techIcons";

interface ProjectCardProps {
  project: Project;
  onViewDetails: () => void;
}

export function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const tiltProps = use3DTilt();

  const maxVisibleTech = 5;
  const visibleTech = project.techStack.slice(0, maxVisibleTech);

  return (
    <Card
      className="group relative overflow-hidden rounded-3xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] bg-card border-2 hover:border-primary/20 flex flex-col cursor-pointer p-0 h-[600px]"
      onClick={onViewDetails}
      {...tiltProps}
    >
      {/* Image Preview at Top - 60% */}
      <div className="relative w-full h-[60%] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card/30" />
      </div>

      {/* Content Section - 40% */}
      <div className="flex flex-col h-[40%] p-6 justify-between">
        <div className="space-y-2">
          {/* Category/Complexity Label */}
          <Badge
            variant="secondary"
            className="text-xs uppercase tracking-wider font-medium"
          >
            {project.complexity}
          </Badge>

          {/* Title */}
          <h3 className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Bottom Section: Tech Stack Icons + Link */}
        <div className="flex items-center justify-between pt-3 border-t border-border/50">
          {/* Tech Stack Icons */}
          <div className="flex items-center gap-2">
            {visibleTech.map((tech) => {
              const techInfo = techIconMap[tech];
              return techInfo ? (
                <div
                  key={tech}
                  className="w-9 h-9 rounded-full border-2 border-border/50 bg-background/50 flex items-center justify-center hover:scale-110 transition-all"
                  title={tech}
                >
                  <techInfo.icon
                    className="w-5 h-5"
                    style={{ color: techInfo.color }}
                  />
                </div>
              ) : (
                <div
                  key={tech}
                  className="w-9 h-9 rounded-full border-2 border-border bg-background flex items-center justify-center text-xs font-semibold text-muted-foreground hover:border-primary hover:text-primary transition-all"
                  title={tech}
                >
                  {tech.slice(0, 2).toUpperCase()}
                </div>
              );
            })}
          </div>

          {/* Check Live Site Link */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails();
            }}
            className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors group/link whitespace-nowrap cursor-pointer"
          >
            Check Live Site
            <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </Card>
  );
}
