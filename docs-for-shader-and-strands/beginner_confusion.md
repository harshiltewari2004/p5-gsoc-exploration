---

# 📄 3. `docs/beginner_confusion_evidence.md`

## Purpose:
This is what mentors asked for → **REAL evidence**

---

### ✅ CONTENT

```md
# Beginner Confusion Evidence

## Case 1: Shader Not Affecting Output

### Scenario

Attempted to force object color to red using p5.strands.

### Expected

- Object should turn red

### Actual

- Object remained white

### Problem

- No way to confirm if shader is applied
- No feedback from system

---

## Case 2: Shader Compilation Error

### Scenario

Minor syntax error in shader code

### Result

- Large, complex error message
- Difficult to understand
- Did not clearly indicate the issue

### Problem

- Debugging requires external help
- Not beginner-friendly

---

## Case 3: Visual Ambiguity

### Scenario

Created layered visuals with dynamic colors

### Observation

- Colors overlap and change dynamically
- Impossible to determine exact pixel color

### Problem

- No way to inspect RGBA values
- Cannot reproduce or debug visual output

---

## Summary of Confusion

| Problem | Impact |
|--------|--------|
| No debugging tools | Cannot inspect output |
| Poor documentation | Hard to learn system |
| No feedback | Cannot verify correctness |

---

## Insight

These issues combine to create a situation where:

> Users cannot reliably understand or debug what they are seeing on the canvas.