"use client";

import { useLanguage } from "./providers";
import { Terminal } from "./terminal";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="home">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">{t.hero.eyebrow}</div>
            <h1 className="name">
              {t.hero.firstName}
              <span className="last">{t.hero.lastName}</span>
            </h1>
            <div className="role">
              {t.hero.roleLeft} <span className="pipe">/</span>{" "}
              {t.hero.roleRight}
            </div>
            <p className="lede">{t.hero.lede}</p>
            <div className="hero-actions">
              <a href="#work" className="btn btn-primary">
                {t.hero.primaryCta}
              </a>
              <a href="#contact" className="btn btn-ghost">
                {t.hero.secondaryCta}
              </a>
            </div>
            <div className="hero-meta">
              <a href={`mailto:${t.hero.email}`}>{t.hero.email}</a>
              <a href={t.hero.phoneHref} dir="ltr" className="ltr-number">
                {t.hero.phone}
              </a>
              <a href={t.hero.githubUrl} target="_blank" rel="noopener noreferrer">
                {t.hero.githubLabel}
              </a>
              <a href={t.hero.linkedinUrl} target="_blank" rel="noopener noreferrer">
                {t.hero.linkedinLabel}
              </a>
            </div>
          </div>
          <Terminal />
        </div>
      </div>
    </section>
  );
}
