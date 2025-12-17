"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { RESOURCES } from "@/config/resources";
import "./contact.scss";

import { useState } from "react";

const Page = () => {
  const { email, github, linkedin, twitter } = RESOURCES;
  const [status, setStatus] = useState<null | "idle" | "success" | "error">(null);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

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
    if (message.length < 10) newErrors.message = "Message should be at least 10 characters";
    setErrors(newErrors);
    if (Object.keys(newErrors).length) { setStatus("error"); return; }
    setStatus("success");
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\nFrom: ${name} <${fromEmail}>`,
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    form.reset();
  };

  return (
    <div className="main-container">
      <section className="content contact py-24">
        <h1 className="text-2xl md:text-3xl font-semibold text-white">
          Contact
        </h1>
        <p className="mt-3 text-slate-300">
          I’m always open to new opportunities, collaboration, or a quick chat.
          Reach me directly at{" "}
          <a
            href={`mailto:${email}`}
            className="text-[var(--color-accent)] underline"
          >
            {email}
          </a>{" "}
          or send a quick message below.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/90">
            <CardContent className="p-6">
              <form onSubmit={onSubmit}>
                {status === "success" && (
                  <Alert className="mb-4 bg-emerald-900/30 text-emerald-300 border-emerald-800">
                    <AlertDescription>Opening your email client…</AlertDescription>
                  </Alert>
                )}
                {status === "error" && (
                  <Alert variant="destructive" className="mb-4">
                    <AlertDescription>
                      Please provide a valid email and a message of at least 10 characters.
                    </AlertDescription>
                  </Alert>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      onBlur={(e) => setErrors((prev) => ({ ...prev, name: e.currentTarget.value.trim() ? undefined : 'Please enter your name' }))}
                    />
                    {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fromEmail">Email</Label>
                    <Input
                      id="fromEmail"
                      name="fromEmail"
                      type="email"
                      required
                      onBlur={(e) => setErrors((prev) => ({ ...prev, email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.currentTarget.value) ? undefined : 'Enter a valid email' }))}
                    />
                    {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
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
                    onBlur={(e) => setErrors((prev) => ({ ...prev, message: e.currentTarget.value.trim().length >= 10 ? undefined : 'Message should be at least 10 characters' }))}
                  />
                  {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
                </div>
                <div className="mt-6">
                  <Button type="submit">Send message</Button>
                </div>
              </form>
            </CardContent>
          </Card>
          <Card className="bg-card/90">
            <CardContent className="p-6 space-y-4">
              <div>
                <div className="text-sm font-medium text-white">Email</div>
                <a href={`mailto:${email}`} className="text-sm text-primary break-words hover:text-primary/80">
                  {email}
                </a>
              </div>
              <div>
                <div className="text-sm font-medium text-white">GitHub</div>
                <a href={github} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground break-words hover:text-foreground">
                  {github}
                </a>
              </div>
              <div>
                <div className="text-sm font-medium text-white">LinkedIn</div>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground break-words hover:text-foreground">
                  {linkedin}
                </a>
              </div>
              <div>
                <div className="text-sm font-medium text-white">Twitter</div>
                <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground break-words hover:text-foreground">
                  {twitter}
                </a>
              </div>
              <div>
                <div className="text-sm font-medium text-white">Book a call</div>
                <a href={`mailto:${email}?subject=Book%2015m%20intro%20call`} className="text-sm text-muted-foreground underline hover:text-foreground">
                  Book 15m intro call
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="mt-8 bg-card/90">
          <CardHeader>
            <CardTitle className="text-base">FAQ</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="response-time">
                <AccordionTrigger>Response time</AccordionTrigger>
                <AccordionContent>Typically within 24–48 hours.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="projects">
                <AccordionTrigger>Projects</AccordionTrigger>
                <AccordionContent>Frontend apps, performance audits, DX tooling.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="location">
                <AccordionTrigger>Location</AccordionTrigger>
                <AccordionContent>US (remote-friendly).</AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </section>
      
    </div>
  );
};

export default Page;
