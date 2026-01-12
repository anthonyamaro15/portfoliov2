"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { EXPERIENCE } from "../../config/experience";

const getYear = (range: string) => {
  const m = range.match(/(\d{4})/);
  return m ? m[1] : "";
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const Page = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="main-container">
      <section className="py-24 md:py-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold text-foreground"
        >
          Experience
        </motion.h1>

        {/* Desktop Timeline */}
        <div className="mt-12 hidden md:block" ref={containerRef}>
          <div className="relative">
            {/* Animated vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border">
              <motion.div
                className="absolute inset-x-0 top-0 bg-gradient-to-b from-foreground/50 via-foreground/30 to-transparent origin-top"
                style={{ height: lineHeight }}
              />
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-12"
            >
              {EXPERIENCE.jobsDetails.map((job) => (
                <motion.div
                  key={job.id}
                  variants={itemVariants}
                  className="relative pl-16"
                >
                  {/* Timeline dot - rounded with glow on hover */}
                  <motion.div
                    className="absolute left-4 top-2 h-4 w-4 rounded-full border-2 border-foreground bg-background transition-all duration-300"
                    whileHover={{
                      scale: 1.3,
                      boxShadow: "0 0 20px rgba(255,255,255,0.3)",
                    }}
                  />

                  {/* Year indicator */}
                  <div className="absolute left-0 -top-6 text-xs text-muted-foreground font-medium">
                    {getYear(job.date)}
                  </div>

                  <Card className="group rounded-bento transition-all duration-400 hover:shadow-[var(--shadow-card-hover)] hover:border-foreground/15">
                    {/* Left border accent on hover */}
                    <div className="absolute left-0 top-4 bottom-4 w-[2px] rounded-full bg-transparent group-hover:bg-foreground/30 transition-colors duration-400" />
                    <CardHeader className="pb-3">
                      <h3 className="text-lg font-semibold text-foreground">
                        {job.position}
                        <span className="text-muted-foreground font-normal">
                          {" "}
                          at{" "}
                        </span>
                        <a
                          className="text-foreground hover:text-muted-foreground underline underline-offset-2 transition-colors duration-200"
                          href={job.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {job.tag}
                        </a>
                      </h3>
                      <div className="text-sm text-muted-foreground">
                        {job.date}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-none space-y-3 text-sm text-muted-foreground">
                        {job.jobDescription.slice(0, 5).map((d, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="text-foreground/30 select-none">
                              —
                            </span>
                            <span className="leading-relaxed">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mobile Timeline - simplified stack */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 md:hidden space-y-6"
        >
          {EXPERIENCE.jobsDetails.map((job) => (
            <motion.div key={job.id} variants={itemVariants}>
              <Card className="rounded-bento">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-base font-semibold text-foreground">
                      {job.position}
                    </h3>
                    <span className="text-xs text-muted-foreground shrink-0 px-2 py-1 rounded-full bg-muted/30">
                      {getYear(job.date)}
                    </span>
                  </div>
                  <a
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    href={job.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {job.tag}
                  </a>
                </CardHeader>
                <CardContent>
                  <ul className="list-none space-y-2 text-sm text-muted-foreground">
                    {job.jobDescription.slice(0, 3).map((d, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-foreground/30">—</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Page;
