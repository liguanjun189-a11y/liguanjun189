# championleeAI — Cardiovascular Medication Content Titles

A dependency-free Chinese website for creators preparing cardiovascular, common-medication, and chronic-medication educational content. Enter verified material, choose a category, and get five local simulated title ideas. No drug efficacy, dosing, diagnosis, or individual treatment advice is generated or verified.

## Start

### Option 1: Open directly
Open `index.html` in Edge or Chrome. No installation, terminal, or build step is needed. Refresh the browser after editing a file.

### Option 2: Local HTTP preview
If Python is installed, run these commands in PowerShell:

```powershell
Set-Location 'E:\小红书文案生成'
python -m http.server 8000 --bind 127.0.0.1
```

Visit http://127.0.0.1:8000/ . Keep the terminal open; press Ctrl+C to stop the server.
If port 8000 is occupied, use 8001 instead and visit http://127.0.0.1:8001/ .
If the `python` command is unavailable, use Option 1.

## Files

| File | Purpose |
| --- | --- |
| index.html | Navigation, hero, input form, category controls, result markup |
| styles.css | Responsive layout, colors, cards, focus and error states |
| script.js | Validation, short-topic extraction, four sets of five templates, safe result rendering |
| PRD.md | Requirements, design direction, behavior contract, acceptance criteria |
| AGENTS.md | Project development and verification rules |
| MEMORY.md | Durable project decisions and verification notes |
| output/playwright/ | Browser screenshots and verification evidence |

## Behavior

- Categories: 知识分享, 药品资料, 内容整理, 情绪共鸣.
- Input: up to 1000 characters; empty or whitespace-only input is rejected.
- Uses the first nonempty sentence as a topic, shortened to 18 Unicode code points when needed.
- Every submission replaces the results with exactly five distinct title styles.
- Repeated identical input and category produce identical examples.
- All generation happens locally. No input is sent to an AI service, stored, or persisted after refresh.
- Templates do not understand a long draft. Edit examples to match the facts and your own voice.

## Verification

No production dependencies, package manager, bundler, or compilation step are required.
For JavaScript syntax validation, if Node.js is installed:

```powershell
node --check script.js
```

Verify all four categories, blank input, multiline input, repeated submission, literal HTML text, keyboard operation, and desktop/mobile layout. Browser automation is a development verification tool, not an application dependency.
