"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RESOURCES } from "@/config/resources";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const Page = () => {
  const { email, github, linkedin, twitter } = RESOURCES;
  const [status, setStatus] = useState<null | "idle" | "success" | "error">(
    null
  );
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const fromEmail = String(formData.get("fromEmail") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fromEmail);
    const newErrors: typeof errors = {};
    if (!name) newErrors.name = "Please enter your name";
    if (!isValidEmail) newErrors.email = "Enter a valid email";
    if (message.length < 10)
      newErrors.message = "Message should be at least 10 characters";
    setErrors(newErrors);
    if (Object.keys(newErrors).length) {
      setStatus("error");
      return;
    }
    setStatus("success");
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\nFrom: ${name} <${fromEmail}>`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    form.reset();
  };

  const socialLinks = [
    { label: "Email", href: `mailto:${email}`, value: email },
    { label: "GitHub", href: github, value: github },
    { label: "LinkedIn", href: linkedin, value: linkedin },
    { label: "Twitter", href: twitter, value: twitter },
  ];

  return (
    <div className="main-container">
      <section className="content py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl md:text-3xl font-semibold text-foreground">
            Contact
          </h1>
          <p className="mt-3 text-muted-foreground max-w-xl">
            I&apos;m always open to new opportunities, collaboration, or a quick
            chat. Reach me directly at{" "}
            <a
              href={`mailto:${email}`}
              className="text-foreground underline hover:text-muted-foreground transition-colors"
            >
              {email}
            </a>{" "}
            or send a quick message below.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="group overflow-hidden rounded-bento transition-all duration-400 hover:shadow-[var(--shadow-card-hover)] hover:border-foreground/15">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={onSubmit}>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <Alert className="mb-4 bg-emerald-900/30 text-emerald-300 border-emerald-800 rounded-bento-inner">
                        <AlertDescription>
                          Opening your email client...
                        </AlertDescription>
                      </Alert>
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <Alert
                        variant="destructive"
                        className="mb-4 rounded-bento-inner"
                      >
                        <AlertDescription>
                          Please provide a valid email and a message of at least
                          10 characters.
                        </AlertDescription>
                      </Alert>
                    </motion.div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="rounded-bento-inner"
                        onBlur={(e) =>
                          setErrors((prev) => ({
                            ...prev,
                            name: e.currentTarget.value.trim()
                              ? undefined
                              : "Please enter your name",
                          }))
                        }
                      />
                      {errors.name && (
                        <p className="text-xs text-destructive">{errors.name}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fromEmail">Email</Label>
                      <Input
                        id="fromEmail"
                        name="fromEmail"
                        type="email"
                        required
                        className="rounded-bento-inner"
                        onBlur={(e) =>
                          setErrors((prev) => ({
                            ...prev,
                            email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                              e.currentTarget.value
                            )
                              ? undefined
                              : "Enter a valid email",
                          }))
                        }
                      />
                      {errors.email && (
                        <p className="text-xs text-destructive">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      minLength={10}
                      rows={5}
                      className="rounded-bento-inner resize-none"
                      onBlur={(e) =>
                        setErrors((prev) => ({
                          ...prev,
                          message:
                            e.currentTarget.value.trim().length >= 10
                              ? undefined
                              : "Message should be at least 10 characters",
                        }))
                      }
                    />
                    {errors.message && (
                      <p className="text-xs text-destructive">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <div className="mt-6">
                    <Button type="submit" className="rounded-full px-6">
                      Send message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden rounded-bento transition-all duration-400 hover:shadow-[var(--shadow-card-hover)] hover:border-foreground/15 h-full">
              <CardContent className="p-6 md:p-8 space-y-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.label !== "Email" ? "_blank" : undefined}
                    rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                    className="block p-3 -mx-3 rounded-bento-inner transition-all duration-300 hover:bg-foreground/5 group/link"
                  >
                    <div className="text-sm font-medium text-foreground">
                      {link.label}
                    </div>
                    <div className="text-sm text-muted-foreground break-words group-hover/link:text-foreground transition-colors duration-200">
                      {link.value}
                    </div>
                  </a>
                ))}
                <a
                  href={`mailto:${email}?subject=Book%2015m%20intro%20call`}
                  className="block p-3 -mx-3 rounded-bento-inner transition-all duration-300 hover:bg-foreground/5 group/link"
                >
                  <div className="text-sm font-medium text-foreground">
                    Book a call
                  </div>
                  <div className="text-sm text-muted-foreground underline group-hover/link:text-foreground transition-colors duration-200">
                    Book 15m intro call
                  </div>
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8"
        >
          <Card className="rounded-bento">
            <CardHeader>
              <CardTitle className="text-base">FAQ</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="response-time">
                  <AccordionTrigger className="hover:no-underline">
                    Response time
                  </AccordionTrigger>
                  <AccordionContent>
                    Typically within 24–48 hours.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="projects">
                  <AccordionTrigger className="hover:no-underline">
                    Projects
                  </AccordionTrigger>
                  <AccordionContent>
                    Frontend apps, performance audits, DX tooling.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="location">
                  <AccordionTrigger className="hover:no-underline">
                    Location
                  </AccordionTrigger>
                  <AccordionContent>US (remote-friendly).</AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  );
};

export default Page;
