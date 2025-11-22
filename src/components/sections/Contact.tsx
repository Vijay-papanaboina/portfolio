import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden bg-background">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(to_bottom,transparent,black)]" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-border" />
      
      <div ref={ref} className="container relative max-w-7xl mx-auto px-4 z-10">
        <div className={cn("grid lg:grid-cols-2 gap-12 lg:gap-24 items-center", inView ? "animate-slide-in" : "opacity-0 translate-y-[30px]")}>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
                Let's Connect
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:vijaypapanaboina3@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl glass-card group"
              >
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email Me</p>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors">
                    vijaypapanaboina3@gmail.com
                  </p>
                </div>
              </a>
              
              <div className="flex gap-4">
                <a
                  href="https://github.com/Vijay-papanaboina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl glass-card hover:scale-105 transition-transform duration-200"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/vijay-papanaboina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl glass-card hover:scale-105 transition-transform duration-200"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass p-8 rounded-2xl shadow-2xl animate-slide-in" style={{ animationDelay: "0.2s" }}>
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const nameInput = form.elements.namedItem('name') as HTMLInputElement;
              const emailInput = form.elements.namedItem('email') as HTMLInputElement;
              const messageInput = form.elements.namedItem('message') as HTMLTextAreaElement;

              const name = nameInput?.value || '';
              const email = emailInput?.value || '';
              const message = messageInput?.value || '';

              const subject = encodeURIComponent(`Message from ${name} (${email})`);
              const body = encodeURIComponent(message);
              
              window.location.href = `mailto:vijaypapanaboina3@gmail.com?subject=${subject}&body=${body}`;
            }}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="bg-background/50 border-white/10 focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-background/50 border-white/10 focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="How can I help you?"
                  className="min-h-[150px] bg-background/50 border-white/10 focus:border-primary/50 transition-colors resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full gap-2 shadow-lg hover:shadow-primary/25 transition-all">
                Send Message <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border/50 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Vijay Papanaboina. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
