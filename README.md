# Easy Task

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.0.

Easy Task is a lightweight, enterprise-friendly task management app focused on speed, clarity, and a frictionless UX. It uses Angular 21 with Tailwind CSS for modern styling and a clean component architecture.

## Core Features

- Task browsing: Smooth, responsive UI to view and navigate tasks.
- User list: Quick selection of users with avatars and names.
- Theming: Global styles powered by Tailwind and a custom gradient theme.
- Component-driven UI: `Header`, `User`, and `App` components with clear inputs/outputs.
- Fast Dev Experience: Modern Angular build tooling and hot reload.

## Architecture Overview

- Frontend: Angular 21 application with feature components under `src/app/components`.
- Styling: Tailwind CSS utilities applied directly in templates; minimal global CSS in `src/styles.css`.
- Assets: Static files served from `src/assets` and `public` per `angular.json` config.
- Components:
  - `Header`: App header with branding and gradient background.
  - `User`: Displays a user entry with avatar and name via `@Input()` bindings.
  - `App`: Root shell wiring header and user list; uses signals for simple state.
- Routing: Simple app shell (extendable via `app.routes.ts` if needed).

## Setup Instructions

1. Prerequisites: Node.js 18+, npm, Angular CLI 21.
2. Install dependencies:
	```bash
	npm install
	```
3. Start the dev server:
	```bash
	ng serve
	```
	Open http://localhost:4200/.
4. Build for production:
	```bash
	ng build
	```
5. Run unit tests:
	```bash
	ng test
	```
6. Optional: Generate components/services:
	```bash
	ng generate component components/user
	ng generate component components/header
	```

## CI/CD Diagram

The following diagram describes a typical CI/CD pipeline for Easy Task:

1. Developer pushes to `main` or a feature branch.
2. CI runs:
	- Install (`npm ci`)
	- Lint & type-check
	- Unit tests (`ng test --watch=false`)
	- Build (`ng build --configuration=production`)
3. On success, artifacts are published.
4. CD deploys build output to the target environment (e.g., static hosting or container).

Sequence: Commit → CI (Install → Lint → Test → Build) → Publish → Deploy.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
