# Shader Debugging Experience in p5.strands

## Attempt: Modifying Final Color

I attempted to modify the final color output using:

```javascript
baseColorShader().modify({
  'vec4 getFinalColor(vec4 color)': `
    {
      return vec4(1.0, 0.0, 0.0, 1.0);
    }
  `
});
Expected Outcome
	•	The rendered object should appear red

Actual Outcome
	•	The object remained white
	•	No visible change in rendering

⸻

Debugging Attempts
	•	Verified syntax correctness
	•	Simplified shader logic to constant color
	•	Re-ran multiple times

Despite this:
	•	Output did not change

⸻

Error Handling Experience

In earlier attempts, a small syntax error (missing braces) caused a large shader compilation error.

Observations:
	•	Error message was extremely long
	•	Originated from generated GLSL code
	•	Did not clearly indicate the actual mistake
	•	Required external help to resolve

⸻

Key Problems Identified

1. No Clear Feedback
	•	Cannot determine if shader is applied or ignored

2. Misleading Debugging Signals
	•	Errors are difficult to interpret
	•	Not mapped to user code clearly

3. Broken Mental Model
	•	Expected direct control over color
	•	Actual system behavior is indirect and unclear

⸻

Conclusion

The debugging process is not intuitive.

Even simple changes:
	•	do not produce expected results
	•	cannot be verified easily

This creates a significant barrier for beginners.