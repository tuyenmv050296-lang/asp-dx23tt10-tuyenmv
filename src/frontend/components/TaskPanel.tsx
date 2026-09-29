type TaskPanelProps = {
  tasks: Array<{ time: string; title: string }>;
};

export function TaskPanel({ tasks }: TaskPanelProps) {
  return (
    <aside className="activity-panel">
      <div className="section-heading compact">
        <div>
          <p className="eyebrow">Việc hôm nay</p>
          <h2>Lịch hẹn & nhắc việc</h2>
        </div>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={`${task.time}-${task.title}`}>
            <span>{task.time}</span>
            {task.title}
          </li>
        ))}
      </ul>
    </aside>
  );
}
