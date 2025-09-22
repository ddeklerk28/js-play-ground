# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a TypeScript-based algorithm playground that provides a browser-based environment for testing and running JavaScript/TypeScript algorithms. The project uses Rspack for bundling and development server, with hot reload capabilities.

## Architecture

### Core Components

- **AlgorithmPlayground Class** (`src/index.ts`): Main application class that manages the tab-based interface and script execution
- **Dynamic Script Loading**: Scripts are loaded from `src/scripts/` directory using dynamic imports
- **Console Capture System**: Custom console capture mechanism to display algorithm output in the browser
- **Tab Navigation**: Horizontal tab interface that auto-generates tabs for each algorithm script

### Script Discovery

The playground uses a manual script registry in `src/index.ts` at line 39-45. When adding new algorithm scripts:
1. Create a `.ts` file in `src/scripts/` directory
2. Add the filename (without extension) to the `scriptFiles` array in `loadScripts()` method
3. Export a default function that contains your algorithm implementation

### Script Format

Each algorithm script must:
- Export a default function: `export default function algorithmName() { ... }`
- Use `console.log()` for output (captured and displayed in the UI)
- Be self-contained with no external dependencies beyond TypeScript/JavaScript

## Development Commands

- `npm run dev` - Start development server on port 8080 with hot reload
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run format` - Check code formatting with Prettier
- `npm run format:fix` - Format code with Prettier
- `npm run typecheck` - Run TypeScript type checking

## Build System

- **Bundler**: Rspack (configured in `rspack.config.ts`)
- **Entry Point**: `src/index.ts`
- **Template**: `src/index.html`
- **Output**: `dist/` directory
- **Dev Server**: Port 8080 with hot reload enabled
- **Path Alias**: `@` maps to `src/` directory

## Code Quality Tools

- **TypeScript**: Strict mode enabled with modern target (ES2022)
- **ESLint**: Configured with TypeScript parser and Prettier integration
- **Prettier**: Code formatting with 2-space indentation and single quotes

## Working with Algorithms

When creating new algorithm implementations:
1. Focus on educational/demonstrative code with clear console output
2. Show step-by-step execution when possible
3. Include time/space complexity information in output
4. Use descriptive variable names and add explanatory console messages
5. Remember to add the script filename to the registry in `src/index.ts`

The playground automatically formats script names (converts kebab-case to Title Case) and sorts them alphabetically in the tab navigation.