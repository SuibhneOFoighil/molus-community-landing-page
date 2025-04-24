# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands
- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run lint` - Run ESLint
- `bun run preview` - Preview production build

## Code Style Guidelines
- **React**: Function components with React.FC type and explicit interfaces for props
- **TypeScript**: Strict mode enabled, noUnusedLocals, noUnusedParameters
- **Imports**: Group by external libraries first, then local components/hooks
- **Formatting**: 2-space indentation, semicolons, max line length ~80-100 chars
- **CSS**: Tailwind CSS with custom animations and dark mode support
- **Components**: Keep components in src/components/, one component per file
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Animation**: Use AnimatedElement component with accessibility (respects prefers-reduced-motion)
- **Errors**: Handle errors gracefully with fallbacks and user-friendly messages
- **State Management**: Use React hooks for state (useState, useEffect, custom hooks)
- **Accessibility**: Support reduced motion preferences, keyboard navigation, and proper ARIA attributes
- **Dark Mode**: Support system preferences with manual toggle via useDarkMode hook
- **Mobile**: Touch-friendly targets (min 44px), safe area insets, and optimized form elements