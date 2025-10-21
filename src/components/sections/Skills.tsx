import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/skills";
import { Code2, Database, Zap, Cloud, Shield, Wrench } from "lucide-react";
import type React from "react";
import { use3DTilt } from "@/hooks/use3DTilt";

const categoryIcons: Record<string, React.ElementType> = {
  Frontend: Code2,
  Backend: Code2,
  Database: Database,
  "Real-time & Communication": Zap,
  "DevOps & Cloud": Cloud,
  "Authentication & Security": Shield,
  "Tools & Libraries": Wrench,
};

const categoryColors: Record<string, string> = {
  Frontend: "from-purple-500/10 to-pink-500/10",
  Backend: "from-blue-500/10 to-cyan-500/10",
  Database: "from-green-500/10 to-emerald-500/10",
  "Real-time & Communication": "from-yellow-500/10 to-orange-500/10",
  "DevOps & Cloud": "from-indigo-500/10 to-purple-500/10",
  "Authentication & Security": "from-red-500/10 to-pink-500/10",
  "Tools & Libraries": "from-teal-500/10 to-cyan-500/10",
};

export function Skills() {
  const tiltProps = use3DTilt();

  return (
    <section
      id="skills"
      className="relative py-16 md:py-24 bg-muted/30 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="space-y-10">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              Technical Skills
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Technologies and tools used across my projects
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {skills.map((skill) => {
              const Icon = categoryIcons[skill.category] || Code2;
              const gradient =
                categoryColors[skill.category] ||
                "from-gray-500/10 to-gray-500/10";

              return (
                <Card
                  key={skill.category}
                  className="group relative overflow-hidden border-2 transition-all duration-200 hover:shadow-2xl hover:scale-[1.02] hover:border-primary/30 bg-background/50 backdrop-blur-sm hover:-translate-y-1"
                  {...tiltProps}
                >
                  {/* Gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-200`}
                  />

                  {/* Icon decoration */}
                  <div className="absolute top-2 right-2 opacity-10 group-hover:opacity-20 transition-opacity duration-200">
                    <Icon className="h-16 w-16" />
                  </div>

                  <CardHeader className="pb-3 relative z-10">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {skill.category}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 relative z-10">
                    <div className="flex flex-wrap gap-1.5">
                      {skill.items.map((item) => (
                        <Badge
                          key={item}
                          variant="secondary"
                          className="text-xs bg-background/80 hover:bg-primary/10 hover:border-primary/30 transition-all"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
