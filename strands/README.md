# Layered Color Interaction Using p5 Strands

This sketch demonstrates how multiple strands can influence the final pixel color in the p5.js Web Editor.

## Strand 1
Creates a dynamic gradient background that changes with mouse movement.

## Strand 2
Draws semi-transparent moving circles that overlap and blend with the background.

Because both strands modify the same pixels, the final rendered color becomes a mixture of multiple RGBA values.

## Motivation for Eyedropper Debugging

When working with layered visual systems such as strands or shaders, it becomes difficult to determine the exact RGBA value of a pixel on the canvas.

An eyedropper debugging tool in the p5.js Web Editor would allow users to hover over a pixel and inspect the RGBA values (normalized between 0 and 1). This would make debugging visual compositions and shader outputs significantly easier.