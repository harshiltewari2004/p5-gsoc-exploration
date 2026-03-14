function setup() {
  createCanvas(400, 400);
}

function draw() {
  let r = map(mouseX, 0, width, 0, 255);
  let b = map(mouseY, 0, height, 0, 255);
  background(r, 100, b);
}