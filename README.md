# Engineering portfolio starter

Hand-coded HTML/CSS/vanilla JS portfolio powered by Vite.

## Run

1. Install Node.js 20+.
2. Run `npm install`.
3. Run `npm run dev` and open the local URL.
4. Run `npm run build` for production output in `dist/`.

## Edit

- `src/projects.js`: project descriptions, roles, evidence, and results.
- `src/style.css`: layout, typography, colors, responsiveness, and print CSS.
- `src/main.js`: navigation, project filtering, and rendering.
- `public/`: approved project images and `resume.pdf`.

## Printing

Open a project case study, then use browser Print > Save as PDF. Print CSS hides navigation and unnecessary controls. Later you can add a dedicated combined `/print` route for a multi-project portfolio.

## Deployment

For a GitHub Pages *project* repository hosted under a subpath, set Vite's `base` in `vite.config.js` (e.g. `/engineering-portfolio/`) and adjust the resume link to use `import.meta.env.BASE_URL`. A user site at `username.github.io` can use root paths. GitHub Actions can publish the built `dist/` folder.

## Before publishing

Replace all placeholder results with verified findings; use only images and team materials approved for public distribution. Verify links, responsive behavior, and keyboard navigation. The resume download requires `public/resume.pdf` to be added.

## Prioritization and Cornerstone

Edit `src/projects.js`: `priority: 1` appears before `priority: 2` everywhere, and `featured: true` places an item in Featured Projects. Cornerstone is an intentionally generic placeholder in Additional Projects: replace it with actual class project names, scope, and evidence before publishing. You can add several Cornerstone entries, each with its own slug and priority.

The layout does not require photos. Add only images or diagrams that are genuinely associated with your work and that you have permission to publish. Use browser Print → Save as PDF for individual case studies. A compiled print portfolio can be added later using the same project data.


## Curation rules
- Set `priority` in `src/projects.js` to manually rank projects (lower is higher).
- Set `featured: true` only for major flagship projects.
- Keep Cornerstone exercises in the selected coursework section until individual work is documented.
- Do not use illustrative or stock images as if they were photos of your work. Text-only previews are intentional.
- Add project images only when you have permission and can accurately caption them.
- Use browser Print / Save as PDF on each case study; print styling is in `src/style.css`.
