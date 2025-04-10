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

# Development
Once the dependencies are installed, you can run the development server from the app folder to preview the app locally:
```bash
npm run dev
```

This will usually start the development server at http://localhost:5173/power-sector-dev-portal/

# Deployment
The app is deployed to GitHub Pages using the following steps:

1. To deploy the app, run the following command:

```bash
npm run deploy
```
This will bundle the project for production then deploy from the `gh-pages` branch.

**Note**: Ensure the .nojekyll file is present in the gh-pages branch to properly render the markdown content.

# Project Structure
```bash
/power-sector-dev-portal/app
│
├── public/
│   ├── assets/              # Contains images, CSS, fonts, and JS files
│   └── content/             # Contains the markdown files for content
│
├── src/
├── assets/
│   │   ├── css/             # Compiled CSS from USWDS (e.g., styles.css, styles.css.map)
│   │   └── public-sans/     # Public Sans font files used in the design system
│   ├── components/          # React components
│   ├── hooks/               # Custom React hooks (e.g., useMarkdownContent)
│   ├── pages/               # Contains structure for pages, follows the same naming convention as /content
│   ├── utilities/           # Utility functions (e.g., extractBanner, extractInfo, extractSections)
│   ├── img/                 # USWDS, material, and favicons
│   ├── types/               # TypeScript interfaces for content structure (e.g., Card, Accordion, Section)
│   ├── layouts/             # Shared layout components (e.g., DataVisLayout for nested routing)
│   ├── styles/              # Global styles and USWDS integration (e.g., styles.scss, uswds-theme settings)
│   └── App.js               # Main app file
│
├── .nojekyll                # Prevents GitHub Pages from using Jekyll and ensures markdown is rendered
├── package.json             # Project metadata and dependencies
├── vite.config.js           # Vite configuration file
└── README.md                # This file
```

# Functions & Utilities
This project contains several functions and utilities for rendering the markdown content.

## Custom Hooks:
- **useMarkdownContent**: A custom hook that fetches and renders markdown content from the public/content folder.

## Utility Functions:
- **extractBanner**: Extracts the banner information (e.g., image, title) from the markdown content.
- **extractInfo**: Extracts general information from the markdown files (e.g., metadata).
- **extractSections**: Extracts and formats the sections of the markdown content into a structured format.

# Updating page content
To update a specific page:
Locate the appropriate markdown file in the public/content folder. All content is optional. Content types can be found in the types/ContentTypes.tsx file. Some pages have a slightly different structure, but the general layout is as follows:

Edit the fields you wish to change
Add or remove sections as needed by adding or removing section blocks
Save the file - changes will be reflected when the site is rebuilt

- **title**: Found on top level pages, used in banners like the Power Sector Dev Portal homepage
- **tagline**: Optional paragraph text included in some banners, like the design elements page
- **introTitle**: Intro header found on most pages, like the color page. Typically called "Introduction"
- **introContent**: Intro paragraphs found on most pages, like the color page. Can be more than one paragraph
- **introImage**: Intro image, not found on many pages except the Using the Theme and Best Practices Pages

- **sections**: Wrapper for page content. A new section is created using the - symbol. A section cannot have more than one of each parameter (image, title, level), but all parameters are optional.
    - **title**: String used for header content
    - **level**: Number used to designate header level (e.g., 2 for h2, 3 for h3)
    - **content**: String for paragraph content. Can be multiple paragraphs
    - **image**: Relative path for images, found in public assets folder
    - **alt**: Alt text for images. If missing, image will use the title as alt text


- **code**: Array of code snippets (see CodeSnippet interface)
    - **language**: Code language. Will always be 'r'
    - **content**: Code body text

- **cards**: Array of card content (see Card interface below)
    - **content**: Card body text
    - **image**: Path to card image
    - **alt**: Alt text for card image
    - **imagemb**: Mobile-specific image path (if different from desktop)
    - **type**: Either "default", "do", or "do not" - used to style "Things to avoid" and "Best Practices" cards

- **downloads**: Array of downloadable content (see Download interface)
    - **link**: URL for any linked content, should link to a **zip** folder if more than one file is to be downloaded
    - **title**: Download header text

## Markdown Formatting
The content uses the ReactMarkdown library, which means you can include Markdown formatting within content strings:

- Use `*text*` or `_text_` for italic text
- Use `**text**` or `__text__` for bold text
- Use `# Header` for main headers (though these are typically handled by the title parameter)
- Use backticks for inline code
- Use triple backticks for code blocks
- Create links with `[link text](URL)`
- Create bulleted lists with `-` item or `*` item
- Create numbered lists with `1.` item

## Multiple Elements
If you need multiple elements of the same type (e.g., two images next to each other), create separate sections with one element each. For example:

```bash
sections:
  - image: "/path/to/first-image.png"
    alt: "First image description"
  - image: "/path/to/second-image.png"
    alt: "Second image description"
```

## Content Handling Notes

- If a field is missing, it will simply not be rendered - no error will occur
- Use the pipe symbol | for multi-paragraph content in YAML
- Indentation is important in the YAML structure - maintain consistent indentation
- For complex content that needs HTML features, you can include HTML directly within markdown content as ReactMarkdown supports this. Verify that the page you are editing contains the `<ReactMarkdown>` tag as not all pages currently use this

## 📍 Routes

This application uses [`react-router-dom`](https://reactrouter.com/) for client-side routing, with routes defined in [`App.tsx`](./src/App.tsx). The app is wrapped in a `HashRouter` to support deployment on GitHub Pages.

#### Main Sections


- `/` – Power Sector Developer Portal (Landing Page)
- `/datavis` – Data Visualization Style Guide  
  - `/datavis/principles`  
  - `/datavis/design-elements`  
    - `/datavis/design-elements/color`  
    - `/datavis/design-elements/typography`  
    - `/datavis/design-elements/symbology`  
    - `/datavis/design-elements/layout`
  - `/datavis/charts`  
    - `/datavis/charts/line-charts`  
    - `/datavis/charts/bar-charts`  
    - `/datavis/charts/area-charts`  
    - `/datavis/charts/maps`
  - `/datavis/resources`
- `/ggplot` – ggplot Theme Documentation  
  - `/ggplot/using-the-theme`  
  - `/ggplot/best-practices`
- `/api` – API Documentation (unused)


Dynamic theming is handled based on the current route using a combination of the `useLocation` hook and a `useEffect` in the `DynamicTheme` component.


## 📝 Adding a New Page

To add a new page to the application, follow these steps:

---

### 1. **Create a new React component**

In `src/pages`, add a `.tsx` file for your new page in the appropriate tool folder: for example `src/pages/api/api.tsx`


You can copy an existing page as a template.  
Update the `useMarkdownContent` hook to load the corresponding markdown file:

```bash
const base = import.meta.env.BASE_URL;
const { content, error } = useMarkdownContent(`${base}content/api/api.md`);
```

### 2. Add the corresponding markdown file

Create a .md file in the matching folder under public/content. For example: `public/content/api/api.md`

### 3. Register the route
Import the new component in App.tsx and add a <Route> entry:

```bash
import NewPage from "./pages/api/api";

<Route path="/api" element={<NewPage />} />
```

### 4. Update the navigation
Add a link to the new page in the Navigation component:

```bash
<li className="usa-nav__primary-item">
  <Link
    to="/api"
    className={
      isCurrentPath(location, "/api") ? "usa-current" : ""
    }
  >
    <span>API</span>
  </Link>
</li>
```

### 5. (Optional) Apply dynamic theming
If your new route needs specific styling, update the DynamicTheme logic in App.tsx:

```bash
if (location.pathname.startsWith("/api")) {
  root.classList.add("api");
}
```