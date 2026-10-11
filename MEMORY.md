# Project Memory

## 2026-10-10: Initial Scope
- The user approved a dependency-free HTML/CSS/JavaScript single-page application for beginner learning.
- UI language is Simplified Chinese. Categories: 知识分享, 产品种草, 干货教程, 情绪共鸣.
- Generation is an explicit local template simulation, not an AI integration.
- Direct file opening must work. Use classic scripts and relative asset paths.
- Workspace: E:\小红书文案生成. A similarly named existing folder is outside this project and remains untouched.

## 2026-10-10: Implementation and Verification
- UI uses a lavender canvas, white panels, purple actions, desktop columns, and mobile stacking; PRD.md is the design source of truth.
- Each category has five deterministic templates. Topic extraction uses the first nonempty sentence and preserves Unicode code points when truncating.
- All result strings use textContent. No network service receives user input.
- JavaScript syntax validation passed. Real Chromium verification passed 35 behavior/layout checks and 5 follow-up checks.
- Inspected desktop and mobile screenshots, including long titles at 320px; no overflow or primary-control overlap.
- Keep the skip link visually hidden using opacity until focus. Negative fixed offsets can expose it in full-page screenshots taken after scrolling.
- HTTP preview at http://127.0.0.1:8000/ returned 200 for HTML, CSS, and JavaScript. No external requests or browser errors occurred during the primary verification.
- The browser CLI blocks file URLs; direct file opening is supported by the asset/script structure but was not tested through that CLI.
- No application dependencies were installed. Existing local Playwright tooling was reused for verification only.

## 2026-10-10: Brand Update
- Current public brand: championleeAI. Navigation logo, hero title, browser title, accessible brand label, and footer use this spelling.
- Introduction: 输入一段内容，快速生成适合小红书发布的优质标题。
- Only application copy changed; script.js and styles.css hashes remained identical. Browser verification passed for all four categories and 1440px, 390px, and 320px layouts with no JavaScript errors.

## 2026-10-10: Visual Refresh
- Current visual direction replaces the original lavender palette: navy #102a43, teal #0b7569, light cool canvas, white panels.
- Panel corners are 20px; controls and result cards use 12px. Inputs and result text are 16px, with a 56px primary button.
- Desktop hero title is 64px at 1440px; mobile is 37.5px at 375px. Mobile keeps stacked panels and two category columns.
- Only styles.css changed in application code; index.html and script.js hashes stayed identical. No dependencies or frameworks were added.
- Browser checks and screenshot inspection passed for empty and generated states at 1440px and 375px, without overflow or navigation/panel overlap.
- All four categories still generate five distinct titles. Empty-input validation and visible keyboard focus passed; no browser errors occurred.
- Measured text contrast for seven representative text/button styles exceeded 4.5:1; the lowest measured ratio was 5.04:1.

## 2026-10-10: Usage Instructions
- Navigation includes 使用说明 linked natively to #instructions. The three-step section preserves the navy/teal design.
- Copy instructions refer to selecting and copying title text; no clipboard feature or generation changes were added.
- On mobile, navigation wraps into two rows to keep all three links readable. Instruction cards stack vertically.
- Click and keyboard anchor navigation, desktop/375px layouts, and generation passed browser checks. script.js hash remained unchanged; no browser errors occurred.

## 2026-10-10: Clear Input
- A secondary 清空输入 button sits beside the textarea label and character counter, with a 44px touch target.
- It clears only textarea content, dispatches the existing input event to reset the counter/validation, and focuses the textarea. Category selection and generated results remain unchanged.
- JavaScript syntax and browser checks passed at 1440px and 375px with touch emulation: all four categories completed input -> clear -> empty -> retype -> generate, with no overflow, overlapping input controls, or browser errors.

## 2026-10-10: Category Template Refresh
- Five templates per category now have clearer editorial identities: knowledge explains concepts/principles; product focuses on scenarios and purchase fit; tutorial emphasizes practical steps/checklists/troubleshooting; emotion invites reflection and shared feelings.
- Generation remains deterministic and local. Topic extraction, form validation, clearing, result rendering, HTML, and CSS were preserved.
- JavaScript syntax and real-browser tests passed for all four types using the same AI工具 topic: five distinct titles per type and 20 distinct titles across categories.
- Clear/validation regression and 375px title wrapping passed. No browser errors or external requests were observed in the initial full check; final template wording was rechecked across all four categories.

## 2026-10-10: Cardiovascular Medication Content Adaptation
- User chose a medication-content title generator focused on cardiovascular common medications and chronic-medication topics, retaining generation and clearing.
- Current brand display: championleeAI with 药品内容 subtitle and a plus icon. Hero: 心脑血管药品 / 内容标题生成器. Primary action: 生成药品内容标题.
- Palette changed to medical blue #1763aa with navy #123154 and light blue surfaces.
- Categories now read 知识分享, 药品资料, 内容整理, 情绪共鸣; internal keys were retained.
- Templates focus on education, source organization, content preparation, and patient/family communication. Purchase encouragement and procedural medication-use wording were removed.
- No drug product was invented and no efficacy, dosing, diagnosis, or individual treatment advice was added. The page discloses that simulated titles do not verify drug information.
- Added 药品内容准备 with topic/source/angle cards. Existing instructions and native navigation remain.
- Syntax and browser checks passed at 1440px and 375px: four categories, five titles each, clear/category/result preservation, regeneration, validation, anchors, no overflow or navigation overlap, no browser errors or external requests. Desktop and mobile screenshots were inspected.

## 2026-10-11: Typography Polish
- Prefer local Segoe UI and Microsoft YaHei UI/YaHei with platform Chinese sans-serif fallbacks; no font downloads or dependencies.
- Relaxed heading tracking and Chinese line height, refined panel shadows and result-card accents, and improved text hierarchy while retaining medical blue.
- Application change is CSS-only; HTML and JavaScript hashes remained identical.
- Desktop 1440px and mobile 375px browser checks and screenshots passed: no overflow or navigation/input-control overlap; all four categories, clearing, and instructions navigation worked with no browser errors.
- Local preview was stopped at the start of verification and was restarted on 127.0.0.1:8000.

## 2026-10-11: Workspace Hierarchy Refresh
- Approved visual scope is the hero and generation workspace; preserve supporting modules, copy, brand, and all existing behavior.
- Application changes are CSS-only: compact hero, white input panel, pale-blue result panel, navy action, teal selected categories, clearer result numbers and typography, and tighter mobile spacing.
- Keep workspace overrides scoped so shared supporting cards remain intact. HTML and script hashes are unchanged.
- Real Chromium verification passed 80 checks at 1440px and 375px: four categories, five distinct titles each, deterministic regeneration, clear/category/result preservation, replacement, blank/multiline/literal HTML input, keyboard focus/submission, and navigation.
- Inspected empty/generated screenshots at both widths; no overflow or obscured controls. Error-state layout also passed. Long input and 44px minimum action/category targets passed at both widths.
- Seven representative text styles exceeded 4.5:1 contrast (minimum 5.52:1). HTML/CSS/JS returned HTTP 200; no browser errors or external requests. node --check script.js and git diff --check passed.
- No dependencies were installed. Reused cached Playwright CLI and Chromium Headless Shell; restricted-process launches failed, so browser verification ran outside the sandbox.
- Screenshots and task-specific verification scripts/config are in output/playwright/homepage-*; local preview runs at http://127.0.0.1:8000/.

## 2026-10-11: Post-refresh Acceptance Audit
- No package.json, TypeScript, lint, build, or package-manager test commands are configured; never report these as passed.
- Re-ran existing browser scripts: all 80 regression checks passed, along with resource, contrast, long-input and control-size checks. Syntax and diff checks passed; no application repair or source change was necessary.
- Detailed status report and machine-readable evidence are in output/playwright/acceptance-report.md, acceptance-functional.json, and acceptance-readability.json.
- Physical-phone/software-keyboard, Safari/Firefox, and direct-file opening were not tested in this audit; the report lists manual steps and distinguishes them from 375px Chromium viewport verification.

## 2026-10-11: Development Guide
- DEVELOPMENT.md documents current implementation, startup, maintenance priorities, check commands, and unconfigured tooling; it distinguishes the current medication-content product from historical generic categories.
- The user's subsequent post-change problem report lacks reproduction details and remains pending confirmation; no Git recovery or commit was executed. The repository still has no committed stable version.

## 2026-10-11: Lightweight Project Rules
- Existing AGENTS.md was updated while retaining stack, behavioral boundaries, safety, and real verification commands. Small changes require only task-relevant code/context, not all project documents; DEVELOPMENT.md now reflects this convention.

## 2026-10-11: Initial Git Version Authorization
- User authorized creating the first local Git version. Include the eight root application/project-document files and output/playwright/acceptance-report.md; exclude generated snapshots, machine-specific configuration, and other browser artifacts.
- Git author name/email were not configured at preparation time; request a user-provided email rather than inventing an identity. No recovery or remote push is authorized by this request.
- User supplied the author email; use champion Lee and the supplied email through commit-scoped Git configuration, leaving global settings unchanged.
