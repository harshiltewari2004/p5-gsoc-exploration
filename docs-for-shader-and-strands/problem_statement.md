# Problem Statement

While working with p5.js and p5.strands, a major gap exists in the ability to inspect and debug visual output.

Users often work with:

- layered rendering
- transparency
- shader-based transformations

However, the system lacks tools to:

- inspect pixel values
- verify rendering output
- understand visual composition

This leads to:

- confusion during development
- reliance on guesswork
- difficulty for beginners

---

## Proposed Direction

An eyedropper debugging tool that:

- allows pixel inspection (RGBA)
- works on hover
- integrates with the editor UI

This would provide:

- immediate feedback
- improved debugging workflow
- better learning experience