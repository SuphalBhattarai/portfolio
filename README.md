# Portfolio Redesign

This repository hosts a static site deployed from `dist/` to GitHub Pages. The current implementation target is the noir editorial redesign defined in `Design/home_refined_noir/`.

## Structure
- `dist/index.html`: live home page
- `dist/images/`: local image assets used by the page
- `Design/`: design references and screenshots for upcoming pages
- `package.json`: deploy command and package metadata

## Current Workflow
1. Update docs first when the architecture changes.
2. Implement the live page in `dist/index.html`.
3. Verify the page locally in a browser.
4. Commit completed redesign work.
5. Keep local animation experiments out of git for this pass.

## Editing Theme Colors
All theme colors should live in one CSS custom-property block inside `dist/index.html`. Update the variables there instead of changing repeated hex values across the page.

## Editing Text Content
All visible copy should be controlled by one centralized JavaScript content object. Update the object values rather than editing scattered text nodes in the HTML.

## JavaScript Expectations
JavaScript should stay minimal, readable, and properly commented. Comment behavior boundaries such as content binding, helper functions, and animation setup so future edits are low-risk.

## Local Preview & Deploy
- `npm install`
- Open `dist/index.html` in a browser for manual review
- `npm run deploy`

## Current Redesign Scope
This pass focuses on the home page only, using `Design/home_refined_noir/code.html` and its screenshot as the visual source of truth. Other screens in `Design/` are future follow-up work.
