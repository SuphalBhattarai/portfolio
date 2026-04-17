# Portfolio Site

This repository hosts a static multi-page portfolio deployed from `dist/` to GitHub Pages. The visual direction follows the noir editorial references under `Design/`, while the editable source is maintained under `src/` and built into `dist/`.

## Structure
- `src/`: editable Eleventy source for templates, data, styles, scripts, metadata, and copied assets
- `dist/`: generated deploy output published to GitHub Pages
- `src/_data/`: shared recruiter-facing content and site metadata
- `src/_includes/`: shared layouts, partials, and metadata helpers
- `src/pages/`: source pages for home, about, achievements, CV, and contact
- `Design/`: visual references and source-of-truth screenshots/code for the editorial redesign
- `package.json`: build, dev, and deploy commands

## Workflow
1. Update `README.md` and `AGENTS.md` first when the architecture or editing workflow changes.
2. Edit source files in `src/`, not generated files in `dist/`.
3. Run `npm run build` to regenerate `dist/`.
4. Verify the relevant pages locally in a browser.
5. Commit only the intended files for that work step.
6. Keep local-only animation experiments out of git unless they are part of the finished redesign.

## Editing Theme Colors
All theme colors should live in the centralized source stylesheet under `src/` and be emitted into the generated CSS in `dist/`. Update the custom properties in source instead of scattering color values through templates or generated output.

## Editing Content
Shared identity, contact details, social links, recruiter-proof facts, metadata, and repeated UI labels should come from Eleventy data files in `src/_data/`. Page-specific copy should live in page data/front matter or page-local source files instead of being duplicated in generated HTML.

## JavaScript Expectations
JavaScript should stay small, readable, and focused on runtime-only behavior such as motion, live experience metrics, and print helpers. Comments should explain:
- what shared data or runtime helpers control
- what each helper does
- how motion, print, or sequencing behavior is initialized

Avoid line-by-line commentary.

## Local Preview & Deploy
- `npm install`
- `npm run dev`
- `npm run build`
- Open the generated pages from `dist/` or the Eleventy dev server for manual review
- `npm run deploy`

## Verification Checklist
- Confirm shared data edits propagate across nav, footer, contact, CV, metadata, and social links.
- Check desktop and mobile layouts for the home page and inner pages.
- Verify reduced-motion and keyboard focus states still leave the site fully usable.
- Print-preview `dist/cv.html` after content or layout changes that affect the CV.
- Confirm `dist/CNAME` and copied assets are present after each build.
