# p5.js Eyedropper Debugger Prototype

This repository contains a focused prototype for a real-time **eyedropper debugging tool** for p5.js sketches.

The goal is to explore a feature proposed for the **p5.js Web Editor**: a hover-based tooltip that lets users inspect the color of the exact pixel under the cursor.

---

## Problem

In creative coding workflows, visual output is often difficult to debug because users can see the result on the canvas but cannot directly inspect the exact rendered pixel values at a given location.

This becomes especially important when working with gradients, transparency, animated effects, layered drawing, and eventually shader-based rendering.

---

## Solution

This prototype implements a **tooltip-based pixel inspector** for p5.js sketches.

When the user moves the mouse over the canvas, the tool:

- reads the pixel color under the cursor
- converts the values to normalized RGBA values (0–1)
- displays the values in a floating tooltip
- shows canvas coordinates in real time

---

## Features

- Hover-based tooltip
- Pixel coordinate display
- RGBA values normalized to the 0–1 range
- Toggle eyedropper on/off with keyboard shortcut
- Throttled sampling for better performance
- Multiple demo sketches

---

## Repo Structure

```text
p5js-eyedropper-debugger-prototype/
├── README.md
├── EXPLORATION.md
├── demo/
│   └── index.html
├── src/
│   ├── styles.css
│   ├── main.js
│   ├── tooltip.js
│   └── eyedropper.js
└── sketches/
    ├── gradient-debug.js
    └── animated-orbs.js