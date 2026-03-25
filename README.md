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


    How to Run

Option 1: Open locally

Open demo/index.html in a browser.

Option 2: Use VS Code Live Server

Run the project with Live Server for the best local testing experience.

⸻

Controls
	•	E → Toggle eyedropper
	•	1 → Load gradient sketch
	•	2 → Load animated sketch

⸻

Technical Highlights

1. Pixel Sampling

The prototype reads a single pixel from the canvas under the cursor using the Canvas 2D API.

2. Coordinate Mapping

Mouse coordinates are converted from DOM space into internal canvas space, including pixel density handling.

3. Tooltip UI

The tooltip follows the cursor and updates in real time.

4. Performance

Pixel reads are throttled so the feature remains responsive.

⸻

Why This Repo Matters

This repository is not just a sketch collection. It is a focused prototype for the core feature proposed in my GSoC application for the p5.js Web Editor.

It demonstrates practical work on:
	•	real-time pixel inspection
	•	tooltip-based debugging
	•	coordinate normalization
	•	modular feature design
	•	performance-aware interaction

⸻

Relation to GSoC Proposal

This prototype directly supports my proposal to build a real-time visual debugging tool for the p5.js Web Editor.

It explores the main MVP ideas from the proposal:
	•	hover-based tooltip interface
	•	pixel-level canvas inspection
	•	normalized RGBA output
	•	scalable architecture for later editor integration

⸻

Current Scope

Implemented in this repo:
	•	2D canvas pixel inspection
	•	tooltip UI
	•	reusable architecture
	•	demo sketches for testing

Planned later:
	•	iframe communication
	•	integration into the p5.js Web Editor
	•	WebGL / shader-safe sampling strategy
	•	automated tests

⸻

Exploration Notes

See EXPLORATION.md for technical observations, design decisions, and lessons from sketch experimentation.

⸻

Demo

A  screenshot of working prototype.