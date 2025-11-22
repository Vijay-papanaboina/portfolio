import { Link, useLocation } from "react-router-dom";
import { Code2 } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl rounded-full z-50 transition-all duration-300",
        scrolled ? "glass shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Code2 className="h-5 w-5 text-primary" />
          </div>
          <span className="font-bold text-lg tracking-tight">Vijay Papanaboina</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-primary hover:bg-primary/10 active:scale-95"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Placeholder - hidden on desktop */}
        <div className="md:hidden">
            {/* Add mobile menu implementation if needed later */}
        </div>
      </div>
    </header>
  );
}
