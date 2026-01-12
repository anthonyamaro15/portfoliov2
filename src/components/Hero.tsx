"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedText } from "@/components/ui/animated-text";
import { FloatingElement } from "@/components/ui/floating-element";

// Dynamic import for Three.js component (requires WebGL)
const ParticleField = dynamic(
  () => import("@/components/ui/particle-field").then((mod) => mod.ParticleField),
  { ssr: false }
);

const techBadges = [
  "4+ years shipping",
  "React / Node / Rust",
  "Vercel / AWS / Azure",
];

// Floating decorative code snippet
const FloatingCode = ({
  delay,
  className,
  variant = "default",
}: {
  delay: number;
  className: string;
  variant?: "default" | "rust" | "react";
}) => {
  const snippets = {
    default: (
      <>
        <span className="text-emerald-400">const</span> build ={" "}
        <span className="text-amber-400">()</span> =&gt; ...
      </>
    ),
    rust: (
      <>
        <span className="text-rose-400">fn</span>{" "}
        <span className="text-blue-400">main</span>
        <span className="text-amber-400">()</span> {"{"} ... {"}"}
      </>
    ),
    react: (
      <>
        <span className="text-cyan-400">&lt;App</span>{" "}
        <span className="text-amber-400">/&gt;</span>
      </>
    ),
  };

  return (
    <FloatingElement delay={delay} className={className} yOffset={12}>
      <div className="px-3 py-2 bg-card/60 backdrop-blur-sm border border-border/50 rounded-bento-inner text-xs text-muted-foreground font-mono">
        {snippets[variant]}
      </div>
    </FloatingElement>
  );
};

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Parallax transforms for background orbs
  const orb1X = useTransform(smoothX, [0, 1], [-30, 30]);
  const orb1Y = useTransform(smoothY, [0, 1], [-30, 30]);
  const orb2X = useTransform(smoothX, [0, 1], [20, -20]);
  const orb2Y = useTransform(smoothY, [0, 1], [20, -20]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <motion.section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden min-h-[90vh] flex items-center justify-center pt-16"
      style={{ opacity: heroOpacity, y: heroY }}
    >
      {/* Three.js Particle Field Background */}
      <ParticleField className="absolute inset-0 -z-10" />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-radial from-white/[0.05] to-transparent blur-3xl"
          style={{ x: orb1X, y: orb1Y }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-radial from-white/[0.03] to-transparent blur-3xl"
          style={{ x: orb2X, y: orb2Y }}
        />
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.02)_1px,transparent_0)] bg-[length:32px_32px]" />
      </div>

      {/* Animated vertical lines */}
      <motion.div
        className="absolute left-[6%] top-1/4 w-[1px] h-32 bg-gradient-to-b from-transparent via-foreground/15 to-transparent hidden lg:block"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
        style={{ originY: 0 }}
      />
      <motion.div
        className="absolute right-[6%] bottom-1/3 w-[1px] h-24 bg-gradient-to-b from-transparent via-foreground/10 to-transparent hidden lg:block"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
        style={{ originY: 1 }}
      />

      {/* Floating decorative elements */}
      <FloatingCode
        delay={0}
        className="absolute top-32 left-[8%] hidden lg:block"
        variant="default"
      />
      <FloatingCode
        delay={2}
        className="absolute top-48 right-[12%] hidden lg:block"
        variant="rust"
      />
      <FloatingCode
        delay={3.5}
        className="absolute bottom-48 right-[6%] hidden xl:block"
        variant="react"
      />

      {/* Geometric shapes */}
      <FloatingElement
        delay={1}
        className="absolute bottom-40 left-[18%] hidden lg:block"
        yOffset={8}
      >
        <div className="w-14 h-14 border border-border/30 rounded-bento rotate-12" />
      </FloatingElement>
      <FloatingElement
        delay={3}
        className="absolute top-60 right-[8%] hidden lg:block"
        yOffset={6}
      >
        <div className="w-4 h-4 bg-foreground/10 rounded-full" />
      </FloatingElement>

      {/* Additional shapes for visual depth */}
      <FloatingElement
        delay={2.5}
        className="absolute top-36 right-[22%] hidden xl:block"
        yOffset={10}
      >
        <div className="w-6 h-6 border border-border/25 rotate-45" />
      </FloatingElement>
      <FloatingElement
        delay={1.5}
        className="absolute bottom-52 left-[10%] hidden lg:block"
        yOffset={6}
      >
        <div className="w-3 h-3 bg-foreground/8 rotate-45" />
      </FloatingElement>
      <FloatingElement
        delay={4}
        className="absolute top-72 left-[15%] hidden xl:block"
        yOffset={8}
      >
        <div className="w-8 h-8 border border-border/20 rounded-full" />
      </FloatingElement>
      <FloatingElement
        delay={2}
        className="absolute bottom-32 right-[18%] hidden lg:block"
        yOffset={12}
      >
        <div className="w-2 h-2 bg-foreground/15 rounded-full" />
      </FloatingElement>

      <div className="mx-auto max-w-[1100px] px-5 md:px-8 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 border border-border bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full text-xs text-muted-foreground mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Available for opportunities
        </motion.div>

        {/* Main heading with animated reveal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95]">
            <span className="bg-gradient-to-b from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
              <AnimatedText text="Anthony Amaro" delay={0.3} />
            </span>
          </h1>
        </motion.div>

        {/* Decorative accent line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-20 h-[2px] bg-gradient-to-r from-foreground/50 via-foreground/25 to-transparent mx-auto mt-5 origin-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 text-xl md:text-2xl text-muted-foreground font-medium"
        >
          Software Engineer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-[640px] text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          I build high-performance web systems end-to-end — React/Next.js on the
          front, Node/Postgres on the back, and Rust where latency matters.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button size="lg" className="rounded-full px-8" asChild>
            <Link href="#projects">View Projects</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8"
            asChild
          >
            <Link href="/contact">Contact</Link>
          </Button>
        </motion.div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          {techBadges.map((badge, i) => (
            <motion.div
              key={badge}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.5 + i * 0.1,
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Badge
                variant="outline"
                className="text-xs px-4 py-2 rounded-full border-border/50 bg-card/30 backdrop-blur-sm"
              >
                {badge}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3], y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-muted-foreground/50 rounded-full"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
