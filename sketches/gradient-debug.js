export function gradientSketch(p) {
  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight - 58);
    p.pixelDensity(1);
    p.noLoop();
  };

  p.draw = () => {
    for (let x = 0; x < p.width; x++) {
      const r = p.map(x, 0, p.width, 20, 255);
      p.stroke(r, 120, 220);
      p.line(x, 0, x, p.height);
    }

    for (let y = 0; y < p.height; y += 8) {
      const alpha = p.map(y, 0, p.height, 40, 180);
      p.stroke(255, 255, 255, alpha);
      p.line(0, y, p.width, y);
    }

    p.noStroke();
    p.fill(255, 90, 120, 180);
    p.circle(p.width * 0.28, p.height * 0.45, 220);

    p.fill(80, 220, 255, 190);
    p.rect(p.width * 0.50, p.height * 0.28, 230, 180, 24);

    p.fill(255, 220, 90, 170);
    p.triangle(
      p.width * 0.72, p.height * 0.62,
      p.width * 0.84, p.height * 0.30,
      p.width * 0.92, p.height * 0.70
    );
  };

  p.windowResized = () => {
    p.resizeCanvas(window.innerWidth, window.innerHeight - 58);
    p.redraw();
  };
}