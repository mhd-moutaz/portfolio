"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./providers";

export function Header() {
  const { t, lang, toggleLang } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section[id]"),
    );

    const onScroll = () => {
      let current = "";
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = section.id;
          break;
        }
      }
      setActiveId(current || "home");
    };

    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);
  const toggleMobile = () => setMobileOpen((open) => !open);
  const langLabel = lang === "ar" ? "English" : "العربية";

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#home" className="logo" onClick={closeMobile}>
          moutaz<span>.dev</span>
        </a>
        <nav className="links">
          {t.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeId === link.href.slice(1) ? "active" : undefined}
              onClick={closeMobile}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            className="lang-toggle"
            onClick={toggleLang}
            aria-label="Switch language"
          >
            {langLabel}
          </button>
          <a className="nav-cta" href={`mailto:${t.hero.email}`}>
            {t.nav.cta}
          </a>
          <button
            className="nav-toggle"
            onClick={toggleMobile}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        {t.nav.links.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMobile}>
            {link.label}
          </a>
        ))}
        <button
          className="lang-toggle"
          onClick={toggleLang}
          aria-label="Switch language"
        >
          {langLabel}
        </button>
      </div>
    </header>
  );
}
