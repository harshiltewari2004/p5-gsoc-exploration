let earth;
let angle=0;
function setup() {
  createCanvas(600, 600,WEBGL);
}

function draw() {
  background(0);
  
  directionalLight(255,255,255,1,0,0);
  orbitControl();
  ambientLight(100);
  rotateY(angle);
  angle+=0.01;
  

  sphere(200);
}