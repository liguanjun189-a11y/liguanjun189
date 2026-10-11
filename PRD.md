# AI Xiaohongshu Title Generator — V1

## Goal and Scope
### Cardiovascular Medication Content Adaptation
- Audience: creators preparing cardiovascular, common-medication, and chronic-medication educational content.
- Keep local generation, clearing, category selection, input validation, and navigation intact.
- Brand display: championleeAI · 药品内容. Hero: 心脑血管药品 / 内容标题生成器.
- Use medical blue with light blue surfaces and existing responsive card layout.
- Categories: 知识分享, 药品资料, 内容整理, 情绪共鸣, retaining existing internal category keys.
- Replace purchase-oriented and procedural-use templates with neutral educational, source-organizing, and communication title ideas. No drug-specific facts, dosage, treatment claims, or purchase recommendations.
- Add a preparation module covering topic, source material, and content angle. Clearly state the mock generator does not verify medical information.
- Verify four categories, clearing, validation, navigation, desktop and 375px layout, and no external requests.

Help content creators turn a topic or draft into five example title ideas through a simple local website.
- Plain HTML, CSS, JavaScript; no build step, installation, or external network requests.
- Text logo; Home and Start Generating navigation; product hero and short introduction.
- Multiline input, four content categories, submit button, results region.
- Categories: 知识分享, 产品种草, 干货教程, 情绪共鸣.
- Every valid submission replaces results with five differently styled template titles.
- Clearly disclose simulation. No login, database, payment, credentials, or AI API.

## Visual Source of Truth
### 2026-10-11 Workspace Hierarchy Refresh
- Approved scope: hero, input panel, category controls, primary action, results, and responsive typography/spacing.
- Keep brand, copy, navigation, preparation/instructions modules, and all existing behavior intact.
- Use a compact centered hero, white input surface, pale-blue result surface, navy primary action, and restrained teal selected-state accents.
- Scope workspace styles to avoid changing shared supporting cards. Preserve element IDs, radio names/values, hidden states, and results-panel class.
- Keep script.js unchanged. No dependencies, remote assets, clipboard feature, or generation changes.
- Acceptance: inspect empty/generated/error states at 1440px and 375px; no overflow or control overlap; readable text and visible keyboard focus.
- Verify four categories with five distinct titles each, clearing without category/result loss, replacement, blank/multiline/literal HTML input, anchors, syntax, and unchanged script hash.

### 2026-10-11 Typography Polish
- CSS-only change; preserve HTML, all copy, and business JavaScript.
- Prefer locally available Segoe UI and Microsoft YaHei UI/YaHei, with platform Chinese sans-serif fallbacks. No remote fonts or new dependencies.
- Use native 400/600/700 weights, relaxed Chinese line height, and modest positive letter spacing rather than compressed headings.
- Refine medical-blue surfaces, panel shadows, result-card accents, and content hierarchy.
- Verify desktop and 375px rendering in empty/generated states, keyboard focus, generation, and clearing; compare HTML/JavaScript hashes.

This document and static index.html/styles.css define the design; no external reference image is required.
- Cool light canvas, white cards, deep navy headings, teal accents and primary action, subtle borders.
- System fonts and inline decorative symbols; no remote fonts or images.
- Desktop: centered hero, two-column workspace (input left, results right).
- Mobile: stacked form and results, accessible navigation without a menu.
- States: empty, invalid input, success, focus.
- Verify static layout before adding interaction; no framework refactoring.

### 2026-10-10 Visual Refresh
- Keep index.html and script.js unchanged; all application changes belong in styles.css.
- Use navy #102a43 and teal #0b7569 with readable secondary text #526579.
- Emphasize the hero title with larger type and clearer hierarchy.
- Use shared 20px panel corners, 12px control/result corners, and consistent padding.
- Increase input-to-action spacing and use at least 44px interactive touch targets.
- At 375px, stack panels, retain two category columns, and allow introduction text to wrap naturally.
- Verify empty and generated states at 1440px and 375px; inspect overflow, navigation, focus, text contrast, and unchanged generation.
- No UI frameworks, new business behavior, or large animation.

## Behavior Contract
### Category Template Refresh
- Knowledge: explain concepts, principles, connections, distinctions, and discussion questions.
- Product: highlight usage scenarios, fit, selection criteria, tradeoffs, and purchase decisions.
- Tutorial: emphasize preparation, steps, practice, troubleshooting, and review.
- Emotion: use personal reflection, shared feelings, encouragement, pauses, and story invitations.
- Each category still returns five distinct local template titles; preserve topic extraction and input validation.
- Verify all four categories with the same topic to isolate stylistic differences. Keep HTML and CSS unchanged.

### Clear Input
- Add a secondary 清空输入 button beside the textarea label/counter with at least a 44px touch target.
- Clear textarea content, reset its counter and validation through the existing input handler, and return focus to the textarea.
- Preserve the selected category and existing generated results; never submit or reset the form.
- Verify typing, clearing, retyping, and generating on desktop and a 375px touch viewport.

### Usage Instructions
- Add a navigation link labeled 使用说明 pointing to #instructions.
- Add an accessible section with three steps: input content, choose title style, generate and copy a preferred title.
- Copying means selecting and copying the existing title text; do not add clipboard functionality or alter generation.
- Preserve the navy/teal style. Use three columns on desktop and stacked steps on mobile.
- Verify the anchor scrolls to the section, keyboard activation works, and navigation fits 375px.

- Input: trimmed content of 1–1000 characters and an allowed category.
- Topic: first nonempty sentence, capped at 18 Unicode code points, with ellipsis for truncation.
- Output: five objects containing a style label and title string.
- Templates do not claim actual use, guaranteed outcomes, or fabricated numeric evidence.
- Render input as text, never HTML.
- Same content/category yields the same five titles, without artificial delays.
- Empty input shows an inline error and focuses the textarea. Input changes clear validation.
- Announce result completion to assistive technologies.

## Tasks
1. Create rules, memory, requirements, startup documentation.
2. Build static responsive layout and inspect desktop/mobile.
3. Implement templates, validation, accessible rendering.
4. Verify browser runtime, interactions, safe rendering, and responsive states.

## Acceptance Criteria
- File opening and local HTTP both load the application.
- At 1440px, 390px, and 320px, no horizontal overflow or overlapping primary controls.
- Navigation reaches the intended sections.
- Every category yields exactly five distinct titles with style labels.
- Empty/whitespace input does not generate; multiline and long input work.
- HTML-like input remains literal text. Repeat submissions replace results.
- Keyboard users can reach controls with visible focus.
- No browser errors or external network requests.

## Limits
- Templates use a short topic and cannot understand or summarize a draft semantically.
- State disappears on refresh by design.
- Static application: verify syntax and browser behavior; no compilation step.
