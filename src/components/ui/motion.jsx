import React from "react";
import { motion } from "framer-motion";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 16,
  once = true,
}) {
  const reduce = prefersReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={reduce ? undefined : { once, amount: 0.25 }}
      transition={
        reduce ? undefined : { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }
      }
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className = "", delayChildren = 0.1, stagger = 0.08 }) {
  const reduce = prefersReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? undefined : "hidden"}
      whileInView={reduce ? undefined : "show"}
      viewport={reduce ? undefined : { once: true, amount: 0.25 }}
      variants={
        reduce
          ? undefined
          : {
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { delayChildren, staggerChildren: stagger },
              },
            }
      }
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "", y = 14 }) {
  const reduce = prefersReducedMotion();

  return (
    <motion.div
      className={className}
      variants={
        reduce
          ? undefined
          : {
              hidden: { opacity: 0, y },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
              },
            }
      }
    >
      {children}
    </motion.div>
  );
}

