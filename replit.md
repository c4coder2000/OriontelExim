# ORIONTEL EXIM - Global Trade Excellence

## Overview

ORIONTEL EXIM is a premium import/export company website built as a corporate-focused, futuristic web application. The platform showcases global trade services with an emphasis on compliance, automation, and real-time analytics. The website features a dark, premium aesthetic with glassmorphism design elements, smooth animations, and interactive components to convey tech-powered trade excellence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for brand theming
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for smooth, physics-aware animations and interactions
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod schemas for runtime type checking
- **Development**: Hot Module Replacement (HMR) via Vite middleware in development

### Design System
- **Typography**: Inter for body text, Space Grotesk for headlines
- **Color Palette**: Dark theme with violet-to-cyan gradients, glass surfaces with subtle borders
- **Components**: Custom magnetic buttons, animated counters, parallax containers, interactive globe
- **Motion Philosophy**: Spring-based animations with reduced motion support

### Data Layer
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema**: Contact forms, user management, and analytics tracking
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Migrations**: Drizzle Kit for schema management

### Content Architecture
- **Static Assets**: Unsplash images for professional photography
- **Content Sections**: Hero, services, solutions, markets, case studies, leadership, contact
- **Interactive Elements**: Animated metrics, scrolling marquees, case study carousels
- **Analytics**: Custom analytics endpoints for user interaction tracking

## External Dependencies

### Database & Infrastructure
- **Neon Database**: Serverless PostgreSQL hosting (@neondatabase/serverless)
- **Drizzle ORM**: Type-safe database client with PostgreSQL dialect

### UI & Styling
- **Shadcn/ui**: Pre-built accessible components with Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom brand tokens
- **Framer Motion**: Animation library for smooth interactions and scroll effects
- **Lucide React**: Modern icon library for consistent iconography

### Forms & Validation
- **React Hook Form**: Performant forms with minimal re-renders
- **Zod**: Schema validation for type-safe form handling
- **Hookform Resolvers**: Integration between React Hook Form and Zod

### Development Tools
- **TypeScript**: Static type checking across the entire stack
- **Vite**: Fast build tool with HMR and optimized production builds
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer
- **ESBuild**: Fast JavaScript bundling for production builds

### Third-party Integrations
- **Google Fonts**: Inter and Space Grotesk font families
- **WhatsApp Business**: Deep linking for instant messaging
- **Social Media**: LinkedIn and Twitter integration for company presence
- **Email Services**: Contact form submissions (ready for email provider integration)