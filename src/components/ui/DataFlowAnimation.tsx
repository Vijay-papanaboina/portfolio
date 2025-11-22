import { cn } from "@/lib/utils";

export function DataFlowAnimation({ className }: { className?: string }) {
  // We use a fixed viewbox 0 0 100 50 for easy coordinate reasoning
  // Left side nodes (x=0 to 10)
  // Right side node (x=90 to 100)
  
  const paths = [
    // Top to Center
    "M 0 10 C 40 10, 40 25, 90 25",
    // Middle to Center (Adjusted control points to force render)
    "M 0 25 C 30 24, 60 26, 90 25",
    // Bottom to Center
    "M 0 40 C 40 40, 40 25, 90 25",
  ];

  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden opacity-30", className)}>
      <svg
        viewBox="0 0 100 50"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          {/* Radial gradient for perfectly round glow */}
          <radialGradient id="glow-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="50%" stopColor="white" stopOpacity="0" />
          </radialGradient>

          {/* Gradient for lines */}
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--muted-foreground)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* Static Circuit Lines */}
        {paths.map((d, i) => (
          <path
            key={`path-${i}`}
            d={d}
            fill="none"
            stroke="url(#line-gradient)"
            strokeWidth="0.2"
            vectorEffect="non-scaling-stroke"
          />
        ))}

        {/* Animated Packets */}
        {paths.map((d, i) => (
          <g key={`packet-group-${i}`}>
            {/* 1. Glow Layer (Behind) */}
            <circle
              r="2" /* Slightly increased radius for larger glow area */
              fill="url(#glow-gradient)" /* Use radial gradient for glow */
              className="animate-flow-packet"
              style={{
                offsetPath: `path("${d}")`,
                animationDelay: `${i * 0.5}s`, /* Adjusted delay for faster blinking */
                opacity: 0.5, /* Subtle transparency like white/20 */
              }}
            >
              <animate
                attributeName="opacity"
                values="0;0.6;0" /* Smooth breathing cycle: off -> on -> off */
                keyTimes="0;0.5;1"
                dur="2s" 
                begin={`${i * 0.5}s`} 
                repeatCount="indefinite"
              />
            </circle>

            {/* 2. Core Layer (Front) */}
            <circle
              r="0.5"
              fill="white" /* Solid white core */
              className="animate-flow-packet"
              style={{
                offsetPath: `path("${d}")`,
                animationDelay: `${i * 0.5}s`, /* Adjusted delay for faster blinking */
                opacity: 0,
              }}
            >
              <animate
                attributeName="opacity"
                values="0;1;0" /* Smooth breathing cycle: off -> on -> off */
                keyTimes="0;0.5;1"
                dur="2s" 
                begin={`${i * 0.5}s`} 
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}

        {/* Nodes */}
        {/* Source Nodes */}
        <circle cx="0" cy="10" r="1" fill="var(--muted-foreground)" opacity="0.5" />
        <circle cx="0" cy="25" r="1" fill="var(--muted-foreground)" opacity="0.5" />
        <circle cx="0" cy="40" r="1" fill="var(--muted-foreground)" opacity="0.5" />

        {/* Destination Node (Central Hub) */}
        <circle cx="90" cy="25" r="2" fill="none" stroke="var(--primary)" strokeWidth="0.5" />
        <circle cx="90" cy="25" r="1" fill="var(--primary)">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1s" repeatCount="indefinite" />
        </circle>
      </svg>
      
      {/* Styles for the animation */}
      <style>{`
        .animate-flow-packet {
          offset-distance: 0%;
          animation: flow 8s linear infinite; /* Changed to 8s */
        }
        @keyframes flow {
          from { offset-distance: 0%; }
          to { offset-distance: 100%; }
        }
      `}</style>
    </div>
  );
}
