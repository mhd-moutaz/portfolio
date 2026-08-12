interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  sub?: string;
}

export function SectionHeading({ eyebrow, title, sub }: SectionHeadingProps) {
  return (
    <div className="sec-head">
      <div className="sec-eyebrow">{eyebrow}</div>
      <h2 className="sec-title">{title}</h2>
      {sub ? <p className="sec-sub">{sub}</p> : null}
    </div>
  );
}
