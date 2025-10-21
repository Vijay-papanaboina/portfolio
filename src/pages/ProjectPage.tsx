import { useParams, Navigate } from "react-router-dom";
import { ProjectDetail } from "@/components/project/ProjectDetail";
import { projects } from "@/data/projects";

export function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="py-12 md:py-20">
      <div className="container max-w-4xl mx-auto px-4">
        <ProjectDetail project={project} />
      </div>
    </main>
  );
}
