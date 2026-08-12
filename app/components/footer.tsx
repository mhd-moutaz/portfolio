"use client";

import { useLanguage } from "./providers";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer>
      <div className="wrap">{t.footer}</div>
    </footer>
  );
}
