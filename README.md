<<<<<<< HEAD
# Full Stack Web Development

Coursework repository for observations, e-records, assignments, and the group project.

## Repository structure
- `Observation/PDFs/`: observation records
- `E-Record/PDFs/`: e-record PDFs
- `Assignments/Assignment-1/`: Assignment 1 submission
- `Assignments/Assignment-2-Individual-Project/`: React individual project
- `Group-Project/`: group project client and server

## Individual Project: Campus Taskboard
A responsive student task planner built with React and Vite. It lets students add, complete, filter, search, and delete academic tasks. Tasks persist in browser local storage.

### Run locally
```powershell
cd Assignments/Assignment-2-Individual-Project
npm install
npm run dev
```
Open the local URL printed by Vite.

## Notes
- Replace placeholder PDF folders with your actual course PDFs.
- Update project authorship details before submitting.
- Do not commit `node_modules/`, secrets, or `.env` files.
=======
# Campus Taskboard

**Type:** Individual project  
**Stack:** React, Vite, CSS, browser localStorage

## Features
- Create academic tasks with subject, due date, and priority
- Mark tasks complete or reopen them
- Search tasks and filter by status
- Delete tasks
- See task totals and completion progress
- Persist tasks in localStorage
- Responsive layout for desktop and mobile

## Start
Requires a recent Node.js LTS version.

```powershell
npm install
npm run dev
```

## Build
```powershell
npm run build
npm run preview
```

## Project structure
```text
Assignment-2-Individual-Project/
├── package.json
├── index.html
├── screenshots/
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── style.css
    ├── data.json
    └── components/
        ├── Header.jsx
        ├── TaskForm.jsx
        ├── TaskItem.jsx
        └── TaskStats.jsx
```

## Before submission
1. Add your own screenshots to `screenshots/`.
2. Add your name, roll number, and course details if required by your faculty.
3. Verify the project runs on your own machine.
>>>>>>> origin/main
