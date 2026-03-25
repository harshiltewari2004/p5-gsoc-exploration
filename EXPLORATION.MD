
This file documents the technical exploration behind the eyedropper debugger prototype.

---

## 1. Why build this prototype?

The proposed GSoC feature is a visual debugging tool for the p5.js Web Editor.

Before integrating anything into the editor, I wanted to validate three questions:

1. Can pixel color be sampled reliably from a p5.js canvas?
2. Can the result be shown in a low-friction tooltip UI?
3. Can this be done in a performance-aware way during mouse movement?

---

## 2. What was explored?

### A. Static color field
A gradient sketch was useful for verifying whether the sampled pixel values matched expected color transitions.

### B. Animated sketch
An animated multi-layer sketch was useful for testing whether the tooltip remained readable while the rendered output changed continuously.

### C. Coordinate mapping
The most important implementation detail was converting browser mouse coordinates into actual canvas coordinates.

---

## 3. Key technical observations

### Observation 1: Pixel inspection is easy in 2D mode
For a standard 2D canvas, reading a single pixel is straightforward and reliable.

### Observation 2: Coordinate mismatch must be handled carefully
Canvas size, CSS size, and pixel density may differ. Without normalization, the tooltip reads the wrong pixel.

### Observation 3: Reading one pixel is cheap, reading too often is not
Sampling every single mouse event can be excessive. Throttling improves responsiveness.

### Observation 4: Tooltip is better than console logs
A tooltip gives spatially aligned feedback. Console logging breaks the debugging flow.

---

## 4. Why this architecture?

The codebase is split into:

- `tooltip.js` for UI
- `eyedropper.js` for pixel sampling logic
- `main.js` for sketch loading and feature wiring

This mirrors the way the feature would eventually need to be separated in a larger application like the p5.js Web Editor.

---

## 5. Current limitations

This prototype currently supports:

- 2D canvas sketches only

This prototype does not yet support:

- WebGL pixel readback
- iframe communication
- editor-side React rendering
- automated tests

---

## 6. Next steps

The next technical milestone after this prototype would be:

1. move the feature into an isolated preview/editor model
2. test cross-context communication
3. explore WebGL-safe pixel access
4. add automated test coverage for utility logic

---

## 7. Main takeaway

The core interaction model is viable:

- hover
- inspect pixel
- display tooltip
- keep UI lightweight