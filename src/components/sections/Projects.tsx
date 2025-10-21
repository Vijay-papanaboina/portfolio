import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { ProjectGrid } from "@/components/project/ProjectGrid";
import { ProjectModal } from "@/components/project/ProjectModal";
import { projects } from "@/data/projects";
import type { Project } from "@/types";

type ComplexityFilter = "All" | "Advanced" | "Intermediate" | "Foundational";

export function Projects() {
  const [filter, setFilter] = useState<ComplexityFilter>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredProjects: Project[] = projects.filter((project) => {
    if (filter === "All") return true;
    return project.complexity === filter;
  });

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section
      id="projects"
      className="relative py-16 md:py-24 bg-muted/30 overflow-hidden"
    >
      {/* Background decorative elements - matches Skills section */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="space-y-10">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              A collection of full-stack applications showcasing microservices,
              real-time communication, and modern web technologies
            </p>
          </div>
          <div className="flex justify-center">
            <Tabs
              value={filter}
              onValueChange={(value) => setFilter(value as ComplexityFilter)}
            >
              <TabsList>
                <TabsTrigger value="All">All</TabsTrigger>
                <TabsTrigger value="Advanced">Advanced</TabsTrigger>
                <TabsTrigger value="Intermediate">Intermediate</TabsTrigger>
                <TabsTrigger value="Foundational">Foundational</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <ProjectGrid
            projects={filteredProjects}
            onProjectClick={handleProjectClick}
          />
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  );
}
