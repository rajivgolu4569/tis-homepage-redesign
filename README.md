# Tula’s International School (TIS) — Homepage Redesign

A responsive React + Vite homepage redesign concept for Tula’s International School, Dehradun. The page presents school information in a modern layout with responsive navigation, motion effects and clear paths to official admissions information.

> **Assessment project / asset note:** School-specific copy in this project has been aligned with information published on the official TIS website (links below). The included SVGs are original decorative illustrations created for this concept; they are **not official TIS photographs, logo files or campus images**. The text wordmark is a design treatment, not the official logo. Replace these illustrations with school-supplied or otherwise explicitly authorized assets before presenting the site as an official school website. Do not download or reuse third-party images without permission.

## Live Demo
- **Live URL:** Add your deployed Vercel / Netlify URL after deployment.
- **Repository:** Add your public GitHub repository URL after pushing the project.
- **Official school website:** https://tis.edu.in/

## Tech Stack
- React 18 + Vite
- Tailwind CSS 4 (Vite plugin)
- Framer Motion
- Lucide React
- ESLint

## School information references
Content such as the school’s co-educational residential format, CBSE curriculum, Modern Gurukul approach, learning facilities and admissions links was checked against these official pages. Admissions details can change, so the CTA links to the official page rather than duplicating dates or fees.
- Homepage: https://tis.edu.in/
- Vision & mission: https://tis.edu.in/about-tis/vision-mission/
- Curriculum: https://tis.edu.in/academics/affilation/
- Why choose TIS: https://tis.edu.in/about-tis/why-choose-us/
- Admissions: https://tis.edu.in/boarding-school/admission-open/

## Standout Features
1. **Scroll-triggered reveals:** Sections animate into view using Framer Motion and respect reduced-motion preferences.
2. **Custom cursor:** Desktop-only pointer treatment, disabled for touch devices.
3. **Scroll progress:** A fixed progress indicator tracks page scroll depth.
4. **Responsive navigation:** A compact mobile menu supports touch interaction.

## Getting Started Locally

1. Install Node.js LTS.
2. Extract the ZIP and open the `tis-homepage-redesign` folder in VS Code.
3. Open **Terminal → New Terminal** and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL shown in the terminal, usually http://localhost:5173.

On Windows, you can also double-click `run-windows.bat` to install dependencies (if required) and start the development server.

## Quality Checks

```bash
npm run lint
npm run build
npm run preview
```

Test the page at mobile (375px), tablet (768px) and desktop (1280px+) widths before deployment.

## Project Structure
- `src/components/layout/` — Navbar and Footer
- `src/components/sections/` — Hero, About, Learning, Campus and Admissions
- `src/components/animation/` — Custom cursor, scroll progress and reveal animation
- `src/data/` — Navigation and learning content
- `public/images/` — Original SVG illustration placeholders

## Deployment
Import the public GitHub repository into Vercel. For this Vite project:
- **Build command:** `npm run build`
- **Output directory:** `dist`

After deployment, add the public GitHub and live URLs above. Verify the deployed site and complete the assessment Google Form.
