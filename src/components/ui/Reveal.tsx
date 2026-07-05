"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const dirMap = {
  up: { y: 32, x: 0 },
  down: { y: -32, x: 0 },
  left: { x: 48, y: 0 },
  right: { x: -48, y: 0 },
  none: { x: 0, y: 0 },
};

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  direction?: keyof typeof dirMap;
  className?: string;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  const offset = reduce ? { x: 0, y: 0 } : dirMap[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
