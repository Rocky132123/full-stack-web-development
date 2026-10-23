import { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, CalendarDays, Sparkles } from 'lucide-react';
import seedTasks from './data.json';
import Header from './components/Header.jsx';
import TaskForm from './components/TaskForm.jsx';
import TaskItem from './components/TaskItem.jsx';
import TaskStats from './components/TaskStats.jsx';

const STORAGE_KEY = 'campus-taskboard-v1';

export default function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : seedTasks;
    } catch {
      return seedTasks;
    }
  });
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const visibleTasks = useMemo(() => tasks
    .filter((task) => {
      const term = query.toLowerCase().trim();
      return !term || `${task.title} ${task.subject} ${task.priority}`.toLowerCase().includes(term);
    })
    .filter((task) => filter === 'All' || (filter === 'Completed' ? task.completed : !task.completed))
    .sort((a, b) => Number(a.completed) - Number(b.completed) || (a.dueDate || '9999').localeCompare(b.dueDate || '9999')),
  [tasks, query, filter]);

  function addTask(task) {
    setTasks((current) => [{ ...task, id: crypto.randomUUID(), completed: false }, ...current]);
  }
  function toggleTask(id) {
    setTasks((current) => current.map((task) => task.id === id ? { ...task, completed: !task.completed } : task));
  }
  function deleteTask(id) {
    setTasks((current) => current.filter((task) => task.id !== id));
  }

  const today = new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' });
  const completed = tasks.filter((task) => task.completed).length;
  const progress = tasks.length ? Math.round((completed / tasks.length) * 100) : 0;

  return (
    <div className="app-shell">
      <Header query={query} onQueryChange={setQuery} />
      <main className="dashboard">
        <section className="welcome-row">
          <div>
            <p className="eyebrow"><Sparkles size={14} /> YOUR STUDY SPACE</p>
            <h1>Make room for <span>what matters.</span></h1>
            <p className="welcome-copy">One clear list. Fewer last-minute surprises.</p>
          </div>
          <div className="today-chip"><CalendarDays size={17} /> {today}</div>
        </section>

        <section className="hero-card">
          <div className="hero-content">
            <span className="hero-label">YOUR WEEK, IN FOCUS</span>
            <h2>Small steps make<br />big semesters.</h2>
            <p>You’ve completed {completed} of {tasks.length} tasks. Keep the momentum going.</p>
            <div className="progress-track"><span style={{ width: `${progress}%` }} /></div>
            <div className="progress-caption"><span>Semester progress</span><strong>{progress}%</strong></div>
          </div>
          <div className="hero-art" aria-hidden="true"><div className="art-circle circle-one" /><div className="art-circle circle-two" /><div className="art-paper"><span>✓</span><span>✓</span><span>•</span><span>✦</span></div></div>
          <ArrowUpRight className="hero-arrow" size={22} />
        </section>

        <TaskStats tasks={tasks} />

        <div className="content-grid">
          <section className="tasks-panel">
            <div className="section-heading">
              <div><h2>Your tasks</h2><p>Stay ahead of your deadlines.</p></div>
              <div className="filter-tabs" role="group" aria-label="Filter tasks">
                {['All', 'Pending', 'Completed'].map((item) => (
                  <button key={item} className={filter === item ? 'filter-tab active' : 'filter-tab'} onClick={() => setFilter(item)}>{item}</button>
                ))}
              </div>
            </div>
            <div className="task-list">
              {visibleTasks.length ? visibleTasks.map((task) => <TaskItem key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />) : (
                <div className="empty-state"><span>✦</span><h3>No tasks found</h3><p>Try another filter or add a task to get started.</p></div>
              )}
            </div>
            <p className="list-footer">Showing {visibleTasks.length} of {tasks.length} tasks</p>
          </section>
          <aside className="side-column">
            <TaskForm onAdd={addTask} />
            <section className="tip-card"><span className="tip-icon">✦</span><p className="tip-label">A LITTLE REMINDER</p><h3>Progress beats perfect planning.</h3><p>Pick one task. Give it your full attention. Then move to the next.</p></section>
          </aside>
        </div>
        <footer className="footer">Made for focused study sessions <span>•</span> Campus Taskboard</footer>
      </main>
    </div>
  );
}
