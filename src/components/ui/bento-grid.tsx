"use client";

import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

interface BentoGridProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export const BentoGrid = forwardRef<HTMLDivElement, BentoGridProps>(
  ({ children, className, ...props }, ref) => (
    <motion.div
      ref={ref}
      className={cn(
        "grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4 lg:gap-6",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
);

BentoGrid.displayName = "BentoGrid";

interface BentoCardProps extends HTMLMotionProps<"div"> {
  colSpan?: 1 | 2 | 3 | 4 | 6;
  rowSpan?: 1 | 2;
  variant?: "default" | "glass" | "gradient";
  children: React.ReactNode;
  className?: string;
}

const colSpanClasses = {
  1: "col-span-2 md:col-span-2 lg:col-span-3",
  2: "col-span-4 md:col-span-3 lg:col-span-4",
  3: "col-span-4 md:col-span-3 lg:col-span-6",
  4: "col-span-4 md:col-span-6 lg:col-span-8",
  6: "col-span-4 md:col-span-6 lg:col-span-12",
};

const rowSpanClasses = {
  1: "row-span-1",
  2: "row-span-2",
};

const variantClasses = {
  default: "bg-card border border-border",
  glass:
    "bg-[var(--glass-bg)] backdrop-blur-[20px] border border-[var(--glass-border)]",
  gradient: "bg-gradient-to-br from-card to-background border border-border",
};

export const BentoCard = forwardRef<HTMLDivElement, BentoCardProps>(
  (
    {
      colSpan = 3,
      rowSpan = 1,
      variant = "default",
      children,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "group relative overflow-hidden rounded-bento p-6",
          "transition-all duration-500",
          "hover:shadow-[var(--shadow-bento-hover)]",
          "hover:border-foreground/15",
          colSpanClasses[colSpan],
          rowSpanClasses[rowSpan],
          variantClasses[variant],
          className
        )}
        whileHover={{ y: -4, transition: { duration: 0.3 } }}
        {...props}
      >
        {/* Shine effect overlay */}
        <div
          className={cn(
            "absolute inset-0 rounded-bento pointer-events-none",
            "bg-[var(--gradient-bento-shine)]",
            "opacity-0 group-hover:opacity-100",
            "transition-opacity duration-500"
          )}
        />
        <div className="relative z-10">{children}</div>
      </motion.div>
    );
  }
);

BentoCard.displayName = "BentoCard";

// Animation variants for staggered children
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};
