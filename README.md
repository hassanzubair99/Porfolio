# Hassan Zubair Portfolio

A dynamic 3D animated portfolio website showcasing frontend development, Odoo development, and UI/UX design skills.

## Features
- Interactive 3D animations using Three.js
- Responsive design for all devices
- Dark/Light theme support
- Admin panel for project management
- Contact form with database integration

## Tech Stack
- React.js with TypeScript
- Three.js for 3D animations
- Tailwind CSS for styling
- PostgreSQL for database
- Express.js backend

## Prerequisites
- Node.js 18+ 
- PostgreSQL database

## Environment Variables
Create a `.env` file in the root directory with:
```env
DATABASE_URL=your_postgresql_database_url
```

## Installation
1. Clone the repository
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

## Deployment on Vercel

1. Push your code to GitHub
2. Create a new project on Vercel
3. Connect your GitHub repository
4. Add the following environment variables in Vercel:
   - DATABASE_URL
5. Deploy!

The application will be automatically built and deployed.

## Project Structure
```
├── client/            # Frontend React application
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── lib/
├── server/           # Backend Express application
│   ├── routes.ts
│   └── storage.ts
└── shared/          # Shared types and schemas
    └── schema.ts
```

## Admin Access
Access the admin panel at `/admin` with the following credentials:
- Password: hassanno2
# Porfolio
# Porfolio
