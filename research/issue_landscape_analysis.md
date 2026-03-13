# Issue Landscape Analysis — p5.js Web Editor

## Maintainer Priorities

Maintainers prioritize:

1. Stability of the editor
2. Accessibility and education use
3. Small maintainable improvements
4. Bug fixes over large features

The project is volunteer-maintained, so maintainers prefer changes that
do not significantly increase maintenance cost.

---

## What Gets Merged Quickly

PRs that are merged quickly usually have these traits:

• Small scope
• Clear reproduction steps
• Fix a real user pain point
• Require minimal architectural change
• Follow existing code style

Examples include:

• UI bug fixes
• dependency updates
• accessibility improvements
• small editor usability improvements

---

## What Gets Rejected

Common reasons for rejection:

• Feature requests that significantly expand scope
• Large UI redesigns
• features that require long-term maintenance
• unclear user value
• changes without discussion

---

## Observed Issue Patterns

1. Editor UI state inconsistencies
2. contributor setup friction
3. missing debugging visibility
4. runtime behavior confusion for beginners

---

## Strategic Opportunity

The editor currently lacks strong debugging tools for creative coding.

This creates an opportunity for:

Eyedropper Color Debugging in the Editor.

The feature would:

• improve learning experience
• help debugging visual sketches
• integrate naturally with the canvas environment

Because it enhances debugging without altering core editor architecture,
it is relatively safe for incremental implementation.

---

## Why the 175h Proposal Fits Safely

The project:

• improves debugging UX
• does not require major architecture changes
• can be implemented incrementally
• can be isolated to editor UI components

This aligns well with the repository's contribution patterns and
maintainer expectations.