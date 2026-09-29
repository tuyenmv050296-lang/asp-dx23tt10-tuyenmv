type SectionBlockProps = {
  eyebrow: string;
  title: string;
  badge?: string;
  children: React.ReactNode;
};

export function SectionBlock({ eyebrow, title, badge, children }: SectionBlockProps) {
  return (
    <section className="section-block">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </div>
        {badge ? <span className="pill">{badge}</span> : null}
      </div>
      {children}
    </section>
  );
}
