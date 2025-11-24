import { Button } from "../ui/button";
import {
  ArrowRight,
  Code2,
  Server,
  Database,
  Cloud,
  Zap,
  User,
  Github,
  Linkedin,
  Mail,
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
    { Icon: Database, delay: "1s", duration: "7s", bottom: "15%", left: "12%" },
    { Icon: Cloud, delay: "1.5s", duration: "9s", top: "60%", right: "10%" },
    { Icon: Zap, delay: "1s", duration: "7s", top: "40%", left: "8%" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-background"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Floating tech icons - kept but ensure they use monochrome colors */}
      {floatingIcons.map(({ Icon, delay, duration, ...position }, index) => (
        <div
          key={index}
          className="absolute transition-transform duration-300 hover:scale-110 hover:z-50 z-20"
          style={{
            ...position,
            animation: `float ${duration} ease-in-out ${delay} infinite`,
          }}
        >
          <span className="inline-block opacity-10 hover:opacity-100 text-muted-foreground hover:text-foreground hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-all duration-300 cursor-pointer">
            <Icon className="h-12 w-12 md:h-16 md:w-16" />
          </span>
        </div>
      ))}

      <div className="container relative max-w-7xl mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Profile Picture with Glow - Monochrome */}
          <div className="flex justify-center mb-8 animate-slide-in">
            <div className="relative group">
              <div className="absolute -inset-1 bg-white/20 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden bg-background flex items-center justify-center border-4 border-white/10 shadow-xl">
                <User className="w-16 h-16 sm:w-20 sm:h-20 text-muted-foreground" />
              </div>
            </div>
          </div>

          <div
            className="space-y-4 animate-slide-in"
            style={{ animationDelay: "0.1s" }}
          >
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl text-primary pb-2">
              Vijay Papanaboina
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80">
              Full-Stack Developer
            </h2>
          </div>

          <p
            className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto leading-relaxed animate-slide-in glass p-6 rounded-xl"
            style={{ animationDelay: "0.2s" }}
          >
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
            .
          </p>

          {/* Social Links */}
          <div
            className="flex justify-center gap-4 animate-slide-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
              asChild
            >
              <a
                href="https://github.com/Vijay-papanaboina"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
              asChild
            >
              <a
                href="https://linkedin.com/in/vijay-papanaboina"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
              asChild
            >
              <a
                href="mailto:vijaypapanaboina3@gmail.com"
                aria-label="Email Me"
              >
                <Mail className="h-6 w-6" />
              </a>
            </Button>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 justify-center animate-slide-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="gap-2 cursor-pointer group/btn shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all duration-200 rounded-full px-8"
            >
              View Projects{" "}
              <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer hover:bg-primary/5 hover:border-primary/50 hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg border-2 rounded-full px-8 bg-background/50 backdrop-blur-sm"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
