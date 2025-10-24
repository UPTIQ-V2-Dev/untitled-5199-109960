# Hello World React App - Technical Implementation Plan

## Project Overview
A simple Hello World application built with React 19, Vite, shadcn/ui, and Tailwind CSS v4. The application will demonstrate a clean, modern React setup with proper component structure and comprehensive testing.

## Technology Stack
- **React**: 19.1.0
- **Vite**: 7.0.4 
- **TypeScript**: 5.8.3
- **Tailwind CSS**: 4.1.11
- **shadcn/ui**: Latest components
- **Testing**: Vitest + React Testing Library
- **State Management**: React hooks (useState, useEffect)

## Page Implementation Plan

### 1. Main Hello World Page (`src/pages/HomePage.tsx`)
**Components & Features:**
- Welcome message with animated greeting
- Current date/time display
- Interactive counter button
- Theme toggle functionality
- Responsive design

**Dependencies:**
- `src/components/ui/card.tsx` - Card container
- `src/components/ui/button.tsx` - Interactive buttons
- `src/components/WelcomeMessage.tsx` - Custom greeting component
- `src/components/Counter.tsx` - Interactive counter
- `src/hooks/useCurrentTime.ts` - Time management hook
- `src/lib/utils.ts` - Utility functions

**API Endpoints:**
- None required for basic Hello World

### 2. Components Structure

#### Core Components
- **WelcomeMessage** (`src/components/WelcomeMessage.tsx`)
  - Props: `name?: string`, `animated?: boolean`
  - Displays personalized greeting
  - Animation support

- **Counter** (`src/components/Counter.tsx`)
  - Interactive increment/decrement functionality
  - State management with useState
  - Button interactions

- **ThemeToggle** (`src/components/ThemeToggle.tsx`)
  - Dark/light mode switching
  - Uses `next-themes` integration
  - Persistent theme storage

#### Layout Components
- **AppLayout** (`src/components/layout/AppLayout.tsx`)
  - Main application wrapper
  - Header with title
  - Footer with build info

#### UI Components (Already Available)
- Button, Card, Badge from shadcn/ui
- Theme provider setup

### 3. Utilities & Hooks

#### Custom Hooks
- **useCurrentTime** (`src/hooks/useCurrentTime.ts`)
  - Real-time clock functionality
  - Cleanup on unmount
  - Format options

#### Utils
- **formatters** (`src/lib/formatters.ts`)
  - Date/time formatting
  - Number formatting
  
- **constants** (`src/lib/constants.ts`)
  - App configuration
  - Theme settings

### 4. Types
- **AppTypes** (`src/types/app.ts`)
  - Component prop interfaces
  - Theme configuration types

## Testing Strategy

### Testing Framework Setup
- **Vitest** for test runner (already configured)
- **React Testing Library** for component testing
- **@testing-library/jest-dom** for DOM assertions
- **@testing-library/user-event** for user interactions
- **happy-dom** as JSDOM alternative

### Test Organization
```
src/
├── test/
│   ├── setup.ts                 # Test environment setup
│   ├── test-utils.tsx          # Custom render utilities
│   └── __mocks__/              # Mock implementations
├── components/
│   ├── WelcomeMessage.test.tsx # Component tests
│   ├── Counter.test.tsx        # Interactive component tests
│   └── ThemeToggle.test.tsx    # Theme switching tests
├── hooks/
│   └── useCurrentTime.test.ts  # Custom hook tests
├── pages/
│   └── HomePage.test.tsx       # Page integration tests
└── lib/
    ├── formatters.test.ts      # Utility function tests
    └── utils.test.ts           # General utils tests
```

### Test Utilities Setup

#### Test Utils (`src/test/test-utils.tsx`)
- Custom render function with providers
- Theme provider wrapper
- Query client setup for future API integration

#### Setup File (`src/test/setup.ts`)
- jsdom/happy-dom configuration
- Global test utilities
- Mock implementations for window objects

### Key Test Cases

#### Component Tests
1. **WelcomeMessage Component**
   - Renders default greeting
   - Renders custom name prop
   - Animation triggers correctly
   - Accessibility attributes

2. **Counter Component**
   - Initial state is 0
   - Increment/decrement functionality
   - Button click interactions
   - Keyboard navigation

3. **ThemeToggle Component**
   - Theme switching functionality
   - Persistence across sessions
   - Icon changes with theme
   - Accessibility compliance

#### Hook Tests
1. **useCurrentTime Hook**
   - Returns current time
   - Updates every second
   - Cleanup on unmount
   - Format customization

#### Page Tests
1. **HomePage Integration**
   - All components render correctly
   - User interactions work end-to-end
   - Responsive design breakpoints
   - Theme consistency

#### Utility Tests
1. **Formatters**
   - Date formatting accuracy
   - Edge cases handling
   - Timezone considerations

### Service Mocking Strategy
- **MSW (Mock Service Worker)** setup for future API integration
- Mock implementations in `src/test/__mocks__/`
- Environment-specific configurations

### Test Commands
```bash
pnpm test              # Run tests in watch mode
pnpm test:ci           # Run tests once (CI mode)  
pnpm test:coverage     # Generate coverage reports
pnpm test:ui           # Run tests with UI dashboard
```

### Coverage Requirements
- Minimum 90% code coverage
- 100% coverage for utility functions
- Critical user flows must be tested
- All custom hooks require tests

## Implementation Phases

### Phase 1: Core Setup
1. Update App.tsx with routing structure
2. Create basic HomePage component
3. Implement WelcomeMessage component
4. Setup test utilities and configuration

### Phase 2: Interactive Features
1. Implement Counter component
2. Add useCurrentTime hook
3. Create ThemeToggle functionality
4. Write component tests

### Phase 3: Polish & Testing
1. Add AppLayout wrapper
2. Implement formatters and utilities
3. Complete test coverage
4. Performance optimization

### Phase 4: Final Integration
1. Integration testing
2. Accessibility audit
3. Performance testing
4. Documentation updates

## Development Commands
```bash
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm preview          # Preview production build
pnpm eslint           # Run linting
pnpm prettier         # Format code
pnpm test             # Run test suite
```

This plan provides a structured approach to building a comprehensive Hello World application that demonstrates modern React development practices while maintaining simplicity and testability.