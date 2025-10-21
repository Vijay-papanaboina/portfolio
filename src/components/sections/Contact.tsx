import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background decoration - reversed gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tl from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-3">
              Get In Touch
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Interested in collaboration or have a question? Feel free to reach
              out
            </p>
          </div>

          <Card className="border-2 shadow-xl bg-background/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex flex-col gap-3">
                <Button
                  variant="outline"
                  className="group w-full justify-start gap-3 h-12 border-2 hover:border-primary/50 hover:bg-primary/5 transition-all"
                  asChild
                >
                  <a href="mailto: vijapapanaboina3@gmail.com">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">
                      vijapapanaboina3@gmail.com
                    </span>
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="group w-full justify-start gap-3 h-12 border-2 hover:border-primary/50 hover:bg-primary/5 transition-all"
                  asChild
                >
                  <a
                    href="https://github.com/Vijay-papanaboina"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Github className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">
                      @Vijay-papanaboina
                    </span>
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
