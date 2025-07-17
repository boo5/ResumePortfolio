# replit.md

## Overview

This is a modern full-stack portfolio website built with React/TypeScript frontend and Express.js backend. The application showcases a professional portfolio with sections for hero, about, skills, projects, experience, and contact functionality. It features a modern dark theme design with particle animations and responsive layout.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with a custom dark theme and CSS variables
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **Animations**: Framer Motion for smooth animations and transitions

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Development**: tsx for TypeScript execution in development
- **Build**: esbuild for production bundling

### Database & ORM
- **Database**: PostgreSQL (configured for production)
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Provider**: Neon Database serverless PostgreSQL
- **Schema**: Contact messages table with validation using Zod

## Key Components

### Frontend Components
1. **Navigation**: Fixed navigation with smooth scrolling and active section highlighting
2. **Hero Section**: Animated hero with typing animation and particle background
3. **About Section**: Professional summary with animated competencies
4. **Skills Section**: Progress bars and technology stack visualization
5. **Projects Section**: Portfolio showcase with filtering capabilities
6. **Experience Section**: Timeline of work and education history
7. **Contact Form**: Form with validation and API integration
8. **UI Components**: Comprehensive shadcn/ui component library

### Backend Services
1. **Contact API**: POST endpoint for form submissions with validation
2. **Resume API**: GET endpoint for resume download functionality
3. **Error Handling**: Centralized error handling middleware
4. **Request Logging**: Custom logging for API requests

### Shared Components
1. **Schema**: Drizzle schema definitions with Zod validation
2. **Types**: Shared TypeScript types between frontend and backend

## Data Flow

1. **Frontend to Backend**: Contact form submissions via POST to `/api/contact`
2. **Validation**: Server-side validation using Zod schemas
3. **Database**: Contact messages stored in PostgreSQL via Drizzle ORM
4. **Response**: JSON responses with success/error status
5. **State Management**: React Query handles API calls and caching

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18 with hooks and modern patterns
- **UI/UX**: Radix UI primitives, Framer Motion, Embla Carousel
- **Forms**: React Hook Form with Hookform Resolvers
- **Utilities**: clsx, tailwind-merge, date-fns

### Backend Dependencies
- **Database**: Neon Database serverless PostgreSQL
- **Session Management**: connect-pg-simple for PostgreSQL session store
- **Validation**: Zod for schema validation
- **Development**: tsx for TypeScript execution

### Development Tools
- **Build Tools**: Vite, esbuild, PostCSS
- **TypeScript**: Full TypeScript support across the stack
- **Linting/Formatting**: ESLint and Prettier configuration
- **Replit Integration**: Custom Replit plugins for development environment

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with HMR and middleware mode
- **Backend**: Express server with tsx for TypeScript execution
- **Database**: Configured for Neon Database with environment variables
- **Build Process**: Concurrent frontend and backend development

### Production Build
- **Frontend**: Vite build outputs to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Static Serving**: Express serves built frontend assets
- **Environment**: Production configuration with optimized builds

### Configuration Management
- **Environment Variables**: DATABASE_URL for database connection
- **Path Aliases**: TypeScript path mapping for clean imports
- **Asset Resolution**: Vite aliases for frontend asset management

### Database Management
- **Migrations**: Drizzle Kit manages database schema migrations
- **Schema**: PostgreSQL dialect with typed schema definitions
- **Connection**: Serverless connection via Neon Database

The application follows modern full-stack development practices with TypeScript throughout, responsive design principles, and production-ready deployment configuration. The architecture supports easy scalability and maintenance while providing a smooth user experience.