# Pierfilippo Quartarella - Portfolio

This is a Next.js project hosting Pierfilippo Quartarella's personal portfolio. It is built using the latest technologies to ensure performance, scalability, and a modern aesthetic.

## Critical Rules

- **Project Design Document:** For every new feature or implementation, first create a project document in \`/docs\` named \`YYYY-MM-DD-feature-name.md\` describing the planned implementation. Wait for user confirmation before proceeding. Always check the current date for the filename. **Once the implementation is complete, update the document to reflect the work actually performed.**
- **Triple Option Mandate:** For every modification, adjustment, or proposal requested by the user, you must always provide at least 3 distinct options to allow for an informed decision.
- **Junior-friendly Code:** Write clean, simple, and easy-to-understand code, suitable for junior developers.

## Core Technologies

- **Framework:** [Next.js 16.2+](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (based on Radix UI)
- **Icons:** [Lucide React v1.14+](https://lucide.dev/)
- **Font:** Geist (Sans and Mono)

## Architecture and Conventions

### Directory Structure

- \`src/app/\`: Contains the routes, layouts, and pages of the application (App Router).
- \`src/components/\`: Reusable React components.
    - \`src/components/ui/\`: Atomic components from shadcn/ui.
- \`src/lib/\`: Utility functions and library configurations (e.g., \`utils.ts\` for Tailwind Merge).
- \`public/\`: Static assets such as images and fonts.

### Development Conventions

- **TypeScript:** The project uses strict mode (\`strict: true\`). Avoid using \`any\`.
- **Components:** Prefer Functional Components with arrow functions.
- **Styling:** Use Tailwind CSS classes exclusively. For dynamic class management, use the \`cn()\` utility in \`src/lib/utils.ts\`.
- **Icons:** Due to changes in recent versions of \`lucide-react\` (v1.14+), brand icons have been removed. Use semantic alternative icons (e.g., \`CodeXml\` for GitHub, \`Briefcase\` for LinkedIn).

## Development Commands

### Install Dependencies

\`\`\`bash
npm install
\`\`\`

### Development Server

\`\`\`bash
npm run dev
\`\`\`
The application will be available at [http://localhost:3000](http://localhost:3000).

### Build for Production

\`\`\`bash
npm run build
\`\`\`

### Linting

\`\`\`bash
npm run lint
\`\`\`

## shadcn/ui Integration

To add new shadcn/ui components, use the CLI:

\`\`\`bash
npx shadcn@latest add [component-name]
\`\`\`

## Important Notes

- **Next.js 16:** The project uses a bleeding-edge version of Next.js. Pay attention to breaking changes documented in official releases.
- **Tailwind v4:** Configuration is simplified and integrated directly via PostCSS (\`@tailwindcss/postcss\`).
