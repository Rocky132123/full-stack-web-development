import { Plus } from 'lucide-react';
import { useState } from 'react';

const initialForm = { title: '', subject: '', dueDate: '', priority: 'Medium' };

export default function TaskForm({ onAdd }) {
  const [form, setForm] = useState(initialForm);
  const [open, setOpen] = useState(false);

  function update(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  function submit(event) {
    event.preventDefault();
    if (!form.title.trim() || !form.subject.trim() || !form.dueDate) return;
    onAdd({ ...form, title: form.title.trim(), subject: form.subject.trim() });
    setForm(initialForm);
    setOpen(false);
  }

  return (
    <section className="form-panel">
      <div className="panel-heading">
        <div><h2>Add a task</h2><p>Keep your next deadline in view.</p></div>
        <button className="primary-button" onClick={() => setOpen((value) => !value)} type="button">
          <Plus size={17} /> {open ? 'Close' : 'New task'}
        </button>
      </div>
      {open && (
        <form className="task-form" onSubmit={submit}>
          <label>Task title<input name="title" value={form.title} onChange={update} placeholder="e.g. Complete assignment 2" required maxLength={100} /></label>
          <label>Subject<input name="subject" value={form.subject} onChange={update} placeholder="e.g. Operating Systems" required maxLength={60} /></label>
          <label>Due date<input name="dueDate" type="date" value={form.dueDate} onChange={update} min="2020-01-01" required /></label>
          <label>Priority<select name="priority" value={form.priority} onChange={update}><option>Low</option><option>Medium</option><option>High</option></select></label>
          <button className="primary-button form-submit" type="submit"><Plus size={17} /> Add task</button>
        </form>
      )}
    </section>
  );
}
