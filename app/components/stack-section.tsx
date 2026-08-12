"use client";

import { SectionHeading } from "./section-heading";
import { Tag } from "./tag";
import { useLanguage } from "./providers";

export function StackSection() {
  const { t } = useLanguage();

  return (
    <section id="stack">
      <div className="wrap">
        <SectionHeading
          eyebrow={t.stack.eyebrow}
          title={t.stack.title}
          sub={t.stack.sub}
        />
        <div className="stack-grid">
          {t.stack.cards.map((card) => (
            <article className="stack-card" key={card.id}>
              <span className="idx">{card.id}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <div className="tag-row">
                {card.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
