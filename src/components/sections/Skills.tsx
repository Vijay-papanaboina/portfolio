import { skills } from "@/data/skills";
import { Badge } from "../ui/badge";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });

  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden bg-background">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      <div ref={ref} className="container relative max-w-7xl mx-auto px-4 z-10">
        <div className={cn("space-y-16", inView ? "animate-slide-in" : "opacity-0 translate-y-[30px]")}>
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
              Technical Skills
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              A comprehensive overview of my technical expertise across the full
              stack development ecosystem.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skillGroup, index) => (
              <div
                key={skillGroup.category}
                className="bg-card border rounded-xl p-6 space-y-6 animate-slide-in hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold capitalize flex items-center gap-2 text-card-foreground">
                    <span className="w-1 h-8 bg-primary rounded-full"></span>
                    {skillGroup.category}
                  </h3>
                  <div className="h-px w-full bg-border" />
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-3 py-1 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
