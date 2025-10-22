<!-- .github/copilot-instructions.md -->
# Guidance for AI coding agents working on Soulvest.ai

This repository is a small, static marketing landing site for Soulvest.ai. The goal of this doc is to give an AI coding agent the minimal, actionable context to be productive immediately.

Key files and structure
- index.html — single-page static site. All visible content (hero, modules, nav, footer) and minimal client JS live here.
- style.css — site styling and responsive rules.
- assets/ — static media assets (audio file used as background theme at assets/soulvest_theme.mp3).
- CNAME — custom domain for GitHub Pages (www.soulvest.ai).

Big picture / architecture
- This is a static, client-side website (no backend code in this repo). Interactivity is limited to small inline JS in index.html (quote rotator, audio playback). The site links out to three external Streamlit apps for the product features (Soulvest Music, SoulSkill, SoulWell). Treat this repo as a lightweight static site: edits affect the marketing landing page only.

Developer workflows and deployment notes (discoverable from repo files)
- Build: none — the site is plain HTML/CSS/JS. Editing index.html and style.css and committing is sufficient.
- Hosting: presence of CNAME implies GitHub Pages deployment to www.soulvest.ai. Do not remove or change CNAME unless updating DNS/hosting intentionally.
- Analytics: index.html includes Google Analytics (G-tag id G-75ZF3726F6). Keep analytics script intact unless instructed.

Project-specific conventions and patterns
- Single-file content: prefer making small, clearly-scoped edits to index.html for content changes (hero text, links, CTA buttons) and style.css for visual changes.
- External app links: the site intentionally redirects users to externally hosted Streamlit apps — these are authoritative product entry points. When updating CTAs or module descriptions, preserve the target URLs unless a change is requested.
- Inline scripts: minimal JS is embedded in index.html (quote rotator, play button). If adding more complex behavior, prefer moving scripts to a new file under assets/ and reference it from index.html.

Examples of patterns (concrete)
- Quote rotator: an array named quotes in index.html and a setInterval that updates the element with id quote every 6s. If you alter copy, keep that DOM id to preserve behavior.
- Audio playback: an audio element with id bgMusic and a play button that calls document.getElementById('bgMusic').play(). If changing audio controls, keep the id or update the JS accordingly.
- Visitor counter: site uses an external image-based counter service — don't attempt to replace it with server-side counters here.

Safety and preservation rules for automated edits
- Do not remove or alter the CNAME or Google Analytics block without explicit instruction from maintainers.
- Keep external links to the three Streamlit apps unchanged unless the PR message explicitly states otherwise. Breaking those links changes product entry paths.
- When modifying index.html, maintain the existing semantic structure: header/nav, the hero section (id=hero), the about section (id=about), the modules section (id=modules), the cta section (id=cta), and the footer. Add new content only in the appropriate section.

When creating new files
- If adding JS beyond a few lines, add a new file under assets/js/ and include it with a <script src="assets/js/yourfile.js"></script> just before </body>.
- For new images or audio, place them under assets/ and reference them with relative paths (for example assets/new-image.png).

Testing and verification steps for PRs
1. Run a local preview by opening `index.html` in a browser. (No build step required.)
2. Verify Google Analytics block remains and that external Streamlit links open in a new tab.
3. Confirm audio playback (click the play button) and quote rotation continue to work.

Files to reference when in doubt
- index.html — primary source of truth for content and inlined behaviour
- style.css — style and responsive rules
- CNAME — hosting domain

Questions to ask the maintainer (when uncertain)
- Should the site continue to link to the current Streamlit apps, or should they be migrated here?
- Are we allowed to update analytics or remove the CNAME for DNS changes?

If anything above is unclear or you'd like a different level of detail (more implementation examples, tests, or CI integration steps), say so and I'll iterate.
<!-- .github/copilot-instructions.md -->
# Guidance for AI coding agents working on Soulvest.ai

This repository is a small, static marketing landing site for Soulvest.ai. The goal of this doc is to give an AI coding agent the minimal, actionable context to be productive immediately.

Key files and structure
- `index.html` — single-page static site. All visible content (hero, modules, nav, footer) and minimal client JS live here.
- `style.css` — site styling and responsive rules.
- `assets/` — static media assets (audio file used as background theme at `assets/soulvest_theme.mp3`).
- `CNAME` — custom domain for GitHub Pages (`www.soulvest.ai`).

Big picture / architecture
- This is a static, client-side website (no backend code in this repo). Interactivity is limited to small inline JS in `index.html` (quote rotator, audio playback). The site links out to three external Streamlit apps for the product features (Soulvest Music, SoulSkill, SoulWell). Treat this repo as a lightweight static site: edits affect the marketing landing page only.

Developer workflows and deployment notes (discoverable from repo files)
- Build: none — the site is plain HTML/CSS/JS. Editing `index.html` and `style.css` and committing is sufficient.
- Hosting: presence of `CNAME` implies GitHub Pages deployment to `www.soulvest.ai`. Do not remove or change `CNAME` unless updating DNS/hosting intentionally.
- Analytics: `index.html` includes Google Analytics (G‑tag with id `G-75ZF3726F6`). Keep analytics script intact unless instructed.

Project-specific conventions and patterns
- Single-file content: prefer making small, clearly-scoped edits to `index.html` for content changes (hero text, links, CTA buttons) and `style.css` for visual changes.
- External app links: the site intentionally redirects users to externally hosted Streamlit apps — these are authoritative product entry points. When updating CTAs or module descriptions, preserve the target URLs unless a change is requested.
- Inline scripts: minimal JS is embedded in `index.html` (quote rotator, play button). If adding more complex behavior, prefer moving scripts to a new file under `assets/` and reference it from `index.html`.

Examples of patterns (concrete)
- Quote rotator: an array `quotes` in `index.html` and a `setInterval` that updates `#quote` every 6s. If you alter copy, keep the same DOM id (`quote`) to preserve behavior.
- Audio playback: audio element id `bgMusic` and a play button which calls `document.getElementById('bgMusic').play()`. If changing audio controls, keep the `id` or update JS accordingly.
- Visitor counter: site uses an external image-based counter service — don't attempt to replace it with server-side counters here.

Safety and preservation rules for automated edits
- Do not remove or alter the `CNAME` or Google Analytics block without explicit instruction from maintainers.
- Keep external links to the three Streamlit apps unchanged unless the PR message explicitly states otherwise. Breaking those links changes product entry paths.
- When modifying `index.html`, maintain existing semantic structure: header/nav, `#hero`, `#about`, `#modules`, `#cta`, footer. New content should be added to appropriate sections.

When creating new files
- If adding JS beyond a few lines, add a new file under `assets/js/` and include it with a `<script src="assets/js/yourfile.js"></script>` just before `</body>`.
- For new images or audio, place them under `assets/` and reference them with relative paths (e.g., `assets/new-image.png`).

Testing and verification steps for PRs
1. Run a local preview by opening `index.html` in a browser. (No build step required.)
2. Verify Google Analytics block remains and that external Streamlit links open in a new tab.
3. Confirm audio playback (click the play button) and quote rotation continue to work.

Files to reference when in doubt
- `index.html` — primary source of truth for content and inlined behaviour
- `style.css` — style and responsive rules
- `CNAME` — hosting domain

Questions to ask the maintainer (when uncertain)
- Should the site continue to link to the current Streamlit apps, or should they be migrated here?
- Are we allowed to update analytics or remove the `CNAME` for DNS changes?

If anything above is unclear or you'd like a different level of detail (more implementation examples, tests, or CI integration steps), say so and I'll iterate.
