"use client";

import { SectionHeading } from "./section-heading";
import { useLanguage } from "./providers";

export function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section id="experience">
      <div className="wrap">
        <SectionHeading
          eyebrow={t.experience.eyebrow}
          title={t.experience.title}
        />
        <div className="timeline">
          {t.experience.items.map((item) => (
            <div className="t-item" key={item.title}>
              <div className="t-period">{item.period}</div>
              <div className="t-title">{item.title}</div>
              <div className="t-org">{item.org}</div>
              <p className="t-desc">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="cert-row">
          {t.experience.certificates.map((certificate) => (
            <div className="cert-chip" key={certificate.label}>
              <span
                className={`mark ${certificate.isLangBadge ? "lang-badge" : ""}`}
              >
                {certificate.mark}
              </span>
              <span className="label">{certificate.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
