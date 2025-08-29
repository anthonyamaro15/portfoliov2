"use client";
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
            <div className="absolute left-[39px] top-0 bottom-0 w-[2px] bg-slate-800" aria-hidden />
            <div className="flex flex-col gap-12">
              {EXPERIENCE.jobsDetails.map((job) => (
                <div key={job.id} className="h-10 relative">
                  <div className="relative h-10">
                    <div className="absolute left-[32px] top-1.5 h-4 w-4 rounded-full bg-[var(--color-accent)] shadow" />
                  </div>
                  <div className="text-xs text-slate-400 mt-2">{getYear(job.date)}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Right content */}
          <div className="flex flex-col gap-8">
            {EXPERIENCE.jobsDetails.map((job) => (
              <article key={job.id} className="rounded-lg border border-slate-800 bg-slate-900 p-5 shadow-card">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {job.position} <a className="text-[var(--color-accent)]" href={job.website} target="_blank" rel="noopener noreferrer">{job.tag}</a>
                    </h3>
                    <div className="text-sm text-slate-400">{job.date}</div>
                  </div>
                </div>
                <ul className="mt-3 list-disc pl-5 text-sm text-slate-300 space-y-2">
                  {job.jobDescription.slice(0, 5).map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Page;
