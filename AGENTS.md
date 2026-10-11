# Project Rules

## Stack and Layout
- AI Xiaohongshu Title Generator; current brand: championleeAI, focused on medication-content titles.
- Plain HTML, CSS, and browser JavaScript. No framework, package.json, runtime dependencies, or build step.
- Root files: index.html (page), styles.css (visuals), script.js (local templates and interactions).
- Product UI and user communication: Simplified Chinese. Code, comments, and technical documentation: English.

## Development Conventions
- Read this file and the code relevant to the task. Small changes do not require reading every document.
- Consult PRD.md for scope/behavior changes, MEMORY.md for relevant prior decisions, and DEVELOPMENT.md for setup/check details when needed.
- Make focused changes, follow existing style, reuse browser-native capabilities, and avoid unrelated refactoring or dependencies.
- Preserve unrelated edits and staged work. Commit or restore files only when explicitly requested; back up work before destructive recovery.
- Update relevant documentation for changed contracts; record durable decisions in MEMORY.md, not every small edit.

## Behavior Boundaries
- Keep four categories and exactly five distinct, deterministic simulated titles per valid submission.
- Preserve input validation, clearing, result replacement, keyboard access, and mobile result scrolling unless explicitly changing those behaviors.
- Clearing resets input/counter/error only; keep the selected category and generated results.
- During visual changes, preserve IDs, radio names/values, hidden states, and script-dependent classes; scope styles to the intended modules.
- Render user-derived strings with textContent. Do not add fabricated medical facts, efficacy guarantees, dosing, or individualized treatment advice.
- No real AI API, authentication, database, payment, credentials, or external assets in the current scope.

## Run and Check
- Open index.html directly, or run from the root:
  `python -m http.server 8000 --bind 127.0.0.1`
- Preview: http://127.0.0.1:8000/. Stop with Ctrl+C.
- JavaScript changes: run `node --check script.js` when Node.js is available.
- All changes: run `git diff --check`; also `git diff --cached --check` when reviewing staged changes. These are whitespace checks, not lint.
- TypeScript, lint, build, and npm test commands are **not configured**. Do not report them as passed or install tooling just to supply them.
- For UI/behavior changes, use existing Playwright CLI/browser tooling when available:
  `playwright-cli -s=acceptance open http://127.0.0.1:8000/ --config=output/playwright/homepage-browser.config.json`
  `playwright-cli -s=acceptance run-code --filename=output/playwright/homepage-verify.js --raw`
  `playwright-cli -s=acceptance run-code --filename=output/playwright/homepage-readability.js --raw`
- The CLI may require resolving its existing executable path; the browser config is machine-specific. No npm test runner is implied.
- Check affected flows: all categories, blank/multiline/literal HTML input, clear/retype, result replacement, keyboard operation, and anchors. Inspect 1440px/375px empty/generated/error layouts for overflow and overlap.
- Save browser evidence in output/playwright/. If tooling is unavailable, state what was not executed and perform focused manual checks. Documentation-only edits do not require browser tests.

## Sensitive Information and Data
- Never read, print, commit, or record real secrets from .env, private keys, credentials, or tokens. Use placeholders in documentation.
- No database exists: there are no migrations, SQL commands, or database cleanup tasks to run. Adding persistence requires a separately approved scope; never perform destructive data operations implicitly.
- Review generated files before staging. Keep .playwright-cli/ snapshots and machine-specific browser configuration out of routine commits; include evidence only deliberately.
