# Tech Portfolio Application

## Overview

This repository contains a full-stack web application built with React, Express, and Drizzle ORM. It's a portfolio website showcasing team members, projects, and contact information. The application follows a client-server architecture with a PostgreSQL database for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

The frontend is built with React and uses the following key technologies:
- **React**: The core UI library
- **Wouter**: A lightweight routing library for page navigation
- **Tailwind CSS**: For styling components
- **shadcn/ui**: A collection of reusable UI components built with Radix UI
- **React Query**: For data fetching and state management
- **Framer Motion**: For animations

The frontend follows a component-based architecture with:
- Pages for different routes (home, team member profiles)
- UI components from shadcn/ui for consistent design
- Context providers for theme and global state management

### Backend Architecture

The backend is built with Express.js and provides:
- API endpoints for data operations
- Server-side rendering support
- Static file serving

### Data Storage

The application uses Drizzle ORM with PostgreSQL for data persistence. The database schema is defined in `shared/schema.ts` and includes:
- User table with authentication information

The current implementation uses a memory-based storage solution, but the infrastructure is in place to switch to PostgreSQL.

## Key Components

### Frontend Components

1. **Pages**: Individual routes for the application
   - Home page (showing team members and projects)
   - Individual team member profile pages
   - 404 Not Found page

2. **UI Components**:
   - A comprehensive set of shadcn components (buttons, cards, forms, etc.)
   - Custom components like SkillBar for displaying team member skills
   - Layout components (Navbar, Footer)

3. **Data Management**:
   - Static data files for team members and projects
   - React Query for data fetching and caching

### Backend Components

1. **API Routes**:
   - Contact form endpoint
   - User management routes (partially implemented)

2. **Storage Interface**:
   - Currently using an in-memory implementation
   - Structured to support PostgreSQL in the future

3. **Server Configuration**:
   - Express server with middleware setup
   - Development tools for Vite integration

## Data Flow

1. **Client-side Rendering**:
   - React components render based on routes and state
   - Data is fetched from the backend API or loaded from static files
   - User interactions trigger state updates or API calls

2. **Server-side Processing**:
   - API requests are processed by Express routes
   - Data validation using Zod schemas
   - Database operations through Drizzle ORM

3. **Data Persistence**:
   - Data models defined with Drizzle schema
   - Ready for PostgreSQL integration

## External Dependencies

### Frontend Dependencies
- React and React DOM
- Tailwind CSS for styling
- shadcn/ui components (built on Radix UI)
- React Query for data fetching
- Framer Motion for animations
- Wouter for routing

### Backend Dependencies
- Express.js for the server
- Drizzle ORM for database operations
- Zod for validation
- TypeScript for type safety

## Deployment Strategy

The application is configured for deployment with the following process:
1. Build the frontend with Vite
2. Bundle the server code with esbuild
3. Run the production server which serves the static frontend files

Development mode uses:
- Vite's dev server with HMR for the frontend
- Express server in watch mode for the backend

The application is ready to be deployed on Replit with:
- PostgreSQL for the database
- Node.js for running the server
- Frontend assets served statically

## Getting Started

1. Install dependencies: `npm install`
2. Set up the database: Create the PostgreSQL database
3. Configure environment variables:
   - `DATABASE_URL`: PostgreSQL connection string
4. Run the development server: `npm run dev`
5. Build for production: `npm run build`
6. Start the production server: `npm run start`

## Database Setup

The application expects a PostgreSQL database. The schema is defined in `shared/schema.ts` and can be migrated using:
```
npm run db:push
```

## Future Improvements

1. Complete user authentication system
2. Expand database schema for projects and team members
3. Add admin dashboard for content management
4. Implement server-side rendering for better SEO