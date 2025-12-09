Full Pro Express + Prisma + React (Tailwind) project.

What's included:
- Server: Express, Prisma (SQLite), JWT auth, bcrypt, admin roles
- Client: Vite + React, TailwindCSS, basic Admin dashboard, dark-mode toggle
- Dockerfiles for server and client
- docker-compose to run both

Quick dev steps:
1. Install dependencies for server:
   cd server
   npm install
2. Setup prisma
   npx prisma generate
   npx prisma migrate dev --name init
3. Start server:
   npm run dev
4. Client:
   cd client
   npm install
   npm run dev

Production build:
- Build client (npm run build) and serve from backend static in production mode.
