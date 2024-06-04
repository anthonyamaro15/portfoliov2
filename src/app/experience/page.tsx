"use client";
import { Tabs } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import { EXPERIENCE, SKILLS } from "../../config/experience";
import Footer from "../footer/footer";
import TagsComponent from "../../components/tags/tags";
import "./experience.scss";

const Page = () => {
  const [activeTab, setActiveTab] = useState<string | null>("blueraster");
  const matches = useMediaQuery("(max-width: 650px)");

  return (
    <div className="main-container">
      <div className="timeline">
        <div className="content experience">
          <h1>Where I've Worked</h1>

          <Tabs
            placement="left"
            inverted={true}
            orientation={matches ? "horizontal" : "vertical"}
            value={activeTab}
            onTabChange={(value) => setActiveTab(value)}
            className="tab-container"
          >
            <Tabs.List>
              {EXPERIENCE.companies.map((company) => (
                <Tabs.Tab
                  key={company.id}
                  className={
                    activeTab === company.id ? "active tab-value" : "tab-value"
                  }
                  value={company.id}
                >
                  {company.name}
                </Tabs.Tab>
              ))}
            </Tabs.List>

            {/* {EXPERIENCE.jobsDetails.map((job) => (
              <Tabs.Panel key={job.id} value={job.id} className="tab-panel">
                <div className="top">
                  <h4>
                    {job.position}{" "}
                    <a href={job.website} target="_blank">
                      {job.tag}
                    </a>{" "}
                  </h4>
                  <span>{job.date}</span>

                  <ul>
                    {job.jobDescription.map((jobDescription, i) => (
                      <li key={i}>{jobDescription}</li>
                    ))}
                  </ul>
                </div>
              </Tabs.Panel>
            ))} */}
          </Tabs>
        </div>

        <div className="content skills">
          <h1>skills</h1>

          <TagsComponent data={SKILLS} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
