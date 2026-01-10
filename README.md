# Webify

> Lightweight no-code builder that combines a Vite + React frontend with a TypeScript Node backend for AI-driven scaffolding and previews.
 
That automatically creates complete, responsive websites based on user input. Users simply describe their idea or requirements, and the AI generates a structured, modern website layout with relevant content and design.

This project aims to simplify website creation for students, developers, startups, and non-technical users by eliminating the need for manual coding and design. The platform focuses on speed, usability, and clean UI, enabling users to go from idea to live website in minutes.

##Overview
This project demonstrates how AI can transform natural language prompts into fully structured websites. Users can create landing pages, portfolios, business websites, and more—without writing code manually.

The goal of this project is to explore prompt-based UI generation, AI-assisted development, and rapid prototyping.

### Features
- Prompt-Based Website Generation
Generate websites by describing requirements in plain English.

- Instant Website Creation
From idea to website layout in seconds.

- Modern & Responsive UI
Automatically generated layouts follow clean and responsive design principles.

- Component-Based Structure
Websites are built using reusable sections like Hero, Features, Pricing, and Contact.

- Live Preview
View the generated website instantly after submission.

- Editable Output
Modify and extend the generated code as needed.

- Great for Prototyping
Ideal for testing ideas, demos, and learning AI-driven development.

## How to use
1. Open the Application
 - Run the project locally or open the deployed version.
 - You will see a prompt input box on the screen.

2. Enter a Website Prompt
 - Describe the website you want to build.
 > Example:
 > Create a modern SaaS landing page with a hero section, features, pricing, and contact form.

3. Generate Website
 - Click on the Generate button.
 - The AI processes your prompt and generates a website layout with content.

4. Preview the Website
 - The generated website appears in the preview area.
 - Review the structure, sections, and UI.

5. Customize & Extend
 - Edit the generated code or UI.
 - Use it as a base for further development or deployment.

## Prompt Writing Tips

- Mention the type of website (portfolio, SaaS, business)
- Specify sections (hero, features, pricing, contact)
- Add design preferences (modern, minimal, dark theme)  

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




