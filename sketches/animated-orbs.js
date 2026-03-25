export function animatedOrbsSketch(p) {
  const orbs = [];

  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight - 58);
    p.pixelDensity(1);

    for (let i = 0; i < 18; i++) {
      orbs.push({
        x: p.random(p.width),
        y: p.random(p.height),
        size: p.random(40, 120),
        dx: p.random(-1.2, 1.2),
        dy: p.random(-1.2, 1.2),
        r: p.random(100, 255),
        g: p.random(100, 255),
        b: p.random(100, 255),
        a: p.random(110, 200)
      });
    }
  };

  p.draw = () => {
    p.background(18, 18, 30, 70);

    for (const orb of orbs) {
      orb.x += orb.dx;
      orb.y += orb.dy;

      if (orb.x < 0 || orb.x > p.width) orb.dx *= -1;
      if (orb.y < 0 || orb.y > p.height) orb.dy *= -1;

      p.noStroke();
      p.fill(orb.r, orb.g, orb.b, orb.a);
      p.circle(orb.x, orb.y, orb.size);
    }

    p.fill(255, 255, 255, 140);
    p.rect(30, 30, 230, 60, 14);

    p.fill(20);
    p.textSize(16);
    p.text("Animated sketch for testing", 48, 54);
    p.text("moving color + alpha layers", 48, 78);
  };

  p.windowResized = () => {
    p.resizeCanvas(window.innerWidth, window.innerHeight - 58);
  };
}