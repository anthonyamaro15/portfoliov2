"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export const AnimatedText = ({
  text,
  className,
  delay = 0,
  staggerDelay = 0.03,
  as: Component = "span",
}: AnimatedTextProps) => {
  const words = text.split(" ");

  return (
    <Component className={cn("inline-flex flex-wrap", className)}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex mr-[0.25em]">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              initial={{ opacity: 0, y: 20, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                delay:
                  delay + (wordIndex * word.length + charIndex) * staggerDelay,
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ display: "inline-block", transformOrigin: "bottom" }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </Component>
  );
};

// Variant for word-by-word animation (faster for longer text)
interface AnimatedWordsProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export const AnimatedWords = ({
  text,
  className,
  delay = 0,
  staggerDelay = 0.08,
  as: Component = "span",
}: AnimatedWordsProps) => {
  const words = text.split(" ");

  return (
    <Component className={cn("inline-flex flex-wrap", className)}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delay + index * staggerDelay,
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </Component>
  );
};

export default AnimatedText;
