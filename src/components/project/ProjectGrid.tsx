import { ProjectCard } from "@/components/project/ProjectCard";
import type { Project } from "@/types";

interface ProjectGridProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

export function ProjectGrid({ projects, onProjectClick }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">
          No projects found matching the selected filter.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onViewDetails={() => onProjectClick(project)}
        />
      ))}
    </div>
  );
}
