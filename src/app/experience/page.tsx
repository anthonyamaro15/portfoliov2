"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { EXPERIENCE } from "../../config/experience";

const getYear = (range: string) => {
  const m = range.match(/(\d{4})/);
  return m ? m[1] : '';
};

const Page = () => {
  return (
    <div className="main-container">
      <section className="py-24">
        <h1 className="text-2xl md:text-3xl font-semibold text-white">Experience</h1>
        <div className="mt-10 grid grid-cols-[80px,1fr] gap-6">
          {/* Left rail */}
          <div className="relative">
            <Separator orientation="vertical" className="absolute left-[39px] top-0 bottom-0 h-full" />
            <div className="flex flex-col gap-12">
              {EXPERIENCE.jobsDetails.map((job) => (
                <div key={job.id} className="h-10 relative">
                  <div className="relative h-10">
                    <div className="absolute left-[32px] top-1.5 h-4 w-4 rounded-full bg-primary shadow" />
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">{getYear(job.date)}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Right content */}
          <div className="flex flex-col gap-8">
            {EXPERIENCE.jobsDetails.map((job) => (
              <Card key={job.id} className="bg-card/90">
                <CardHeader className="pb-2">
                  <h3 className="text-base font-semibold text-white">
                    {job.position}{" "}
                    <a className="text-primary hover:text-primary/80" href={job.website} target="_blank" rel="noopener noreferrer">
                      {job.tag}
                    </a>
                  </h3>
                  <div className="text-sm text-muted-foreground">{job.date}</div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                    {job.jobDescription.slice(0, 5).map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
