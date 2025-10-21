import { Button } from "../ui/button";
import {
  ArrowRight,
  Code2,
  Server,
  Database,
  Cloud,
  Zap,
  User,
} from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const floatingIcons = [
    { Icon: Code2, delay: "0s", duration: "6s", top: "10%", left: "10%" },
    { Icon: Server, delay: "0.5s", duration: "8s", top: "20%", right: "15%" },
    {
      Icon: Database,
      delay: "1s",
      duration: "7s",
      bottom: "15%",
      left: "12%",
    },
    { Icon: Cloud, delay: "1.5s", duration: "9s", top: "60%", right: "10%" },
    { Icon: Zap, delay: "1s", duration: "7s", top: "40%", left: "8%" },
  ];

  return (
    <section id="hero" className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-purple-950/20 dark:via-blue-950/20 dark:to-cyan-950/20" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-20 dark:bg-grid-slate-700/25" />

      {/* Floating tech icons */}
      {floatingIcons.map(({ Icon, delay, duration, ...position }, index) => (
        <div
          key={index}
          className="absolute opacity-10 dark:opacity-5"
          style={{
            ...position,
            animation: `float ${duration} ease-in-out ${delay} infinite`,
          }}
        >
          <Icon className="h-12 w-12 md:h-16 md:w-16 text-primary" />
        </div>
      ))}

      <div className="container relative max-w-7xl mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Name and Title */}
          <div className="space-y-6">
            {/* Profile Picture */}
            <div className="flex justify-center mb-6">
              <div className="relative group">
                {/* Subtle border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-border to-border rounded-full opacity-50 group-hover:opacity-75 transition duration-200"></div>

                {/* Avatar container */}
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden bg-muted flex items-center justify-center border-2 border-background">
                  {/* Placeholder icon - replace with <img src="your-photo.jpg" alt="Vijay Papanaboina" className="w-full h-full object-cover" /> */}
                  <User className="w-16 h-16 sm:w-20 sm:h-20 text-muted-foreground" />
                </div>
              </div>
            </div>

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              Vijay Papanaboina
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80">
              Full-Stack Developer
            </h2>

            <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto leading-relaxed">
              Building modern web applications with expertise in{" "}
              <span className="text-foreground font-semibold">
                microservices architecture
              </span>
              ,{" "}
              <span className="text-foreground font-semibold">
                real-time communication
              </span>
              , and{" "}
              <span className="text-foreground font-semibold">
                cloud deployment
              </span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="gap-2 cursor-pointer group/btn shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              View Projects{" "}
              <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer hover:bg-primary/5 hover:border-primary/50 hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg border-2"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
