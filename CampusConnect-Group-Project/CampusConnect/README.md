# CampusConnect

CampusConnect is a student-friendly campus event and team management application built with HTML, CSS, vanilla JavaScript, Node.js, Express, and optional MongoDB.

## Features
- View, search, and filter campus events
- Add events, including title, category, date, location, and description
- Register/unregister for events
- Delete events
- Dashboard statistics
- Persistent storage: MongoDB when `MONGODB_URI` is configured and reachable; otherwise a local JSON file (`backend/data/events.json`)
- Responsive layout

## Requirements
- Node.js 18 or newer
- npm
- MongoDB is optional

## Run on Windows (PowerShell)

1. Extract the ZIP file.
2. Open the extracted `CampusConnect` folder in VS Code.
3. Open Terminal > New Terminal.
4. Install packages:

   ```powershell
   npm install
   ```

5. Start the application:

   ```powershell
   npm run dev
   ```

   Or use `npm start`.

6. Open `http://localhost:5000` in your browser.

## MongoDB (optional)
The project runs without MongoDB and saves events in `backend/data/events.json`.

To use MongoDB:
1. Start your local MongoDB service, or create a database in MongoDB Atlas.
2. Copy `.env.example` to `.env`.
3. Set `MONGODB_URI` to your MongoDB connection string.
4. Restart the server.

If MongoDB is not available, the app automatically falls back to JSON-file storage.

## API endpoints
- `GET /api/events` - list events
- `POST /api/events` - create an event
- `PATCH /api/events/:id/register` - toggle registration
- `DELETE /api/events/:id` - delete an event
- `GET /api/health` - server health check

## Project structure
```text
CampusConnect/
├── backend/
│   ├── data/events.json
│   ├── models/Event.js
│   ├── routes/events.js
│   └── server.js
├── frontend/
│   ├── css/style.css
│   ├── js/app.js
│   └── index.html
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

This is a starter academic project. Before using real student data, add authentication, authorization, validation, and production security controls.
