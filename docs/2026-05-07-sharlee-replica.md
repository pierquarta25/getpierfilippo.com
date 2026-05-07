# Project Design: Sharlee Website Replica

**Date:** 2026-05-07
**Author:** Gemini CLI

## Goal
Replicate the visual style, structure, and feel of the [Charles Bruyerre (Sharlee)](https://www.itssharl.ee/) website as closely as possible. All personal content and names will be replaced with "Lorem Ipsum" or generic placeholders.

## Technical Stack
- **Framework:** Next.js 16.2+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Typography:** Geist Sans (adjusted for letter spacing and weight to match reference)
- **Background Effects:** Pure CSS/SVG (Grain texture and Blurred gradients)

## Implementation Details (Completed)

### 1. Global Visual Styles
- **Grain Texture:** Implemented via a fixed overlay div in `globals.css` using a custom SVG noise filter (`feTurbulence`).
- **Background Shapes:** Created a `Background` component with five large, blurred radial gradients in pastel colors (\#a8ffb1, \#ffe2a8, etc.) to simulate the organic, ethereal look.
- **Color Palette:** Set light theme variables in `globals.css` with oklch colors for better precision.

### 2. Component Architecture
- **Background**: Manages the visual depth with grain and blurred shapes.
- **TopBar**: Fixed header with a stylized "L" logo and utility icons.
- **OverlayMenu**: Full-screen navigation triggered by the grid icon, featuring large typography and section IDs.
- **HeroSection**: Implemented the center-aligned hero with "LOREM IPSUM" branding.
- **WorkSection**: A minimalist list of placeholder projects with hover effects.
- **AboutSection**: Two-column layout with a placeholder for the portrait.
- **ContactSection**: Direct mail and social media links.

### 3. Navigation & State
- Used React's `useState` in `src/app/page.tsx` to manage the `OverlayMenu` state.
- Integrated all sections into a single-page layout.

### 4. Content Substitution
- All personal references to Charles Bruyerre were successfully replaced with "Lorem Ipsum" and "Lorem".

## Verification Results
- **Visual Match:** High fidelity achieved through the combination of grain texture and custom radial gradients.
- **Responsiveness:** Layout handles mobile and desktop views via Tailwind's responsive utilities.
- **Interactivity:** Menu overlay and smooth navigation are fully functional.
