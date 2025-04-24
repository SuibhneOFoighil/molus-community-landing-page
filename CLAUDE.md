# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Code Style Guidelines
- **React**: Function components with React.FC type and explicit interfaces
- **TypeScript**: Strict mode enabled, noUnusedLocals, noUnusedParameters
- **Imports**: Group by external libraries first, then local components/hooks
- **Formatting**: 2-space indentation, semicolons, max line length ~80-100 chars
- **CSS**: Tailwind CSS with custom utility classes and dark mode support
- **Components**: Keep components in src/components/, one component per file
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Animation**: Use AnimatedElement component with accessibility considerations
- **Errors**: Handle errors gracefully with fallbacks and user-friendly messages
- **State Management**: Use React hooks for state (useState, useEffect, custom hooks)
- **Accessibility**: Support reduced motion preferences and keyboard navigation