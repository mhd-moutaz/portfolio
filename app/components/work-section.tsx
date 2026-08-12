"use client";

import { Fragment, useEffect, useState } from "react";
import type { Project } from "@/app/lib/dictionary";
import { SectionHeading } from "./section-heading";
import { Tag } from "./tag";
import { useLanguage } from "./providers";

function Pipeline({ steps }: { steps: string[] }) {
  const [active, setActive] = useState(0);
  const stepsKey = steps.join("|");

  useEffect(() => {
    setActive(0);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % steps.length);
    }, 1600);
    return () => window.clearInterval(id);
  }, [stepsKey, steps.length]);

  return (
    <div className="pipeline" aria-label="Order lifecycle">
      {steps.map((step, index) => (
        <Fragment key={`${step}-${index}`}>
          {index > 0 && (
            <span className="pl-arrow" aria-hidden="true">
              →
            </span>
          )}
          <div className={`pl-step ${index === active ? "active" : ""}`}>
            <span className="pdot" aria-hidden="true" />
            {step}
          </div>
        </Fragment>
      ))}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project">
      <div className="proj-top">
        <div className="proj-name">{project.name}</div>
        <div className="proj-period">{project.period}</div>
      </div>
      <p className="proj-desc">{project.description}</p>
      <div className="proj-stack">
        {project.stack.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </div>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <div className="project featured">
      <div className="proj-top">
        <div className="proj-name">{project.name}</div>
        <div className="proj-period">{project.period}</div>
      </div>
      <p className="proj-desc">{project.description}</p>
      {project.pipeline ? <Pipeline steps={project.pipeline} /> : null}
      {project.features ? (
        <ul className="proj-feats" style={{ marginTop: 22 }}>
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      ) : null}
      <div className="proj-stack">
        {project.stack.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </div>
  );
}

export function WorkSection() {
  const { t } = useLanguage();
  const [featured, ...rest] = t.work.projects;
  const [gridProjects, lastProject] = [
    rest.slice(0, Math.max(rest.length - 1, 1)),
    rest[rest.length - 1],
  ];

  return (
    <section id="work">
      <div className="wrap">
        <SectionHeading
          eyebrow={t.work.eyebrow}
          title={t.work.title}
          sub={t.work.sub}
        />
        <FeaturedProject project={featured} />
        <div className="row-cards">
          {gridProjects.map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>
        {lastProject ? (
          <div className="project" style={{ marginTop: 24 }}>
            <div className="proj-top">
              <div className="proj-name">{lastProject.name}</div>
              <div className="proj-period">{lastProject.period}</div>
            </div>
            <p className="proj-desc">{lastProject.description}</p>
            <div className="proj-stack">
              {lastProject.stack.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
