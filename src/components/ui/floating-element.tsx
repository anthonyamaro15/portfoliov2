"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  xOffset?: number;
}

export const FloatingElement = ({
  children,
  className,
  delay = 0,
  duration = 6,
  yOffset = 10,
  xOffset = 0,
}: FloatingElementProps) => (
  <motion.div
    className={cn(className)}
    animate={{
      y: [0, -yOffset, 0],
      x: xOffset ? [0, xOffset, 0] : undefined,
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  >
    {children}
  </motion.div>
);

// Variant with rotation
interface FloatingRotateProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  rotation?: number;
}

export const FloatingRotate = ({
  children,
  className,
  delay = 0,
  duration = 8,
  rotation = 5,
}: FloatingRotateProps) => (
  <motion.div
    className={cn(className)}
    animate={{
      y: [0, -8, 0],
      rotate: [-rotation, rotation, -rotation],
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  >
    {children}
  </motion.div>
);

// Pulse scale variant
interface PulseScaleProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  scale?: number;
}

export const PulseScale = ({
  children,
  className,
  delay = 0,
  duration = 4,
  scale = 1.05,
}: PulseScaleProps) => (
  <motion.div
    className={cn(className)}
    animate={{
      scale: [1, scale, 1],
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  >
    {children}
  </motion.div>
);

export default FloatingElement;
