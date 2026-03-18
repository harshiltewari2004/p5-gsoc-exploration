function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(0);

  for (let i = 0; i < 50; i++) {
    fill(
      sin(frameCount * 0.05 + i) * 127 + 128,
      cos(frameCount * 0.03 + i) * 127 + 128,
      sin(frameCount * 0.02 + i) * 127 + 128,
      100
    );

    ellipse(
      random(width),
      random(height),
      random(50, 150)
    );
  }
}