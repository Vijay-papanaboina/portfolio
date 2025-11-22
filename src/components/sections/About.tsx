import { Card, CardContent } from "@/components/ui/card";
import { Code2, Rocket, Users, Zap } from "lucide-react";
import { use3DTilt } from "@/hooks/use3DTilt";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export function About() {
  const tiltProps = use3DTilt();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });

  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Expertise",
      description:
        "Proficient in building end-to-end web applications with modern technologies and best practices.",
    },
    {
      icon: Rocket,
      title: "Scalable Architecture",
      description:
        "Experienced in designing microservices, implementing event-driven systems, and cloud deployments.",
    },
    {
      icon: Zap,
      title: "Real-time Systems",
      description:
        "Specialized in WebRTC, Socket.io, and building responsive real-time communication platforms.",
    },
    {
      icon: Users,
      title: "User-Focused Design",
      description:
        "Creating intuitive interfaces with modern UI libraries and focusing on excellent user experience.",
    },
  ];

  return (
    <section id="about" className="relative py-16 md:py-20 overflow-hidden bg-background">
      {/* Subtle radial gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div ref={ref} className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className={cn("space-y-10", inView ? "animate-slide-in" : "opacity-0 translate-y-[30px]")}>
          {/* Introduction */}
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
              About Me
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">
              I'm a passionate full-stack developer with a strong focus on
              building scalable, modern web applications. My expertise spans
              across frontend frameworks, backend systems, databases, and cloud
              infrastructure. I enjoy solving complex problems and creating
              seamless user experiences.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border bg-card transition-all duration-200 hover:shadow-xl hover:scale-105 hover:border-primary/50"
                {...tiltProps}
              >
                <CardContent className="pt-8 pb-8 px-6 relative z-10">
                  <div className="space-y-4 text-center">
                    {/* Icon */}
                    <div
                      className="w-16 h-16 mx-auto rounded-xl bg-muted p-3.5 flex items-center justify-center shadow-sm group-hover:bg-primary/10 transition-colors"
                    >
                      <highlight.icon className="h-8 w-8 text-foreground group-hover:text-primary transition-colors" />
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-base group-hover:text-primary transition-colors">
                      {highlight.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center">
            <p className="text-md text-muted-foreground max-w-2xl mx-auto">
              Currently exploring new technologies and building projects that
              solve real-world problems. Open to collaboration and always
              learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
