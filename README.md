# Portfolio Site

This repository hosts a static multi-page portfolio deployed from `dist/` to GitHub Pages. The visual direction follows the noir editorial references under `Design/`, while the live implementation is maintained directly in the files inside `dist/`.

## Structure
- `dist/index.html`: live home page
- `dist/about.html`, `dist/achievements.html`, `dist/cv.html`, `dist/contact.html`: live inner pages
- `dist/css/editorial-pages.css`: shared tokens, layout, components, responsive rules, print styles, and accessibility states
- `dist/js/content-binding.js`: shared DOM binding and motion helpers
- `dist/js/profile-data.js`: shared identity, contact, social, recruiter-proof, and common navigation/footer data
- `dist/images/`: local image assets
- `Design/`: visual references and source-of-truth screenshots/code for the editorial redesign
- `package.json`: deploy metadata and GitHub Pages command

## Workflow
1. Update `README.md` and `AGENTS.md` first when the architecture or editing workflow changes.
2. Update the live pages in `dist/` and any shared CSS/JS they depend on.
3. Verify the relevant pages locally in a browser.
4. Commit only the intended files for that work step.
5. Keep local-only animation experiments out of git unless they are part of the finished redesign.

## Editing Theme Colors
All theme colors live in the centralized `:root` token block in `dist/css/editorial-pages.css`. Update the custom properties there instead of scattering color values through page markup or component rules.

## Editing Content
Shared identity, contact details, social links, recruiter-proof facts, and repeated UI labels should come from `dist/js/profile-data.js`. Page-specific copy should remain in a local `pageContent` object that can reference the shared profile data instead of duplicating values in HTML.

## JavaScript Expectations
JavaScript should stay small, readable, and commented at behavior boundaries. Comments should explain:
- what the shared profile object controls
- how content and attribute binding work
- what each helper does
- how motion or print behavior is initialized

Avoid line-by-line commentary.

## Local Preview & Deploy
- `npm install`
- Open `dist/index.html` in a browser for manual review
- Open the other pages directly from `dist/` to verify shared bindings, links, and responsive layout
- `npm run deploy`

## Verification Checklist
- Confirm shared profile edits propagate across nav, footer, contact, CV, and social links.
- Check desktop and mobile layouts for the home page and inner pages.
- Verify reduced-motion and keyboard focus states still leave the site fully usable.
- Print-preview `dist/cv.html` after content or layout changes that affect the CV.
