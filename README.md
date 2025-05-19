# POC-Pivot: Data Visualization React Component

A proof-of-concept application for data visualization using React, TypeScript, and Fluent UI components. This project demonstrates an implementation of a data table with React Query for data loading patterns.

## Features

- Data Grid visualization using Fluent UI components
- Error boundary implementation for graceful error handling
- Data preparation utilities with caching mechanisms
- Display name mapping for customizable field headings
- Columns are resizable and sortable

## Technology Stack

- React 19
- TypeScript
- Vite build system
- Fluent UI React components
- React Error Boundary
- React Query for data handling
- ESLint and Prettier for code quality
- Vitest for testing

## Getting Started

### Prerequisites

- Node.js (latest LTS recommended)
- pnpm (v6.32.4 or later)

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm dev

# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Lint code
pnpm lint

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Project Structure

- `/src/components/` - React components including DataTable
- `/src/utils/` - Utility functions for data handling and preparation
- `/src/data/` - Data source files
- `/src/assets/` - Static assets

## Architecture

The application follows these key architectural principles:

1. **Data Flow:**

    - Data fetching and preparation happen in the utility functions
    - React Query handles loading states
    - Error boundaries provide fallback UI for errors

2. **Component Structure:**
    - DataTable component renders the pivot data
    - Styling is handled through the Styles.ts file

## Data Handling Features

### DisplayNameMapping

The application supports custom display names for data fields through the `displayNameMapping` property in the `TableDefinition` type

This feature allows you to:

- Map technical field names to user-friendly display names
- Customize column headers in the data table
- Handle complex or prefixed field names from backend systems

Example usage:

```typescript
const tableDefinition = {
    rowField: "user_id",
    displayNameMapping: {
        user_id: "User ID",
        user_first_name: "First Name",
        user_last_name: "Last Name",
    },
};
```

### Editable DataTable

The application now includes a toggle feature to switch the DataTable between editable and read-only modes. This allows users to modify data directly within the table when in editable mode.

### React Query Integration

The application uses React Query for data fetching and state management. This replaces the need for React Suspense, providing a more robust and flexible way to handle asynchronous data.

#### How It Works

- React Query's `useQuery` hook is used to fetch data and manage loading, error, and success states.
- The `queryKey` ensures caching and efficient data updates.

#### Benefits

- Simplifies data fetching logic
- Provides built-in caching and re-fetching capabilities
- Handles loading and error states seamlessly

## TODO

- fetch function `getData` should get it's query from an higher level input
- replace editable toggle with an higher level input
- Upsert functionality after editing a cells
