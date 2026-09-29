type KanbanBoardProps = {
  columns: Array<{ title: string; value: string; amount: string; items: string[] }>;
};

export function KanbanBoard({ columns }: KanbanBoardProps) {
  return (
    <div className="kanban">
      {columns.map((column) => (
        <article className="kanban-column" key={column.title}>
          <div className="kanban-head">
            <h3>{column.title}</h3>
            <strong>{column.value}</strong>
          </div>
          <p>{column.amount}</p>
          {column.items.map((item) => (
            <button type="button" key={item}>{item}</button>
          ))}
        </article>
      ))}
    </div>
  );
}
