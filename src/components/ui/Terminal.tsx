import { useState, useEffect, useRef } from "react";
import { Terminal as TerminalIcon, X, Minus, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

type CommandType = {
  command: string;
  output: React.ReactNode;
};

export function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandType[]>([
    {
      command: "welcome",
      output: (
        <span>
          Welcome to the interactive terminal! Type <span className="text-primary font-bold">'help'</span> to see available commands.
        </span>
      ),
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when history updates
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isOpen, isMinimized]);

  // Focus input when clicked or opened
  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let output: React.ReactNode = "";

    switch (trimmedCmd) {
      case "help":
        output = (
          <div className="space-y-1">
            <p>Available commands:</p>
            <div className="grid grid-cols-[100px_1fr] gap-2">
              <span className="text-primary">about</span>
              <span>Who am I?</span>
              <span className="text-primary">projects</span>
              <span>List my projects</span>
              <span className="text-primary">skills</span>
              <span>Technical capabilities</span>
              <span className="text-primary">contact</span>
              <span>How to reach me</span>
              <span className="text-primary">clear</span>
              <span>Clear terminal</span>
              <span className="text-primary">help</span>
              <span>Show this help</span>
            </div>
          </div>
        );
        break;
      case "about":
        output = "I'm Vijay Papanaboina, a Full-Stack Developer specializing in microservices, real-time systems, and cloud architecture.";
        break;
      case "projects":
        output = (
          <div className="space-y-1">
            <p>Here are some of my featured projects:</p>
            <ul className="list-disc list-inside pl-2 space-y-1">
              <li>Food Delivery Platform (Microservices)</li>
              <li>Frontbase (Vercel Alternative)</li>
              <li>Real-Time Chat App</li>
              <li>Furniture E-Commerce</li>
            </ul>
            <p className="text-muted-foreground text-xs mt-2">Type 'help' for more commands.</p>
          </div>
        );
        break;
      case "skills":
        output = (
          <div className="flex flex-wrap gap-2">
            <span className="bg-primary/20 text-primary px-1 rounded">React</span>
            <span className="bg-primary/20 text-primary px-1 rounded">Node.js</span>
            <span className="bg-primary/20 text-primary px-1 rounded">TypeScript</span>
            <span className="bg-primary/20 text-primary px-1 rounded">Docker</span>
            <span className="bg-primary/20 text-primary px-1 rounded">Kubernetes</span>
            <span className="bg-primary/20 text-primary px-1 rounded">AWS</span>
          </div>
        );
        break;
      case "contact":
        output = (
          <div>
             You can reach me at: <a href="mailto:vijay.papanaboina@example.com" className="text-primary underline hover:text-primary/80">vijay.papanaboina@example.com</a>
          </div>
        );
        break;
      case "clear":
        setHistory([]);
        return;
      case "":
        output = "";
        break;
      default:
        output = (
          <span className="text-destructive">
            Command not found: {trimmedCmd}. Type 'help' for assistance.
          </span>
        );
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setCommandHistory((prev) => [...prev, input]);
      setHistoryIndex(-1); // Reset history index
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        // commandHistory is stored oldest -> newest. We want to traverse newest -> oldest
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-card border border-border shadow-xl hover:scale-110 transition-transform duration-200 group"
        aria-label="Open Terminal"
      >
        <TerminalIcon className="w-6 h-6 text-primary group-hover:text-foreground transition-colors" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-popover text-popover-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Open Terminal
        </span>
      </button>
    );
  }

  return (
    <div
      className={cn(
        "fixed z-50 bg-black/90 border border-white/20 shadow-2xl backdrop-blur-md font-mono text-sm transition-all duration-300 ease-in-out overflow-hidden flex flex-col",
        isMinimized
          ? "bottom-6 right-6 w-72 h-12 rounded-t-lg rounded-b-none"
          : "bottom-6 right-6 w-[90vw] h-[60vh] md:w-[600px] md:h-[400px] rounded-lg"
      )}
    >
      {/* Header Bar */}
      <div 
        className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10 cursor-pointer"
        onClick={() => setIsMinimized(!isMinimized)}
      >
        <div className="flex items-center gap-2 text-muted-foreground">
          <TerminalIcon className="w-4 h-4" />
          <span className="font-semibold text-xs tracking-wider">visitor@portfolio:~</span>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }}
            className="p-1 hover:bg-white/10 rounded transition-colors"
          >
            {isMinimized ? <Maximize2 className="w-3 h-3" /> : <Minus className="w-3 h-3" />}
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); setIsOpen(false); setIsMinimized(false); }}
            className="p-1 hover:bg-destructive/80 hover:text-white rounded transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Terminal Content - Hidden if minimized */}
      {!isMinimized && (
        <div 
          className="flex-1 p-4 overflow-y-auto scrollbar-hide space-y-2 text-green-400"
          ref={scrollRef}
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((entry, i) => (
            <div key={i} className="space-y-1">
              <div className="flex gap-2">
                <span className="text-blue-400 font-bold">➜</span>
                <span className="text-pink-400">~</span>
                <span className="text-muted-foreground">{entry.command}</span>
              </div>
              <div className="pl-6 text-foreground/90 leading-relaxed">
                {entry.output}
              </div>
            </div>
          ))}

          {/* Input Line */}
          <div className="flex gap-2 items-center">
            <span className="text-blue-400 font-bold">➜</span>
            <span className="text-pink-400">~</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-foreground/90 placeholder:text-muted-foreground/30"
              autoFocus
              autoComplete="off"
              spellCheck="false"
            />
          </div>
        </div>
      )}
    </div>
  );
}
