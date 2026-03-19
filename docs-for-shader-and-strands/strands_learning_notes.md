# Learning Notes: p5.strands Exploration

## Initial Understanding

p5.strands is a JavaScript-based abstraction over GLSL shaders in p5.js. It allows modifying parts of the rendering pipeline using JavaScript instead of writing raw GLSL.

It introduces the concept of modifying shader hooks such as:

- baseColorShader
- baseMaterialShader
- baseFilterShader

The goal is to simplify shader usage and integrate it into the p5.js ecosystem.

---

## Key Observations

### 1. Conceptual Shift from Sequential to Parallel Thinking

In traditional p5.js:
- Drawing is sequential (shape by shape)

In p5.strands:
- Rendering happens in parallel (per pixel)

This shift is not intuitive for beginners.

---

### 2. Shader Hook Abstraction

Strands allow modifying parts of shaders instead of writing full shaders.

However:
- It is unclear how these modifications interact with the rendering pipeline
- The impact of changes is not always visible

---

## Confusions Encountered

- Difficulty understanding how and when shader modifications are applied
- Lack of clarity between shader(), material, and rendering pipeline
- Unclear debugging process when output does not change

---

## Conclusion

While p5.strands aims to simplify shaders, the abstraction introduces new confusion, especially around:

- when modifications take effect
- how rendering is structured
- how to debug issues