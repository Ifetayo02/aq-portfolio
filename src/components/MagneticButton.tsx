"use client";

import { useRef, useState, useEffect, MouseEvent, ReactNode, ElementType } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  as?: ElementType;
  strength?: number;
  [key: string]: unknown;
}

/**
 * Wraps any button/link and gives it a subtle "magnetic" pull toward the
 * cursor on hover. Disabled automatically on touch devices (no hover
 * capability) and when the user prefers reduced motion, so it never costs
 * anything on mobile.
 */
export default function MagneticButton({
  children,
  className,
  href,
  as,
  strength = 0.35,
  ...rest
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [enabled, setEnabled] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.4 });

  useEffect(() => {
    const hasHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(hasHover && !reduceMotion);
  }, []);

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    if (!enabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const Component = motion(as ?? (href ? "a" : "button"));

  return (
    <Component
      ref={ref}
      href={href}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {children}
    </Component>
  );
}
