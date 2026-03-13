let angleX=0;
let angleY=0;
let rotating=true;
function setup() {
  createCanvas(600, 600,WEBGL);
}

function draw() {
  background(255,192,203);
  
  
  if(rotating){
  angleY=map(mouseX,0,width,-PI,PI);
  angleX=map(mouseY,0,height,-PI,PI);  
  }
  rotateY(angleX);
  rotateX(angleY);
  
  fill(210,180,140);
  cone(100,200);

}
function mousePressed(){
  rotating!=rotating;
}