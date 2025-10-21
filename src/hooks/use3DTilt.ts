import type { MouseEvent } from "react";

export function use3DTilt() {
  // Optimal values based on best practices:
  // - Max tilt: 10-15 degrees (subtle, not overwhelming)
  // - Perspective: 1500px (more subtle 3D effect)
  // - Sensitivity divisor: 15-20 (smoother, less sensitive)
  const MAX_TILT = 12; // Maximum rotation in degrees
  const PERSPECTIVE = 1500; // Perspective depth in pixels
  const SENSITIVITY = 15; // Higher = less sensitive

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation with limits
    let rotateX = (y - centerY) / SENSITIVITY;
    let rotateY = (centerX - x) / SENSITIVITY;

    // Clamp rotation to MAX_TILT
    rotateX = Math.max(-MAX_TILT, Math.min(MAX_TILT, rotateX));
    rotateY = Math.max(-MAX_TILT, Math.min(MAX_TILT, rotateY));

    card.style.transform = `perspective(${PERSPECTIVE}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02) translateY(-4px)`;
    card.style.transition = "none"; // Disable transition during movement for immediate response
  };

  const handleMouseLeave = (e: MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    card.style.transition =
      "transform 0.5s cubic-bezier(0.03, 0.98, 0.52, 0.99)"; // Smooth return animation
    card.style.transform = `perspective(${PERSPECTIVE}px) rotateX(0) rotateY(0) scale(1) translateY(0)`;
  };

  const tiltProps = {
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: {
      transformStyle: "preserve-3d" as const,
      transition: "transform 0.5s cubic-bezier(0.03, 0.98, 0.52, 0.99)",
    },
  };

  return tiltProps;
}
