type MetricGridProps = {
  metrics: Array<{ label: string; value: string; change: string }>;
};

export function MetricGrid({ metrics }: MetricGridProps) {
  return (
    <section className="overview-grid" aria-label="Chỉ số tổng quan">
      {metrics.map((item) => (
        <article className="metric" key={item.label}>
          <span>{item.label}</span>
          <strong>{item.value}</strong>
          <small>{item.change} so với kỳ trước</small>
        </article>
      ))}
    </section>
  );
}
