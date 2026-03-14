let x = 0;
function draw() {
  clear();
  fill(255, 0, 0, 120);
  circle(x, height/2, 80);

  fill(0, 255, 0, 120);
  circle(width-x, height/2, 80);

  x += 2;
  if (x > width) x = 0;
}