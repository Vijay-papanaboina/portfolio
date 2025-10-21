import { Card, CardContent } from "@/components/ui/card";
import { Code2, Rocket, Users, Zap } from "lucide-react";
import { use3DTilt } from "@/hooks/use3DTilt";

export function About() {
  const tiltProps = use3DTilt();

  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Expertise",
      description:
        "Proficient in building end-to-end web applications with modern technologies and best practices.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Rocket,
      title: "Scalable Architecture",
      description:
        "Experienced in designing microservices, implementing event-driven systems, and cloud deployments.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Real-time Systems",
      description:
        "Specialized in WebRTC, Socket.io, and building responsive real-time communication platforms.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Users,
      title: "User-Focused Design",
      description:
        "Creating intuitive interfaces with modern UI libraries and focusing on excellent user experience.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="about" className="relative py-16 md:py-20 overflow-hidden">
      {/* Animated gradient background - reversed */}
      <div className="absolute inset-0 bg-gradient-to-tl from-purple-50 via-blue-50 to-cyan-50 dark:from-purple-950/20 dark:via-blue-950/20 dark:to-cyan-950/20" />

      {/* Animated grid pattern - matches Hero */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-20 dark:bg-grid-slate-700/25" />

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="space-y-10">
          {/* Introduction */}
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
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
                className="group relative overflow-hidden border-2 transition-all duration-200 hover:shadow-xl hover:scale-105 hover:border-primary/30 bg-background/50 backdrop-blur-sm"
                {...tiltProps}
              >
                {/* Subtle gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-10 transition-opacity duration-200`}
                />

                <CardContent className="pt-8 pb-8 px-6 relative z-10">
                  <div className="space-y-4 text-center">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${highlight.color} p-3.5 flex items-center justify-center shadow-lg`}
                    >
                      <highlight.icon className="h-8 w-8 text-white" />
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
