"use client";
import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-16 pb-8">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-radial" />
      </div>

      <div className="mx-auto max-w-[1100px] px-5 md:px-8">
        <div className="mx-auto max-w-[760px] text-center">
          <h1 className="mt-1 [font-size:clamp(34px,6vw,56px)] leading-tight font-extrabold text-white">Anthony Amaro — Software Engineer</h1>
          <p className="mx-auto mt-4 max-w-[720px] text-base md:text-lg text-muted-foreground">
            I build high-performance web systems end-to-end — React/Next.js on the front, Node/Postgres on the back, and Rust where latency matters. Deploying to Vercel, AWS, and Azure.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button asChild>
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <Badge variant="secondary" className="text-xs">4+ years shipping</Badge>
            <Badge variant="secondary" className="text-xs">Full-stack: React • Node • Rust</Badge>
            <Badge variant="secondary" className="text-xs">Cloud: Vercel • AWS • Azure</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
