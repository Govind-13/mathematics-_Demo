# Engineering Mathematics Masterclass - Landing Page Guide

This guide provides an overview of the Engineering Mathematics Masterclass landing page project, including its structure, components, and styling system.

## Project Overview

This project is a modern, responsive landing page built with **React** and **Vite**. It features a dark-mode aesthetic designed to appeal to engineering students, with a focus on clarity, professionalism, and visual engagement.

## Directory Structure

The project follows a standard React application structure:

```
zonal-zenith/
├── src/
│   ├── components/       # Reusable React components
│   │   ├── Navbar.jsx    # Top navigation bar
│   │   ├── Hero.jsx      # Main hero section with call-to-action
│   │   ├── Features.jsx  # Key features of the course
│   │   ├── Curriculum.jsx# Detailed course curriculum
│   │   ├── Testimonials.jsx # Student reviews
│   │   └── Footer.jsx    # Footer with links and copyright
│   ├── styles/           # Component-specific CSS files (if applicable)
│   ├── App.jsx           # Main application component assembling the page
│   ├── index.css         # Global styles, variables, and utility classes
│   └── main.jsx          # Entry point rendering the App
├── index.html            # HTML entry point
├── package.json          # Project dependencies and scripts
└── vite.config.js        # Vite configuration
```

## Component Breakdown

### 1. Navbar (`Navbar.jsx`)
- **Purpose**: Provides navigation links to different sections of the page.
- **Key Features**: Sticky positioning, responsive mobile menu (if implemented), and a "Join Now" button.

### 2. Hero (`Hero.jsx`)
- **Purpose**: Captures user attention immediately.
- **Key Features**: Large headline, value proposition, and primary call-to-action (CTA) buttons.

### 3. Features (`Features.jsx`)
- **Purpose**: Highlights the benefits of the course.
- **Key Features**: Grid layout of feature cards with icons and descriptions.

### 4. Curriculum (`Curriculum.jsx`)
- **Purpose**: Outlines the course content.
- **Key Features**: Accordion or list view of modules and topics.

### 5. Testimonials (`Testimonials.jsx`)
- **Purpose**: Builds trust with social proof.
- **Key Features**: Slider or grid of student reviews.

### 6. Footer (`Footer.jsx`)
- **Purpose**: End of page navigation and information.
- **Key Features**: Social links, copyright, and secondary links.

## Design System & Styling

The project uses **CSS Variables** defined in `src/index.css` for consistent theming.

### Color Palette
- **Backgrounds**:
  - Primary: `var(--bg-primary)` (#0f172a) - Deep blue/slate
  - Secondary: `var(--bg-secondary)` (#1e293b) - Lighter slate
- **Text**:
  - Primary: `var(--text-primary)` (#f8fafc) - White/Off-white
  - Secondary: `var(--text-secondary)` (#94a3b8) - Muted blue-grey
- **Accents**:
  - Primary: `var(--accent-primary)` (#3b82f6) - Bright Blue
  - Secondary: `var(--accent-secondary)` (#8b5cf6) - Purple
  - Glow: `var(--accent-glow)` - Soft blue glow effect

### Typography
- **Headings**: `Outfit`, sans-serif
- **Body**: `Inter`, sans-serif

### Utility Classes
- `.container`: Centers content with a max-width of 1200px.
- `.btn`, `.btn-primary`, `.btn-outline`: Standard button styles.
- `.text-gradient`: Applies a gradient effect to text.
- `.section-padding`: Adds consistent vertical padding to sections.

## How to Customize

1.  **Changing Content**: Edit the JSX files in `src/components/` to update text, images, and links.
2.  **Modifying Styles**:
    - For global changes (colors, fonts), edit `src/index.css`.
    - For component-specific styles, edit the corresponding CSS file or inline styles within the component.
3.  **Adding Sections**: Create a new component in `src/components/`, import it in `src/App.jsx`, and add it to the JSX return statement.

## Running the Project

1.  **Install Dependencies**: `npm install`
2.  **Start Dev Server**: `npm run dev`
3.  **Build for Production**: `npm run build`



[README.md](https://github.com/user-attachments/files/23738611/README.md)
# Engineering Mathematics Masterclass Landing Page

This is a modern, responsive landing page for an Engineering Mathematics course, built with React and Vite.

## Features

- **Premium Design**: Dark mode aesthetic with mathematical visualizations.
- **Responsive**: Fully responsive layout for all devices.
- **Interactive**: Smooth scrolling, hover effects, and interactive curriculum accordion.
- **Components**: Modular component structure (Navbar, Hero, Features, Curriculum, Testimonials, Footer).

## Prerequisites

You need to have [Node.js](https://nodejs.org/) installed on your computer.

## Getting Started

1.  Open your terminal in this directory.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
4.  Open your browser at the URL shown (usually http://localhost:5173).

## Project Structure

- `src/components`: React components for each section.
- `src/styles`: CSS files for styling each component.
- `src/App.jsx`: Main application component.
- `src/index.css`: Global styles and design tokens.
