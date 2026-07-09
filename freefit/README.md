# Free Fit Monorepo

Production-ready monorepo for the Free Fit landing page and API.

## Folder Structure

```text
project-root/
├── next/          # Next.js 15 frontend
├── nest/          # NestJS backend
├── .env.example
└── README.md
```

## Frontend

The frontend converts the uploaded HTML design into reusable Next.js App Router components while preserving the original visual system, animations, spacing, typography, and responsive behavior.

```bash
cd next
npm install
npm run dev
npm run build
npm run lint
```

Default URL: `http://localhost:3000`

## Backend

The backend is a modular NestJS REST API with global `/api` prefix, CORS, Helmet, compression, environment configuration, and validation enabled.

```bash
cd nest
npm install
npm run start:dev
npm run build
npm run lint
```

Default URL: `http://localhost:4000`

Health check:

```bash
GET http://localhost:4000/api/health
```

Response:

```json
{
  "status": "ok"
}
```

## Environment Variables

Copy `.env.example` into the relevant app when needed.

```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api
PORT=4000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

## Commands

Frontend:

```bash
cd next
npm run dev
npm run build
npm run lint
```

Backend:

```bash
cd nest
npm run start:dev
npm run build
npm run lint
```
