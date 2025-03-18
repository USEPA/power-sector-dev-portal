# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})


```

# Installation
1. Clone the repository:

```bash
git clone https://github.com/USEPA/power-sector-dev-portal.git
```

2. Navigate to the app folder in the project directory:
```bash
cd power-sector-dev-portal/app
```

3.Install dependencies:
```bash
npm install
```

# Usage
Once the dependencies are installed, you can run the development server from the app folder to preview the app locally:
```bash
npm run dev
```

This will usually start the development server at http://localhost:5173/power-sector-dev-portal/

To build the project for deployment, use the following command:
``` bash
npm run deploy
```

This will bundle the project for production then deploy from the `gh-pages` branch.

# Project Structure
```bash
/power-sector-dev-portal/app
│
├── public/
│   ├── assets/              # Contains images, CSS, fonts, and JS files
│   └── content/             # Contains the markdown files for content
│
├── src/
│   ├── components/          # React components
│   ├── hooks/               # Custom React hooks (e.g., useMarkdownContent)
│   ├── pages/               # Contains structure for pages, follows the same naming convention as /content
│   ├── utilities/           # Utility functions (e.g., extractBanner, extractInfo, extractSections)
│   └── App.js               # Main app file
│
├── .nojekyll                # Prevents GitHub Pages from using Jekyll and ensures markdown is rendered
├── package.json             # Project metadata and dependencies
├── vite.config.js           # Vite configuration file
└── README.md                # This file
```

# Deployment
The app is deployed to GitHub Pages using the following steps:

1. To deploy the app, run the following command:

```bash
npm run deploy
```
This will build the project and push it to the gh-pages branch.

**Note**: Ensure the .nojekyll file is present in the gh-pages branch to properly render the markdown content.

# Functions & Utilities
This project contains several functions and utilities for rendering the markdown content.

## Custom Hooks:
- **useMarkdownContent**: A custom hook that fetches and renders markdown content from the public/content folder.

## Utility Functions:
- **extractBanner**: Extracts the banner information (e.g., image, title) from the markdown content.
- **extractInfo**: Extracts general information from the markdown files (e.g., metadata).
- **extractSections**: Extracts and formats the sections of the markdown content into a structured format.