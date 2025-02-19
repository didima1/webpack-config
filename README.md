# Webpack Project

This project is built using **Webpack** as the module bundler, with support for **React**, **TypeScript**, and modern JavaScript features. It provides different build configurations for
development and production environments, as well as for specific platforms (mobile and desktop).

## Features

- **Webpack**: Module bundler for modern JavaScript applications.
- **React**: Support for building user interfaces.
- **TypeScript**: Type-safe development experience.
- **Hot Module Replacement (HMR)**: Enabled for faster local development.
- **SCSS and CSS Support**: Integration for modern styling workflows.
- **Sprite Creation**: Generates sprite types for better icon management.
- Environment-specific builds for development and production.
- Platform-specific builds for mobile and desktop.

---

## SVG Sprites

This project includes an automated **SVG sprite management system** using `svg-sprite-loader` and custom scripts. This feature allows efficient handling and reuse of SVG icons across the
application by consolidating multiple icons into a single sprite sheet.

### How it Works

1. **Adding Icons**:
   Add your SVG files to the designated directory in your project (e.g., `src/assets/icons`).

2. **Sprite Generation**:
   During the build process, the `svg-sprite-loader` compiles all SVG files into a single sprite sheet. This minimizes HTTP requests and improves performance.

3. **Using Sprites**:
   To use an icon from the sprite, include it as follows in your components:
   ```tsx
   import React from 'react';

   const Icon = () => (
       <svg>
         <use href="#icon-name" />
       </svg>
   );

   export default Icon;
   ```
   Replace `icon-name` with the name of the SVG file you added (e.g., `#home` for `home.svg`).

4. **Generating Type Definitions for Icons**:
   Run the following script to automatically generate TypeScript definitions for all available SVG icons:
   ```bash
   npm run generate:sprite:types
   ```
   This script scans the sprite directory, extracts all SVG file names, and creates a `.d.ts` file with type definitions for better TypeScript integration.

---

## Installation

### Prerequisites

Ensure you have the following installed:

- **Node.js** v18.x or higher.
- **npm** (included with Node.js).

### Steps

1. Clone the repository.

   ```bash
   git clone <repository-url>
   cd <your-project-folder>
   ```

2. Install dependencies.

   ```bash
   npm install
   ```

---

## Usage

### Available Scripts

The following `npm` scripts are available in this project:

- **Start Development Server**:
  ```bash
  npm run start
  ```
  Starts the application using Webpack Dev Server in development mode with Hot Module Replacement (HMR).

- **Build for Development**:
  ```bash
  npm run build:dev
  ```
  Creates a build for the development environment.

- **Build for Production**:
  ```bash
  npm run build:prod
  ```
  Creates a build optimized for production.

- **Mobile-specific Build**:
  ```bash
  npm run build:mobile
  ```
  Generates a production build optimized for the mobile platform.

- **Desktop-specific Build**:
  ```bash
  npm run build:desktop
  ```
  Generates a production build optimized for the desktop platform.

- **Generate Sprite Types**:
  ```bash
  npm run generate:sprite:types
  ```
  Runs a TypeScript script to generate sprite types for icons or assets.

---

## Project Structure

Key folders and files in the project:

- **src/**: Contains the source code.
- **scripts/**: Contains custom scripts, such as `generate-sprites-type.ts`.
- **public/**: Static assets, such as `index.html`.
- **webpack.config.js**: Webpack configuration files.

---

## Dependencies

### Core Dependencies

- **react**: v19.0.0
- **react-dom**: v19.0.0
- **react-router-dom**: v6.16.0

### Development Dependencies

- **webpack**: v5.97.1
- **typescript**: v5.7.3
- **babel-loader**, **sass-loader**, **css-loader**, and more.
- **webpack-bundle-analyzer**: For analyzing bundle size.

---

## Tech Stack

- **Frontend**: React, TypeScript, Sass
- **Build Tool**: Webpack
- **Styling**: SCSS with support for CSS Modules
- **Code Quality**: Prettier for formatting

---

## Contribution

1. Fork the repository and create your feature branch.
2. Commit your changes and push them to your branch.
3. Create a pull request detailing your changes.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
