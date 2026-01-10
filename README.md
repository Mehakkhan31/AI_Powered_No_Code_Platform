# Webify

> Lightweight no-code builder that combines a Vite + React frontend with a TypeScript Node backend for AI-driven scaffolding and previews.
> That automatically creates complete, responsive websites based on user input. Users simply describe their idea or requirements, and the AI generates a structured, modern website layout with relevant content and design.

This project aims to simplify website creation for students, developers, startups, and non-technical users by eliminating the need for manual coding and design. The platform focuses on speed, usability, and clean UI, enabling users to go from idea to live website in minutes.

## Quick overview
- Backend: `be/` — minimal TypeScript Express server used for AI integrations and prompts.
- Frontend: `frontend/` — Vite + React + TypeScript UI (builder, editor, preview).

## Prerequisites
- Node.js (v18+ recommended)
- npm (or yarn/pnpm)

## Setup
Clone the repo and install dependencies for each workspace:

```bash
git clone <repo-url>
cd AI_Powered_No_Code_Platform

# Backend
cd be
npm install

# Frontend (in a separate terminal)
cd ../frontend
npm install
```

## Running locally

Run the backend (compiles TypeScript then runs):

```bash
cd be
npm run dev
```

Run the frontend (Vite dev server):

```bash
cd frontend
npm run dev
```

Open the dev UI at the address printed by Vite (usually `http://localhost:5173`).

## Build for production

Build the frontend:

```bash
cd frontend
npm run build
```

Preview the built frontend:

```bash
npm run preview
```

The backend has a `dev` script that runs `tsc -b && node dist/index.js`. Add a production start script if needed.

## Environment
The backend uses `dotenv` and AI SDKs; create a `.env` file in `be/` with any required API keys and configuration (for example, Anthropic or other AI provider keys). Exact variable names depend on your local setup and are referenced in `be/src` code.

## Project structure
- `be/` — backend TypeScript server. Entry: [be/src/index.ts](be/src/index.ts#L1).
- `frontend/` — Vite + React app. Entry: [frontend/src/main.tsx](frontend/src/main.tsx#L1).
- `frontend/src/components/` — UI components (editor, file explorer, preview, steps list).

## Development notes
- Both projects use TypeScript. Use your editor's TypeScript tooling for best DX.
- Frontend uses Tailwind CSS and Vite plugin for React.
- The app integrates the WebContainer API (`@webcontainer/api`) for in-browser container experiences.

## Contributing
- Open an issue or PR explaining the change.
- Keep changes focused and add short descriptions in PRs.




