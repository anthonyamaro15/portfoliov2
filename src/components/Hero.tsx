"use client";
import React from 'react';
import Link from 'next/link';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-16 pb-8">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-radial" />
      </div>

      <div className="mx-auto max-w-[1100px] px-5 md:px-8">
        <div className="mx-auto max-w-[760px] text-center">
          <h1 className="mt-1 [font-size:clamp(34px,6vw,56px)] leading-tight font-extrabold text-white">Anthony Amaro — Software Engineer</h1>
          <p className="mx-auto mt-4 max-w-[720px] text-base md:text-lg text-[var(--color-fg-muted)]">
            I build high-performance web systems end-to-end — React/Next.js on the front, Node/Postgres on the back, and Rust where latency matters. Deploying to Vercel, AWS, and Azure.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link href="#projects" className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium transition focus:outline-none" style={{ backgroundColor: 'var(--accent)', color: '#fff' }}>
              View Projects
            </Link>
            <Link href="/contact" className="inline-flex items-center rounded-md border border-[var(--color-border)] px-4 py-2 text-sm font-medium hover:bg-slate-800 transition focus:outline-none">
              Contact
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-[var(--color-fg-muted)]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-slate-900/40 px-2.5 py-1">⏱ 4+ years shipping</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-slate-900/40 px-2.5 py-1">⚡ Full-stack: React • Node • Rust</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-slate-900/40 px-2.5 py-1">☁️ Cloud: Vercel • AWS • Azure</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
