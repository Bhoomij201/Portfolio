# Bhoomi Jain - Data Scientist Portfolio

## Overview

This is a personal portfolio website for Bhoomi Jain, an aspiring data scientist and Computer Engineering student. The application is built as a modern full-stack web application using React for the frontend and Express.js for the backend, with a focus on showcasing professional experience, projects, and skills in data science and machine learning.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Express sessions with PostgreSQL store
- **API Design**: RESTful API with JSON responses
- **Development**: Hot reloading with Vite middleware integration

## Key Components

### Frontend Components
1. **Navigation**: Fixed navigation bar with smooth scrolling
2. **Hero Section**: Introduction with call-to-action buttons
3. **About Section**: Education background and achievements
4. **Skills Section**: Technical skills with progress indicators
5. **Projects Section**: Showcase of key projects with tech stacks
6. **Experience Section**: Leadership and mentoring roles
7. **Contact Section**: Contact form with validation and submission

### Backend Components
1. **Contact API**: Handles contact form submissions
2. **Storage Layer**: Abstracts database operations with in-memory fallback
3. **Session Management**: Maintains user sessions
4. **Error Handling**: Centralized error handling middleware

### Database Schema
- **Users Table**: Basic user authentication structure
- **Contacts Table**: Stores contact form submissions with timestamps
- **Schema Validation**: Zod integration for type-safe validation

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form
   - Form data validated on client-side
   - POST request to `/api/contact` endpoint
   - Server validates data using Zod schema
   - Data stored in PostgreSQL database
   - Success/error response sent to client

2. **Portfolio Content**:
   - Static content rendered from React components
   - Dynamic interactions handled by React state
   - Smooth scrolling navigation between sections

## External Dependencies

### Frontend Libraries
- **UI Framework**: React with TypeScript support
- **Styling**: Tailwind CSS for utility-first styling
- **Icons**: Lucide React icons and React Icons
- **Form Handling**: React Hook Form with Zod validation
- **HTTP Client**: Built-in fetch API with TanStack Query
- **Animation**: CSS transitions and Tailwind animations

### Backend Libraries
- **Web Framework**: Express.js for server handling
- **Database**: Drizzle ORM with PostgreSQL support
- **Validation**: Zod for schema validation
- **Session Store**: connect-pg-simple for PostgreSQL sessions
- **Development**: tsx for TypeScript execution

### Database Provider
- **Neon Database**: Serverless PostgreSQL hosting
- **Connection**: @neondatabase/serverless driver

## Deployment Strategy

### Development
- **Frontend**: Vite dev server with hot module replacement
- **Backend**: tsx with automatic restart on file changes
- **Database**: Development database with migration support
- **Integration**: Vite middleware setup for unified development

### Production Build
- **Frontend**: Vite build with optimized assets
- **Backend**: esbuild compilation to ESM format
- **Static Assets**: Served from Express static middleware
- **Database**: Production PostgreSQL with migrations

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string
- **NODE_ENV**: Environment specification
- **Session Configuration**: Secure session management

## Changelog

```
Changelog:
- July 04, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```