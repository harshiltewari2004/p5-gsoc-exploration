# Evidence of Engagement with the p5.js Ecosystem

This document summarizes my exploration of the p5.js ecosystem while preparing a proposal related to improving debugging and developer experience in the p5.js Web Editor.

The goal of this exploration was to understand the ecosystem from multiple perspectives: as a user, as a contributor studying the codebase, and as someone interested in improving the experience for beginners and creators.

---

# 1. Sketches Created

To understand the creative coding workflow, I built multiple sketches using p5.js.

These sketches helped me explore both the creative possibilities of the library and the behavior of the p5.js Web Editor in different scenarios.

Examples include:

• **Tommy Shelby sketch** – an experiment in drawing shapes and layering visual elements.

• **Rotating sphere** – a 3D sketch that simulates the rotation of the Earth using WebGL.

• **Rotating cone** – initially intended to represent a pyramid, but implemented as a rotating cone with a pink background. This experiment helped me understand 3D primitives and transformations.

• **Cursor-following sketches and interactive experiments** – used to explore real-time interaction in p5.js.

• **Color inspector prototype** – a simplified experimental tool that displays color values when the cursor points toward the canvas. This prototype helped explore the feasibility of color inspection features inside the editor.

• **Editor behavior tests** – sketches designed to trigger unusual editor states such as infinite loops to observe how the editor handles runtime failures.

These experiments helped me better understand both the creative workflow and the debugging limitations currently present in the editor.

---

# 2. Library Experiments

I also explored the community-created library **ml5.js**.

Using this library, I built a simple sound classifier that recognizes two words taken from the chorus of the Hindi song *“Jimmy Jimmy”*.

The process involved:

• setting up the sound classifier  
• working with the microphone input  
• experimenting with custom labels  
• understanding how models need to be trained for custom classification tasks  

The documentation was very beginner-friendly and included clear step-by-step instructions and code snippets.

One confusion I encountered involved custom classifiers. Initially, I assumed that changing labels inside `ml5.soundClassifier()` would automatically allow recognition of new words. However, I later understood that custom models require training before classification works correctly.

Overall, the experience was smooth and well-documented, with documentation quality comparable to well-structured documentation platforms.

---

# 3. Issue Backlog Study

To understand the current development priorities, I reviewed a selection of issues and pull requests in the p5.js Web Editor repository.

## Key Characteristics of Open Issues

Most open issues fall into a few common categories:

• UX bugs or platform inconsistencies  
• browser-specific edge cases  
• issues affecting beginners or first-time contributors  
• relatively small fixes that still require understanding multiple components of the editor  

This suggests that many improvements involve improving reliability and usability rather than introducing large new features.

---

## Typical Closed Issue Examples

Closed issues frequently involve smaller maintenance tasks such as:

**Bug fixes**
• broken download zip metadata  
• keyboard shortcut issues  
• UI state bugs  

**Rejected feature requests**
• large-scale collaboration features  
• significant editor redesign proposals  
• heavy feature additions that would increase long-term maintenance cost  

This indicates that maintainers tend to prioritize **incremental improvements over major architectural changes**.

---

# 4. Patterns in Successful Pull Requests

While studying merged pull requests, several patterns emerged.

Successful PRs generally share these characteristics:

1. Small and well-scoped changes  
2. Clear reproduction steps for the issue  
3. Evidence of testing or manual validation  
4. Minimal architectural impact  
5. Good communication with maintainers  

These patterns suggest that incremental improvements are the most effective way to contribute to the project.

---

# 5. UX Patterns Discovered

While experimenting with the editor and reviewing issues, I noticed several recurring UX patterns.

## Gap 1 — Debugging Experience Inside the Editor

Currently:

• errors appear primarily in the console  
• runtime state visibility is limited  
• debugging creative code can be difficult for beginners  

This makes it harder for users to understand runtime behavior such as:

• color values  
• canvas state  
• dynamic sketch variables  

This observation strongly supports the idea of **visual debugging tools such as color inspection features**.

---

## Gap 2 — Weak Feedback for Runtime State

Several issues reveal situations where actions appear successful but fail silently.

Examples include cases where settings appear saved even though the operation failed.

This indicates that the editor sometimes lacks strong feedback mechanisms for runtime operations.

Improving runtime feedback could make the editor more reliable and easier to understand.

---

## Gap 3 — Editor State Synchronization Issues

Some issues appear to originate from synchronization challenges between different parts of the editor system.

Examples include:

• UI elements disappearing unexpectedly  
• file state inconsistencies  
• caching problems  

These problems likely involve interactions between:

• the React user interface  
• the sketch runtime environment  
• the project file system

Understanding these interactions appears important for making reliable editor improvements.

---

# 6. Repeated Issue Patterns

Two recurring issue patterns appeared across the issue backlog.

## Pattern 1 — Environment and Setup Problems

Some issues involve difficulties running the editor locally.

Common complaints include:

• dependency conflicts  
• outdated packages  
• unclear development setup instructions  

These problems can slow down onboarding for new contributors.

---

## Pattern 2 — UI State Bugs

Another common pattern involves UI state inconsistencies such as:

• disappearing buttons  
• incorrect UI states  
• settings not persisting correctly  

This suggests possible complexity in how component state is synchronized across the application.

---

# Conclusion

Through building sketches, experimenting with libraries, and studying the issue backlog, I gained a better understanding of the p5.js ecosystem and the challenges involved in maintaining the web editor.

These explorations helped identify opportunities for improving the debugging and developer experience within the editor, particularly through tools that make runtime behavior more visible to users.

Improving debugging visibility, especially for visual properties like colors, could significantly improve the learning experience for beginners and creative coders using p5.js.