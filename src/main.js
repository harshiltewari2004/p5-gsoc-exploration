import { Tooltip } from "./tooltip.js";
import { EyedropperDebugger } from "./eyedropper.js";
import { gradientSketch } from "../sketches/gradient-debug.js";
import { animatedOrbsSketch } from "../sketches/animated-orbs.js";

const container = document.getElementById("canvas-container");
const tooltipElement = document.getElementById("tooltip");
const tooltip = new Tooltip(tooltipElement);

let currentP5 = null;
let eyedropper = null;

function mountSketch(sketchFactory) {
  if (currentP5) {
    currentP5.remove();
    tooltip.hide();
  }

  currentP5 = new p5((p) => {
    sketchFactory(p);

    const originalSetup = p.setup;
    p.setup = () => {
      originalSetup();

      const canvas = p.canvas;
      eyedropper = new EyedropperDebugger(p, tooltip);

      canvas.addEventListener("mousemove", (event) => {
        eyedropper.handleMouseMove(event);
      });

      canvas.addEventListener("mouseleave", () => {
        eyedropper.handleMouseLeave();
      });
    };
  }, container);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "1") {
    mountSketch(gradientSketch);
  }

  if (event.key === "2") {
    mountSketch(animatedOrbsSketch);
  }

  if (event.key.toLowerCase() === "e" && eyedropper) {
    eyedropper.toggle();
  }
});

mountSketch(gradientSketch);