# Bookworm

**Educational collaboration platform for students and lecturers** in the same program or field of study.

---

## Overview

Bookworm is a full-stack web application that connects students and lecturers through a shared workspace: courses, media, research, quizzes, chat, tuition, schedules, and resources. The stack is **MERN** (MongoDB, Express, React, Node.js) with TypeScript throughout, real-time features via Socket.io, and a modern React frontend with Tailwind CSS and shadcn/ui.

---

## Tech Stack

| Layer      | Technologies |
|-----------|---------------|
| **Monorepo** | pnpm workspaces (`backend`, `frontend`) |
| **Frontend** | Vite, React 19, TypeScript, Tailwind CSS v4, shadcn/ui, Zustand, TanStack Query (React Query), Axios, React Router v7, Sonner (toasts), Lucide React (icons) |
| **Backend**  | Node.js 22+, Express, TypeScript, Mongoose, Socket.io v4, JWT (access + refresh), bcrypt, Multer, Cloudinary |
| **Database** | MongoDB |
| **Real-time** | Socket.io (Redis adapter planned; rooms keyed by program) |

---

## Prerequisites

- **Node.js** ≥ 22
- **pnpm** ≥ 9 (recommended: `corepack enable && corepack prepare pnpm@latest --activate`)
- **MongoDB** (local or Atlas) for the backend
- (Optional) **Cloudinary** account for file uploads

---

## Getting Started

### 1. Clone and install

```bash
git clone <repository-url>
cd Bookworm
pnpm install
```

### 2. Environment variables

**Backend** — copy the example file and set values (at least MongoDB and JWT secrets for auth):

```bash
cp backend/.env.example backend/.env
```

Edit `backend/.env`:

| Variable | Description | Required |
|----------|--------------|----------|
| `NODE_ENV` | `development` or `production` | No (default: development) |
| `PORT` | Server port | No (default: 4000) |
| `FRONTEND_URL` | Frontend origin for CORS | No (default: http://localhost:5173) |
| `MONGO_URI` | MongoDB connection string | **Yes** (for DB features) |
| `JWT_ACCESS_SECRET` | Secret for access tokens | **Yes** (min 32 chars in production) |
| `JWT_REFRESH_SECRET` | Secret for refresh tokens | **Yes** (min 32 chars in production) |
| `JWT_ACCESS_EXPIRES_IN` | Access token TTL (e.g. `15m`) | No |
| `JWT_REFRESH_EXPIRES_IN` | Refresh token TTL (e.g. `7d`) | No |
| `CLOUDINARY_*` | Cloudinary credentials for uploads | No (optional) |

**Frontend** — optional; only if you need to point at a different API:

```bash
cp frontend/.env.example frontend/.env
```

| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Backend API base URL (default in dev: Vite proxies `/api` to backend) |

### 3. Run the app

From the **repository root**:

```bash
pnpm dev
```

This starts:

- **Backend** at `http://localhost:4000`
- **Frontend** at `http://localhost:5173` (or next free port)

The frontend dev server proxies `/api` to the backend, so you don’t need to set `VITE_API_URL` in development.

**Run only one app:**

```bash
pnpm dev:backend   # Backend only
pnpm dev:frontend  # Frontend only
```

**Production build:**

```bash
pnpm build          # Build both
pnpm build:backend  # Backend only
pnpm build:frontend # Frontend only
```

Backend production start:

```bash
cd backend && pnpm start
```

---

## Project Structure

```
Bookworm/
├── package.json              # Root scripts & pnpm workspace config
├── pnpm-workspace.yaml
├── README.md
│
├── backend/
│   ├── .env.example
│   ├── package.json
│   ├── tsconfig.json
│   └── src/
│       ├── index.ts          # Server entry
│       ├── app.ts            # Express app (CORS, JSON, cookies, /api routes)
│       ├── config/           # Env and app config
│       ├── controllers/      # Route handlers (thin; delegate to services)
│       ├── middleware/       # Auth, validation, etc.
│       ├── models/           # Mongoose schemas
│       ├── routes/           # API route definitions
│       ├── services/        # Business logic
│       └── utils/            # Helpers, errors
│
└── frontend/
    ├── .env.example
    ├── components.json       # shadcn/ui config
    ├── index.html
    ├── package.json
    ├── tsconfig.json
    ├── vite.config.ts        # Vite + Tailwind v4, /api proxy
    ├── public/
    └── src/
        ├── main.tsx          # React root, QueryClient, Router, Toaster
        ├── App.tsx           # Route definitions + RootLayout
        ├── index.css         # Tailwind v4 + theme (shadcn tokens)
        ├── layouts/          # RootLayout (sidebar, header, outlet)
        ├── components/       # Reusable UI (layout, shadcn components)
        ├── features/         # Feature-specific modules
        ├── hooks/            # Custom hooks
        ├── lib/              # Axios instance, utils (e.g. cn)
        ├── pages/            # Route-level pages
        ├── stores/           # Zustand stores (app, auth, etc.)
        └── types/            # Shared TypeScript types
```

---

## What’s Included So Far

- **Monorepo**: pnpm workspaces, root scripts for dev/build.
- **Backend**: Express server, CORS, JSON body parsing, cookie-parser, health route `GET /api/health`, typed env config, folder layout for controllers/services/models/routes.
- **Frontend**: Vite + React 19 + TypeScript, Tailwind v4, shadcn/ui (Button, Sheet, Avatar, Badge, Card, Input), Zustand, TanStack Query, Axios, React Router v7, Sonner, Lucide icons.
- **Layout**: Root layout with fixed left sidebar (collapsible to Sheet on mobile), fixed header (search, theme toggle, notifications, user avatar), scrollable main content, and right sidebar (lg+). Dark mode via `class="dark"` and persisted theme in `localStorage`.
- **Placeholder routes**: Dashboard (`/`), Media, Research, Quizzes, Chat, Tuition, Schedule, Resources (placeholder pages).

---

## Conventions

- **TypeScript** strict mode everywhere.
- **Functional components and hooks** only; no class components.
- **Named exports** for components and utilities.
- **Composition over inheritance**; small, focused components.
- **pnpm** for all install/run commands (no npm/yarn in scripts).
- **Error handling**: try/catch and Sonner toasts on the frontend; consistent error responses on the backend.
- **shadcn/ui**: add new components via CLI when needed: `npx shadcn@latest add <component>` (or `@canary` for Tailwind v4).

---

## API (Backend)

- Base path: `/api` (e.g. `http://localhost:4000/api`).
- **Health**: `GET /api/health` — returns `{ status, service, timestamp }`.
- Future routes will live under `/api/v1/...` (e.g. auth, users, programs).

---

## License

Private / unlicensed unless otherwise specified.
