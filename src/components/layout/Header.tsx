import { Link, useLocation } from "react-router-dom";
import { Code2 } from "lucide-react";

export function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollToSection = (sectionId: string) => {
    if (!isHome) {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-7xl mx-auto px-4 flex h-14 items-center">
        <Link to="/" className="flex items-center gap-2 mr-6">
          <Code2 className="h-5 w-5" />
          <span className="font-bold text-lg">Portfolio</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium flex-1">
          <button
            onClick={() => scrollToSection("hero")}
            className="cursor-pointer transition-all duration-200 hover:text-foreground hover:scale-105 text-foreground/60 relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-200" />
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="cursor-pointer transition-all duration-200 hover:text-foreground hover:scale-105 text-foreground/60 relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-200" />
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="cursor-pointer transition-all duration-200 hover:text-foreground hover:scale-105 text-foreground/60 relative group"
          >
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-200" />
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="cursor-pointer transition-all duration-200 hover:text-foreground hover:scale-105 text-foreground/60 relative group"
          >
            Skills
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-200" />
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer transition-all duration-200 hover:text-foreground hover:scale-105 text-foreground/60 relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-200" />
          </button>
        </nav>
      </div>
    </header>
  );
}
