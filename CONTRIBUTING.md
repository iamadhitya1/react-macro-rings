# Contributing to react-macro-rings

PRs welcome. Here's how to get started.

## Setup

```bash
git clone https://github.com/iamadhitya1/react-macro-rings
cd react-macro-rings
```

No build step — the library is plain React source files in `src/`. Import directly.

## Project structure

```
src/
  index.js          # exports
  MacroRing.jsx     # single animated ring
  MacroRingGroup.jsx # row of rings
  CalorieRing.jsx   # hero ring with progress bar
demo.svg            # animated demo shown in README
```

## What's in scope

- Bug fixes
- New props for customization (colors, sizes, animation speed)
- New ring variants
- Accessibility improvements (ARIA labels, reduced-motion support)
- Performance improvements
- Documentation fixes

## Guidelines

- **Zero runtime dependencies** — keep it that way. Pure SVG + inline styles only.
- Match existing code style: plain JS, no TypeScript, no CSS files
- If adding a new component, add it to `src/index.js` exports
- Test your change in a real Vite/React app before submitting
- One feature or fix per PR

## Submitting a PR

1. Fork the repo
2. Create a branch: `git checkout -b feat/your-feature-name`
3. Make your change
4. Open a PR against `main` with a clear title and description of what changed and why

---

MIT © 2025 M Adhitya · [Rewrite Labs](https://rewritelabs.vercel.app)
