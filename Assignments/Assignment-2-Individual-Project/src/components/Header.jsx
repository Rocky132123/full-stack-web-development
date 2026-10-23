import { BookOpen, Search } from 'lucide-react';

export default function Header({ query, onQueryChange }) {
  return (
    <header className="topbar">
      <a className="brand" href="#" aria-label="Campus Taskboard home">
        <span className="brand-mark"><BookOpen size={20} /></span>
        <span>campus<span className="brand-accent">board</span></span>
      </a>
      <label className="searchbox">
        <Search size={17} />
        <input
          type="search"
          placeholder="Search your tasks..."
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          aria-label="Search tasks"
        />
        <kbd>⌘ K</kbd>
      </label>
      <div className="avatar" title="Student profile">S</div>
    </header>
  );
}
