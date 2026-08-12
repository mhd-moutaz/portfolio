"use client";

import { useLanguage } from "./providers";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact-wrap">
          <div
            className="sec-eyebrow"
            style={{ justifyContent: "center", display: "flex" }}
          >
            {t.contact.eyebrow}
          </div>
          <h2>{t.contact.heading}</h2>
          <p>{t.contact.description}</p>
          <div className="contact-links">
            <a
              className="btn btn-primary"
              href={`mailto:${t.hero.email}`}
            >
              {t.contact.emailLabel}
            </a>
            <a className="btn btn-ghost ltr-number" href={t.hero.phoneHref} dir="ltr">
              {t.contact.phoneLabel}
            </a>
            <a className="btn btn-ghost" href={t.hero.githubUrl} target="_blank" rel="noopener noreferrer">
              {t.contact.githubLabel}
            </a>
            <a className="btn btn-ghost" href={t.hero.linkedinUrl} target="_blank" rel="noopener noreferrer">
              {t.contact.linkedinLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
