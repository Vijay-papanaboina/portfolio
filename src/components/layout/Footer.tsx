import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-8 mt-auto">
      <div className="container max-w-7xl mx-auto px-4 flex flex-col items-center justify-between gap-3 md:flex-row">
        <p className="text-xs text-muted-foreground">
          Built with React, TypeScript, Tailwind CSS, and shadcn/ui
        </p>
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/Vijay-papanaboina"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub - Vijay Papanaboina</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
