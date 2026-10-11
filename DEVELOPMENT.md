# Development Guide

Last reviewed: 2026-10-11. Based on current source, repository state, and recorded acceptance evidence. This documentation update does not constitute a new runtime verification.

## Project Name and Purpose

Original project: AI Xiaohongshu Title Generator (AI小红书标题生成器).
Current public brand: championleeAI · 药品内容.
Current product: 心脑血管药品内容标题生成器.

A Simplified Chinese single-page tool for creators preparing cardiovascular, common-medication, and chronic-medication educational content. It turns a short topic extracted from supplied material into five local template-based title suggestions. It neither verifies medical facts nor provides diagnosis, dosing, efficacy guarantees, or individualized treatment advice.

## Actual Technology Stack

- HTML5 for page structure and native form controls.
- CSS for typography, colors, cards, interaction states, and responsive layouts.
- Plain browser JavaScript in a classic deferred script; no framework or TypeScript.
- System fonts; no remote fonts, images, or application services.
- Optional Python standard-library HTTP server for preview. Python is not application backend logic.
- Optional Node.js for syntax checks and existing Playwright CLI tooling for browser verification. These are development tools, not application dependencies.
- No package.json, lockfile, package-manager scripts, bundler, or dependency installation step.

## Important Files and Directories

| Path | Purpose |
| --- | --- |
| index.html | Single homepage: navigation, hero, input form, results, preparation notes, instructions, footer |
| styles.css | Visual styles, responsive rules, focus/error/selection states |
| script.js | Local templates, input validation, topic extraction, clearing, safe rendering, mobile result scrolling |
| AGENTS.md | Project rules and verification requirements |
| PRD.md | Requirements and dated design/behavior decisions; historical sections describe older categories/palettes, so consult the latest applicable section and source |
| README.md | Basic startup and behavior instructions |
| DEVELOPMENT.md | Current development overview and maintenance checklist |
| MEMORY.md | Durable decisions and verification history |
| output/playwright/ | Screenshots, acceptance reports, JSON results, existing browser check scripts, local browser config |
| .playwright-cli/ | Generated browser snapshots; not application source |
| .git/ | Local Git metadata; never manually edit |

Application files are in the root; there is no src directory, backend, or separate page routing.

## Local Startup

Run from PowerShell:

```powershell
Set-Location 'E:\小红书文案生成'
python -m http.server 8000 --bind 127.0.0.1
```

Visit http://127.0.0.1:8000/. Keep the terminal open. Press Ctrl+C to stop; rerun the same command to restart. If port 8000 is occupied, use an available port, such as 8001, and update the URL. Existing browser check scripts assume port 8000.

Alternatively, open index.html directly in a modern browser. This is supported by relative assets/classic scripts, but direct-file opening was not exercised in the latest browser audit. No npm install, npm run dev, or build command is required.

127.0.0.1 is computer-local. Physical-phone access requires a separately approved reachable preview setup; phone access cannot use the computer's loopback address.

## Completed Features

- Text brand/logo, product hero, and native anchors for home, instructions, and generator.
- Multiline textarea with required-input validation, a 1000-unit limit, live counter, inline error, and focus feedback. The counter/JavaScript limit use UTF-16 string length, not a linguistic character count.
- Four current categories: 知识分享 (knowledge), 药品资料 (product), 内容整理 (tutorial), 情绪共鸣 (emotion). Internal keys preserve earlier naming.
- Five distinct local templates per category, with style labels and numbered result cards. Repeated identical content/category yields identical titles.
- Topic extraction from the first nonempty punctuation/newline-separated segment, whitespace normalization, and truncation to 18 Unicode code points plus an ellipsis.
- New submissions replace previous results; generated user-derived content uses textContent rather than HTML.
- Clear input resets the field, counter, and validation and focuses the textarea; selected category and existing results remain.
- Empty/success states and accessible completion announcements; keyboard radio selection and form submission.
- Desktop two-column workspace and mobile stacked panels; viewport widths at or below 760px scroll to results after successful generation.
- Medication-content preparation and three-step instructions. Copying is manual text selection; there is no clipboard button.
- Completed visual refresh: compact hero, white input card, pale-blue result card, navy primary button, teal selection accents, refined typography and mobile spacing.

## Current Development Status

- The homepage visual task and acceptance audit are complete according to recorded evidence.
- No additional feature is confirmed as actively being implemented.
- The user subsequently reported a problem after a recent modification. Exact symptom, reproduction steps, error output, affected browser, and cause are **pending confirmation**. Do not equate earlier passing tests with resolution of this report.
- Git audit and recovery planning were performed read-only; no recovery was executed. The user authorized the first Git snapshot on 2026-10-11. Commit completion must be checked with git log.
- This task adds documentation only.

## Technical Constraints

- Keep the existing HTML/CSS/JavaScript stack and avoid unnecessary dependencies, frameworks, or large animations.
- No real AI API, API keys, credentials, authentication, database, payment, or external assets.
- Generation remains deterministic and local; do not describe templates as semantic AI understanding.
- Preserve four categories and exactly five distinct suggestions for valid submissions.
- Preserve form IDs, radio names/values, hidden-state behavior, results-panel class, and accessible states when changing visuals.
- Keep workspace styling scoped to avoid unintended changes to shared supporting cards.
- Do not introduce medical product facts or treatment claims without an explicitly approved scope and appropriate source verification.
- Read AGENTS.md and task-relevant code; consult PRD.md or MEMORY.md only when scope/contracts or prior decisions are relevant. Small edits do not require reading all documents. Preserve unrelated staged/unstaged work.
- Never store real passwords, keys, tokens, or private data in source, docs, test evidence, or memory.

## Known Issues and Verification Limits

- Reported post-change problem: **pending confirmation**, not reproduced or diagnosed in the Git-only investigation.
- Templates cannot understand or summarize a long draft; suggestions depend on a short extracted topic. Input/results disappear on refresh by design.
- Latest recorded audit: 80 browser regression checks passed at 1440px and 375px; resource/long-input/control-size checks passed; seven sampled text styles exceeded 4.5:1 contrast. See output/playwright/acceptance-report.md. These are historical results, not a guarantee about an unreported scenario.
- Physical-phone/software-keyboard behavior, Safari/Firefox compatibility, and direct-file launch remain unverified in that audit.
- Before initial versioning, master had no commits or tags, and both staged and unstaged work existed. Use git status and git log for current state; the first snapshot records the current baseline, without proving the unresolved reported problem is fixed.
- The staged stylesheet contains a pre-refresh candidate, not a verified Git release. Restoring it would overwrite current unstaged visual changes; back up first and obtain explicit approval.
- No .gitignore exists. Avoid bulk staging of local snapshots/configuration/evidence without reviewing the file list.
- homepage-browser.config.json contains a machine-specific executable path; browser tooling/cache availability is not portable or guaranteed.

## Next Development Tasks

These are maintenance priorities, not newly authorized features:

1. Confirm and reproduce the reported problem; preserve current files and staged state before any repair or recovery.
2. Apply the smallest approved fix, if needed, and rerun the relevant checks.
3. Complete physical-device, target-browser, and direct-file checks where required.
4. Preserve the authorized initial snapshot as a baseline; check git log for its identifier. Decide the generated-file ignore policy separately; future commits still require user authorization.
5. Further product features are **pending confirmation**; do not assume clipboard, history, accounts, or real AI integration are planned.

## Required Checks

For source changes, execute these available checks from the root and report their actual results:

```powershell
node --check script.js
git diff --check
```

Node.js must be available for the first command. git diff --check checks unstaged tracked changes for whitespace errors; it is not a lint tool or a full code check. If changes are staged, also run:

```powershell
git diff --cached --check
```

| Check | Configuration |
| --- | --- |
| TypeScript type check | Not configured |
| Lint | Not configured |
| Build | Not configured; static site |
| npm test / unit-test runner | Not configured |
| Browser regression | Existing task-specific Playwright scripts in output/playwright/ |

Do not report unconfigured checks as passed or install a toolchain solely to fill these rows.

For UI/behavior changes, run existing browser checks if the existing Playwright CLI and browser are available. The commands below assume playwright-cli is on PATH; on this machine the previously used CLI is in an npm cache, so resolve its existing executable path if necessary. Do not treat the commands as configured npm scripts. The browser config must reference an available local browser, and the HTTP server must already be running on port 8000.

```powershell
playwright-cli -s=acceptance open http://127.0.0.1:8000/ --config=output/playwright/homepage-browser.config.json
playwright-cli -s=acceptance run-code --filename=output/playwright/homepage-verify.js --raw
playwright-cli -s=acceptance run-code --filename=output/playwright/homepage-readability.js --raw
```

Inspect fresh screenshots at 1440px and 375px, including empty/generated/error states. Check four categories, five unique titles each, replacement, blank/multiline/literal HTML input, clear/retype with preserved category/results, keyboard operation, anchors, overflow, runtime errors, and external requests. Record unavailable browser checks as not executed and perform/document the strongest available alternative.

For documentation-only changes, inspect content and links, run git diff --check, and verify application files remain unchanged. Runtime tests need not be represented as rerun.
