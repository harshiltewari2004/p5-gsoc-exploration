# Beginner Confusion Patterns in the p5.js Web Editor

This document summarizes patterns of confusion that a beginner may experience while using the p5.js ecosystem, especially the p5.js Web Editor. The observations are based on my own exploration while creating sketches, experimenting with visual code, and studying common issues reported by other users.

---

# 1. Discoverability of Editor Capabilities

## Observation

When opening the p5.js Web Editor for the first time, it is clear where code should be written and where the sketch output appears.

However, a beginner may not immediately understand:

- what kind of programs the editor is capable of running
- what types of visual sketches can be created
- where to start if they have never written creative code before

## Cause

The editor interface itself does not immediately demonstrate its capabilities. A beginner typically needs to:

1. Navigate to the help menu
2. Locate documentation
3. Read reference materials before creating anything meaningful.

This creates a small barrier to entry for users who prefer learning by experimentation.

## Implication

Beginners may feel unsure about what to try first, even though the editor itself is easy to use.

Providing example sketches or guided exploration directly in the editor could improve onboarding.

---

# 2. Error Messages and Runtime Failures

## Observation

Standard syntax errors and function mistakes are generally detected.

For example:

- writing the wrong spelling of a function produces an error
- the console indicates that the function is undefined

However, the suggested action can sometimes be confusing. The error message may suggest renaming a function rather than clearly explaining that the function name is incorrect.

## Infinite Loop Behavior

When creating an infinite loop accidentally:

- the editor becomes unresponsive
- the page stops responding
- the user may not immediately understand what caused the problem

## Implication

Beginners may struggle to identify runtime failures when the editor stops responding instead of providing clear diagnostic feedback.

---

# 3. Debugging Visual Output

Creative coding often requires understanding visual state.

For example:

- color values
- transparency
- canvas coordinates
- rendered pixel colors

Currently, the editor does not provide built-in tools to inspect these values directly from the canvas.

## Example Scenario

When hovering over the canvas:

- users cannot see the pixel color
- users cannot see the RGBA values
- users cannot easily inspect the visual state of the sketch

As a result, debugging visual output often becomes a process of repeated guessing and experimentation.

## Implication

Beginners may struggle to understand why something appears differently than expected.

This observation strongly supports the usefulness of tools like **color inspection or runtime debugging overlays**.

---

# 4. Understanding Color and Transparency

Working with color values such as:

fill(r, g, b, a)

can be confusing for beginners.

Common questions include:

- why colors appear darker or lighter than expected
- how transparency interacts with background colors
- how RGBA values affect the final rendered color

Without a way to inspect actual pixel values on the canvas, beginners must rely on trial and error.

---

# 5. Learning 3D Features (WebGL)

When first experimenting with 3D sketches such as:

- rotating spheres
- rotating cones

a beginner may encounter several challenges:

- understanding how 3D transformations work
- learning how rotation functions behave
- understanding the coordinate system used in WebGL mode

Because these concepts are unfamiliar to many beginners, even simple sketches may require searching external resources.

---

# 6. Editor Behavior During Runtime Failures

Another pattern of confusion occurs when runtime failures affect the editor itself.

Example:

Creating an infinite loop caused the editor to stop responding completely.

From a beginner's perspective:

- it is not obvious what went wrong
- the page appears frozen
- the user may think the editor is broken

Better feedback mechanisms during runtime failures could improve the debugging experience.

---

# 7. Library Integration Confusion (ml5.js)

While experimenting with the ml5.js library, I created a small sound classifier project.

The documentation was generally beginner friendly and included clear step-by-step instructions.

However, one confusing point occurred when attempting to customize the classifier labels.

Initially, I assumed that simply changing the words in the array inside:

ml5.soundClassifier()

would update the classifier.

In reality, the model must be trained with new data for the classifier to recognize new sounds.

This requirement was not immediately obvious during the first attempt.

## Implication

Beginners working with machine learning libraries may assume configuration changes automatically alter model behavior.

Clearer explanations around training requirements could reduce this confusion.

---

# Key Takeaways

From these observations, several recurring beginner challenges emerge:

1. Difficulty discovering what the editor is capable of
2. Limited visual debugging tools
3. Confusing runtime behavior when sketches fail
4. Trial-and-error debugging for colors and transparency
5. Knowledge gaps when using advanced features like WebGL
6. Assumptions about how machine learning libraries work

Understanding these patterns can help guide improvements to the p5.js ecosystem, especially in areas related to debugging tools, editor feedback, and beginner onboarding.

