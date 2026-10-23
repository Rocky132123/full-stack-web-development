import { CalendarDays, Check, Circle, Trash2 } from 'lucide-react';

function formatDate(value) {
  if (!value) return 'No due date';
  return new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' })
    .format(new Date(`${value}T00:00:00Z`));
}

export default function TaskItem({ task, onToggle, onDelete }) {
  const overdue = !task.completed && task.dueDate && task.dueDate < new Date().toISOString().slice(0, 10);
  return (
    <article className={`task-row ${task.completed ? 'is-complete' : ''}`}>
      <button className="check-button" onClick={() => onToggle(task.id)} aria-label={task.completed ? 'Mark task incomplete' : 'Mark task complete'}>
        {task.completed ? <Check size={16} /> : <Circle size={19} />}
      </button>
      <div className="task-main">
        <h3>{task.title}</h3>
        <div className="task-meta"><span>{task.subject}</span><span className={overdue ? 'date overdue' : 'date'}><CalendarDays size={14} /> {overdue ? 'Overdue · ' : ''}{formatDate(task.dueDate)}</span></div>
      </div>
      <span className={`priority priority-${task.priority.toLowerCase()}`}>{task.priority}</span>
      <button className="icon-button delete-button" onClick={() => onDelete(task.id)} aria-label={`Delete ${task.title}`} title="Delete task"><Trash2 size={17} /></button>
    </article>
  );
}
