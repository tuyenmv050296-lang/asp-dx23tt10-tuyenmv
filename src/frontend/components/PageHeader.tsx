type PageHeaderProps = {
  eyebrow: string;
  title: string;
  actions?: string[];
};

export function PageHeader({ eyebrow, title, actions = [] }: PageHeaderProps) {
  return (
    <header className="topbar">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
      </div>
      {actions.length > 0 ? (
        <div className="topbar-actions" aria-label="Tác vụ nhanh">
          {actions.map((action) => (
            <button type="button" key={action}>{action}</button>
          ))}
        </div>
      ) : null}
    </header>
  );
}
