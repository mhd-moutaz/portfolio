"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./providers";

const TYPE_INTERVAL_MS = 28;
const TYPE_DELAY_MS = 900;

export function Terminal() {
  const { t } = useLanguage();
  const fullText = t.terminal.typedLine;
  const [typed, setTyped] = useState(fullText);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(fullText);
      return;
    }

    let i = 0;
    let timer: ReturnType<typeof setTimeout>;

    setTyped("");
    const type = () => {
      i += 1;
      setTyped(fullText.slice(0, i));
      if (i < fullText.length) {
        timer = setTimeout(type, TYPE_INTERVAL_MS);
      }
    };

    timer = setTimeout(type, TYPE_DELAY_MS);
    return () => clearTimeout(timer);
  }, [fullText]);

  return (
    <div className="terminal" aria-label="Terminal window">
      <div className="terminal-bar">
        <div className="dot r" />
        <div className="dot y" />
        <div className="dot g" />
        <span className="terminal-title">developer.sql</span>
      </div>
      <div className="terminal-body">
        <span className="t-comment">-- query the stack</span>
        {"\n"}SELECT * FROM <span className="t-key">engineers</span>
        {"\n"}WHERE <span className="t-key">name</span> ={" "}
        <span className="t-str">&apos;Mhd Moutaz Takahji&apos;</span>
        {"\n"}  AND <span className="t-key">stack</span> IN (
        <span className="t-str">&apos;Laravel&apos;</span>,{" "}
        <span className="t-str">&apos;Flutter&apos;</span>,{" "}
        <span className="t-str">&apos;MySQL&apos;</span>)
        {"\n"}LIMIT 1;
        {"\n\n"}
        <span className="t-out" id="typed-line">
          {typed}
        </span>
        <span className="cursor" aria-hidden="true" />
      </div>
    </div>
  );
}
