let info = "";

function setup() {
  createCanvas(500, 400);
}

function draw() {

  // create a colorful canvas to sample from
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {

      let r = map(x, 0, width, 0, 255);
      let g = map(y, 0, height, 0, 255);
      let b = 200;

      stroke(r, g, b);
      point(x, y);
    }
  }

  // read pixel under mouse
  let c = get(mouseX, mouseY);

  // convert to 0-1 range
  let r = (red(c) / 255).toFixed(2);
  let g = (green(c) / 255).toFixed(2);
  let b = (blue(c) / 255).toFixed(2);
  let a = (alpha(c) / 255).toFixed(2);

  // show values
  fill(0);
  rect(10, 10, 200, 70);

  fill(255);
  textSize(14);
  text(`R: ${r}`, 20, 30);
  text(`G: ${g}`, 20, 45);
  text(`B: ${b}`, 20, 60);
  text(`A: ${a}`, 20, 75);
}