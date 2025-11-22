import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { ProjectGrid } from "@/components/project/ProjectGrid";
import { ProjectModal } from "@/components/project/ProjectModal";
import { projects } from "@/data/projects";
import type { Project } from "@/types";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

type ComplexityFilter = "All" | "Advanced" | "Intermediate" | "Foundational";

export function Projects() {
  const [filter, setFilter] = useState<ComplexityFilter>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });

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
      className="relative py-20 md:py-32 bg-background overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(0deg,transparent,black)]" />

      <div ref={ref} className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className={cn("space-y-12", inView ? "animate-slide-in" : "opacity-0 translate-y-[30px]")}>
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              A collection of full-stack applications showcasing microservices,
              real-time communication, and modern web technologies.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Tabs
              value={filter}
              onValueChange={(value) => setFilter(value as ComplexityFilter)}
              className="w-full max-w-md"
            >
              <TabsList className="grid w-full grid-cols-4 p-1 bg-muted/50 backdrop-blur-sm rounded-full border border-white/10">
                <TabsTrigger value="All" className="rounded-full data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all">All</TabsTrigger>
                <TabsTrigger value="Advanced" className="rounded-full data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all">Advanced</TabsTrigger>
                <TabsTrigger value="Intermediate" className="rounded-full data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all">Intermediate</TabsTrigger>
                <TabsTrigger value="Foundational" className="rounded-full data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all">Foundational</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="animate-slide-in" style={{ animationDelay: "0.2s" }}>
             <ProjectGrid
               projects={filteredProjects}
               onProjectClick={handleProjectClick}
             />
          </div>
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
