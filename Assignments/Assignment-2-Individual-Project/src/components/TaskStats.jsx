import { CheckCircle2, Clock3, ListTodo } from 'lucide-react';

export default function TaskStats({ tasks }) {
  const completed = tasks.filter((task) => task.completed).length;
  const pending = tasks.length - completed;
  const cards = [
    { label: 'Total tasks', value: tasks.length, icon: ListTodo, tone: 'violet' },
    { label: 'In progress', value: pending, icon: Clock3, tone: 'orange' },
    { label: 'Completed', value: completed, icon: CheckCircle2, tone: 'green' }
  ];
  return (
    <section className="stats-grid" aria-label="Task summary">
      {cards.map(({ label, value, icon: Icon, tone }) => (
        <article className="stat-card" key={label}>
          <span className={`stat-icon ${tone}`}><Icon size={20} /></span>
          <div><p>{label}</p><strong>{value}</strong></div>
        </article>
      ))}
    </section>
  );
}
